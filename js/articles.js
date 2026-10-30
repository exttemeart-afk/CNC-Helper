/* Articles. To add one: append an object. body is HTML per language. */
const ARTICLES = [
{
 id:"gm-basics", tag:{ru:"Основы",pl:"Podstawy",en:"Basics"},
 title:{ru:"G и M коды: с чего начать",pl:"Kody G i M: od czego zacząć",en:"G and M codes: where to start"},
 summary:{ru:"Как устроена управляющая программа и чем G-коды отличаются от M-кодов.",pl:"Jak zbudowany jest program sterujący i czym kody G różnią się od M.",en:"How a part program is structured and how G-codes differ from M-codes."},
 body:{
  ru:`<p>Управляющая программа состоит из кадров. Каждый кадр содержит слова: <code>N</code> — номер кадра, <code>G</code> — подготовительные функции (как двигаться), <code>M</code> — вспомогательные (включить шпиндель, СОЖ), <code>X Y Z</code> — координаты, <code>F</code> — подача, <code>S</code> — обороты, <code>T</code> — инструмент.</p>
<h2>Минимальный пример</h2><pre>O0001
G21 G90 G17 G40 G49 G80
T01 M06
G54 G00 X0 Y0
S3000 M03
G43 H01 Z50 M08
G01 Z-5 F150
G01 X50 F300
G00 Z100
M09
M05
M30</pre>
<p>Строка безопасности в начале (<code>G21 G90 G17 G40 G49 G80</code>) сбрасывает старые режимы — это хорошая привычка.</p>
<ul><li>Модальные коды действуют, пока их не отменит другой код той же группы.</li><li>Немодальные (например, <code>G04</code>) действуют только в своём кадре.</li></ul>`,
  pl:`<p>Program sterujący składa się z bloków. Każdy blok zawiera słowa: <code>N</code> — numer bloku, <code>G</code> — funkcje przygotowawcze (jak się poruszać), <code>M</code> — pomocnicze (włącz wrzeciono, chłodziwo), <code>X Y Z</code> — współrzędne, <code>F</code> — posuw, <code>S</code> — obroty, <code>T</code> — narzędzie.</p>
<h2>Minimalny przykład</h2><pre>O0001
G21 G90 G17 G40 G49 G80
T01 M06
G54 G00 X0 Y0
S3000 M03
G43 H01 Z50 M08
G01 Z-5 F150
G01 X50 F300
G00 Z100
M09
M05
M30</pre>
<p>Bezpieczna linia na początku (<code>G21 G90 G17 G40 G49 G80</code>) kasuje stare tryby — to dobry nawyk.</p>
<ul><li>Kody modalne działają, dopóki nie anuluje ich inny kod z tej samej grupy.</li><li>Niemodalne (np. <code>G04</code>) działają tylko w swoim bloku.</li></ul>`,
  en:`<p>A part program is made of blocks. Each block contains words: <code>N</code> — block number, <code>G</code> — preparatory functions (how to move), <code>M</code> — miscellaneous (spindle, coolant), <code>X Y Z</code> — coordinates, <code>F</code> — feed, <code>S</code> — speed, <code>T</code> — tool.</p>
<h2>Minimal example</h2><pre>O0001
G21 G90 G17 G40 G49 G80
T01 M06
G54 G00 X0 Y0
S3000 M03
G43 H01 Z50 M08
G01 Z-5 F150
G01 X50 F300
G00 Z100
M09
M05
M30</pre>
<p>The safety line at the start (<code>G21 G90 G17 G40 G49 G80</code>) cancels old modes — a good habit.</p>
<ul><li>Modal codes stay active until another code from the same group cancels them.</li><li>Non-modal codes (e.g. <code>G04</code>) work only in their own block.</li></ul>`
 }
},
{
 id:"speeds-feeds", tag:{ru:"Режимы резания",pl:"Parametry skrawania",en:"Cutting data"},
 title:{ru:"Как подобрать обороты и подачу",pl:"Jak dobrać obroty i posuw",en:"How to choose speed and feed"},
 summary:{ru:"Формулы n и F, откуда брать Vc и fz и как корректировать режимы по звуку и стружке.",pl:"Wzory na n i F, skąd brać Vc i fz oraz jak korygować parametry po dźwięku i wiórze.",en:"Formulas for n and F, where to get Vc and fz, and how to adjust by sound and chip."},
 body:{
  ru:`<p>Обороты шпинделя: <code>n = 1000 · Vc / (π · D)</code>. Минутная подача при фрезеровании: <code>F = n · fz · z</code>.</p>
<h2>Откуда брать Vc и fz</h2><p>Из каталога производителя инструмента для вашей пары «материал — пластина/фреза». Наш калькулятор даёт расчёт, а справочная таблица — стартовые ориентиры для твердого сплава.</p>
<h2>Корректировка на станке</h2>
<ul><li><b>Высокий визг</b> — снизьте обороты или увеличьте подачу.</li><li><b>Вибрации (дребезг)</b> — измените обороты на 10–15 %, уменьшите вылет, проверьте крепление.</li><li><b>Стружка синего цвета</b> — слишком высокая скорость.</li><li><b>Стружка пылевидная</b> — слишком малая подача на зуб, инструмент трётся.</li></ul>
<p>Начинайте с 70–80 % от расчётных значений и увеличивайте, используя оверрайд подачи.</p>`,
  pl:`<p>Obroty wrzeciona: <code>n = 1000 · Vc / (π · D)</code>. Posuw minutowy przy frezowaniu: <code>F = n · fz · z</code>.</p>
<h2>Skąd brać Vc i fz</h2><p>Z katalogu producenta narzędzi dla Twojej pary „materiał — płytka/frez”. Nasz kalkulator liczy wartości, a tabela materiałów podaje orientacyjne dane startowe dla węglika.</p>
<h2>Korekta na maszynie</h2>
<ul><li><b>Wysoki pisk</b> — zmniejsz obroty lub zwiększ posuw.</li><li><b>Drgania</b> — zmień obroty o 10–15 %, skróć wysięg, sprawdź mocowanie.</li><li><b>Niebieski wiór</b> — zbyt duża prędkość.</li><li><b>Wiór pylisty</b> — zbyt mały posuw na ostrze, narzędzie się ociera.</li></ul>
<p>Zaczynaj od 70–80 % wartości obliczonych i zwiększaj, używając korekcji posuwu.</p>`,
  en:`<p>Spindle speed: <code>n = 1000 · Vc / (π · D)</code>. Milling feed rate: <code>F = n · fz · z</code>.</p>
<h2>Where to get Vc and fz</h2><p>From the tool manufacturer's catalog for your material/insert pair. Our calculator does the math, and the material table gives starting values for carbide.</p>
<h2>Adjusting at the machine</h2>
<ul><li><b>High-pitched squeal</b> — lower speed or raise feed.</li><li><b>Chatter</b> — change speed by 10–15 %, shorten stick-out, check workholding.</li><li><b>Blue chips</b> — speed is too high.</li><li><b>Dust-like chips</b> — feed per tooth too low, the tool is rubbing.</li></ul>
<p>Start at 70–80 % of calculated values and increase using the feed override.</p>`
 }
},
{
 id:"first-part", tag:{ru:"Безопасность",pl:"Bezpieczeństwo",en:"Safety"},
 title:{ru:"Чек-лист запуска первой детали",pl:"Lista kontrolna uruchomienia pierwszej sztuki",en:"First-part run checklist"},
 summary:{ru:"Что проверить перед первым запуском программы, чтобы не разбить станок.",pl:"Co sprawdzić przed pierwszym uruchomieniem programu, aby nie uszkodzić maszyny.",en:"What to check before the first program run to avoid a crash."},
 body:{
  ru:`<ol><li>Проверьте программу в симуляторе или в графике стойки.</li><li>Убедитесь, что выбран верный ноль детали (<code>G54…G59</code>) и корректны смещения.</li><li>Проверьте длины и диаметры инструментов, номера корректоров <code>H</code>/<code>D</code>.</li><li>Надёжно закрепите заготовку; проверьте вылет и положение кулачков/тисков.</li><li>Запустите с <b>выключенным шпинделем</b> и в воздухе (Z-смещение вверх), если возможно.</li><li>Включите покадровый режим, снизьте оверрайд ускоренного хода до 10–25 %.</li><li>Следите за «Distance to go» перед первым касанием.</li><li>Держите руку на кнопке Feed Hold / аварийной остановке.</li></ol>`,
  pl:`<ol><li>Sprawdź program w symulatorze lub grafice sterowania.</li><li>Upewnij się, że wybrane jest właściwe zero przedmiotu (<code>G54…G59</code>) i korekcje są poprawne.</li><li>Sprawdź długości i średnice narzędzi oraz numery korektorów <code>H</code>/<code>D</code>.</li><li>Pewnie zamocuj materiał; sprawdź wysięg i położenie szczęk/imadła.</li><li>Uruchom z <b>wyłączonym wrzecionem</b> i nad przedmiotem (przesunięcie Z w górę), jeśli to możliwe.</li><li>Włącz tryb blokowy, zmniejsz korekcję szybkiego posuwu do 10–25 %.</li><li>Obserwuj „Distance to go” przed pierwszym kontaktem.</li><li>Trzymaj rękę na Feed Hold / przycisku awaryjnym.</li></ol>`,
  en:`<ol><li>Verify the program in a simulator or the control's graphics.</li><li>Make sure the correct work offset (<code>G54…G59</code>) is selected and values are right.</li><li>Check tool lengths, diameters and the <code>H</code>/<code>D</code> offset numbers.</li><li>Clamp the workpiece securely; check stick-out and jaw/vise position.</li><li>Run with the <b>spindle off</b> and in the air (Z offset up) if possible.</li><li>Enable single block and reduce rapid override to 10–25 %.</li><li>Watch "Distance to go" before the first contact.</li><li>Keep your hand on Feed Hold / E-stop.</li></ol>`
 }
},
{
 id:"work-offsets", tag:{ru:"Наладка",pl:"Ustawianie",en:"Setup"},
 title:{ru:"Нулевые точки G54–G59 и привязка инструмента",pl:"Punkty zerowe G54–G59 i pomiar narzędzi",en:"Work offsets G54–G59 and tool measuring"},
 summary:{ru:"Как работают рабочие смещения, кромкоискатель, щуп и коррекция длины инструмента.",pl:"Jak działają przesunięcia robocze, sonda krawędziowa i korekcja długości narzędzia.",en:"How work offsets, edge finders, probes and tool length offsets work."},
 body:{
  ru:`<p>Рабочее смещение (<code>G54…G59</code>) хранит расстояние от нуля станка до нуля детали. Оно задаётся кромкоискателем, индикатором или щупом (например, Renishaw/Blum).</p>
<h2>Привязка по осям</h2><ul><li><b>X/Y</b> — по кромкам, центру отверстия или цилиндра.</li><li><b>Z</b> — по верхней плоскости заготовки (чаще), по столу или по базе приспособления.</li></ul>
<h2>Длина инструмента</h2><p>Длину измеряют на станке (по датчику или «бумажкой») либо в оправке вне станка. В программе вызывайте коррекцию через <code>G43 H..</code> (Fanuc/Haas). Не забывайте <code>G49</code> перед сменой.</p>
<p><b>Типичные ошибки:</b> перепутан номер корректора, не учтён износ, нулевая точка записана в другое смещение, не очищена плоскость от стружки при привязке.</p>`,
  pl:`<p>Przesunięcie robocze (<code>G54…G59</code>) przechowuje odległość od zera maszyny do zera przedmiotu. Ustawia się je sondą krawędziową, czujnikiem lub sondą pomiarową (np. Renishaw/Blum).</p>
<h2>Wyznaczanie osi</h2><ul><li><b>X/Y</b> — po krawędziach, środku otworu lub czopa.</li><li><b>Z</b> — na górnej płaszczyźnie materiału (najczęściej), na stole lub bazie uchwytu.</li></ul>
<h2>Długość narzędzia</h2><p>Długość mierzy się na maszynie (czujnikiem lub „kartką”) albo poza maszyną w oprawce. W programie wywołaj korekcję przez <code>G43 H..</code> (Fanuc/Haas). Pamiętaj o <code>G49</code> przed zmianą.</p>
<p><b>Typowe błędy:</b> pomylony numer korektora, nieuwzględnione zużycie, zero zapisane w innym przesunięciu, niewyczyszczona z wiórów płaszczyzna przy pomiarze.</p>`,
  en:`<p>A work offset (<code>G54…G59</code>) stores the distance from machine zero to part zero. It is set with an edge finder, indicator or touch probe (e.g. Renishaw/Blum).</p>
<h2>Setting the axes</h2><ul><li><b>X/Y</b> — on edges, hole center or boss.</li><li><b>Z</b> — on the top of the stock (most common), on the table or on a fixture datum.</li></ul>
<h2>Tool length</h2><p>Measure the length on the machine (tool setter or paper feeler) or in a presetter. Call it in the program with <code>G43 H..</code> (Fanuc/Haas). Don't forget <code>G49</code> before a change.</p>
<p><b>Common mistakes:</b> wrong offset number, ignored wear, zero stored in a different offset, chips left on the surface when touching off.</p>`
 }
},
{
 id:"cutter-comp", tag:{ru:"Программирование",pl:"Programowanie",en:"Programming"},
 title:{ru:"Коррекция на радиус G41/G42: как не ошибиться",pl:"Korekcja promienia G41/G42: jak się nie pomylić",en:"Cutter compensation G41/G42 without mistakes"},
 summary:{ru:"Левая и правая коррекция, подход к контуру и отмена, подгонка размера износом.",pl:"Korekcja lewa i prawa, dojście do konturu i anulowanie, dopasowanie wymiaru zużyciem.",en:"Left and right comp, lead-in/out, and fine-tuning size with wear."},
 body:{
  ru:`<p>Коррекция позволяет программировать контур детали, а не траекторию центра фрезы. <code>G41</code> — фреза слева от контура по ходу движения, <code>G42</code> — справа. Отмена — <code>G40</code>.</p>
<h2>Правила</h2><ul><li>Включайте коррекцию на линейном участке (<code>G01</code>), не на дуге и не в ускоренном ходе в деталь.</li><li>Длина подхода должна быть не меньше радиуса инструмента.</li><li>Выходите из контура тоже по прямой, затем <code>G40</code>.</li><li>Попутное фрезерование для внешнего контура — обычно <code>G41</code> при движении против часовой стрелки.</li></ul>
<p>Для точной подгонки размера меняйте значение износа в корректоре радиуса (<code>D..</code>), а не программу.</p><pre>G01 G41 D01 X-10 Y0 F300
G01 X0
G01 Y50
...
G01 G40 X-10</pre>`,
  pl:`<p>Korekcja pozwala programować kontur przedmiotu, a nie tor środka freza. <code>G41</code> — frez po lewej stronie konturu w kierunku ruchu, <code>G42</code> — po prawej. Anulowanie — <code>G40</code>.</p>
<h2>Zasady</h2><ul><li>Włączaj korekcję na odcinku prostym (<code>G01</code>), nie na łuku i nie w ruchu szybkim w przedmiot.</li><li>Droga dojścia nie krótsza niż promień narzędzia.</li><li>Wychodź z konturu też po prostej, potem <code>G40</code>.</li><li>Frezowanie współbieżne konturu zewnętrznego — zwykle <code>G41</code> przy ruchu przeciwnym do ruchu wskazówek zegara.</li></ul>
<p>Do dokładnego dopasowania wymiaru zmieniaj zużycie w korektorze promienia (<code>D..</code>), a nie program.</p><pre>G01 G41 D01 X-10 Y0 F300
G01 X0
G01 Y50
...
G01 G40 X-10</pre>`,
  en:`<p>Compensation lets you program the part contour instead of the cutter center path. <code>G41</code> — cutter to the left of the contour in the direction of travel, <code>G42</code> — to the right. Cancel with <code>G40</code>.</p>
<h2>Rules</h2><ul><li>Activate on a linear move (<code>G01</code>), not on an arc and not on a rapid into the part.</li><li>Lead-in length must be at least the tool radius.</li><li>Leave the contour on a straight line too, then <code>G40</code>.</li><li>Climb milling an outside contour is usually <code>G41</code> when travelling counter-clockwise.</li></ul>
<p>To fine-tune size, change the wear value in the radius offset (<code>D..</code>), not the program.</p><pre>G01 G41 D01 X-10 Y0 F300
G01 X0
G01 Y50
...
G01 G40 X-10</pre>`
 }
},
{
 id:"controls-compare", tag:{ru:"Системы ЧПУ",pl:"Sterowania CNC",en:"CNC controls"},
 title:{ru:"Fanuc, Haas, Siemens, Heidenhain: чем отличаются",pl:"Fanuc, Haas, Siemens, Heidenhain: czym się różnią",en:"Fanuc, Haas, Siemens, Heidenhain: what's different"},
 summary:{ru:"Ключевые отличия программирования на основных стойках ЧПУ.",pl:"Najważniejsze różnice w programowaniu na popularnych sterowaniach CNC.",en:"Key programming differences between the most common CNC controls."},
 body:{
  ru:`<ul><li><b>Fanuc</b> — стандарт «ISO»: G/M-коды, макропеременные <code>#100</code>, циклы G81–G89. Haas очень близок к нему.</li><li><b>Haas</b> — Fanuc-подобный диалект с дружелюбным интерфейсом: VQC, быстрый ввод, расширенные смещения G154, гравировка G47.</li><li><b>Siemens SINUMERIK</b> — ISO + собственный язык: циклы <code>CYCLE81…</code>, <code>TRANS/ROT</code>, R-параметры, <code>WHILE/IF</code>, подпрограммы с именами. Есть ShopMill/ShopTurn — диалоговое программирование.</li><li><b>Heidenhain TNC</b> — диалог Klartext: <code>L X+10 Y+5 R0 FMAX</code>, циклы <code>CYCL DEF</code>, Q-параметры, мощная работа с наклоном плоскости (<code>PLANE</code>). Многие TNC понимают и ISO.</li></ul>
<p>Совет: переходя на новую стойку, начните с таблицы соответствия кодов — смотрите раздел «Система ЧПУ» в нашей базе кодов.</p>`,
  pl:`<ul><li><b>Fanuc</b> — standard „ISO”: kody G/M, zmienne makro <code>#100</code>, cykle G81–G89. Haas jest bardzo podobny.</li><li><b>Haas</b> — dialekt zbliżony do Fanuc z przyjaznym interfejsem: VQC, szybkie wprowadzanie, rozszerzone przesunięcia G154, grawerowanie G47.</li><li><b>Siemens SINUMERIK</b> — ISO + własny język: cykle <code>CYCLE81…</code>, <code>TRANS/ROT</code>, parametry R, <code>WHILE/IF</code>, podprogramy z nazwami. Dostępne ShopMill/ShopTurn — programowanie dialogowe.</li><li><b>Heidenhain TNC</b> — dialog Klartext: <code>L X+10 Y+5 R0 FMAX</code>, cykle <code>CYCL DEF</code>, parametry Q, rozbudowane nachylanie płaszczyzny (<code>PLANE</code>). Wiele TNC rozumie też ISO.</li></ul>
<p>Wskazówka: przechodząc na nowe sterowanie, zacznij od tabeli odpowiedników — zobacz sekcję „Sterowanie CNC” w naszej bazie kodów.</p>`,
  en:`<ul><li><b>Fanuc</b> — the "ISO" standard: G/M codes, macro variables <code>#100</code>, cycles G81–G89. Haas is very close to it.</li><li><b>Haas</b> — a Fanuc-like dialect with a friendly UI: VQC, quick code, extended offsets G154, engraving G47.</li><li><b>Siemens SINUMERIK</b> — ISO plus its own language: <code>CYCLE81…</code> cycles, <code>TRANS/ROT</code>, R-parameters, <code>WHILE/IF</code>, named subprograms. ShopMill/ShopTurn provide conversational programming.</li><li><b>Heidenhain TNC</b> — Klartext conversational: <code>L X+10 Y+5 R0 FMAX</code>, <code>CYCL DEF</code> cycles, Q-parameters, powerful tilted-plane handling (<code>PLANE</code>). Many TNCs also read ISO.</li></ul>
<p>Tip: when moving to a new control, start with a code comparison table — see the "CNC control" selector in our code database.</p>`
 }
},
{
 id:"tool-wear", tag:{ru:"Инструмент",pl:"Narzędzia",en:"Tooling"},
 title:{ru:"Износ инструмента: как распознать и продлить стойкость",pl:"Zużycie narzędzia: jak rozpoznać i wydłużyć trwałość",en:"Tool wear: how to spot it and extend tool life"},
 summary:{ru:"Виды износа, признаки и практические приёмы увеличения стойкости.",pl:"Rodzaje zużycia, objawy i praktyczne sposoby zwiększenia trwałości.",en:"Wear types, symptoms and practical ways to improve tool life."},
 body:{
  ru:`<h2>Виды износа</h2><ul><li><b>По задней поверхности</b> — нормальный; ограничивайте VB ≈ 0,3 мм для чернового.</li><li><b>Лунка на передней поверхности</b> — слишком высокая скорость/температура.</li><li><b>Наростообразование</b> — слишком низкая скорость, вязкие материалы (алюминий, нержавейка).</li><li><b>Выкрашивание кромки</b> — вибрации, прерывистый рез, слишком твёрдая марка.</li></ul>
<h2>Как продлить стойкость</h2><ul><li>Снизьте Vc на 10–20 % — стойкость вырастает непропорционально сильнее.</li><li>Обеспечьте подачу СОЖ в зону резания и отвод стружки.</li><li>Используйте минимальный вылет и надёжный зажим.</li><li>Применяйте врезание по дуге (динамическое фрезерование) вместо полного паза.</li></ul>`,
  pl:`<h2>Rodzaje zużycia</h2><ul><li><b>Na powierzchni przyłożenia</b> — normalne; ogranicz VB do ok. 0,3 mm przy obróbce zgrubnej.</li><li><b>Krater na powierzchni natarcia</b> — zbyt duża prędkość/temperatura.</li><li><b>Narost na ostrzu</b> — zbyt mała prędkość, materiały ciągliwe (aluminium, nierdzewka).</li><li><b>Wykruszenia krawędzi</b> — drgania, cięcie przerywane, zbyt twardy gatunek.</li></ul>
<h2>Jak wydłużyć trwałość</h2><ul><li>Zmniejsz Vc o 10–20 % — trwałość rośnie nieproporcjonalnie bardziej.</li><li>Zapewnij chłodziwo w strefie skrawania i odprowadzanie wióra.</li><li>Stosuj minimalny wysięg i pewne mocowanie.</li><li>Wejście po łuku (frezowanie dynamiczne) zamiast pełnego rowka.</li></ul>`,
  en:`<h2>Wear types</h2><ul><li><b>Flank wear</b> — normal; limit VB to about 0.3 mm for roughing.</li><li><b>Crater wear</b> — speed/temperature too high.</li><li><b>Built-up edge</b> — speed too low, sticky materials (aluminum, stainless).</li><li><b>Edge chipping</b> — vibration, interrupted cut, grade too hard.</li></ul>
<h2>Extending tool life</h2><ul><li>Cut Vc by 10–20 % — tool life grows disproportionately more.</li><li>Get coolant into the cut and evacuate chips.</li><li>Use minimal stick-out and rigid clamping.</li><li>Use arc entry (dynamic milling) instead of full-width slotting.</li></ul>`
 }
},
{
 id:"threading", tag:{ru:"Резьба",pl:"Gwinty",en:"Threads"},
 title:{ru:"Резьба: метчик, резьбофреза или накатка",pl:"Gwint: gwintownik, frez do gwintów czy wygniatak",en:"Threading: tap, thread mill or forming tap"},
 summary:{ru:"Сравнение способов получения резьбы и расчёт диаметра отверстия под метчик.",pl:"Porównanie metod wykonania gwintu i obliczanie średnicy otworu pod gwintownik.",en:"Comparing threading methods and calculating tap drill size."},
 body:{
  ru:`<ul><li><b>Режущий метчик</b> — быстро и дёшево; сверло ≈ D − P (<code>M10×1,5 → Ø8,5</code>). Риск поломки в глухих отверстиях.</li><li><b>Раскатник (формующий)</b> — без стружки, прочная резьба; сверло ≈ D − 0,45·P; подходит для пластичных материалов.</li><li><b>Резьбофреза</b> — один инструмент на разные диаметры, безопасна для дорогих деталей и твёрдых материалов, но дольше по времени.</li></ul>
<p>Используйте наш калькулятор резьбы для диаметров отверстий и внутреннего диаметра. Для жёсткого нарезания (<code>G84</code> / <code>CYCLE84</code> / <code>CYCL DEF 207</code>) подача равна шагу: F = n · P.</p>`,
  pl:`<ul><li><b>Gwintownik skrawający</b> — szybki i tani; wiertło ≈ D − P (<code>M10×1,5 → Ø8,5</code>). Ryzyko złamania w otworach nieprzelotowych.</li><li><b>Wygniatak</b> — bez wiórów, mocny gwint; wiertło ≈ D − 0,45·P; do materiałów plastycznych.</li><li><b>Frez do gwintów</b> — jedno narzędzie na różne średnice, bezpieczny dla drogich detali i twardych materiałów, ale wolniejszy.</li></ul>
<p>Użyj naszego kalkulatora gwintów do średnic otworów i średnicy rdzenia. Przy gwintowaniu sztywnym (<code>G84</code> / <code>CYCLE84</code> / <code>CYCL DEF 207</code>) posuw równa się skokowi: F = n · P.</p>`,
  en:`<ul><li><b>Cutting tap</b> — fast and cheap; drill ≈ D − P (<code>M10×1.5 → Ø8.5</code>). Risk of breakage in blind holes.</li><li><b>Forming tap</b> — chipless, strong thread; drill ≈ D − 0.45·P; for ductile materials.</li><li><b>Thread mill</b> — one tool for several diameters, safe for expensive parts and hard materials, but slower.</li></ul>
<p>Use our thread calculator for hole and minor diameters. For rigid tapping (<code>G84</code> / <code>CYCLE84</code> / <code>CYCL DEF 207</code>) feed equals pitch: F = n · P.</p>`
 }
}
];
