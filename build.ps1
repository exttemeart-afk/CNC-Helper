# Build script: generates ru/ pl/ en/ static pages (own URL, title, description, canonical, hreflang, JSON-LD),
# sitemap.xml, robots.txt and the root language-redirect index.html.
# Usage (PowerShell):  .\build.ps1     -- set the real domain in seo-pages.json first.
$ErrorActionPreference = 'Stop'
$root = $PSScriptRoot
$utf8 = New-Object System.Text.UTF8Encoding($false)
$seo  = [IO.File]::ReadAllText("$root\seo-pages.json", $utf8) | ConvertFrom-Json
$tpl  = [IO.File]::ReadAllText("$root\template.html", $utf8)
$js   = [IO.File]::ReadAllText("$root\js\articles.js", $utf8)
$domain = $seo.domain.TrimEnd('/')
$langs = 'ru','pl','en'
$ogloc = @{ru='ru_RU'; pl='pl_PL'; en='en_US'}
$enc = { param($s) [System.Net.WebUtility]::HtmlEncode($s) }

# pages: slug -> @{route; article; meta per lang}
$pages = [ordered]@{}
$map = @{index='home'; calculators='calc'; codes='codes'; articles='articles'}
foreach ($slug in 'index','calculators','codes','articles') {
  $m = @{}
  foreach ($l in $langs) { $m[$l] = @{t = $seo.pages.$slug.$l.t; d = $seo.pages.$slug.$l.d} }
  $pages[$slug] = @{route = $map[$slug]; article = ''; meta = $m}
}
# articles parsed from js/articles.js
$ids  = [regex]::Matches($js, '\{\s*id:"([^"]+)"')
$tit  = [regex]::Matches($js, 'title:\{ru:"([^"]*)",pl:"([^"]*)",en:"([^"]*)"\}')
$sum  = [regex]::Matches($js, 'summary:\{ru:"([^"]*)",pl:"([^"]*)",en:"([^"]*)"\}')
for ($i = 0; $i -lt $ids.Count; $i++) {
  $id = $ids[$i].Groups[1].Value
  $m = @{}
  for ($k = 0; $k -lt 3; $k++) {
    $m[$langs[$k]] = @{t = $tit[$i].Groups[$k+1].Value + ' | CNCHelper'; d = $sum[$i].Groups[$k+1].Value}
  }
  $pages["article-$id"] = @{route = 'article'; article = $id; meta = $m}
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
<script>
var s=localStorage.getItem('lang'),n=(navigator.language||'en').slice(0,2),l=['ru','pl','en'].indexOf(s)>-1?s:(['ru','pl'].indexOf(n)>-1?n:'en');
location.replace(l+'/index.html');
</script>
<noscript><meta http-equiv="refresh" content="0; url=en/index.html"></noscript>
</head><body><p><a href="ru/index.html">RU</a> · <a href="pl/index.html">PL</a> · <a href="en/index.html">EN</a></p></body></html>
"@
[IO.File]::WriteAllText("$root\index.html", $rootHtml, $utf8)
"Built $($pages.Count) pages x $($langs.Count) languages."
