# Build script:
# 1. Compiles articles.md -> js/articles.js (Markdown to HTML + auto-summary).
# 2. Generates ru/ pl/ en/ static pages (own URL, title, description, canonical, hreflang, JSON-LD),
#    sitemap.xml, robots.txt and the root language-redirect index.html.
# Usage (PowerShell):  .\build.ps1
$ErrorActionPreference = 'Stop'
$root = $PSScriptRoot
$utf8 = New-Object System.Text.UTF8Encoding($false)
$seo  = [IO.File]::ReadAllText("$root\seo-pages.json", $utf8) | ConvertFrom-Json
$tpl  = [IO.File]::ReadAllText("$root\template.html", $utf8)
$domain = $seo.domain.TrimEnd('/')
$langs = 'ru','pl','en'
$ogloc = @{ru='ru_RU'; pl='pl_PL'; en='en_US'}
$enc = { param($s) [System.Net.WebUtility]::HtmlEncode($s) }

function Format-Inline($s) {
  $s = [System.Net.WebUtility]::HtmlEncode($s)
  $s = [regex]::Replace($s, '`([^`]+)`', '<code>$1</code>')
  $s = [regex]::Replace($s, '\*\*([^*]+)\*\*', '<b>$1</b>')
  return $s
}

function Convert-MdToHtml($md) {
  $lines = ($md -replace "`r`n", "`n").Trim() -split "`n"
  $html = New-Object System.Text.StringBuilder
  $inPre = $false; $inUl = $false; $inOl = $false
  $para = New-Object System.Collections.Generic.List[string]
  $firstParaText = ""

  $flushPara = {
    if ($para.Count -gt 0) {
      $raw = ($para -join " ").Trim()
      if (-not $script:firstParaPlain) {
        $plain = ($raw -replace '`([^`]+)`','$1' -replace '\*\*([^*]+)\*\*','$1')
        $script:firstParaPlain = $plain
      }
      [void]$html.Append("<p>$(Format-Inline $raw)</p>")
      $para.Clear()
    }
  }
  $closeLists = {
    if ($inUl) { [void]$html.Append("</ul>"); $script:inUl = $false }
    if ($inOl) { [void]$html.Append("</ol>"); $script:inOl = $false }
  }

  $script:firstParaPlain = ""
  $script:inUl = $false; $script:inOl = $false
  $preBuf = New-Object System.Collections.Generic.List[string]

  foreach ($line in $lines) {
    if ($line -match '^```') {
      & $flushPara; & $closeLists
      if ($inPre) {
        [void]$html.Append("<pre>$([System.Net.WebUtility]::HtmlEncode(($preBuf -join "`n")))</pre>")
        $preBuf.Clear(); $inPre = $false
      } else { $inPre = $true }
      continue
    }
    if ($inPre) { $preBuf.Add($line); continue }
    $trim = $line.Trim()
    if ($trim -eq "") { & $flushPara; & $closeLists; continue }
    if ($trim -match '^##\s+(.+)$') {
      & $flushPara; & $closeLists
      [void]$html.Append("<h2>$(Format-Inline $Matches[1])</h2>")
      continue
    }
    if ($trim -match '^[-*]\s+(.+)$') {
      & $flushPara
      if ($script:inOl) { [void]$html.Append("</ol>"); $script:inOl = $false }
      if (-not $script:inUl) { [void]$html.Append("<ul>"); $script:inUl = $true }
      [void]$html.Append("<li>$(Format-Inline $Matches[1])</li>")
      continue
    }
    if ($trim -match '^\d+\.\s+(.+)$') {
      & $flushPara
      if ($script:inUl) { [void]$html.Append("</ul>"); $script:inUl = $false }
      if (-not $script:inOl) { [void]$html.Append("<ol>"); $script:inOl = $true }
      [void]$html.Append("<li>$(Format-Inline $Matches[1])</li>")
      continue
    }
    & $closeLists
    $para.Add($trim)
  }
  & $flushPara; & $closeLists
  $sum = $script:firstParaPlain
  if ($sum.Length -gt 165) {
    $cut = $sum.Substring(0, 160)
    $lastDot = $cut.LastIndexOf('. ')
    if ($lastDot -gt 60) { $sum = $cut.Substring(0, $lastDot + 1) }
    else { $sum = ($cut -replace '\s+\S*$', '') + '…' }
  }
  return @{ html = $html.ToString(); summary = $sum }
}

# 1. Parse articles.md
$rawMd = [IO.File]::ReadAllText("$root\articles.md", $utf8)
$rawMd = [regex]::Replace($rawMd, '(?s)<!--.*?-->', '')
$blocks = [regex]::Split($rawMd, '(?m)^\s*---\s*$')
$articles = New-Object System.Collections.Generic.List[object]

foreach ($b in $blocks) {
  if ($b.Trim() -eq "") { continue }
  $idMatch = [regex]::Match($b, '(?m)^id:\s*(\S+)')
  $tagMatch = [regex]::Match($b, '(?m)^tag:\s*(.+)$')
  if (-not $idMatch.Success) { continue }
  $id = $idMatch.Groups[1].Value.Trim()
  $tagParts = if ($tagMatch.Success) { $tagMatch.Groups[1].Value -split '\|' | % { $_.Trim() } } else { @('ЧПУ','CNC','CNC') }
  $tags = @{ ru = $tagParts[0]; pl = $tagParts[[Math]::Min(1,$tagParts.Count-1)]; en = $tagParts[[Math]::Min(2,$tagParts.Count-1)] }

  $titles = @{}; $sums = @{}; $bodies = @{}
  $curLang = ""
  $langBuf = New-Object System.Collections.Generic.List[string]
  $flushLang = {
    if ($curLang -ne "" -and $langBuf.Count -gt 0) {
      $title = ($langBuf[0] -replace '^#+\s*', '').Trim()
      $rest = ($langBuf | Select-Object -Skip 1) -join "`n"
      $parsed = Convert-MdToHtml $rest
      $titles[$curLang] = $title
      $sums[$curLang] = $parsed.summary
      $bodies[$curLang] = $parsed.html
      $langBuf.Clear()
    }
  }
  foreach ($ln in (($b -replace "`r`n","`n") -split "`n")) {
    if ($ln -match '^\*\*.*Polski\*\*\s*$') { & $flushLang; $curLang = 'pl'; continue }
    if ($ln -match '^\*\*.*English\*\*\s*$') { & $flushLang; $curLang = 'en'; continue }
    if ($ln -match '^\*\*.+\*\*\s*$' -and $ln -notmatch 'Polski|English') { & $flushLang; $curLang = 'ru'; continue }
    if ($curLang -ne "") {
      if ($langBuf.Count -eq 0 -and $ln.Trim() -eq "") { continue }
      $langBuf.Add($ln)
    }
  }
  & $flushLang
  $articles.Add(@{ id = $id; tag = $tags; title = $titles; summary = $sums; body = $bodies })
}

# Write js/articles.js
$escJs = { param($s) ($s -replace '\\','\\' -replace '"','\"' -replace "`r","" -replace "`n","\n") }
$escTpl = { param($s) ($s -replace '\\','\\' -replace '`','\`' -replace '\$\{','\${') }
$jsOut = New-Object System.Text.StringBuilder
[void]$jsOut.AppendLine("/* AUTO-GENERATED from articles.md by build.ps1. Edit articles.md to add or update articles. */")
[void]$jsOut.AppendLine("const ARTICLES = [")
for ($i = 0; $i -lt $articles.Count; $i++) {
  $a = $articles[$i]
  $comma = if ($i -lt $articles.Count - 1) { "," } else { "" }
  [void]$jsOut.AppendLine("{")
  [void]$jsOut.AppendLine(" id:`"$($a.id)`", tag:{ru:`"$(& $escJs $a.tag.ru)`",pl:`"$(& $escJs $a.tag.pl)`",en:`"$(& $escJs $a.tag.en)`"},")
  [void]$jsOut.AppendLine(" title:{ru:`"$(& $escJs $a.title.ru)`",pl:`"$(& $escJs $a.title.pl)`",en:`"$(& $escJs $a.title.en)`"},")
  [void]$jsOut.AppendLine(" summary:{ru:`"$(& $escJs $a.summary.ru)`",pl:`"$(& $escJs $a.summary.pl)`",en:`"$(& $escJs $a.summary.en)`"},")
  [void]$jsOut.AppendLine(" body:{")
  [void]$jsOut.AppendLine("  ru:``$(& $escTpl $a.body.ru)``,")
  [void]$jsOut.AppendLine("  pl:``$(& $escTpl $a.body.pl)``,")
  [void]$jsOut.AppendLine("  en:``$(& $escTpl $a.body.en)``")
  [void]$jsOut.AppendLine(" }")
  [void]$jsOut.AppendLine("}$comma")
}
[void]$jsOut.AppendLine("];")
[IO.File]::WriteAllText("$root\js\articles.js", $jsOut.ToString(), $utf8)

# 2. Build HTML pages
$pages = [ordered]@{}
$map = @{index='home'; calculators='calc'; codes='codes'; articles='articles'}
foreach ($slug in 'index','calculators','codes','articles') {
  $m = @{}
  foreach ($l in $langs) { $m[$l] = @{t = $seo.pages.$slug.$l.t; d = $seo.pages.$slug.$l.d} }
  $pages[$slug] = @{route = $map[$slug]; article = ''; meta = $m}
}
foreach ($a in $articles) {
  $m = @{}
  foreach ($l in $langs) { $m[$l] = @{t = $a.title[$l] + ' | CNCHelper'; d = $a.summary[$l]} }
  $pages["article-$($a.id)"] = @{route = 'article'; article = $a.id; meta = $m}
}

$today = Get-Date -Format 'yyyy-MM-dd'
$sitemap = New-Object System.Text.StringBuilder
[void]$sitemap.AppendLine('<?xml version="1.0" encoding="UTF-8"?>')
[void]$sitemap.AppendLine('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">')

foreach ($slug in $pages.Keys) {
  $p = $pages[$slug]
  $file = "$slug.html"
  $alts = ($langs | % { "<link rel=""alternate"" hreflang=""$_"" href=""$domain/$_/$file"">" }) -join "`n"
  $alts += "`n<link rel=""alternate"" hreflang=""x-default"" href=""$domain/en/$file"">"
  foreach ($l in $langs) {
    $meta = $p.meta[$l]
    $canon = "$domain/$l/$file"
    $type = switch ($p.route) { 'home' {'WebSite'} 'calc' {'WebApplication'} 'article' {'Article'} default {'WebPage'} }
    $ld = [ordered]@{'@context'='https://schema.org'; '@type'=$type; inLanguage=$l; url=$canon; description=$meta.d}
    if ($type -eq 'Article') { $ld.headline = $meta.t -replace ' \| CNCHelper$',''; $ld.image = "$domain/images/hero.jpg" }
    else { $ld.name = $meta.t }
    if ($type -eq 'WebApplication') { $ld.applicationCategory = 'UtilitiesApplication'; $ld.operatingSystem = 'Any' }
    $json = ($ld | ConvertTo-Json -Compress) -replace '</', '<\/'
    $html = $tpl.Replace('{{LANG}}', $l).Replace('{{TITLE}}', (& $enc $meta.t)).Replace('{{DESC}}', (& $enc $meta.d)).
      Replace('{{CANONICAL}}', $canon).Replace('{{HREFLANGS}}', $alts).Replace('{{DOMAIN}}', $domain).
      Replace('{{OGLOCALE}}', $ogloc[$l]).Replace('{{JSONLD}}', $json).Replace('{{ROUTE}}', $p.route).
      Replace('{{ARTICLE}}', $p.article).Replace('{{FILE}}', $file)
    New-Item -ItemType Directory -Force "$root\$l" | Out-Null
    [IO.File]::WriteAllText("$root\$l\$file", $html, $utf8)
  }
  foreach ($l in $langs) {
    [void]$sitemap.AppendLine("  <url><loc>$domain/$l/$file</loc><lastmod>$today</lastmod>")
    foreach ($a in $langs) { [void]$sitemap.AppendLine("    <xhtml:link rel=""alternate"" hreflang=""$a"" href=""$domain/$a/$file""/>") }
    [void]$sitemap.AppendLine("  </url>")
  }
}
[void]$sitemap.AppendLine('</urlset>')
[IO.File]::WriteAllText("$root\sitemap.xml", $sitemap.ToString(), $utf8)
[IO.File]::WriteAllText("$root\robots.txt", "User-agent: *`nAllow: /`nSitemap: $domain/sitemap.xml`n", $utf8)

# root: language redirect
$rootHtml = @"
<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>CNCHelper</title>
<meta name="description" content="CNC operator toolkit / Pomocnik operatora CNC / Pomoshchnik operatora CHPU">
<link rel="canonical" href="$domain/en/index.html">
<link rel="alternate" hreflang="ru" href="$domain/ru/index.html">
<link rel="alternate" hreflang="pl" href="$domain/pl/index.html">
<link rel="alternate" hreflang="en" href="$domain/en/index.html">
<link rel="alternate" hreflang="x-default" href="$domain/en/index.html">
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1775700331598232"
     crossorigin="anonymous"></script>
<script>
var s=localStorage.getItem('lang'),n=(navigator.language||'en').slice(0,2),l=['ru','pl','en'].indexOf(s)>-1?s:(['ru','pl'].indexOf(n)>-1?n:'en');
location.replace(l+'/index.html');
</script>
<noscript><meta http-equiv="refresh" content="0; url=en/index.html"></noscript>
</head><body><p><a href="ru/index.html">RU</a> · <a href="pl/index.html">PL</a> · <a href="en/index.html">EN</a></p></body></html>
"@
[IO.File]::WriteAllText("$root\index.html", $rootHtml, $utf8)
"Built $($articles.Count) articles -> $($pages.Count) pages x $($langs.Count) languages."
