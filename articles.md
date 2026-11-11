<!--
=============================================================================
АРХИВ СТАТЕЙ (articles.md)
=============================================================================
Чтобы добавить новую статью:
1. Скопируйте шаблон любого блока (разделяются строкой ---).
2. Придумайте уникальный id (латиницей через дефис, например: my-new-article).
3. Укажите tag: Тег RU | Тег PL | Tag EN
4. Напишите блоки **🇷🇺 Русский**, **🇵🇱 Polski**, **🇬🇧 English**:
   - Первая строка после языка: # Заголовок статьи
   - Следующие абзацы — текст статьи (поддерживается Markdown: **жирный**, `код`, списки - или 1., ## подзаголовки).
5. Запустите сборку:
   powershell -ExecutionPolicy Bypass -File build.ps1
=============================================================================
-->

id: trochoidal-milling
tag: Фрезерование | Frezowanie | Milling

**🇷🇺 Русский**
# Трохоидальное фрезерование: Как перестать ломать фрезы
Устали ломать дорогие фрезы при обработке глубоких пазов? Пора вспомнить про трохоидальное фрезерование. Суть проста: фреза двигается по спирали, снимая металл тонкой стружкой, но используя всю длину режущей кромки (High Efficiency Milling). В итоге инструмент не "задыхается" в материале, излишки тепла уходят со стружкой, а срок службы фрезы вырастает в разы. Да, программа выглядит как спагетти из G-кода, но современные CAM-системы генерируют эту траекторию за пару кликов.

**🇵🇱 Polski**
# Frezowanie trochoidalne: Jak przestać łamać frezy
Masz dość łamania drogich frezów przy głębokich rowkach? Czas zaprzyjaźnić się z frezowaniem trochoidalnym. Zasada jest prosta: frez porusza się ruchem spiralnym, zdejmując cienką warstwę materiału, ale wykorzystując całą długość ostrza. Dzięki temu narzędzie się nie "dusi", ciepło ucieka z wiórem, a żywotność frezu rośnie drastycznie. Owszem, G-kod wygląda wtedy jak makaron spaghetti, ale dzisiejsze systemy CAM generują to w kilka kliknięć.

**🇬🇧 English**
# Trochoidal Milling: How to Stop Breaking End Mills
Tired of snapping expensive end mills when cutting deep slots? It’s time to embrace trochoidal milling. The concept is simple: the tool moves in a spiral path, taking light radial cuts but using the full depth of the flute. This means the cutter doesn't get bogged down, heat leaves with the chip, and your tool life goes through the roof. Sure, your G-code will look like a bowl of spaghetti, but modern CAM software handles it in a couple of clicks.

---

id: coolant-care
tag: Обслуживание | Konserwacja | Maintenance

**🇷🇺 Русский**
# Выбор и уход за СОЖ: Это вам не просто вода
СОЖ (смазочно-охлаждающая жидкость) — это кровь вашего станка. Но если в понедельник утром из бака пахнет как из болота, у вас проблемы. Многие операторы просто доливают воду или концентрат "на глаз". Это фатальная ошибка! Всегда используйте рефрактометр. Слишком бедная смесь — привет, ржавчина и быстрый износ инструмента. Слишком богатая — дерматит на руках и деньги на ветер. И главное правило: снимайте масляную пленку с поверхности бака (скиммером), иначе анаэробные бактерии устроят там вечеринку.

**🇵🇱 Polski**
# Wybór i pielęgnacja chłodziwa: To nie jest zwykła woda
Chłodziwo to krew maszyny CNC. Ale jeśli w poniedziałek rano pachnie jak bagno, masz spory problem. Wielu operatorów po prostu dolewa wody lub koncentratu "na oko". Błąd! Używaj refraktometru. Zbyt uboga mieszanka oznacza rdzę i szybkie zużycie narzędzi. Zbyt bogata – problemy ze skórą i wyrzucanie pieniędzy w błoto. I najważniejsza zasada: usuwaj olej z powierzchni zbiornika (skimmerem), inaczej bakterie urządzą tam sobie imprezę.

**🇬🇧 English**
# Coolant Selection and Care: It’s Not Just Water
Coolant is the lifeblood of your CNC machine. But if it smells like a swamp on a Monday morning, you’ve got a problem. Many machinists just top it up with water or concentrate by eye. Big mistake! Use a refractometer. Too lean, and you’re inviting rust and rapid tool wear. Too rich, and you’ll get skin irritation and waste money. Most importantly: skim the tramp oil off the tank, or anaerobic bacteria will throw a massive party in there.

---

id: titanium-machining
tag: Материалы | Materiały | Materials

**🇷🇺 Русский**
# Укрощение титана: Секреты обработки
Титан — металл красивый, прочный и жутко капризный. Главная ошибка новичков — пытаться резать его на тех же режимах, что и обычную сталь. Титан очень плохо отводит тепло, поэтому вся температура ударяет прямо в режущую кромку фрезы. Правило номер один: снижайте обороты (RPM) и держите хорошую подачу на зуб, чтобы стружка успевала забирать тепло с собой. И ради всего святого, не останавливайте инструмент в материале! Если он трется, а не режет — он сгорит за доли секунды.

**🇵🇱 Polski**
# Poskramianie tytanu: Sekrety obróbki
Tytan jest piękny, wytrzymały i potwornie kapryśny. Głównym błędem nowicjuszy jest traktowanie go jak zwykłej stali. Tytan słabo odprowadza ciepło, więc cała temperatura uderza bezpośrednio w narzędzie. Zasada numer jeden: obniż obroty (RPM) i utrzymaj konkretny posuw na ząb, aby wiór zdążył zabrać ciepło ze sobą. I na litość boską, nie zatrzymuj narzędzia w materiale! Jeśli frez tylko trze, a nie skrawa – spali się w ułamku sekundy.

**🇬🇧 English**
# Taming Titanium: Machining Secrets
Titanium is beautiful, strong, and incredibly stubborn. The biggest rookie mistake is running it at typical steel speeds. Titanium is a poor conductor of heat, meaning all the thermal shock goes straight into your cutting tool. Rule number one: drop your RPMs and keep a healthy chip load so the heat escapes with the chip. And for the love of machining, never let the tool dwell in the cut! If it rubs instead of cuts, it’s toast in seconds.

---

id: chatter-vibrations
tag: Фрезерование | Frezowanie | Milling

**🇷🇺 Русский**
# Вибрации (Chatter) и как с ними бороться
Слышите этот жуткий визг при фрезеровании? Это "chatter" (автоколебания), и он прямо сейчас убивает вашу фрезу и подшипники шпинделя. Первый инстинкт — снизить подачу, но часто это делает только хуже, превращая резание в трение. Что делать? Иногда достаточно просто немного изменить обороты шпинделя (буквально на 10%), чтобы выйти из этого гармонического резонанса. Еще лучший вариант — используйте фрезы с неравномерным шагом зубьев. Такая геометрия физически "ломает" ритм возникновения вибраций.

**🇵🇱 Polski**
# Drgania (Chatter) i jak z nimi walczyć
Słyszysz ten przeraźliwy pisk przy frezowaniu? To "chatter" (drgania samowzbudne), który właśnie w tej chwili niszczy twoje narzędzie i łożyska wrzeciona. Instynkt podpowiada, by zmniejszyć posuw, ale to często pogarsza sprawę, zamieniając skrawanie w tarcie. Co robić? Czasem wystarczy zmienić obroty wrzeciona zaledwie o 10%, aby wyjść z rezonansu. Albo użyj frezu o zmiennej podziałce – taka geometria fizycznie "łamie" rytm powstawania drgań.

**🇬🇧 English**
# Chatter Vibrations and How to Fight Them
Hear that screeching noise when milling? That’s chatter, and it’s busy destroying your end mill and spindle bearings. Your instinct might tell you to slow the feed rate down, but that often makes it worse by turning cutting into rubbing. The fix? Sometimes just tweaking your spindle speed by 10% is enough to break the harmonic resonance. Alternatively, use a variable-pitch end mill—its geometry naturally disrupts the vibration rhythm.

---

id: mql-lubrication
tag: Охлаждение | Chłodzenie | Cooling

**🇷🇺 Русский**
# Микросмазка (MQL): Забудьте о лужах вокруг станка
Все привыкли к потокам СОЖ, водопадами заливающим деталь. Но что, если я скажу, что в 70% случаев это совершенно не нужно? MQL (Minimum Quantity Lubrication) или микросмазка — это система, подающая масляный туман прямо на режущую кромку. Расход — буквально капли в час. В итоге деталь чистая, станок сухой, а стружку не нужно отжимать перед сдачей в металлолом. Это абсолютный "геймчейнджер" при обработке алюминия и многих сталей.

**🇵🇱 Polski**
# Mikrosmarowanie (MQL): Zapomnij o kałużach wokół maszyny
Wszyscy przyzwyczaili się do rzek chłodziwa zalewających detal. A co, jeśli powiem, że w 70% przypadków to zupełnie niepotrzebne? MQL (Minimum Quantity Lubrication), czyli mikrosmarowanie, to podawanie mgły olejowej prosto na ostrze. Zużycie? Dosłownie kilka kropel na godzinę. Detal jest czysty, maszyna sucha, a wiórów nie trzeba odwirowywać przed sprzedażą na złom. To absolutny "gamechanger" do aluminium i wielu stali.

**🇬🇧 English**
# Minimum Quantity Lubrication (MQL): Forget Puddles Around the Machine
We’re all used to massive floods of coolant washing over the workpiece. But what if I told you that in 70% of cases, it’s completely unnecessary? MQL (Minimum Quantity Lubrication) delivers a precise oil mist directly to the cutting edge. Usage is literally drops per hour. Your parts stay clean, the machine stays dry, and chips don’t need to be spun before recycling. It’s an absolute game-changer for cutting aluminum and many steels.

---

id: climb-vs-conventional
tag: Фрезерование | Frezowanie | Milling

**🇷🇺 Русский**
# Попутное против Встречного фрезерования
Попутное (Climb) или встречное (Conventional) фрезерование? На современных станках с ЧПУ ответ в 99% случаев — попутное. При нём зуб фрезы сразу агрессивно врезается в металл, стружка начинается с максимальной толщины и сходит на нет. Это дает отличную чистоту поверхности и бережет инструмент. Но есть одно "НО"! Если на вашем станке есть люфт в винтах (часто бывает на переделанных ручных станках), используйте только встречное. Иначе фрезу просто затянет в деталь с катастрофическими последствиями.

**🇵🇱 Polski**
# Frezowanie współbieżne kontra przeciwbieżne
Frezowanie współbieżne (Climb) czy przeciwbieżne (Conventional)? Na nowoczesnych maszynach CNC odpowiedź w 99% brzmi: współbieżne. Ząb frezu od razu agresywnie wchodzi w materiał, a wiór zaczyna się od maksymalnej grubości i maleje do zera. Daje to świetną powierzchnię i oszczędza narzędzie. Ale uwaga! Jeśli twoja maszyna ma luzy na śrubach (częste w przerabianych maszynach manualnych), używaj tylko przeciwbieżnego. Inaczej frez zostanie wciągnięty w materiał z katastrofalnym skutkiem.

**🇬🇧 English**
# Climb vs. Conventional Milling
Climb milling or conventional milling? On a modern CNC machine, the answer is climb milling 99% of the time. The cutting tooth engages the material aggressively, starting with maximum chip thickness and tapering to zero. This leaves a brilliant surface finish and dramatically extends tool life. But a word of warning! If your machine has backlash in the leadscrews (common on retrofitted manual mills), stick to conventional milling, or the cutter will pull itself into the part with disastrous results.

---

id: machine-warmup
tag: Обслуживание | Konserwacja | Maintenance

**🇷🇺 Русский**
# Зачем нужен прогрев станка (Warm-up)
Вы же не стартуете на машине зимой с педалью в пол без прогрева двигателя? Так почему вы делаете это со станком за 100 тысяч долларов? Термическое расширение — это физика, а не миф. Холодный шпиндель и станина могут дать "уход" размеров на пару сотых долей миллиметра. Напишите простую программу прогрева: 15 минут плавных перемещений по всем осям и постепенное увеличение оборотов шпинделя. Ваш станок скажет вам спасибо стабильными размерами уже на первой детали.

**🇵🇱 Polski**
# Po co jest rozgrzewanie maszyny (Warm-up)
Nie ruszasz samochodem zimą na pełnym gazie bez rozgrzania silnika, prawda? Więc dlaczego robisz to z maszyną za pół miliona złotych? Rozszerzalność cieplna to fizyka, nie mit. Zimne wrzeciono i odlew maszyny potrafią "zgubić" wymiar nawet o kilka setnych milimetra. Napisz prosty program rozgrzewający: 15 minut powolnych ruchów we wszystkich osiach i stopniowe zwiększanie obrotów wrzeciona. Maszyna odwdzięczy się stabilnymi wymiarami już na pierwszym detalu.

**🇬🇧 English**
# Why Machine Warm-Up Matters
You wouldn't redline your car on a freezing winter morning without warming it up, right? So why do it to a $100k CNC machine? Thermal expansion is pure physics, not a myth. A cold spindle and machine casting can cause your dimensions to drift by several hundredths of a millimeter. Write a simple warm-up program: 15 minutes of moving all axes and gradually ramping up spindle RPM. Your machine will thank you by holding tight tolerances right from the first part.

---

id: chipbreaker-secrets
tag: Токарка | Toczenie | Turning

**🇷🇺 Русский**
# Секрет токарных пластин: Читаем стружколом
Токарная пластина без стружколома — это просто дорогой кусок твердого сплава. Настоящая магия кроется в этих крошечных бороздках на поверхности. Если при точении у вас получается длинная стружка-лента, которая наматывается на патрон — вы ошиблись с выбором пластины или режимами. Для чистовой обработки нужны агрессивные, острые стружколомы, для черновой — прочные, способные "сломать" толстый слой металла. Не подгоняйте станок под пластину, подбирайте пластину под конкретную задачу!

**🇵🇱 Polski**
# Sekret płytek tokarskich: Czytamy łamacz wióra
Płytka tokarska bez łamacza wióra to tylko drogi kawałek węglika. Prawdziwa magia kryje się w tych małych rowkach na jej powierzchni. Jeśli podczas toczenia powstają długie "wstążki", które owijają się wokół uchwytu – źle dobrałeś płytkę albo parametry skrawania. Do obróbki wykańczającej potrzebujesz ostrej, agresywnej geometrii, a do zgrubnej – mocnej, która poradzi sobie z grubym wiórem. Nie dopasowuj maszyny do płytki, dobieraj płytkę do konkretnego zadania!

**🇬🇧 English**
# Turning Insert Secrets: Reading the Chipbreaker
A turning insert without a chipbreaker is just an expensive piece of carbide. The real magic happens in those tiny grooves molded into the top. If you’re turning and getting long, stringy bird-nests wrapping around the chuck, you’ve got the wrong insert or feed rate. Finishing passes need aggressive geometry to break light chips, while roughing requires a strong edge to handle heavy loads. Don't fight the machine—pick the right insert for the specific job!

---

id: g68-coordinate-rotation
tag: Программирование | Programowanie | Programming

**🇷🇺 Русский**
# Код G68: Как перестать стучать киянкой
Установка тяжелой, неровной заготовки на стол часто превращается в пытку: вы стучите киянкой полчаса, чтобы выставить ее идеально ровно по индикатору. Хватит это терпеть! Используйте код `G68` (поворот системы координат). Просто коснитесь щупом (или краеискателем) двух точек на базовой кромке детали. Стойка сама вычислит угол перекоса, и `G68` виртуально "повернет" весь ваш УП-код под криво установленную деталь. Это экономит массу нервов и часы рабочего времени.

**🇵🇱 Polski**
# Kod G68: Jak przestać stukać młotkiem
Ustawianie ciężkiego, nieforemnego detalu na stole często przypomina tortury: uderzasz młotkiem przez pół godziny, żeby wyzerować go na czujniku. Skończ z tym! Z pomocą przychodzi kod `G68` (obrót układu współrzędnych). Wystarczy dotknąć sondą dwóch punktów na bazowej krawędzi detalu, maszyna sama obliczy kąt odchyłki, a `G68` wirtualnie "obróci" cały program pod twój krzywo zamocowany materiał. To niesamowita oszczędność nerwów i godzin pracy.

**🇬🇧 English**
# G68 Code: Stop Tapping with a Deadblow Hammer
Tramming in a massive, awkward block of raw material can be torture. You tap it with a deadblow hammer for half an hour just to get the dial indicator zeroed. Stop doing that! Enter `G68` (Coordinate System Rotation). Just probe two points along the reference edge of your part, let the controller calculate the angle, and `G68` will virtually "rotate" your entire toolpath to match the skewed setup. It saves absolute hours of frustration and setup time.

---

id: er-collets-truth
tag: Инструмент | Narzędzia | Tooling

**🇷🇺 Русский**
# Вся правда о цангах ER
ER32, ER20... Какую цангу выбрать? Большинство цехов работают со стандартом ER, и это отличный выбор. Но есть один нюанс, о котором забывают: цанги — это расходный материал! Если вы заметили, что фрезы начали тупиться быстрее обычного, проверьте биение (runout) в цанге индикатором. Зажатая тысячи раз цанга теряет свою упругость и способность центровать инструмент. Меняйте их каждые пару лет. И золотое правило: никогда не затягивайте цангу без инструмента внутри — вы ее навсегда испортите.

**🇵🇱 Polski**
# Cała prawda o tulejkach zaciskowych ER
ER32, ER20... Jaką tulejkę wybrać? Większość warsztatów używa standardu ER i jest on świetny. Ale jest jeden haczyk, o którym często zapominamy: tulejki to materiał eksploatacyjny! Jeśli zauważyłeś, że frezy tępią się szybciej niż zwykle, sprawdź bicie (runout) na tulejce czujnikiem zegarowym. Zaciskana tysiące razy tulejka traci swoją sprężystość i centryczność. Należy je wymieniać co kilka lat. I złota zasada: nigdy nie dokręcaj na siłę pustej tulejki, bo zniszczysz ją bezpowrotnie.

**🇬🇧 English**
# The Truth About ER Collets
ER32, ER20... Which collet system is best? Most machine shops run ER collets, and they’re fantastic all-rounders. But here’s the catch people forget: collets are consumable items! If you notice your end mills dulling faster than usual, grab a dial indicator and check for runout. A collet squeezed thousands of times loses its elasticity and concentricity. Replace them every couple of years. And the golden rule: never tighten a collet without a tool inside, you’ll ruin it permanently.

---

id: gm-basics
tag: Основы | Podstawy | Basics

**🇷🇺 Русский**
# G и M коды: с чего начать
Как устроена управляющая программа и чем G-коды отличаются от M-кодов.

Управляющая программа состоит из кадров. Каждый кадр содержит слова: `N` — номер кадра, `G` — подготовительные функции (как двигаться), `M` — вспомогательные (включить шпиндель, СОЖ), `X Y Z` — координаты, `F` — подача, `S` — обороты, `T` — инструмент.

## Минимальный пример
```
O0001
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
M30
```

Строка безопасности в начале (`G21 G90 G17 G40 G49 G80`) сбрасывает старые режимы — это хорошая привычка.

- Модальные коды действуют, пока их не отменит другой код той же группы.
- Немодальные (например, `G04`) действуют только в своём кадре.

**🇵🇱 Polski**
# Kody G i M: od czego zacząć
Jak zbudowany jest program sterujący i czym kody G różnią się od M.

Program sterujący składa się z bloków. Każdy blok zawiera słowa: `N` — numer bloku, `G` — funkcje przygotowawcze (jak się poruszać), `M` — pomocnicze (włącz wrzeciono, chłodziwo), `X Y Z` — współrzędne, `F` — posuw, `S` — obroty, `T` — narzędzie.

## Minimalny przykład
```
O0001
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
M30
```

Bezpieczna linia na początku (`G21 G90 G17 G40 G49 G80`) kasuje stare tryby — to dobry nawyk.

- Kody modalne działają, dopóki nie anuluje ich inny kod z tej samej grupy.
- Niemodalne (np. `G04`) działają tylko w swoim bloku.

**🇬🇧 English**
# G and M codes: where to start
How a part program is structured and how G-codes differ from M-codes.

A part program is made of blocks. Each block contains words: `N` — block number, `G` — preparatory functions (how to move), `M` — miscellaneous (spindle, coolant), `X Y Z` — coordinates, `F` — feed, `S` — speed, `T` — tool.

## Minimal example
```
O0001
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
M30
```

The safety line at the start (`G21 G90 G17 G40 G49 G80`) cancels old modes — a good habit.

- Modal codes stay active until another code from the same group cancels them.
- Non-modal codes (e.g. `G04`) work only in their own block.

---

id: speeds-feeds
tag: Режимы резания | Parametry skrawania | Cutting data

**🇷🇺 Русский**
# Как подобрать обороты и подачу
Формулы n и F, откуда брать Vc и fz и как корректировать режимы по звуку и стружке.

Обороты шпинделя: `n = 1000 · Vc / (π · D)`. Минутная подача при фрезеровании: `F = n · fz · z`.

## Откуда брать Vc и fz
Из каталога производителя инструмента для вашей пары «материал — пластина/фреза». Наш калькулятор даёт расчёт, а справочная таблица — стартовые ориентиры для твердого сплава.

## Корректировка на станке
- **Высокий визг** — снизьте обороты или увеличьте подачу.
- **Вибрации (дребезг)** — измените обороты на 10–15 %, уменьшите вылет, проверьте крепление.
- **Стружка синего цвета** — слишком высокая скорость.
- **Стружка пылевидная** — слишком малая подача на зуб, инструмент трётся.

Начинайте с 70–80 % от расчётных значений и увеличивайте, используя оверрайд подачи.

**🇵🇱 Polski**
# Jak dobrać obroty i posuw
Wzory na n i F, skąd brać Vc i fz oraz jak korygować parametry po dźwięku i wiórze.

Obroty wrzeciona: `n = 1000 · Vc / (π · D)`. Posuw minutowy przy frezowaniu: `F = n · fz · z`.

## Skąd brać Vc i fz
Z katalogu producenta narzędzi dla Twojej pary „materiał — płytka/frez”. Nasz kalkulator liczy wartości, a tabela materiałów podaje orientacyjne dane startowe dla węglika.

## Korekta na maszynie
- **Wysoki pisk** — zmniejsz obroty lub zwiększ posuw.
- **Drgania** — zmień obroty o 10–15 %, skróć wysięg, sprawdź mocowanie.
- **Niebieski wiór** — zbyt duża prędkość.
- **Wiór pylisty** — zbyt mały posuw na ostrze, narzędzie się ociera.

Zaczynaj od 70–80 % wartości obliczonych i zwiększaj, używając korekcji posuwu.

**🇬🇧 English**
# How to choose speed and feed
Formulas for n and F, where to get Vc and fz, and how to adjust by sound and chip.

Spindle speed: `n = 1000 · Vc / (π · D)`. Milling feed rate: `F = n · fz · z`.

## Where to get Vc and fz
From the tool manufacturer's catalog for your material/insert pair. Our calculator does the math, and the material table gives starting values for carbide.

## Adjusting at the machine
- **High-pitched squeal** — lower speed or raise feed.
- **Chatter** — change speed by 10–15 %, shorten stick-out, check workholding.
- **Blue chips** — speed is too high.
- **Dust-like chips** — feed per tooth too low, the tool is rubbing.

Start at 70–80 % of calculated values and increase using the feed override.

---

id: first-part
tag: Безопасность | Bezpieczeństwo | Safety

**🇷🇺 Русский**
# Чек-лист запуска первой детали
Что проверить перед первым запуском программы, чтобы не разбить станок.

1. Проверьте программу в симуляторе или в графике стойки.
2. Убедитесь, что выбран верный ноль детали (`G54…G59`) и корректны смещения.
3. Проверьте длины и диаметры инструментов, номера корректоров `H`/`D`.
4. Надёжно закрепите заготовку; проверьте вылет и положение кулачков/тисков.
5. Запустите с **выключенным шпинделем** и в воздухе (Z-смещение вверх), если возможно.
6. Включите покадровый режим, снизьте оверрайд ускоренного хода до 10–25 %.
7. Следите за «Distance to go» перед первым касанием.
8. Держите руку на кнопке Feed Hold / аварийной остановке.

**🇵🇱 Polski**
# Lista kontrolna uruchomienia pierwszej sztuki
Co sprawdzić przed pierwszym uruchomieniem programu, aby nie uszkodzić maszyny.

1. Sprawdź program w symulatorze lub grafice sterowania.
2. Upewnij się, że wybrane jest właściwe zero przedmiotu (`G54…G59`) i korekcje są poprawne.
3. Sprawdź długości i średnice narzędzi oraz numery korektorów `H`/`D`.
4. Pewnie zamocuj materiał; sprawdź wysięg i położenie szczęk/imadła.
5. Uruchom z **wyłączonym wrzecionem** i nad przedmiotem (przesunięcie Z w górę), jeśli to możliwe.
6. Włącz tryb blokowy, zmniejsz korekcję szybkiego posuwu do 10–25 %.
7. Obserwuj „Distance to go” przed pierwszym kontaktem.
8. Trzymaj rękę na Feed Hold / przycisku awaryjnym.

**🇬🇧 English**
# First-part run checklist
What to check before the first program run to avoid a crash.

1. Verify the program in a simulator or the control's graphics.
2. Make sure the correct work offset (`G54…G59`) is selected and values are right.
3. Check tool lengths, diameters and the `H`/`D` offset numbers.
4. Clamp the workpiece securely; check stick-out and jaw/vise position.
5. Run with the **spindle off** and in the air (Z offset up) if possible.
6. Enable single block and reduce rapid override to 10–25 %.
7. Watch "Distance to go" before the first contact.
8. Keep your hand on Feed Hold / E-stop.

---

id: work-offsets
tag: Наладка | Ustawianie | Setup

**🇷🇺 Русский**
# Нулевые точки G54–G59 и привязка инструмента
Как работают рабочие смещения, кромкоискатель, щуп и коррекция длины инструмента.

Рабочее смещение (`G54…G59`) хранит расстояние от нуля станка до нуля детали. Оно задаётся кромкоискателем, индикатором или щупом (например, Renishaw/Blum).

## Привязка по осям
- **X/Y** — по кромкам, центру отверстия или цилиндра.
- **Z** — по верхней плоскости заготовки (чаще), по столу или по базе приспособления.

## Длина инструмента
Длину измеряют на станке (по датчику или «бумажкой») либо в оправке вне станка. В программе вызывайте коррекцию через `G43 H..` (Fanuc/Haas). Не забывайте `G49` перед сменой.

**Типичные ошибки:** перепутан номер корректора, не учтён износ, нулевая точка записана в другое смещение, не очищена плоскость от стружки при привязке.

**🇵🇱 Polski**
# Punkty zerowe G54–G59 i pomiar narzędzi
Jak działają przesunięcia robocze, sonda krawędziowa i korekcja długości narzędzia.

Przesunięcie robocze (`G54…G59`) przechowuje odległość od zera maszyny do zera przedmiotu. Ustawia się je sondą krawędziową, czujnikiem lub sondą pomiarową (np. Renishaw/Blum).

## Wyznaczanie osi
- **X/Y** — po krawędziach, środku otworu lub czopa.
- **Z** — na górnej płaszczyźnie materiału (najczęściej), na stole lub bazie uchwytu.

## Długość narzędzia
Długość mierzy się na maszynie (czujnikiem lub „kartką”) albo poza maszyną w oprawce. W programie wywołaj korekcję przez `G43 H..` (Fanuc/Haas). Pamiętaj o `G49` przed zmianą.

**Typowe błędy:** pomylony numer korektora, nieuwzględnione zużycie, zero zapisane w innym przesunięciu, niewyczyszczona z wiórów płaszczyzna przy pomiarze.

**🇬🇧 English**
# Work offsets G54–G59 and tool measuring
How work offsets, edge finders, probes and tool length offsets work.

A work offset (`G54…G59`) stores the distance from machine zero to part zero. It is set with an edge finder, indicator or touch probe (e.g. Renishaw/Blum).

## Setting the axes
- **X/Y** — on edges, hole center or boss.
- **Z** — on the top of the stock (most common), on the table or on a fixture datum.

## Tool length
Measure the length on the machine (tool setter or paper feeler) or in a presetter. Call it in the program with `G43 H..` (Fanuc/Haas). Don't forget `G49` before a change.

**Common mistakes:** wrong offset number, ignored wear, zero stored in a different offset, chips left on the surface when touching off.

---

id: cutter-comp
tag: Программирование | Programowanie | Programming

**🇷🇺 Русский**
# Коррекция на радиус G41/G42: как не ошибиться
Левая и правая коррекция, подход к контуру и отмена, подгонка размера износом.

Коррекция позволяет программировать контур детали, а не траекторию центра фрезы. `G41` — фреза слева от контура по ходу движения, `G42` — справа. Отмена — `G40`.

## Правила
- Включайте коррекцию на линейном участке (`G01`), не на дуге и не в ускоренном ходе в деталь.
- Длина подхода должна быть не меньше радиуса инструмента.
- Выходите из контура тоже по прямой, затем `G40`.
- Попутное фрезерование для внешнего контура — обычно `G41` при движении против часовой стрелки.

Для точной подгонки размера меняйте значение износа в корректоре радиуса (`D..`), а не программу.

```
G01 G41 D01 X-10 Y0 F300
G01 X0
G01 Y50
...
G01 G40 X-10
```

**🇵🇱 Polski**
# Korekcja promienia G41/G42: jak się nie pomylić
Korekcja lewa i prawa, dojście do konturu i anulowanie, dopasowanie wymiaru zużyciem.

Korekcja pozwala programować kontur przedmiotu, a nie tor środka freza. `G41` — frez po lewej stronie konturu w kierunku ruchu, `G42` — po prawej. Anulowanie — `G40`.

## Zasady
- Włączaj korekcję na odcinku prostym (`G01`), nie na łuku i nie w ruchu szybkim w przedmiot.
- Droga dojścia nie krótsza niż promień narzędzia.
- Wychodź z konturu też po prostej, potem `G40`.
- Frezowanie współbieżne konturu zewnętrznego — zwykle `G41` przy ruchu przeciwnym do ruchu wskazówek zegara.

Do dokładnego dopasowania wymiaru zmieniaj zużycie w korektorze promienia (`D..`), a nie program.

```
G01 G41 D01 X-10 Y0 F300
G01 X0
G01 Y50
...
G01 G40 X-10
```

**🇬🇧 English**
# Cutter compensation G41/G42 without mistakes
Left and right comp, lead-in/out, and fine-tuning size with wear.

Compensation lets you program the part contour instead of the cutter center path. `G41` — cutter to the left of the contour in the direction of travel, `G42` — to the right. Cancel with `G40`.

## Rules
- Activate on a linear move (`G01`), not on an arc and not on a rapid into the part.
- Lead-in length must be at least the tool radius.
- Leave the contour on a straight line too, then `G40`.
- Climb milling an outside contour is usually `G41` when travelling counter-clockwise.

To fine-tune size, change the wear value in the radius offset (`D..`), not the program.

```
G01 G41 D01 X-10 Y0 F300
G01 X0
G01 Y50
...
G01 G40 X-10
```

---

id: controls-compare
tag: Системы ЧПУ | Sterowania CNC | CNC controls

**🇷🇺 Русский**
# Fanuc, Haas, Siemens, Heidenhain: чем отличаются
Ключевые отличия программирования на основных стойках ЧПУ.

- **Fanuc** — стандарт «ISO»: G/M-коды, макропеременные `#100`, циклы G81–G89. Haas очень близок к нему.
- **Haas** — Fanuc-подобный диалект с дружелюбным интерфейсом: VQC, быстрый ввод, расширенные смещения G154, гравировка G47.
- **Siemens SINUMERIK** — ISO + собственный язык: циклы `CYCLE81…`, `TRANS/ROT`, R-параметры, `WHILE/IF`, подпрограммы с именами. Есть ShopMill/ShopTurn — диалоговое программирование.
- **Heidenhain TNC** — диалог Klartext: `L X+10 Y+5 R0 FMAX`, циклы `CYCL DEF`, Q-параметры, мощная работа с наклоном плоскости (`PLANE`). Многие TNC понимают и ISO.

Совет: переходя на новую стойку, начните с таблицы соответствия кодов — смотрите раздел «Система ЧПУ» в нашей базе кодов.

**🇵🇱 Polski**
# Fanuc, Haas, Siemens, Heidenhain: czym się różnią
Najważniejsze różnice w programowaniu na popularnych sterowaniach CNC.

- **Fanuc** — standard „ISO”: kody G/M, zmienne makro `#100`, cykle G81–G89. Haas jest bardzo podobny.
- **Haas** — dialekt zbliżony do Fanuc z przyjaznym interfejsem: VQC, szybkie wprowadzanie, rozszerzone przesunięcia G154, grawerowanie G47.
- **Siemens SINUMERIK** — ISO + własny język: cykle `CYCLE81…`, `TRANS/ROT`, parametry R, `WHILE/IF`, podprogramy z nazwami. Dostępne ShopMill/ShopTurn — programowanie dialogowe.
- **Heidenhain TNC** — dialog Klartext: `L X+10 Y+5 R0 FMAX`, cykle `CYCL DEF`, parametry Q, rozbudowane nachylanie płaszczyzny (`PLANE`). Wiele TNC rozumie też ISO.

Wskazówka: przechodząc na nowe sterowanie, zacznij od tabeli odpowiedników — zobacz sekcję „Sterowanie CNC” w naszej bazie kodów.

**🇬🇧 English**
# Fanuc, Haas, Siemens, Heidenhain: what's different
Key programming differences between the most common CNC controls.

- **Fanuc** — the "ISO" standard: G/M codes, macro variables `#100`, cycles G81–G89. Haas is very close to it.
- **Haas** — a Fanuc-like dialect with a friendly UI: VQC, quick code, extended offsets G154, engraving G47.
- **Siemens SINUMERIK** — ISO plus its own language: `CYCLE81…` cycles, `TRANS/ROT`, R-parameters, `WHILE/IF`, named subprograms. ShopMill/ShopTurn provide conversational programming.
- **Heidenhain TNC** — Klartext conversational: `L X+10 Y+5 R0 FMAX`, `CYCL DEF` cycles, Q-parameters, powerful tilted-plane handling (`PLANE`). Many TNCs also read ISO.

Tip: when moving to a new control, start with a code comparison table — see the "CNC control" selector in our code database.

---

id: tool-wear
tag: Инструмент | Narzędzia | Tooling

**🇷🇺 Русский**
# Износ инструмента: как распознать и продлить стойкость
Виды износа, признаки и практические приёмы увеличения стойкости.

## Виды износа
- **По задней поверхности** — нормальный; ограничивайте VB ≈ 0,3 мм для чернового.
- **Лунка на передней поверхности** — слишком высокая скорость/температура.
- **Наростообразование** — слишком низкая скорость, вязкие материалы (алюминий, нержавейка).
- **Выкрашивание кромки** — вибрации, прерывистый рез, слишком твёрдая марка.

## Как продлить стойкость
- Снизьте Vc на 10–20 % — стойкость вырастает непропорционально сильнее.
- Обеспечьте подачу СОЖ в зону резания и отвод стружки.
- Используйте минимальный вылет и надёжный зажим.
- Применяйте врезание по дуге (динамическое фрезерование) вместо полного паза.

**🇵🇱 Polski**
# Zużycie narzędzia: jak rozpoznać i wydłużyć trwałość
Rodzaje zużycia, objawy i praktyczne sposoby zwiększenia trwałości.

## Rodzaje zużycia
- **Na powierzchni przyłożenia** — normalne; ogranicz VB do ok. 0,3 mm przy obróbce zgrubnej.
- **Krater na powierzchni natarcia** — zbyt duża prędkość/temperatura.
- **Narost na ostrzu** — zbyt mała prędkość, materiały ciągliwe (aluminium, nierdzewka).
- **Wykruszenia krawędzi** — drgania, cięcie przerywane, zbyt twardy gatunek.

## Jak wydłużyć trwałość
- Zmniejsz Vc o 10–20 % — trwałość rośnie nieproporcjonalnie bardziej.
- Zapewnij chłodziwo w strefie skrawania i odprowadzanie wióra.
- Stosuj minimalny wysięg i pewne mocowanie.
- Wejście po łuku (frezowanie dynamiczne) zamiast pełnego rowka.

**🇬🇧 English**
# Tool wear: how to spot it and extend tool life
Wear types, symptoms and practical ways to improve tool life.

## Wear types
- **Flank wear** — normal; limit VB to about 0.3 mm for roughing.
- **Crater wear** — speed/temperature too high.
- **Built-up edge** — speed too low, sticky materials (aluminum, stainless).
- **Edge chipping** — vibration, interrupted cut, grade too hard.

## Extending tool life
- Cut Vc by 10–20 % — tool life grows disproportionately more.
- Get coolant into the cut and evacuate chips.
- Use minimal stick-out and rigid clamping.
- Use arc entry (dynamic milling) instead of full-width slotting.

---

id: threading
tag: Резьба | Gwinty | Threads

**🇷🇺 Русский**
# Резьба: метчик, резьбофреза или накатка
Сравнение способов получения резьбы и расчёт диаметра отверстия под метчик.

- **Режущий метчик** — быстро и дёшево; сверло ≈ D − P (`M10×1,5 → Ø8,5`). Риск поломки в глухих отверстиях.
- **Раскатник (формующий)** — без стружки, прочная резьба; сверло ≈ D − 0,45·P; подходит для пластичных материалов.
- **Резьбофреза** — один инструмент на разные диаметры, безопасна для дорогих деталей и твёрдых материалов, но дольше по времени.

Используйте наш калькулятор резьбы для диаметров отверстий и внутреннего диаметра. Для жёсткого нарезания (`G84` / `CYCLE84` / `CYCL DEF 207`) подача равна шагу: F = n · P.

**🇵🇱 Polski**
# Gwint: gwintownik, frez do gwintów czy wygniatak
Porównanie metod wykonania gwintu i obliczanie średnicy otworu pod gwintownik.

- **Gwintownik skrawający** — szybki i tani; wiertło ≈ D − P (`M10×1,5 → Ø8,5`). Ryzyko złamania w otworach nieprzelotowych.
- **Wygniatak** — bez wiórów, mocny gwint; wiertło ≈ D − 0,45·P; do materiałów plastycznych.
- **Frez do gwintów** — jedno narzędzie na różne średnice, bezpieczny dla drogich detali i twardych materiałów, ale wolniejszy.

Użyj naszego kalkulatora gwintów do średnic otworów i średnicy rdzenia. Przy gwintowaniu sztywnym (`G84` / `CYCLE84` / `CYCL DEF 207`) posuw równa się skokowi: F = n · P.

**🇬🇧 English**
# Threading: tap, thread mill or forming tap
Comparing threading methods and calculating tap drill size.

- **Cutting tap** — fast and cheap; drill ≈ D − P (`M10×1.5 → Ø8.5`). Risk of breakage in blind holes.
- **Forming tap** — chipless, strong thread; drill ≈ D − 0.45·P; for ductile materials.
- **Thread mill** — one tool for several diameters, safe for expensive parts and hard materials, but slower.

Use our thread calculator for hole and minor diameters. For rigid tapping (`G84` / `CYCLE84` / `CYCL DEF 207`) feed equals pitch: F = n · P.


---

id: macro-b-programming
tag: Программирование | Programowanie | Programming

**🇷🇺 Русский**
# Параметрическое программирование (Macro B) в Fanuc и Haas
Параметрическое программирование открывает перед оператором и наладчиком станков с ЧПУ огромные возможности по автоматизации однотипных задач. В отличие от стандартного G-кода, который представляет собой жесткую последовательность координат, макросы (`Macro B`) используют локальные и глобальные переменные (например, `#1–#33` или `#100+`). Это позволяет создавать универсальные циклы обработки: написав один макрос для фрезерования кармана, вы можете вызывать его для карманов любых размеров, просто меняя значения переменных. Кроме того, переменные используются для защиты от ошибок оператора: макрос может проверять привязку, длину инструмента или введенные значения, чтобы избежать аварии (Crash). Это экономит время при переналадке в единичном и мелкосерийном производстве и повышает безопасность обработки.

**🇵🇱 Polski**
# Programowanie parametryczne (Macro B) w Fanuc i Haas
Programowanie parametryczne otwiera przed operatorem i ustawiaczem maszyn CNC ogromne możliwości automatyzacji powtarzalnych zadań. W przeciwieństwie do standardowego G-kodu, który jest sztywną sekwencją współrzędnych, makra (`Macro B`) wykorzystują zmienne lokalne i globalne (np. `#1–#33` lub `#100+`). Pozwala to tworzyć uniwersalne cykle obróbcze: pisząc jedno makro do frezowania kieszeni, możesz wywoływać je dla kieszeni o dowolnych wymiarach, zmieniając jedynie wartości zmiennych. Ponadto zmienne służą do ochrony przed błędami operatora: makro może sprawdzać bazę, długość narzędzia lub wprowadzone wartości, aby uniknąć kolizji (Crash). Oszczędza to czas przy przezbrajaniu w produkcji jednostkowej i małoseryjnej oraz zwiększa bezpieczeństwo obróbki.

**🇬🇧 English**
# Parametric Programming (Macro B) in Fanuc and Haas
Parametric programming gives CNC operators and setters powerful ways to automate repetitive tasks. Unlike standard G-code with its fixed sequence of coordinates, macros (`Macro B`) use local and global variables (such as `#1–#33` or `#100+`). This lets you build universal machining cycles: write a single pocket-milling macro once and call it for any pocket size simply by changing variable arguments. Variables also protect against operator mistakes—a macro can verify work offsets, tool lengths, or input limits to prevent a crash. This cuts setup time in job-shop and small-batch production while improving safety.

---

id: mazatrol-vs-iso
tag: Системы ЧПУ | Sterowania CNC | CNC controls

**🇷🇺 Русский**
# Mazatrol vs G-коды (EIA/ISO): что выбрать?
Спор между сторонниками диалогового программирования Mazatrol от компании Mazak и классического EIA/ISO (G-коды) не утихает уже много лет. Mazatrol позволяет оператору написать программу на деталь прямо у стойки станка за считанные минуты, отвечая на вопросы системы (тип материала, заготовки, форма детали). Стойка сама рассчитывает режимы, траектории и подбирает инструмент из базы — идеальное решение для инструментального производства, где каждая деталь уникальна. Однако, когда дело доходит до сложной 3D-обработки или высокоскоростного (HSM) фрезерования штампов и пресс-форм (например, из стали `DIN 1.2738 HH`), G-коды, сгенерированные в мощной CAM-системе (такой как Siemens NX CAM), не имеют конкурентов. В идеале наладчик должен уверенно владеть обоими методами.

**🇵🇱 Polski**
# Mazatrol kontra G-kody (EIA/ISO): co wybrać?
Spór między zwolennikami programowania dialogowego Mazatrol od firmy Mazak a klasycznym EIA/ISO (G-kody) trwa od lat. Mazatrol pozwala operatorowi napisać program na detal bezpośrednio przy pulpicie maszyny w kilka minut, odpowiadając na pytania systemu (rodzaj materiału, półfabrykatu, kształt detalu). Sterowanie samo oblicza parametry, ścieżki i dobiera narzędzia z bazy — to idealne rozwiązanie w produkcji jednostkowej i narzędziowniach. Jednak w przypadku złożonej obróbki 3D lub szybkościowego (HSM) frezowania matryc i form wtryskowych (np. ze stali `DIN 1.2738 HH`), G-kody wygenerowane w zaawansowanym systemie CAM (jak Siemens NX CAM) nie mają sobie równych. Najlepiej, gdy ustawiacz biegle posługuje się obiema metodami.

**🇬🇧 English**
# Mazatrol vs. G-Code (EIA/ISO): Which Should You Choose?
The debate between Mazak’s conversational Mazatrol programming and classic EIA/ISO G-code has been going on for decades. Mazatrol lets an operator create a part program right at the machine control in minutes by answering prompts about material, stock size, and feature geometry. The control calculates cutting data, toolpaths, and tool selection automatically—ideal for job shops where every part is unique. However, when it comes to complex 3D surfacing or high-speed machining (HSM) of molds and dies (for example in `DIN 1.2738 HH` steel), G-code generated by a full-featured CAM system like Siemens NX CAM is unbeatable. A skilled machinist masters both approaches and picks the best tool for the job.

---

id: gcode-dialects
tag: Системы ЧПУ | Sterowania CNC | CNC controls

**🇷🇺 Русский**
# Различия диалектов G-кодов (Haas, Fanuc, Siemens)
Несмотря на то, что базовые G-коды стандартизированы, каждая стойка ЧПУ имеет свой собственный «диалект». Переходя со станка Haas на Fanuc или Siemens, оператор сталкивается с рядом нюансов. Например, циклы сверления (`G81`, `G83`) могут требовать разного синтаксиса отвода (`G98`/`G99`). Стойка Siemens Sinumerik славится своими продвинутыми циклами `CYCLE` и мощным высокоуровневым языком программирования, который ближе к языкам ПК, чем к старому ISO. В стойках Haas есть удобные G-коды для гравировки (`G47`) и круговых карманов (`G12`/`G13`), которых в базовом Fanuc просто нет. Понимание этих тонкостей критически важно при ручном редактировании УП или при настройке постпроцессора в CAM-системе.

**🇵🇱 Polski**
# Różnice w dialektach G-kodów (Haas, Fanuc, Siemens)
Mimo że podstawowe kody G są ustandaryzowane, każde sterowanie CNC ma swój własny „dialekt”. Przechodząc z maszyny Haas na Fanuc lub Siemens, operator napotyka szereg niuansów. Na przykład cykle wiercenia (`G81`, `G83`) mogą wymagać innej składni wycofania (`G98`/`G99`). Sterowanie Siemens Sinumerik słynie z zaawansowanych cykli `CYCLE` i języka wysokiego poziomu, bliższego językom komputerowym niż staremu ISO. Z kolei w sterowaniach Haas dostępne są wygodne kody do grawerowania (`G47`) oraz kieszeni kołowych (`G12`/`G13`), których w podstawowym Fanucu po prostu nie ma. Zrozumienie tych różnic jest kluczowe podczas ręcznej edycji programu lub konfiguracji postprocesora w systemie CAM.

**🇬🇧 English**
# G-Code Dialect Differences (Haas, Fanuc, Siemens)
Although basic G-codes are standardized, every CNC control speaks its own dialect. Moving from a Haas mill to a Fanuc or Siemens control reveals many subtle differences. Drilling cycles (`G81`, `G83`), for instance, may handle retract planes (`G98`/`G99`) and peck parameters differently. Siemens Sinumerik stands out with its powerful `CYCLE` routines and high-level structured programming language, whereas Haas offers built-in convenience codes for text engraving (`G47`) and circular pocket milling (`G12`/`G13`) that standard Fanuc controls lack. Understanding these nuances is essential when editing G-code by hand or tuning a CAM postprocessor so the machine doesn't alarm out on the first block.

---

id: haas-hidden-features
tag: Системы ЧПУ | Sterowania CNC | CNC controls

**🇷🇺 Русский**
# Скрытые возможности стойки Haas
Стойки американских фрезерных центров Haas славятся своим интуитивно понятным интерфейсом, но даже опытные фрезеровщики не всегда используют их на 100%. Одно из главных преимуществ — гибкая система настроек (Settings). Например, `Setting 143` (Machine Data Collect) позволяет собирать статистику работы станка. Использование функции Advanced Tool Management позволяет настроить группы дублирующего инструмента — если одна фреза износится или сломается, станок автоматически возьмет запасную и продолжит работу. Также полезны быстрые клавиши и калькуляторы: например, встроенный расчет режимов резания или функции быстрого смещения рабочих нулей (`G52`). Умение пользоваться этими возможностями значительно сокращает время простоя станка (downtime).

**🇵🇱 Polski**
# Ukryte możliwości sterowania Haas
Sterowania amerykańskich centrów frezarskich Haas słyną z intuicyjnego interfejsu, ale nawet doświadczeni frezerzy nie zawsze wykorzystują je w 100%. Jedną z głównych zalet jest elastyczny system ustawień (Settings). Na przykład `Setting 143` (Machine Data Collect) pozwala zbierać statystyki pracy maszyny. Funkcja Advanced Tool Management umożliwia skonfigurowanie grup narzędzi bliźniaczych — jeśli jeden frez się zużyje lub złamie, maszyna automatycznie pobierze zapasowy i będzie kontynuować pracę. Przydatne są również wbudowane kalkulatory parametrów skrawania oraz szybkie przesunięcia lokalnego układu współrzędnych (`G52`). Umiejętne korzystanie z tych funkcji znacznie skraca przestoje maszyny (downtime).

**🇬🇧 English**
# Hidden Features of the Haas Control
Haas CNC controls are famous for their user-friendly interface, yet even seasoned machinists rarely use all of their capabilities. One major strength is the flexible Settings menu—for example, `Setting 143` (Machine Data Collect) lets you export machine utilization data. Advanced Tool Management allows you to define redundant tool groups: when an end mill reaches its life limit or breaks, the control automatically swaps in a backup tool and keeps running. Built-in speed-and-feed calculators and local coordinate system shifts (`G52`) are also huge time-savers. Mastering these features noticeably reduces machine downtime during frequent job changeovers.

---

id: nx-cam-postprocessors
tag: Программирование | Programowanie | Programming

**🇷🇺 Русский**
# Постпроцессоры в Siemens NX CAM: основы настройки
Постпроцессор — это мост между траекториями, рассчитанными в CAM-системе (например, Siemens NX), и конкретным станком с ЧПУ. Даже идеальная траектория может привести к браку, если постпроцессор выводит неверный код. В Siemens NX для настройки вывода используется утилита Post Builder или более современная Post Configurator. Основная задача наладчика — убедиться, что постпроцессор правильно понимает кинематику станка. Важно настроить вывод циклов сверления (чтобы они не раскладывались на `G0`/`G1`, а выводились как `G81–G84`), правильный вывод дуг (через `I, J, K` или `R`), а также корректную обработку вызова инструмента и включения охлаждения (`M08`). Грамотно настроенный постпроцессор исключает необходимость ручной правки УП на стойке.

**🇵🇱 Polski**
# Postprocesory w Siemens NX CAM: podstawy konfiguracji
Postprocesor to pomost między ścieżkami narzędzia obliczonymi w systemie CAM (np. Siemens NX) a konkretną obrabiarką CNC. Nawet idealna ścieżka może doprowadzić do браku lub kolizji, jeśli postprocesor wygeneruje błędny kod. W Siemens NX do konfiguracji wyjścia służy narzędzie Post Builder lub nowszy Post Configurator. Głównym zadaniem programisty jest upewnienie się, że postprocesor poprawnie odwzorowuje kinematykę maszyny. Ważne jest skonfigurowanie wyprowadzania cykli stałych wiercenia (`G81–G84` zamiast setek ruchów `G0`/`G1`), prawidłowej interpolacji kołowej (`I, J, K` lub `R`) oraz wywołania narzędzia i chłodziwa (`M08`). Dobrze skonfigurowany postprocesor eliminuje ręczne poprawki przy maszynie.

**🇬🇧 English**
# Postprocessors in Siemens NX CAM: Configuration Basics
A postprocessor is the bridge between toolpaths calculated in your CAM software (such as Siemens NX) and a specific CNC machine tool. Even a flawless toolpath can scrap a part if the post outputs invalid code. Siemens NX provides Post Builder and the newer Post Configurator for tailoring G-code output. The programmer’s main job is ensuring the post accurately matches the machine’s kinematics, outputs canned drilling cycles (`G81–G84` rather than expanded `G0`/`G1` moves), formats circular arcs properly (`I, J, K` vs. `R`), and sequences tool changes and coolant codes (`M08`) safely. A well-tuned postprocessor eliminates manual G-code edits at the machine control.

---

id: tool-steels-12738
tag: Материалы | Materiały | Materials

**🇷🇺 Русский**
# Фрезерование инструментальных сталей (DIN 1.2738 HH / Böhler M238)
Обработка штампов и пресс-форм из предварительно закаленных инструментальных сталей, таких как `DIN 1.2738 HH` (твердость около 30–40 HRC), требует особого подхода. Эта сталь отличается вязкостью и склонностью к наклепу. Для ее фрезерования необходим жесткий станок и качественный твердосплавный инструмент с износостойким покрытием (`TiAlN` или `AlTiN`). Главное правило при черновой обработке — не допускать перегрева и термошока кромки. Часто рекомендуется фрезерование с обдувом воздухом, так как термический шок от применения водной эмульсии (СОЖ) вызывает микротрещины на пластинах фрезы и их быстрое выкрашивание. При чистовой обработке важна стабильная подача на зуб и минимальное биение инструмента в оправке.

**🇵🇱 Polski**
# Frezowanie stali narzędziowych (DIN 1.2738 HH / Böhler M238)
Obróbka tłoczników i form wtryskowych ze wstępnie ulepszonych stali narzędziowych, takich jak `DIN 1.2738 HH` (twardość ok. 30–40 HRC), wymaga szczególnego podejścia. Stal ta charakteryzuje się ciągliwością i skłonnością do umacniania przez zgniot. Do jej frezowania potrzebna jest sztywna obrabiarka oraz wysokiej jakości narzędzia węglikowe z powłoką odporną na zużycie (`TiAlN` lub `AlTiN`). Główna zasada podczas obróbki zgrubnej to unikanie szoku termicznego ostrza. Często zaleca się frezowanie na sucho z nadmuchem powietrza, ponieważ szok termiczny wywołany emulsją wodną powoduje mikropęknięcia na płytkach i ich szybkie wykruszanie. Przy obróbce wykańczającej kluczowe jest minimalne bicie w oprawce.

**🇬🇧 English**
# Milling Tool Steels (DIN 1.2738 HH / Böhler M238)
Machining injection molds and dies made of pre-hardened tool steels like `DIN 1.2738 HH` (around 30–40 HRC) demands a disciplined approach. This grade is tough and prone to work hardening. You need a rigid machine tool and premium carbide cutters with heat-resistant coatings (`TiAlN` or `AlTiN`). The golden rule during roughing is avoiding thermal shock at the cutting edge: dry milling with an air blast is usually preferred over flood coolant, because sudden cooling creates thermal micro-cracks in carbide inserts and leads to rapid chipping. For finishing passes to tight tolerances, keep chip load consistent and minimize toolholder runout.

---

id: tool-holders-runout
tag: Инструмент | Narzędzia | Tooling

**🇷🇺 Русский**
# Влияние фрезерных оправок на стойкость инструмента
Даже самая дорогая монолитная твердосплавная фреза не будет работать эффективно, если она зажата в плохую оправку. Биение (runout) инструмента — главный враг стойкости кромки и точности детали. Цанговые патроны ER — самые популярные, но со временем цанги изнашиваются, и биение может достигать нескольких «соток». Патроны Weldon отлично держат инструмент от вытягивания (pull-out) при тяжелой черновой обработке, но из-за бокового прижимного винта инструмент смещается от оси. Для высокоскоростной чистовой обработки пресс-форм идеальным выбором являются термоусадочные (Shrink fit) или гидропластовые (Hydraulic) патроны. Они обеспечивают биение менее 3 микрон, что гарантирует равномерную нагрузку на каждый зуб фрезы и отличную чистоту поверхности.

**🇵🇱 Polski**
# Wpływ oprawek frezarskich na trwałość narzędzia
Nawet najdroższy monolityczny frez węglikowy nie będzie pracował wydajnie w słabej oprawce. Bicie (runout) narzędzia to główny wróg trwałości ostrza i dokładności detalu. Oprawki zaciskowe ER są najpopularniejsze, ale z czasem tulejki się zużywają, a bicie może sięgać kilku setnych milimetra. Oprawki Weldon świetnie zabezpieczają frez przed wyciągnięciem (pull-out) podczas ciężkiej obróbki zgrubnej, lecz śruba boczna przesuwa narzędzie względem osi. Do szybkościowej obróbki wykańczającej form najlepszym wyborem są oprawki termokurczliwe (Shrink fit) lub hydrauliczne. Zapewniają one bicie poniżej 3 mikronów, co gwarantuje równomierne obciążenie każdego ostrza i doskonałą chropowatość powierzchni `Ra`.

**🇬🇧 English**
# How Milling Toolholders Affect Tool Life
Even the most expensive solid-carbide end mill will perform poorly in a worn-out holder. Radial runout is the number-one enemy of edge life and part accuracy. ER collet chucks are versatile and popular, but worn collets can easily introduce several hundredths of a millimeter of runout. Side-lock (Weldon) holders prevent tool pull-out during heavy roughing, yet the side set-screw pushes the cutter off center. For high-speed finishing of molds and precision parts, shrink-fit and hydraulic chucks are the gold standard. They keep runout below 3 microns (`0.003 mm`), ensuring even chip load across every flute, superior surface finish (`Ra`), and much longer tool life.

---

id: tolerances-h7-g6
tag: Точность | Dokładność | Precision

**🇷🇺 Русский**
# Допуски и посадки (g6, H7): как стабильно попадать в «сотку»
Получить деталь с допуском в 1–2 сотых миллиметра (например, вал `g6` или отверстие `H7`) на современном станке с ЧПУ не так сложно. Сложно делать это стабильно на протяжении всей партии. На точность влияют температурное расширение станины и ШВП станка в течение рабочего дня, износ инструмента и даже температура СОЖ. Профессиональный наладчик всегда оставляет припуск под чистовой проход, выполняет предварительный замер, вносит коррекцию на износ в таблице корректоров (`Wear`) и только затем делает финальный проход. Для минимизации отжима инструмента при чистовой обработке используйте острые фрезы с полированной кромкой и минимально возможный вылет из оправки.

**🇵🇱 Polski**
# Tolerancje i pasowania (g6, H7): jak stabilnie trafiać w „setkę”
Wykonanie detalu z tolerancją 1–2 setnych milimetra (np. czop wałka `g6` lub otwór `H7`) na nowoczesnej obrabiarce CNC nie jest trudne. Trudno jest utrzymać tę dokładność powtarzalnie przez całą serię. Na wymiar wpływają rozszerzalność cieplna korpusu i śrub kulowych w ciągu zmiany, zużycie ostrza oraz temperatura chłodziwa. Doświadczony ustawiacz zawsze zostawia naddatek na przejście wykańczające, wykonuje pomiar wstępny, wprowadza korektę zużycia w tabeli (`Wear`) i dopiero wtedy puszcza przejście finalne. Aby zminimalizować odpychanie narzędzia, stosuj ostre frezy i możliwie najkrótszy wysięg z oprawki.

**🇬🇧 English**
# Tolerances and Fits (g6, H7): Holding a Hundredth Consistently
Hitting a tolerance of 0.01–0.02 mm (such as a `g6` shaft or `H7` bore) on a single part is straightforward on a modern CNC machine; holding it across a full production run is the real challenge. Thermal growth of the casting and ballscrews over a shift, gradual tool wear, and coolant temperature swings all shift dimensions. Best practice is to leave a small semi-finishing allowance, measure the feature on the machine, dial in a fine adjustment in the tool wear offset (`Wear`), and run the final spring/finishing pass. Use sharp cutters with minimal stick-out to prevent tool deflection.

---

id: renishaw-probing
tag: Наладка | Ustawianie | Setup

**🇷🇺 Русский**
# Калибровка и программирование измерительных щупов (Renishaw)
Измерительные щупы (например, `OMP40` от Renishaw) радикально ускорили работу наладчиков: то, что раньше делалось краеискателем и индикатором за 15 минут, теперь выполняется макросами за 20 секунд. Но щуп — это точный прибор, требующий регулярной калибровки. При смене батареек или установке нового стилуса необходимо провести юстировку биения рубиновой сферы индикатором, калибровку длины по эталонной плитке и калибровку радиуса по установочному кольцу. В продвинутом программировании щупы используются прямо в цикле управляющей программы (in-process inspection): станок сам измеряет заготовку, обновляет рабочий ноль `G54` или износ фрезы и выполняет автоматическую доработку без участия человека.

**🇵🇱 Polski**
# Kalibracja i programowanie sond pomiarowych (Renishaw)
Sondy pomiarowe (np. Renishaw `OMP40`) radykalnie przyspieszyły pracę ustawiaczy: to, co dawniej zajmowało 15 minut z krawędziakiem i czujnikiem zegarowym, dziś makra wykonują w 20 sekund. Sonda jest jednak precyzyjnym przyrządem wymagającym regularnej kalibracji. Po wymianie baterii lub końcówki pomiarowej (stylusa) należy wyregulować bicie kulki rubinowej czujnikiem, skalibrować długość oraz promień na pierścieniu wzorcowym. W zaawansowanym programowaniu sondy pracują bezpośrednio w cyklu programu (in-process inspection): maszyna sama mierzy detal, koryguje punkt zerowy `G54` lub zużycie narzędzia i automatycznie wykonuje obróbkę wykańczającą.

**🇬🇧 English**
# Calibrating and Programming Touch Probes (Renishaw)
Spindle touch probes (such as the Renishaw `OMP40`) have transformed CNC setup: tasks that used to take 15 minutes with an edge finder and dial indicator now run in 20 seconds via probing macros. However, a probe is only as accurate as its calibration. Whenever you replace the batteries or stylus, true the ruby tip with a dial indicator and run length and ring-gauge radius calibration cycles. Beyond setup, in-process probing lets the machine measure features mid-program, automatically update work offsets (`G54`) or tool wear values, and recut out-of-tolerance surfaces without operator intervention.

---

id: complex-workholding
tag: Наладка | Ustawianie | Setup

**🇷🇺 Русский**
# Сложное базирование деталей в ЧПУ
В идеальном мире заготовки представляют собой ровные кубики, которые легко зажимаются в машинные тиски. На практике операторам часто приходится иметь дело со сложным литьем, поковками или тонкими деталями. Для надежной фиксации криволинейных контуров применяются сырые «мягкие кулачки», которые растачиваются или фрезеруются прямо на станке под профиль конкретной детали. При обработке тонколистового материала (алюминия, текстолита, пластика) спасают вакуумные столы, исключающие прогиб от бокового сжатия. Для стальных плит отлично подходят магнитные столы, а для пятисторонней обработки за один установ — самоцентрирующиеся 5-осевые тиски с зажимом за минимальный припуск в 3 мм (ласточкин хвост / dovetail).

**🇵🇱 Polski**
# Mocowanie i bazowanie skomplikowanych detali na CNC
W idealnym świecie półfabrykaty to równe kostki łatwo mocowane w imadle maszynowym. W praktyce operatorzy często pracują z odlewami, odkuwkami lub cienkościennymi elementami. Do pewnego chwytania nieregularnych kształtów stosuje się tzw. „miękkie szczęki”, które frezuje się lub roztacza bezpośrednio na maszynie pod profil konkretnego detalu. Przy obróbce cienkich arkuszy (aluminium, laminatów, tworzyw) niezastąpione są stoły próżniowe, eliminujące odkształcenia od ścisku. Do płyt stalowych świetnie sprawdzają się stoły magnetyczne, a do obróbki 5-osiowej z jednego zamocowania — imadła centrujące chwytające za naddatek zaledwie 3 mm (jaskółczy ogon / dovetail).

**🇬🇧 English**
# Complex Workholding and Fixturing in CNC Machining
In an ideal world every blank is a square block that drops straight into a standard machine vise. In reality, machinists constantly face castings, forgings, and delicate geometries. Custom-machined soft jaws milled directly on the table conform to irregular part contours with repeatable accuracy. Vacuum chucks hold thin aluminum or composite sheets flat without clamping distortion, while electro-permanent magnetic chucks offer full five-sided access to steel plates. For 5-axis machining in a single setup, self-centering vises and dovetail fixtures grip parts securely on just 3 mm of stock.

---

id: gdt-blueprint-reading
tag: Точность | Dokładność | Precision

**🇷🇺 Русский**
# Чтение чертежей: GD&T для операторов ЧПУ
Понимание системы допусков формы и расположения поверхностей (GD&T / ЕСКД) обязательно для квалифицированного оператора и наладчика. Недостаточно просто выдержать линейный размер в миллиметрах: чертеж может требовать строгого соблюдения плоскостности, перпендикулярности стенки относительно базовой плоскости, соосности или позиционного допуска отверстий (True Position). Если отверстие выполнено в допуске по диаметру, но смещено от теоретической позиции — деталь уйдет в брак, так как узел просто не соберется. Умение читать базы (`Datum A, B, C`) помогает правильно выбрать схему базирования заготовки на станке и избежать накопления погрешности при переустановках.

**🇵🇱 Polski**
# Czytanie rysunku technicznego: GD&T dla operatorów CNC
Znajomość tolerancji geometrycznych kształtu i położenia (GD&T / ISO GPS) jest niezbędna dla każdego wykwalifikowanego operatora i ustawiacza CNC. Nie wystarczy utrzymać sam wymiar liniowy w milimetrach: rysunek może wymagać rygorystycznej płaskości, prostopadłości ścianki względem bazy, współosiowości lub tolerancji pozycji otworów (True Position). Jeśli otwór ma idealną średnicę, ale jest przesunięty względem teoretycznej pozycji — detal staje się brakiem, ponieważ podzespół się nie złoży. Umiejętność czytania baz pomiarowych (`Datum A, B, C`) pozwala prawidłowo dobrać sposób bazowania detalu na stole obrabiarki.

**🇬🇧 English**
# Blueprint Reading: GD&T Essentials for CNC Operators
Understanding Geometric Dimensioning and Tolerancing (GD&T / ISO GPS) is essential for any skilled CNC machinist. Holding linear dimensions alone is not enough: a drawing may specify flatness, perpendicularity to a primary datum, concentricity, or true position of a bolt pattern. If a hole is on-size in diameter but drifted off its true position, the part is scrap because mating components won't assemble. Reading datum reference frames (`Datum A, B, C`) tells you exactly how the part functions, how to fixture it on the machine table, and how to inspect it without stacking errors across setups.

---

id: aluminum-machining
tag: Материалы | Materiały | Materials

**🇷🇺 Русский**
# Специфика обработки алюминиевых сплавов
Обработка алюминия кажется простой по сравнению со сталью, но у нее есть свои подводные камни. Главная проблема — налипание мягкого металла на режущую кромку (образование нароста), что мгновенно забивает стружечную канавку и ломает фрезу. Для алюминия используются специальные твердосплавные фрезы (обычно 1, 2 или 3 зуба) с зеркально полированной канавкой и большим положительным передним углом, без покрытий типа `TiAlN` (алюминий в покрытии схватывается с обрабатываемым алюминием; применяют непокрытый сплав, `ZrN` или `DLC`). Нужны высокие скорости резания (`300–1000 м/мин`), уверенная подача на зуб и мощный вымыв стружки эмульсией или воздушным туманом MQL.

**🇵🇱 Polski**
# Specyfika obróbki stopów aluminium
Obróbka aluminium wydaje się prosta w porównaniu ze stalą, ale kryje własne pułapki. Głównym problemem jest nalepianie się miękkiego metalu na ostrze (narost), co błyskawicznie zapycha rowek wiórowy i łamie frez. Do aluminium stosuje się specjalne frezy węglikowe (zwykle 1-, 2- lub 3-ostrzowe) z polerowanym rowkiem wiórowym i ostrym dodatnim kątem natarcia, bez powłok `TiAlN` (aluminium z powłoki reaguje z obrabianym materiałem; stosuje się narzędzia niepowlekane, `ZrN` lub `DLC`). Kluczowe są wysokie prędkości skrawania (`300–1000 m/min`), duży posuw na ostrze oraz skuteczne wypłukiwanie wiórów chłodziwem lub mgłą olejową MQL.

**🇬🇧 English**
# Machining Aluminum Alloys: Key Best Practices
Aluminum looks easy compared to steel, yet it has its own traps. The biggest hazard is built-up edge (galling) and chip packing, which can weld aluminum into the flutes and snap a cutter in an instant. Always choose dedicated 1-, 2-, or 3-flute carbide end mills with polished flutes, high helix angles, and sharp positive rake—never use `TiAlN` coatings on aluminum (use uncoated carbide, `ZrN`, or `DLC` instead). Run high cutting speeds (`300–1000 m/min`), maintain a healthy chip load, and blast chips out of deep pockets with high-pressure flood coolant or MQL mist.

---

id: composites-milling
tag: Материалы | Materiały | Materials

**🇷🇺 Русский**
# Фрезерование композитов (стеклопластик и карбон)
Стеклопластик (G10/FR4) и углепластик (карбон, CFRP) — крайне абразивные материалы. Обычная твердосплавная фреза по металлу теряет остроту кромки на них за считанные минуты. Для раскроя композитов применяют фрезы с алмазным покрытием (`CVD`), поликристаллическим алмазом (`PCD`) или роутерные фрезы с насечкой типа «кукуруза» (burr-style), которые дробят волокно. Вторая проблема композитов — расслоение (delamination) и бахрома на верхнем и нижнем краях листа. Чтобы получить чистый край, используют компрессионные фрезы со встречным направлением спирали сверху и снизу, сжимающие слои внутрь. Обязательно используйте промышленный пылесос и защиту направляющих: абразивная пыль губительна для механики станка и легких.

**🇵🇱 Polski**
# Frezowanie kompozytów (włókno szklane i karbon)
Laminaty szklano-epoksydowe (G10/FR4) oraz włókno węglowe (karbon, CFRP) to materiały skrajnie ścierne. Zwykły frez węglikowy do metalu tępi się w nich w ciągu kilku minut. Do obróbki kompozytów stosuje się narzędzia z powłoką diamentową (`CVD`), ostrzami z polikrystalicznego diamentu (`PCD`) lub frezy typu „kukurydza” (tarnikowe), które rozdrabniają włókna. Drugim problemem jest delaminacja (rozwarstwianie) zewnętrznych warstw materiału. Aby uzyskać czystą krawędź, stosuje się frezy kompresyjne o przeciwstawnej linii śrubowej na dole i u góry ostrza. Obowiązkowy jest mocny odciąg pyłu, ponieważ pył kompozytowy niszczy prowadnice maszyny i zdrowie operatora.

**🇬🇧 English**
# Milling Composites (Fiberglass and Carbon Fiber)
Fiberglass (G10/FR4) and carbon-fiber reinforced polymers (CFRP) are brutally abrasive: a standard metalworking carbide end mill will dull in minutes. Machining composites requires diamond-coated (`CVD`), polycrystalline diamond (`PCD`), or diamond-cut burr routers that shear fibers cleanly. The other major challenge is delamination and fraying on top and bottom surfaces. Compression routers—combining up-cut flutes at the tip with down-cut flutes above—push plies toward the middle of the sheet for clean edges. Always run high-efficiency dust extraction and protect machine ways from conductive, abrasive dust.

---

id: multiaxis-3plus2-vs-5axis
tag: Фрезерование | Frezowanie | Milling

**🇷🇺 Русский**
# Многоосевая обработка: 3+2 против непрерывной 5-осевой
Многоосевые станки позволяют обрабатывать сложные детали со всех сторон за один установ, повышая точность взаимного расположения элементов. Позиционная обработка «3+2» означает, что поворотные оси (например, `A` и `C`) поворачивают деталь под нужным углом, зажимаются тормозами, а резание идет в 3 линейных осях `X, Y, Z` с использованием наклона рабочей плоскости (`CYCLE800`, `PLANE SPATIAL`, `G68.2`). Это покрывает до 90% задач и позволяет работать коротким жестким инструментом. Непрерывная (одновременная) 5-осевая обработка, где все 5 осей движутся синхронно с активной функцией слежения за вершиной инструмента (`TRAORI` / `TCPM` / `G43.4`), необходима для крыльчаток, турбинных лопаток и плавных 3D-поверхностей пресс-форм.

**🇵🇱 Polski**
# Obróbka wieloosiowa: 3+2 kontra płynna 5-osiowa
Obrabiarki wieloosiowe pozwalają obrabiać złożone detale z pięciu stron w jednym zamocowaniu, co drastycznie podnosi dokładność wzajemnego położenia elementów. Obróbka pozycjonowana „3+2” polega na tym, że osie obrotowe (np. `A` i `C`) ustawiają detal pod zadanym kątem, zostają zablokowane hamulcem, a skrawanie odbywa się w 3 osiach liniowych z transformacją układu współrzędnych (`CYCLE800`, `PLANE SPATIAL`, `G68.2`). Rozwiązuje to 90% zadań i pozwala używać krótkich, sztywnych narzędzi. Płynna (symultaniczna) obróbka 5-osiowa z aktywnym śledzeniem wierzchołka narzędzia (`TRAORI` / `TCPM` / `G43.4`) jest niezbędna przy wirnikach, łopatkach turbin i złożonych powierzchniach form.

**🇬🇧 English**
# Multi-Axis Machining: 3+2 Indexed vs. Simultaneous 5-Axis
Multi-axis machining centers cut complex parts on five faces in a single setup, eliminating cumulative fixture errors. In 3+2 indexed machining, the rotary axes (`A`/`C` or `B`/`C`) orient the part, lock their brakes, and standard 3-axis milling proceeds in a tilted working plane (`CYCLE800`, `PLANE SPATIAL`, `G68.2`). This covers nearly 90% of multi-sided parts while allowing short, rigid cutters. Simultaneous 5-axis machining—where all three linear and two rotary axes interpolate together with tool-center-point control (`TRAORI` / `TCPM` / `G43.4`)—is reserved for impellers, turbine blades, deep cavities, and sweeping sculpted surfaces.

---

id: ball-nose-3d-finishing
tag: Фрезерование | Frezowanie | Milling

**🇷🇺 Русский**
# Чистовая обработка 3D-поверхностей сферическими фрезами (Ball Nose)
При фрезеровании сложных криволинейных поверхностей штампов, литьевых форм и лопаток основным инструментом является сферическая концевая фреза (`Ball Nose`). Ключевой параметр здесь — боковой шаг между проходами (`Stepover / Ae`), от которого зависит высота остаточного гребешка (Scallop height) и шероховатость `Ra`. Для зеркальной поверхности под минимальную полировку шаг выбирают в пределах `2–5%` от диаметра фрезы. Второй важнейший нюанс: на самом кончике сферы скорость резания равна нулю (ось вращения). Если фреза идет строго вертикально по горизонтальному участку, вершина не режет, а давит и затирает металл. Поэтому стараются работать с подъемным резом снизу вверх или наклонять шпиндель на `10–15°`, чтобы резала боковая кромка сферы.

**🇵🇱 Polski**
# Wykańczająca obróbka powierzchni 3D frezami kulistymi (Ball Nose)
Podczas frezowania złożonych powierzchni krzywoliniowych matryc i form wtryskowych podstawowym narzędziem jest frez kulisty (`Ball Nose`). Kluczowym parametrem jest tu krok boczny między przejściami (`Stepover / Ae`), od którego zależy wysokość pozostawionej fali (Scallop) oraz chropowatość `Ra`. Dla uzyskania powierzchni pod szybkie polerowanie krok dobiera się w granicach `2–5%` średnicy frezu. Drugi ważny szczegół: w samym wierzchołku kuli prędkość skrawania wynosi zero (oś obrotu). Jeśli frez pracuje pionowo na płaskim dnie, czubek nie skrawa, lecz zgniata materiał. Dlatego należy frezować pod górę lub pochylać oś narzędzia o `10–15°`.

**🇬🇧 English**
# 3D Surface Finishing with Ball-Nose End Mills
When finishing sculpted surfaces on molds, dies, and aerospace components, the ball-nose end mill is the go-to tool. The critical parameter is stepover (`Ae`), which directly controls cusp (scallop) height and surface roughness `Ra`—for mirror-like finishes that need minimal hand polishing, keep stepover between `2%` and `5%` of cutter diameter. Equally important: right at the tip of the ball (the rotational axis), surface speed is zero. Cutting flat areas with the tool vertical causes the tip to rub and smear metal rather than shear it. Cut uphill on 3-axis mills, or tilt the tool `10–15°` (lead/lean angle) on 5-axis machines so the flank of the ball does the cutting.

---

id: precision-boring-heads
tag: Точность | Dokładność | Precision

**🇷🇺 Русский**
# Растачивание точных отверстий расточными головками (H6/H7)
Когда на чертеже указано отверстие с допуском `H6` или `H7` (под посадку подшипника или направляющих колонок), обычной фрезой при круговой интерполяции можно не уложиться в допуск круглости из-за кинематических переходов осей `X` и `Y` в квадрантах. В таких случаях применяют микрометрические расточные головки. Алгоритм прост: отверстие предварительно расфрезеровывается с припуском `0,2–0,4 мм` на диаметр, затем выполняется черновой проход расточной головкой, точный замер трехточечным микрометром или индикаторным нутромером и ввод поправки на лимбе головки (цена деления `0,002–0,01 мм` на диаметр). Для вывода резца без продольной риски используется цикл `G76` с ориентированным остановом шпинделя (`M19`) и отводом резца от стенки.

**🇵🇱 Polski**
# Wytaczanie dokładnych otworów głowicami wytaczarskimi (H6/H7)
Gdy rysunek wymaga otworu w tolerancji `H6` lub `H7` (np. pod łożysko lub tuleje prowadzące), frezowanie po okręgu może nie zapewnić wymaganej okrągłości z powodu przejść zwrotnych osi `X` i `Y` w kwadrantach. W takich sytuacjach stosuje się mikrometryczne głowice wytaczarskie. Algorytm pracy jest prosty: otwór wstępnie frezuje się z naddatkiem `0,2–0,4 mm` na średnicę, wykonuje przejście pomiarowe wytaczadłem, mierzy średnicówką (skalibrowaną na pierścieniu wzorcowym), wprowadza korektę na skali mikrometrycznej głowicy i wykonuje przejście na gotowo. Aby wycofać nóż bez rysy na gładzi otworu, użyj cyklu `G76` z orientacją wrzeciona (`M19`) i odsunięciem ostrza.

**🇬🇧 English**
# Precision Boring with Micrometer Boring Heads (H6/H7)
When a print calls for an `H6` or `H7` bearing bore, circular interpolation with an end mill often struggles to meet roundness and cylindricity specs due to axis reversal spikes at the quadrants. A single-point micrometer boring head solves this completely. First, rough-mill the hole leaving `0.2–0.4 mm` stock on diameter; next, take a light semi-finish boring pass, measure the bore with a calibrated bore gauge, dial the exact correction on the head’s vernier scale (`0.002–0.01 mm` per division on diameter), and run the finish pass. Use fine-boring cycle `G76` with spindle orientation (`M19`) so the tip shifts clear of the wall before retracting, preventing a drag line.

---

id: helical-ramping-entry
tag: Фрезерование | Frezowanie | Milling

**🇷🇺 Русский**
# Врезание в материал: спиральная интерполяция и наклонное врезание (Ramping)
Концевая фреза — это не сверло: большинство фрез плохо переносят вертикальное осевое врезание (`plunging`), так как в центре торца скорость резания близка к нулю и нет пространства для эвакуации стружки. При входе в глухой карман или паз применяют два безопасных метода: линейное наклонное врезание (`Linear Ramping`) под углом `1–5°` (в зависимости от твердости материала) или спиральное врезание (`Helical Interpolation` — синхронное движение по окружности `G02`/`G03` в плоскости `XY` с плавным опусканием по `Z`). Диаметр спирали в `1,5–1,8` диаметра фрезы создает свободный зазор для вылета стружки и снижает ударную осевую нагрузку на инструмент и шпиндель в несколько раз.

**🇵🇱 Polski**
# Zagłębianie w materiał: interpolacja śrubowa i wejście skośne (Ramping)
Frez walcowo-czołowy to nie wiertło: większość frezów źle znosi pionowe zagłębianie w osi (`plunging`), ponieważ w środku czoła prędkość skrawania jest bliska zeru i brakuje miejsca na odprowadzanie wiórów. Przy otwieraniu zamkniętych kieszeni stosuje się dwie bezpieczne metody wejścia: liniowe zagłębianie skośne (`Linear Ramping`) pod kątem `1–5°` (zależnie od twardości materiału) lub zagłębianie po linii śrubowej (`Helical Interpolation` — ruch kołowy `G02`/`G03` w `XY` z jednoczesnym opuszczaniem w `Z`). Średnica spirali równa `1,5–1,8` średnicy frezu zapewnia swobodną ewakuację wiórów i wielokrotnie zmniejsza obciążenie osiowe wrzeciona.

**🇬🇧 English**
# Entering the Cut: Helical Interpolation and Linear Ramping
An end mill is not a drill: plunging straight down in `Z` chokes the center of the cutter where surface speed is nearly zero and chips have nowhere to go. When opening a closed pocket or slot without a pre-drilled starter hole, use one of two safe entry strategies: linear ramping at a `1–5°` angle (depending on material hardness and center-cutting geometry) or helical interpolation (`G02`/`G03` circular motion in `XY` combined with a continuous `Z` feed). A helix diameter of `1.5–1.8×` the cutter diameter leaves plenty of room for chip evacuation and dramatically reduces axial thrust on the tool and spindle bearings.

---

id: hard-milling-hrc60
tag: Материалы | Materiały | Materials

**🇷🇺 Русский**
# Обработка закаленных сталей (45–62 HRC): Hard Milling вместо электроэрозии
Современные монолитные фрезы с наноструктурными покрытиями `AlTiN` и `TiSiN`, а также инструмент из КНБ (`CBN`) позволяют эффективно фрезеровать стали твердостью `50–62 HRC` напрямую, зачастую заменяя долгую электроэрозионную обработку (EDM). Главные правила Hard Milling: максимальная жесткость (короткий вылет, термоусадочный патрон), малые глубины резания (`Ae` и `Ap` обычно `0,05–0,3 мм` на чистовых режимах) и полный отказ от водяной СОЖ. В зоне резания каленой стали температура достигает `700–900 °C`, локально размягчая срезаемый слой; попадание холодной эмульсии на раскаленную кромку вызывает мгновенное терморастрескивание твердого сплава. Используйте интенсивный обдув сжатым воздухом или масляный туман (MQL).

**🇵🇱 Polski**
# Obróbka stali hartowanych (45–62 HRC): Hard Milling zamiast elektrodrążenia
Nowoczesne frezy węglikowe z nanopowłokami `AlTiN` oraz `TiSiN`, a także narzędzia `CBN`, pozwalają wydajnie frezować stale o twardości `50–62 HRC`, często zastępując czasochłonne elektrodrążenie (EDM). Główne zasady Hard Milling to maksymalna sztywność (krótki wysięg, oprawka termokurczliwa), małe głębokości skrawania (`Ae` i `Ap` zazwyczaj `0,05–0,3 mm` przy wykańczaniu) oraz całkowita rezygnacja z chłodzenia emulsją wodną. W strefie skrawania stali hartowanej wysoka temperatura lokalnie zmiękcza naddatek; kontakt zimnej wody z rozgrzanym ostrzem powoduje natychmiastowe pęknięcia termiczne węglika. Stosuj silny nadmuch sprężonym powietrzem lub mgłę olejową (MQL).

**🇬🇧 English**
# Hard Milling Steels (45–62 HRC): Replacing EDM on the Mill
Modern fine-grain carbide end mills with `AlTiN` or `TiSiN` nanocomposite coatings—along with `CBN` tooling—make it possible to machine `50–62 HRC` hardened tool steels directly, often eliminating slow sinker EDM operations. The core rules of hard milling are maximum rigidity (short stick-out in a shrink-fit holder), light radial and axial engagements (`Ae` and `Ap` typically `0.05–0.3 mm` for finishing), and strictly no flood coolant. High cutting-zone temperatures soften the shear zone ahead of the tool; hitting a glowing carbide edge with cold water causes instant thermal cracking. Always cut dry with a strong air blast or MQL oil mist.

---

id: fourth-axis-rotary
tag: Фрезерование | Frezowanie | Milling

**🇷🇺 Русский**
# Работа с 4-й осью (поворотным столом): индексация и подача G93
Поворотный стол (ось `A` или `B`) превращает обычный 3-осевой фрезерный станок в многосторонний обрабатывающий центр. При индексной обработке (3+1) стол поворачивается на нужный угол и обязательно зажимается гидравлическим или пневматическим тормозом (`M10` — зажим, `M11` — разжим), иначе усилие фрезерования пойдет на червячную пару редуктора и быстро вызовет люфт. При непрерывном одновременном вращении 4-й оси с движением линейных осей (фрезерование шнеков, кулачков, гравировка на цилиндре) включайте режим подачи обратно пропорционально времени (`G93` — Inverse Time Feed). Без `G93` стойка путает градусы в минуту с миллиметрами в минуту, и реальная скорость подачи на радиусе детали становится непредсказуемой.

**🇵🇱 Polski**
# Praca z 4. osią (podzielnicą CNC): indeksowanie i posuw G93
Stół obrotowy (oś `A` lub `B`) zamienia zwykłą frezarkę 3-osiową w wielostronne centrum obróbcze. Przy obróbce indeksowanej (3+1) stół obraca się o zadany kąt i musi zostać zablokowany hamulcem hydraulicznym lub pneumatycznym (`M10` — zacisk, `M11` — odblokowanie), w przeciwnym razie siły skrawania obciążą przekładnię ślimakową i szybko wywołają luz. Podczas płynnej obróbki symultanicznej z obrotem 4. osi (ślimaki, krzywki, rowki śrubowe) należy włączyć posuw odwrotnie proporcjonalny do czasu (`G93` — Inverse Time Feed). Bez `G93` sterowanie miesza stopnie na minutę z milimetrami na minutę, co psuje rzeczywistą prędkość posuwu.

**🇬🇧 English**
# Working with a 4th Axis (Rotary Table): Indexing and G93 Inverse Time Feed
Adding a rotary table (`A` or `B` axis) turns a standard 3-axis mill into a multi-sided production center. During indexed `3+1` machining, always engage the rotary brake (`M10` clamp, `M11` unclamp) before heavy cutting—otherwise cutting forces hammer directly against the worm gear and introduce backlash. When running simultaneous 4-axis toolpaths (such as cams, augers, or cylindrical wrapping), enable inverse-time feed mode (`G93`). Without `G93`, the control blends degrees per minute with millimeters per minute, causing dramatic feed-rate fluctuations as the working radius changes.

---

id: high-feed-milling-hfm
tag: Фрезерование | Frezowanie | Milling

**🇷🇺 Русский**
# Высокоподачное фрезерование (High Feed Milling — HFM)
Фрезы для работы на высоких подачах (`High Feed Mills`) имеют малый угол в плане (обычно `10–17°`) или профильную радиусную пластину. За счет этого при малой осевой глубине резания (`Ap = 0,5–1,5 мм`) срабатывает эффект утонения стружки (Axial Chip Thinning), позволяющий задавать огромную подачу на зуб (`fz = 1,0–2,0 мм/зуб`) и минутную подачу до `5–10 м/мин`. Главное преимущество HFM: вектор силы резания направлен не вбок, а вдоль оси оправки строго вверх в упорные подшипники шпинделя. Благодаря отсутствию отгибающих радиальных нагрузок высокоподачные фрезы легко работают на больших вылетах (`5–7 диаметров`) в глубоких колодцах пресс-форм без вибраций.

**🇵🇱 Polski**
# Frezowanie z wysokimi posuwami (High Feed Milling — HFM)
Frezy do wysokich posuwów (`High Feed Mills`) posiadają mały kąt przystawienia (zwykle `10–17°`) lub specjalne płytki promieniowe. Dzięki temu przy niewielkiej osiowej głębokości skrawania (`Ap = 0,5–1,5 mm`) zachodzi zjawisko osiowego ścieniania wióra (Chip Thinning), co pozwala zadawać ogromny posuw na ostrze (`fz = 1,0–2,0 mm/ząb`) oraz posuw minutowy rzędu `5–10 m/min`. Największa zaleta HFM: główna siła skrawania skierowana jest poosiowo w górę prosto we wrzeciono, a nie na boki. Brak sił odpychających pozwala pracować na dużych wysięgach (`5–7 średnic`) w głębokich kieszeniach form bez drgań.

**🇬🇧 English**
# High-Feed Milling (HFM): Maximum Metal Removal at Long Reach
High-feed mills (`HFM`) use a very shallow lead angle (typically `10–17°`) or a large-radius insert profile. At shallow axial depths of cut (`Ap = 0.5–1.5 mm`), pronounced axial chip thinning lets you program massive feeds per tooth (`fz = 1.0–2.0 mm/tooth`), pushing table feed rates to `5–10 m/min`. Even better, the shallow lead angle redirects cutting forces axially straight up into the spindle taper rather than radially against the side of the tool. With minimal side deflection, HFM cutters excel at roughing deep cavities at long overhangs (`5–7×D`) where conventional `90°` shoulder mills chatter violently.

---

id: thin-wall-machining
tag: Точность | Dokładność | Precision

**🇷🇺 Русский**
# Фрезерование тонкостенных деталей без деформаций и вибраций
При изготовлении корпусных деталей с толщиной стенок `0,5–2,0 мм` главные проблемы — отжим стенки от фрезы (стенка получается толще сверху и тоньше у основания), высокочастотный звон и поводка детали после разжима тисков из-за внутренних напряжений проката. Чтобы удержать геометрию, используйте ступенчатую схему выборки («елочкой» по чередующимся сторонам стенки), чтобы уже тонкий участок всегда опирался на еще не выбранный массив металла снизу. Перед чистовым проходом ослабьте и заново прижмите заготовку с минимальным усилием, а чистовую обработку выполняйте острыми фрезами с большим углом спирали (`45–50°`), малым радиальным зацеплением `Ae` и высокими оборотами.

**🇵🇱 Polski**
# Frezowanie detali cienkościennych bez odkształceń i drgań
Przy wykonywaniu korpusów o grubości ścianek `0,5–2,0 mm` główne problemy to odpychanie ścianki przez frez (stożkowatość na wysokości), wibracje oraz wichrowanie detalu po wyjęciu z imadła wskutek naprężeń własnych materiału. Aby utrzymać geometrię, stosuj strategię schodkową („na choinkę” naprzemiennie po obu stronach ścianki), tak aby obrabiany fragment zawsze był podparty niższą, jeszcze niewybraną warstwą metalu. Przed obróbką wykańczającą poluzuj i ponownie delikatnie dociśnij detal, a przejście wykańczające wykonaj ostrym frezem o dużym kącie linii śrubowej (`45–50°`) i małym `Ae`.

**🇬🇧 English**
# Milling Thin-Walled Parts Without Distortion or Chatter
Machining aerospace and electronics housings with wall thicknesses of `0.5–2.0 mm` presents three classic headaches: wall deflection away from the cutter (leaving a tapered wall), high-pitched ringing, and part warping after unclamping due to residual stress in the raw stock. Combat deflection with a stepped "waterline" sequence that alternates sides down the wall so the thin section is always backed by uncut material below. Rough symmetrically, release and re-torque workholding lightly before finishing, and run sharp, high-helix (`45–50°`) end mills at high speed with tiny radial engagement `Ae`.

---

id: tool-setter-breakage
tag: Наладка | Ustawianie | Setup

**🇷🇺 Русский**
# Лазерные и контактные датчики привязки инструмента (Tool Setter)
Автоматический датчик привязки на столе станка (контактный грибок Renishaw `OTS`/`TS27R` или лазерный `NC4`) решает две задачи: точный замер вылета `Z` и диаметра `D` вращающегося инструмента, а также быстрый контроль поломки (`Tool Breakage Detection`) после черновых операций или сверления. Многозубые фрезы измеряются при обратном вращении шпинделя (`M04`), чтобы датчик определил самый длинный и выступающий зуб с учетом реального биения оправки на рабочих оборотах. Лазерные системы бесконтактно измеряют микрофрезы диаметром от `0,1 мм` и видят скол даже одного зуба. Золотое правило: всегда продувайте инструмент и грибок сжатым воздухом перед касанием — капля СОЖ дает ошибку в `0,02–0,05 мм`.

**🇵🇱 Polski**
# Laserowe i stykowe sondy pomiaru narzędzi (Tool Setter)
Automatyczna sonda narzędziowa na stole maszyny (stykowy grzybek Renishaw `OTS`/`TS27R` lub laserowy `NC4`) realizuje dwa zadania: dokładny pomiar długości `Z` i średnicy `D` obracającego się narzędzia oraz szybką kontrolę złamania (`Tool Breakage Detection`) po obróbce zgrubnej lub wierceniu. Frezy wieloostrzowe mierzy się przy lewych obrotach wrzeciona (`M04`), aby sonda wykryła najbardziej wystający ząb z uwzględnieniem rzeczywistego bicia oprawki. Systemy laserowe bezstykowo mierzą mikrofrezy od `0,1 mm` i wykrywają wykruszenie pojedynczego ostrza. Zawsze przedmuchuj narzędzie i grzybek sprężonym powietrzem przed pomiarem — kropla chłodziwa daje błąd `0,02–0,05 mm`.

**🇬🇧 English**
# Contact and Laser Tool Setters: Length, Runout, and Breakage Detection
An automatic table tool setter (such as a contact Renishaw `OTS`/`TS27R` stylus or non-contact `NC4` laser system) handles two vital jobs: measuring rotating tool length (`Z`) and diameter (`D`), and running fast tool-breakage checks between operations. Multi-flute cutters are measured while spinning in reverse (`M04`) so the setter captures the longest/high flute including dynamic spindle and holder runout. Laser tool setters measure micro-tools down to `0.1 mm` at full RPM without contact and can detect a single chipped flute. Always blast both the tool tip and stylus clean with air before probing—a single droplet of coolant can skew the offset by `0.02–0.05 mm`.

---

id: in-machine-deburring
tag: Фрезерование | Frezowanie | Milling

**🇷🇺 Русский**
# Снятие заусенцев и фасок прямо на станке (In-machine Deburring)
Ручная слесарная зачистка заусенцев шабером или напильником после станка отнимает массу времени и часто оставляет неравномерные фаски. Перенос операции снятия фасок в управляющую программу позволяет получать полностью готовую деталь сразу из рабочей зоны. Для плоских контуров используют фасочные фрезы (`Chamfer Mills`) с углом `90°` или `60°`: обязательно смещайте фрезу по `X/Y` и `Z` так, чтобы резание шло средней частью конуса, а не самым кончиком, где скорость резания близка к нулю. Для снятия заусенцев на пересечении отверстий, обратных торцах и криволинейных 3D-кромках применяют сферические и «леденцовые» (`Lollipop` / обратные сферические) фрезы.

**🇵🇱 Polski**
# Gratowanie i fazowanie bezpośrednio na maszynie (In-machine Deburring)
Ręczne usuwanie zadziorów skrobakiem lub pilnikiem po wyjęciu detalu z maszyny pochłania mnóstwo czasu i daje nierówne fazy. Przeniesienie operacji fazowania do programu CNC pozwala wyjąć ze strefy roboczej całkowicie gotowy detal. Do płaskich konturów 2D stosuje się frezy do fazowania (`Chamfer Mills`) o kącie `90°` lub `60°`: pamiętaj, aby odsunąć ścieżkę w `X/Y` i `Z` tak, by skrawała środkowa część stożka, a nie sam czubek, gdzie prędkość skrawania wynosi zero. Do gratowania przecięć otworów, tylnych powierzchni i krawędzi 3D używa się frezów kulistych oraz tzw. „lizaków” (`Lollipop`).

**🇬🇧 English**
# In-Machine Deburring and Chamfering on the CNC Mill
Hand-deburring parts at the bench with a scraper or file eats up labor time and produces inconsistent edge breaks. Programming chamfering and deburring right in the CNC cycle delivers finished parts straight off the machine. For 2D edges, use `90°` or `60°` chamfer mills, offsetting the toolpath in both `XY` and `Z` so the cut happens mid-flute rather than near the dead-center tip where surface speed is zero. For cross-holes, back-side edges, and 3D sculpted contours, ball-nose end mills, spherical "lollipop" cutters, and compliant floating deburring holders produce clean, repeatable edges automatically.

---

id: stainless-steel-304-316
tag: Материалы | Materiały | Materials

**🇷🇺 Русский**
# Обработка нержавеющих сталей (AISI 304 / 316): как победить наклеп
Аустенитные нержавеющие стали (`AISI 304`, `316`, `12Х18Н10Т`) отличаются высокой вязкостью, низкой теплопроводностью и сильной склонностью к деформационному упрочнению (наклепу — work hardening). Если фреза или сверло идет со слишком малой подачей на зуб или затупилась, кромка не срезает металл, а нагартовывает поверхностный слой, повышая его твердость в разы, после чего инструмент мгновенно скалывается или сгорает. Золотые правила по нержавейке: используйте острый инструмент с положительным передним углом, держите уверенную подачу на зуб (не менее `0,04–0,10 мм/зуб`), чтобы резать глубже наклепанного слоя, входите в материал плавно по дуге и подавайте обильный поток концентрированной СОЖ (`8–10%`).

**🇵🇱 Polski**
# Obróbka stali nierdzewnych (AISI 304 / 316): jak pokonać zgniot
Austenityczne stale nierdzewne (`AISI 304`, `316`, `1.4301`, `1.4404`) charakteryzują się wysoką ciągliwością, niską przewodnością cieplną i silną skłonnością do umacniania przez zgniot (work hardening). Jeśli frez lub wiertło pracuje ze zbyt małym posuwem na ostrze lub jest stępione, krawędź nie skrawa metalu, lecz utwardza warstwę wierzchnią, po czym narzędzie błyskawicznie się wykrusza lub pali. Złote zasady obróbki nierdzewki: używaj ostrych narzędzi z dodatnim kątem natarcia, utrzymuj pewny posuw na ząb (min. `0,04–0,10 mm/ząb`), aby wcinać się poniżej warstwy utwardzonej, wchodź w materiał po łuku i podawaj obfite chłodziwo o podwyższonym stężeniu (`8–10%`).

**🇬🇧 English**
# Machining Stainless Steels (AISI 304 / 316): Beating Work Hardening
Austenitic stainless steels (`AISI 304`, `316`, `1.4301`, `1.4404`) are gummy, conduct heat poorly, and work-harden aggressively the moment a cutter rubs. If your feed per tooth is too light or the cutting edge is dull, the tool glazes and hardens a skin on the workpiece that will chip or burn up the very next flute pass. To machine stainless reliably: choose sharp, positive-rake carbide tools with smooth coatings, maintain a decisive chip load (at least `0.04–0.10 mm/tooth`) to cut beneath the work-hardened layer, use arc lead-ins with climb milling, and flood the cut with rich coolant (`8–10%` concentration).

---

id: radial-chip-thinning
tag: Режимы резания | Parametry skrawania | Cutting data

**🇷🇺 Русский**
# Эффект радиального утонения стружки (RCT) и коррекция подачи на зуб
При фрезеровании с радиальным перекрытием **Ae менее 50% от диаметра фрезы (Dc)** возникает геометрический эффект **радиального утонения стружки (Radial Chip Thinning — RCT)**. Когда `Ae = 50% Dc`, максимальная фактическая толщина стружки `hex` в точности равна программируемой подаче на зуб `fz`. Однако при переходе к высокоэффективному трохоидальному или динамическому фрезерованию (HEM), где ширина захвата составляет всего `5–15% Dc`, дуга контакта зуба с заготовкой резко сокращается, и реальная толщина срезаемого слоя `hex` падает в `1.5–2.8` раза. Если оставить табличную подачу `fz` без изменений, режущая кромка перестает резать металл и начинает тереть его, вызывая интенсивный абразивный износ по задней поверхности, наклеп аустенитной нержавейки или титана и перегрев инструмента.

Для сохранения оптимальной толщины стружки `hex` необходимо умножить базовую подачу `fz` на коэффициент утонения **RCT Factor**, вычисляемый по точной формуле: `fz_prog = hex / sqrt(1 - (1 - 2 * Ae / Dc)^2)`, либо по упрощенной цеховой формуле `fz_prog ≈ hex / sqrt(Ae / Dc)` при малых перекрытиях. Например, для монолитной твердосплавной фрезы `Ø12 мм` (`Dc = 12`) при боковом шаге `Ae = 1.2 мм` (`10% Dc`) и целевой толщине стружки `hex = 0.06 мм/зуб`, коэффициент составляет `1.67`, поэтому программируемая подача должна быть увеличена до `fz = 0.10 мм/зуб`. Также учитывайте **аксиальное утонение стружки** при работе фрезами с углом в плане `κr = 45°` или круглыми пластинами `RCMT` на глубине `Ap` меньше радиуса пластины, всегда контролируя нагрузку на шпиндель по амперметру ЧПУ в пределах `60–80%`.

**🇵🇱 Polski**
# Zjawisko radialnego ścieniania wióra (RCT) i korekcja posuwu na ostrze
Podczas frezowania z szerokością skrawania **Ae mniejszą niż 50% średnicy frezu (Dc)** występuje geometryczne zjawisko **radialnego ścieniania wióra (Radial Chip Thinning — RCT)**. Gdy `Ae = 50% Dc`, maksymalna rzeczywista grubość wióra `hex` odpowiada dokładnie zaprogramowanemu posuwowi na ostrze `fz`. Jednak w nowoczesnych strategiach obróbki wysokowydajnej (HEM / frezowanie dynamiczne), gdzie zaangażowanie promieniowe wynosi zaledwie `5–15% Dc`, kąt opasania narzędzia drastycznie maleje, a rzeczywista grubość wióra `hex` spada nawet o `40–65%`. Pozostawienie katalogowego posuwu `fz` bez korekcji sprawia, że krawędź skrawająca zamiast ścinać materiał zaczyna po nim trzeć, co prowadzi do gwałtownego zużycia ściernego powierzchni przyłożenia, utwardzenia zgniotowego stali nierdzewnej i przegrzania węglika.

Aby utrzymać prawidłową grubość wióra `hex`, należy pomnożyć bazowy posuw `fz` przez współczynnik korekcji **RCT Factor**, obliczany ze wzoru: `fz_prog = hex / sqrt(1 - (1 - 2 * Ae / Dc)^2)` lub z uproszczonej formuły warsztatowej `fz_prog ≈ hex / sqrt(Ae / Dc)` dla małych szerokości skrawania. Przykładowo, dla frezu monolitycznego VHM `Ø12 mm` (`Dc = 12`) pracującego z krokiem bocznym `Ae = 1.2 mm` (`10% Dc`) i zalecaną grubością wióra `hex = 0.06 mm/z`, współczynnik wynosi `1.67`, więc w programie CAM należy wpisać `fz = 0.10 mm/z`. Pamiętaj również o **osiowym ścienianiu wióra** podczas pracy głowicami o kącie przystawienia `κr = 45°` lub płytkami okrągłymi `RCMT` przy głębokości `Ap` mniejszej od promienia płytki, monitorując obciążenie wrzeciona w granicach `60–80%`.

**🇬🇧 English**
# Radial Chip Thinning (RCT) and Feed-per-Tooth Compensation
When milling with a radial stepover **Ae less than 50% of the cutter diameter (Dc)**, a geometric phenomenon known as **Radial Chip Thinning (RCT)** occurs. At `Ae = 50% Dc`, the maximum actual chip thickness `hex` equals the programmed feed per tooth `fz`. However, when applying High-Efficiency Milling (HEM) or dynamic trochoidal toolpaths with radial engagements of just `5–15% Dc`, the arc of engagement shrinks drastically and the actual chip thickness `hex` drops to a fraction of `fz`. If the machinist leaves the catalog `fz` unchanged, the cutting edge rubs against the material rather than shearing it, generating severe flank wear, work hardening in austenitic stainless steels or superalloys, and premature thermal failure of the end mill.

To maintain the target chip thickness `hex` and evacuate heat into the chip, you must multiply the baseline `fz` by the **RCT compensation factor** using the exact formula `fz_prog = hex / sqrt(1 - (1 - 2 * Ae / Dc)^2)` or the shop-floor approximation `fz_prog ≈ hex / sqrt(Ae / Dc)` for light stepovers. For instance, running a `Ø12 mm` (`Dc = 12`) solid carbide end mill at `Ae = 1.2 mm` (`10% Dc`) with a required chip load of `hex = 0.06 mm/tooth` yields a factor of `1.67`, meaning your programmed feed should be boosted to `fz = 0.10 mm/tooth`. Always account for **axial chip thinning** as well when using `45°` lead-angle face mills or round `RCMT` inserts at shallow depths of cut (`Ap` smaller than insert radius), while verifying that spindle load stays safely within `60–80%`.

---

id: peck-drilling-g83-g73
tag: Сверление | Wiercenie | Drilling

**🇷🇺 Русский**
# Циклы глубокого сверления G83 и G73 против монолитных сверл с внутренним СОЖ
Выбор между циклами прерывистого сверления **G83 (глубокое сверление с полным выводом)** и **G73 (высокоскоростное сверление с дроблением стружки)** напрямую зависит от материала, типа сверла и способа подвода СОЖ. Цикл `G83 X... Y... Z... R... Q... F...` полностью выводит сверло в плоскость `R` после каждого прохода на глубину `Q`, что жизненно необходимо для спиральных сверл из быстрорежущей стали `HSS-Co` без внутреннего охлаждения при глубине свыше `3xD`, так как позволяет выбросить стружку из канавок и доставить эмульсию к вершине. Однако при работе твердосплавными сверлами `G83` часто становится причиной поломки инструмента: при полном подъеме мелкая стружка смывается потоком СОЖ обратно на дно отверстия и попадает под перемычку при следующем быстром подводе `G00`, вызывая мгновенное выкрашивание режущих кромок.

Цикл `G73` выполняет лишь короткий отскок назад на величину параметра ЧПУ (обычно `0.5–1.0 мм`, на стойках Fanuc задается параметром `5114`) для гарантированного слома сливной стружки без вывода сверла из отверстия. А при использовании современных **монолитных твердосплавных сверл с внутренним подводом СОЖ (Through-Coolant)** под давлением `20–50 бар` сверление на глубину `5xD–8xD` должно выполняться в один проход циклом `G81` вообще **без вывода и дробления (no pecking)**! Для сверл длиной `8xD–12xD` обязательно сначала просверлите пилотное отверстие глубиной `1.5–2xD` коротким жестким сверлом, угол при вершине которого равен или на `1–2°` больше угла длинного сверла (например, пилот `140°–142°` для основного сверла `140°`, никогда не используйте центровку `90°` или сверло `118°`, иначе внешние уголки твердого сплава сколются при врезании). Заход в пилотное отверстие выполняйте на оборотах `300–500 об/мин` с подачей `F100`, включая рабочие обороты и высокое давление СОЖ за `2 мм` до дна пилота.

**🇵🇱 Polski**
# Cykle wiercenia głębokiego G83 i G73 a wiertła VHM z chłodzeniem wewnętrznym
Wybór pomiędzy cyklem **G83 (wiercenie głębokie z pełnym wycofaniem)** a **G73 (łamanie wióra z krótkim odskokiem)** zależy od obrabianego materiału, geometrii wiertła oraz sposobu podawania chłodziwa. Cykl `G83 X... Y... Z... R... Q... F...` wycofuje narzędzie całkowicie do punktu odniesienia `R` po każdym zagłębieniu o wartość `Q`, co jest niezbędne dla wierteł krętych ze stali szybkotnącej `HSS-Co` z chłodzeniem zewnętrznym powyżej głębokości `3xD`, aby oczyścić rowki wiórowe i wpuścić emulsję do otworu. Natomiast w przypadku wierteł węglikowych (VHM) cykl `G83` często prowadzi do katastrofalnego wykruszenia naroży: podczas pełnego wyjazdu drobne wióry wpadają z powrotem na dno otworu i zostają zmiażdżone przez ścin wiertła przy kolejnym szybkim dojeździe roboczym.

Cykl `G73` realizuje jedynie krótki odskok o wartość zapisaną w parametrze maszyny (zazwyczaj `0.5–1.0 mm`, w sterowaniach Fanuc parametr `5114`), co wystarcza do przełamania wstęgowego wióra bez ryzyka wpłukania go pod krawędź skrawającą. Co więcej, stosując nowoczesne **wiertła monolityczne VHM z wewnętrznym doprowadzeniem chłodziwa** pod ciśnieniem `20–50 bar`, otwory o głębokości `5xD–8xD` należy wiercić jednym ciągiem w cyklu `G81` **całkowicie bez wycofań (no pecking)**! Przy głębokim wierceniu `8xD–12xD` konieczne jest wykonanie otworu pilotującego na głębokość `1.5–2xD` krótkim, sztywnym wiertłem o kącie wierzchołkowym równym lub o `1–2°` większym niż wiertło docelowe (np. pilot `140°–142°` pod wiertło `140°`; nigdy nie używaj nawiertaka `90°` ani wiertła `118°`, gdyż naroża wiertła VHM uderzą w stożek i ulegną zniszczeniu). Wjazd do pilota programuj na niskich obrotach `300–500 obr./min` z posuwem `F100`, załączając pełne obroty i wysokie ciśnienie chłodziwa `2 mm` przed dnem pilota.

**🇬🇧 English**
# Peck Drilling Cycles G83 vs G73 and Through-Coolant Solid Carbide Drills
Selecting between **G83 (full-retract peck drilling)** and **G73 (high-speed chip-breaking peck cycle)** depends critically on drill substrate, hole depth, and coolant delivery. The `G83 X... Y... Z... R... Q... F...` cycle retracts the drill all the way to the `R` plane after every `Q` peck increment, which is mandatory for externally cooled `HSS-Co` twist drills beyond `3xD` so flutes can fling chips clear and flood coolant can reach the hole bottom. With solid carbide drills, however, `G83` is a leading cause of premature tool failure: each full retract allows flood coolant to wash fine chips back down to the bottom of the hole, where the fragile carbide chisel edge slams into them after the next rapid return, chipping the cutting lips instantly.

By contrast, `G73` retracts the tool only a microscopic distance (typically `0.5–1.0 mm`, set via Fanuc parameter `5114`) just enough to snap stringy chips without leaving the bore. Even more importantly, when running modern **internal through-coolant solid carbide drills** at `20–50 bar` pressure, holes up to `5xD–8xD` should be drilled nonstop using `G81` with **no pecking whatsoever**! When drilling deep holes from `8xD` to `12xD`, always machine a pilot hole `1.5–2xD` deep first using a stub drill whose point angle is equal to or `1–2°` larger than the long drill (for example, a `140°–142°` pilot for a `140°` carbide drill—never spot with a `90°` spot drill or `118°` drill, which forces the delicate outer corners of the `140°` drill to engage first and fracture). Feed into the pilot hole at `300–500 RPM` and `F100` with high-pressure coolant on, then ramp up to full cutting RPM `2 mm` above the pilot bottom.

---

id: lathe-css-g96-g50
tag: Токарка | Toczenie | Turning

**🇷🇺 Русский**
# Постоянная скорость резания G96 и ограничение оборотов G50 / LIMS на токарных ЧПУ
Команда **G96 (Constant Surface Speed — постоянная скорость резания)** является основой современной токарной обработки, автоматически изменяя частоту вращения шпинделя `n` (об/мин) обратно пропорционально текущему диаметру обработки `D` (мм) по классической формуле `n = (1000 * Vc) / (π * D)`. Это гарантирует, что твердосплавная пластина всегда работает в оптимальном температурно-скоростном окне (например, `G96 S220 M03` поддерживает скорость резания `Vc = 220 м/мин`), обеспечивая равномерную шероховатость `Ra` при подрезке торца и предсказуемую стойкость инструмента. Однако при приближении резца к оси вращения `X0` знаменатель формулы стремится к нулю, а расчетные обороты — к бесконечности, поэтому станок разгоняет патрон до физического максимума привода (`4000–6000 об/мин`).

Работа в режиме `G96` без предварительного ограничения максимальных оборотов чрезвычайно опасна: на высоких оборотах центробежная сила ослабляет зажим кулачков трехкулачкового патрона (особенно при расточке на разжим или зажиме тяжелых заготовок с малым вылетом), что может привести к вырыванию детали, а также вызывает потерю скорости резания вблизи `X0` и скол вершины пластины при подрезке торца. Перед каждым вызовом `G96` обязательно задавайте потолок оборотов в отдельном кадре: на стойках **Fanuc / Haas** используется код `G50 S2500` (на токарных станках Fanuc с системой кодов группы B или C — `G92 S2500`), а на **Siemens Sinumerik** — команда `LIMS=2500`. Диаметр, на котором шпиндель упрется в лимит оборотов, легко рассчитать: при `Vc = 200 м/мин` и `Smax = 2500 об/мин` предел достигается уже на диаметре `D = (1000 * 200) / (3.1416 * 2500) = 25.5 мм`. Перед сверлением, нарезанием резьбы резцом или метчиком и перед окончательной отрезкой детали всегда принудительно переключайтесь обратно на постоянные обороты `G97 S...`, чтобы исключить скачки скорости шпинделя.

**🇵🇱 Polski**
# Stała prędkość skrawania G96 oraz limit obrotów G50 / LIMS w toczeniu CNC
Funkcja **G96 (Constant Surface Speed — stała prędkość skrawania)** stanowi fundament nowoczesnego toczenia CNC, dynamicznie dopasowując prędkość obrotową wrzeciona `n` (obr./min) odwrotnie proporcjonalnie do aktualnej średnicy obróbki `X` (`D` w mm) zgodnie ze wzorem `n = (1000 * Vc) / (π * D)`. Dzięki temu płytka węglikowa pracuje cały czas w optymalnym oknie termicznym (np. `G96 S220 M03` utrzymuje stałe `Vc = 220 m/min`), co zapewnia jednorodną chropowatość powierzchni `Ra` podczas planowania czoła oraz maksymalną trwałość ostrza. Jednak gdy nóż zbliża się do osi obrotu `X0`, mianownik równania dąży do zera, a wyliczone obroty rosną do nieskończoności, przez co tokarka rozpędza uchwyt do maksymalnych obrotów konstrukcyjnych wrzeciona (`4000–6000 obr./min`).

Uruchomienie `G96` bez wcześniejszego ograniczenia maksymalnych obrotów jest poważnym błędem technologicznym i zagrożeniem bezpieczeństwa: przy wysokich obrotach siła odśrodkowa drastycznie zmniejsza siłę zacisku szczęk uchwytu trójszczękowego, co grozi wyrwaniem detalu z uchwytu, a ponadto gwałtowne przyspieszanie wrzeciona przy planowaniu do `X0` powoduje wykruszenie wierzchołka płytki w samym środku czoła. Przed każdym blokiem `G96` należy bezwzględnie zaprogramować bezpieczny limit obrotów: na sterowaniach **Fanuc / Haas** służy do tego kod `G50 S2500` (w układzie kodów Fanuc G-code system B/C używa się `G92 S2500`), natomiast na **Siemens Sinumerik** instrukcja `LIMS=2500`. Średnicę krytyczną, przy której wrzeciono osiągnie pułap obrotów, obliczysz ze wzoru: dla `Vc = 200 m/min` i `Smax = 2500 obr./min` limit zostanie osiągnięty już przy średnicy `D = (1000 * 200) / (3.1416 * 2500) = 25.5 mm`. Przed wierceniem, gwintowaniem oraz końcową fazą odcinania detalu zawsze przełączaj sterowanie z powrotem na stałe obroty `G97 S...`.

**🇬🇧 English**
# Constant Surface Speed (G96) and Spindle Speed Clamping (G50 / LIMS) in CNC Turning
**G96 (Constant Surface Speed — CSS)** is essential in CNC turning because it continuously adjusts spindle speed `n` (RPM) inversely with the current cutting diameter `D` (mm) according to `n = (1000 * Vc) / (π * D)`. Programming `G96 S220 M03` keeps the true surface speed locked at `Vc = 220 m/min` across varying diameters, guaranteeing uniform surface finish `Ra` during facing cuts and preventing either built-up edge at small diameters or thermal crater wear at large diameters. However, as the tool tip approaches the spindle centerline `X0`, the diameter approaches zero and the theoretical RPM approaches infinity, causing the lathe to accelerate the chuck all the way to its mechanical ceiling (`4000–6000 RPM`).

Running `G96` without a spindle speed clamp is hazardous and destructive: at extreme RPM, centrifugal force counteracts hydraulic chuck pressure and can reduce jaw gripping force by over `50%`, risking part ejection on heavy or thin-walled workpieces, while spindle lag during rapid acceleration ruins tool life near `X0`. Always precede `G96` with an explicit maximum RPM clamp on its own line: use `G50 S2500` on **Fanuc / Haas** controls (`G92 S2500` on Fanuc G-code System B/C) or `LIMS=2500` on **Siemens Sinumerik**. You can quickly calculate the threshold diameter where the spindle hits the clamp: at `Vc = 200 m/min` and `Smax = 2500 RPM`, the spindle maxes out at `D = (1000 * 200) / (3.1416 * 2500) = 25.5 mm`, below which true surface speed drops linearly toward zero. Always switch back to constant RPM mode (`G97 S...`) before center drilling, tapping, single-point threading (`G76`/`G32`), or completing a parting-off cut.

---

id: parting-off-grooving
tag: Токарка | Toczenie | Turning

**🇷🇺 Русский**
# Отрезка и точение канавок без поломки лезвий и пластин
Отрезка на токарном станке с ЧПУ — одна из самых нагруженных операций, поскольку узкое лезвие работает в глубоком закрытом пазу с затрудненным отводом стружки. Главная причина внезапного разрушения отрезных лезвий — неправильная высота режущей кромки относительно оси центров и чрезмерный вылет инструмента. Вылет лезвия из блока должен превышать радиус отрезаемой заготовки не более чем на `3–5 мм`, а ширина пластины выбирается минимально достаточной для обеспечения жесткости (обычно `2.0–3.0 мм` для прутков до `Ø50 мм` и `4.0 мм` для диаметров свыше `Ø60 мм`). Высота вершины пластины должна быть выставлена строго по оси вращения в допуске **±0.08–0.10 мм**: если резец стоит ниже центра, заготовка набегает на пластину и отрывает ее от посадочного гнезда; если выше центра — задняя поверхность начинает тереть по стержню детали, вызывая отжим и поломку при подходе к `X0`.

Чтобы гарантированно избежать скола пластины в конце отрезки, никогда не доходите до оси `X0` в режиме постоянной скорости резания `G96` с полной рабочей подачей. Оптимальный алгоритм программы ЧПУ выглядит так: выполняйте основную отрезку в режиме `G96 S120–160` со стружкоформирующей подачей `F0.08–0.15 мм/об` до диаметра `X6.0–X8.0 мм`, затем переключитесь на фиксированные обороты `G97 S800–1200` и **снизьте подачу на 50–70%** (до `F0.03–0.05 мм/об`), доводя резец до `X-0.8 мм` (или до `X1.5 мм`, если работает ловитель деталей). Если нужно минимизировать бобышку (pip) и заусенец на отрезаемой детали, используйте косые пластины с углом в плане `4°–8°` (правые или левые, чтобы острая часть пластины находилась со стороны готовой детали), но помните, что косые пластины создают боковую нагрузку и требуют снижения подачи на `20–30%`. Струя СОЖ (предпочтительно через лезвие под давлением `30–70 бар`) должна бить точно в зону резания, охлаждая и сжимая стружку по ширине.

**🇵🇱 Polski**
# Odcinanie i toczenie rowków na tokarce CNC bez łamania listew
Odcinanie (przecinanie) na tokarce CNC należy do najbardziej ryzykownych zabiegów, ponieważ wąska listwa pracuje w głębokim, zamkniętym rowku przy utrudnionym odprowadzaniu wiórów. Najczęstszą przyczyną pękania listew przecinakowych oraz wyrywania płytek z gniazda jest błędna wysokość ostrza względem osi wrzeciona oraz zbyt duży wysięg narzędzia. Wysięg listwy z oprawki powinien być jedynie o `3–5 mm` większy niż promień odcinanego pręta, a szerokość płytki należy dobrać tak, aby zapewnić sztywność (zwykle `2.0–3.0 mm` dla wałków do `Ø50 mm` oraz `4.0 mm` powyżej `Ø60 mm`). Krawędź skrawająca musi znajdować się w osi obrotu z tolerancją **±0.08–0.10 mm**: ustawienie poniżej osi powoduje wciąganie detalu na płytkę i wyłamanie gniazda, natomiast ustawienie powyżej osi wywołuje tarcie powierzchni przyłożenia o rdzeń materiału i pęknięcie ostrza przy `X0`.

Aby wyeliminować niszczenie płytek w końcowej fazie przecinania, nigdy nie dojeżdżaj do osi `X0` w trybie stałej prędkości skrawania `G96` z pełnym posuwem roboczym. Prawidłowa strategia programowania polega na prowadzeniu odcinania z `G96 S120–160` i posuwem `F0.08–0.15 mm/obr.` (zapewniającym zwijanie wióra w węższy rulon niż szerokość rowka) do średnicy `X6.0–X8.0 mm`, a następnie przełączeniu na stałe obroty `G97 S800–1200` i **zredukowaniu posuwu o 50–70%** (do `F0.03–0.05 mm/obr.`) aż do `X-0.8 mm`. Aby zredukować tzw. wypustkę (pip) na odcinanym detalu, stosuje się płytki skośne o kącie przystawienia `4°–8°` (skierowane wierzchołkiem od strony uchwytu), pamiętając jednak, że generują one siłę boczną wyginającą listwę i wymagają obniżenia posuwu o `20–30%`. Strumień chłodziwa — najlepiej podawany przez korpus listwy pod ciśnieniem `30–70 bar` — musi trafiać idealnie w strefę skrawania.

**🇬🇧 English**
# Parting Off and Grooving on a CNC Lathe Without Breaking Blades
Parting off is one of the highest-risk operations on a CNC lathe because a slender blade must plunge deep into a confined slot where chip evacuation and cooling are severely restricted. The two primary causes of catastrophic blade breakage are excessive tool overhang and incorrect center height. Always adjust the parting blade overhang so it exceeds the workpiece radius by no more than `3–5 mm`, and select an insert width (`2.0–3.0 mm` for bars up to `Ø50 mm`, `4.0 mm` above `Ø60 mm`) stiff enough to resist lateral deflection. Verify center height with a dial indicator to within **±0.08–0.10 mm** of the spindle axis: if the cutting edge sits below center, cutting forces pull the insert out of its pocket; if it sits above center, the flank rubs against the diminishing core diameter until radial pressure snaps the tip near `X0`.

Never feed all the way to `X0` under Constant Surface Speed (`G96`) at full feed rate. Instead, program the main parting cut under `G96 S120–160` at a healthy chip-forming feed of `F0.08–0.15 mm/rev` (which curls and narrows the chip so it does not gall the side walls) down to `X6.0–X8.0 mm`. At that point, switch to constant RPM (`G97 S800–1200`) and **reduce the feed rate by 50–70%** (`F0.03–0.05 mm/rev`) for the final plunge to `X-0.8 mm`, where true cutting speed drops to zero and torsional stress peaks as the part separates. To minimize the center pip and burr on the finished part, use angled (`4°–8°` lead angle) parting inserts with the leading edge on the chuck side, while reducing feed by `20–30%` to prevent lateral blade walking. Direct high-pressure through-blade coolant (`30–70 bar`) squarely into the cutting zone to lubricate the chip-tool interface.

---

id: boring-bar-chatter
tag: Токарка | Toczenie | Turning

**🇷🇺 Русский**
# Устранение вибраций и дробления при внутреннем растачивании
При внутреннем точении главным врагом точности и чистоты поверхности является **радиальный отжим и автоколебания (вибрация / chatter)** расточной державки, поскольку величина прогиба консольной балки растет пропорционально **кубу ее вылета (`L³`)** и обратно пропорционально **четвертой степени диаметра (`D⁴`)**. Поэтому золотое правило расточки — всегда выбирать державку максимально возможного диаметра, обеспечивающего зазор для выхода стружки (`2–3 мм`), и соблюдать жесткие пределы отношения вылета к диаметру **L/D**: стандартные стальные державки стабильно работают только до `3.5–4xD`, державки из тяжелого сплава вольфрама (densimet) — до `5xD`, монолитные твердосплавные расточные оправки — до `6–7xD`, а при вылетах от `7xD` до `14xD` безальтернативны антивибрационные державки с внутренним инерционным демпфером (например, система *Sandvik Silent Tools*).

Не менее важен выбор геометрии пластины и угла в плане. Для расточки используйте пластины с **положительной геометрией (`CCMT`, `DCMT`, `VCGT`, задний угол `7°`)** вместо двухсторонних негативных пластин (`CNMG`, `WNMG`), так как позитивные пластины снижают радиальную составляющую силы резания `Fp` на `25–40%`. Выбирайте державки с углом в плане близким к `90°–95°` (`S93R`, `S95R`), направляющим усилия резания вдоль оси `Z` в шпиндель, а не поперек тонкой оправки. Радиус при вершине пластины `RE` должен быть **меньше глубины резания `Ap`** (`R0.2` или `R0.4 мм` вместо `R0.8 мм`): слишком большой радиус отжимает державку от стенки отверстия и мгновенно вызывает вой и дробление. Закрепляйте круглые державки в разрезных гильзах (*EasyFix*) или гидравлических блоках на глубину не менее `3–4xD`; никогда не зажимайте твердосплавную державку напрямую винтами в расточном блоке без втулки — точечный нажим винта расколет хрупкий карбид вольфрама.

**🇵🇱 Polski**
# Eliminacja drgań (chatteru) podczas wytaczania wewnętrznego na tokarce
W toczeniu wewnętrznym największym problemem technologicznym są **ugięcia promieniowe oraz drgania samowzbudne (chatter)** wytaczaka, ponieważ strzałka ugięcia belki wspornikowej rośnie proporcjonalnie do **sześcianu wysięgu (`L³`)** i maleje z **czwartą potęgą średnicy trzonka (`D⁴`)**. Dlatego podstawową zasadą jest wybór wytaczaka o jak największej średnicy mieszczącej się w otworze z zachowaniem luzu na spływ wiórów (`2–3 mm`) oraz bezwzględne przestrzeganie limitów smukłości **L/D**: wytaczaki stalowe pracują stabilnie do `3.5–4xD`, trzonki ze stopów ciężkich wolframu (heavymet) do `5xD`, wytaczaki monolityczne węglikowe do `6–7xD`, natomiast przy wysięgach `7xD–14xD` konieczne jest stosowanie wytaczaków z aktywnym tłumikiem drgań (np. *Sandvik Silent Tools*).

Kluczowe znaczenie ma również geometria płytki i kąt przystawienia narzędzia. Do obróbki otworów wybieraj **płytki pozytywowe (`CCMT`, `DCMT`, `VCGT` z kątem przyłożenia `7°`)** zamiast dwustronnych płytek negatywowych (`CNMG`, `WNMG`), gdyż ostra geometria dodatnia zmniejsza promieniową składową siły skrawania `Fp` nawet o `25–40%`. Stosuj oprawki o kącie przystawienia bliskim `90°–95°` (np. `SCLCR`, `SDUCR`), które kierują wektor siły skrawania poosiowo w stronę wrzeciona zamiast odpychać trzonek od ścianki otworu. Promień naroża płytki `RE` musi być **mniejszy od głębokości skrawania `Ap`** (użyj `R0.2` lub `R0.4 mm` zamiast `R0.8 mm`) — zbyt duży promień naroża drastycznie zwiększa opór promieniowy i wywołuje pisk wytaczaka. Trzonki okrągłe mocuj w tulejach rozprężnych (*EasyFix*) lub oprawkach hydraulicznych na długości minimum `3–4xD`; nigdy nie dociskaj wytaczaka węglikowego bezpośrednio śrubami w oprawce, ponieważ punktowy nacisk śruby spowoduje pęknięcie węglika.

**🇬🇧 English**
# Eliminating Chatter and Deflection in Internal Turning (Boring Bars)
In internal turning, **radial deflection and regenerative chatter** are the primary obstacles to holding tight bore tolerances and low surface roughness. Because a boring bar acts as a cantilevered beam, its deflection increases with the **cube of overhang (`L³`)** and decreases with the **fourth power of bar diameter (`D⁴`)**. Doubling bar overhang multiplies deflection by eight, whereas increasing bar diameter from `Ø16 mm` to `Ø20 mm` boosts rigidity by `244%`. Always select the largest bar diameter that still leaves `2–3 mm` radial clearance for chip evacuation, and respect strict **L/D overhang limits**: standard alloy steel bars work cleanly up to `3.5–4xD`, heavy-metal tungsten bars up to `5xD`, solid carbide bars up to `6–7xD`, and tuned mass-damped boring bars (such as *Sandvik Silent Tools*) from `7xD` up to `14xD`.

Cutting geometry is equally critical for suppressing vibration. Always favor **positive-rake single-sided inserts (`CCMT`, `DCMT`, `VCGT` with a `7°` clearance angle)** over negative double-sided inserts (`CNMG`, `WNMG`), as positive geometry cuts radial cutting forces `Fp` by `25–40%`. Choose a boring bar with a lead angle near `90°–95°` (`SCLCR`, `SDUCR`) so cutting forces are directed axially into the turret rather than radially against the slender bar. Keep the insert nose radius **smaller than the radial depth of cut `Ap`** (`R0.2` or `R0.4 mm` instead of `R0.8 mm`); an oversized nose radius rubs and pushes the bar away from the wall. Finally, clamp round boring bars in split sleeves (*EasyFix*) or hydraulic holders over at least `3–4xD` of shank length—never tighten set screws directly onto a solid carbide shank, or point stress will fracture the bar.

---

id: iso-insert-designation
tag: Инструмент | Narzędzia | Tooling

**🇷🇺 Русский**
# Расшифровка маркировки токарных пластин по стандарту ISO 1832
Стандартизированный код сменных многогранных пластин **ISO 1832** (например, `CNMG 120408-PM`, `DCMT 11T304-PF` или `VCGT 160402-AL`) позволяет инженеру-технологу и оператору ЧПУ мгновенно определить геометрию, точность и размеры инструмента без каталога. **Первая буква** задает форму и угол при вершине пластины: `C` — ромб `80°` (универсальное черновое и чистовое точение), `D` — ромб `55°` (копирование и поднутрения), `V` — острый ромб `35°` (глубокое профилирование), `W` — ломаный треугольник «тригон» `80°` (шесть прочных кромок на двухсторонней пластине), `T` — треугольник `60°`, `S` — квадрат `90°`, `R` — круглая пластина. **Вторая буква** определяет задний угол пластины: `N` = `0°` (негативная двухсторонняя пластина, требует наклона гнезда в державке и дает максимальную прочность кромки), `C` = `7°`, `P` = `11°` и `E` = `20°` (односторонние позитивные пластины с мягким резанием для расточки и нежестких деталей).

**Третья буква** указывает класс допусков размеров пластины: `M` — стандартная прессованная и спеченная пластина средней точности (допуск по вписанной окружности и высоте вершины `±0.05–0.13 мм`), тогда как `G` и `E` — прецизионные пластины, шлифованные по периметру (допуск `±0.025 мм`), обеспечивающие повторяемость размера при повороте грани без подналадки офсета. **Четвертая буква** описывает конструкцию крепежного отверстия и стружколома: `G` — цилиндрическое отверстие и стружколом с двух сторон, `T` — отверстие с конической зенковкой под винт и стружколом с одной стороны. Далее следуют **три пары цифр**: первая пара (`12`, `11`, `16`) — длина режущей кромки в миллиметрах, вторая пара — толщина пластины (`04` = `4.76 мм`, `T3` = `3.97 мм`, `03` = `3.18 мм`), а третья пара — **радиус при вершине RE** (`08` = `0.8 мм`, `04` = `0.4 мм`, `02` = `0.2 мм`, `00` = острая вершина), от которого напрямую зависит максимально допустимая подача (`fn_max ≈ 0.5 * RE`) и теоретическая шероховатость `Rz ≈ (fn^2 / (8 * RE)) * 1000`.

**🇵🇱 Polski**
# Rozszyfrowanie oznaczeń płytek tokarskich według normy ISO 1832
Kodowanie płytek wieloostrzowych zgodnie z normą **ISO 1832** (np. `CNMG 120408-PM`, `DCMT 11T304-PF` czy `VCGT 160402-AL`) pozwala operatorowi i technologowi CNC błyskawicznie odczytać geometrię, klasę dokładności oraz wymiary narzędzia. **Pierwsza litera** określa kształt oraz kąt naroża płytki: `C` oznacza romb `80°` (uniwersalne toczenie zgrubne i kształtowe), `D` — romb `55°` (toczenie kopiowe), `V` — ostry romb `35°` (głębokie podcięcia i profilowanie), `W` — trygon `80°` (sześć mocnych krawędzi na płytce dwustronnej), `T` — trójkąt `60°`, `S` — kwadrat `90°`, a `R` — płytkę okrągłą. **Druga litera** definiuje kąt przyłożenia: `N` = `0°` (płytka negatywowa dwustronna o wysokiej wytrzymałości krawędzi), natomiast `C` = `7°`, `P` = `11°` oraz `E` = `20°` to jednostronne płytki pozytywowe o niskich oporach skrawania, idealne do wytaczania i wałków wiotkich.

**Trzecia litera** oznacza klasę tolerancji wykonania płytki: `M` to standardowa płytka prasowana i spiekana bez szlifowania obwodu (tolerancja wysokości ostrza `±0.05–0.13 mm`), podczas gdy `G` oraz `E` to płytki precyzyjnie szlifowane na obwodzie (tolerancja `±0.025 mm`), gwarantujące powtarzalność wymiaru po obrocie płytki w gnieździe. **Czwarta litera** opisuje typ otworu mocującego i łamacza wióra: `G` — otwór walcowy i dwustronny łamacz wióra, `T` — otwór ze stożkowym pogłębieniem pod śrubę Torx oraz jednostronny łamacz. Kolejne **trzy grupy cyfr** określają kolejno: długość krawędzi skrawającej w milimetrach (`12`, `11`, `16`), grubość płytki (`04` = `4.76 mm`, `T3` = `3.97 mm`, `03` = `3.18 mm`) oraz **promień naroża RE** (`08` = `0.8 mm`, `04` = `0.4 mm`, `02` = `0.2 mm`), który wyznacza maksymalny posuw roboczy (`fn_max ≈ 0.5 * RE`) oraz teoretyczną chropowatość powierzchni `Rz ≈ (fn^2 / (8 * RE)) * 1000`.

**🇬🇧 English**
# How to Decode ISO 1832 Turning Insert Designations
The international **ISO 1832** designation system (such as `CNMG 120408-PM`, `DCMT 11T304-PF`, or `VCGT 160402-AL`) encodes every geometric and dimensional detail of an indexable turning insert. The **first letter** specifies insert shape and point angle: `C` is an `80°` diamond (workhorse for roughing and facing), `D` is a `55°` diamond (copy turning and profiling), `V` is a `35°` diamond (tight undercuts and back-turning), `W` is an `80°` trigon (offering six rugged cutting edges on a double-sided insert), `T` is a `60°` triangle, `S` is a `90°` square, and `R` is round. The **second letter** defines the relief (clearance) angle: `N` = `0°` (negative double-sided insert requiring a tilted pocket in the holder for clearance), while `C` = `7°`, `P` = `11°`, and `E` = `20°` indicate single-sided positive-rake inserts that slice cleanly with low radial force on slender shafts and internal bores.

The **third letter** indicates dimensional tolerance class: `M` denotes a standard pressed-and-sintered utility insert (`±0.05–0.13 mm` indexing repeatability on point height), whereas `G` and `E` denote precision periphery-ground inserts (`±0.025 mm`) that index within microns without touching tool offsets. The **fourth letter** describes clamping hole and chipbreaker configuration: `G` means a cylindrical pin/clamp hole with double-sided chipbreakers, while `T` indicates a countersunk screw hole with a single-sided chipbreaker. Finally, the **three two-digit number groups** specify cutting edge length in millimeters (`12`, `11`, `16`), insert thickness (`04` = `4.76 mm`, `T3` = `3.97 mm`, `03` = `3.18 mm`—remember that a `DCMT 11T304` will not fit a `DCMT 110304` pocket!), and **nose radius RE** (`08` = `0.8 mm`, `04` = `0.4 mm`, `02` = `0.2 mm`), which governs both maximum safe feed (`fn_max ≈ 0.5 * RE`) and theoretical surface finish via `Rz ≈ (fn^2 / (8 * RE)) * 1000`.

---

id: carbide-coatings-pvd-cvd
tag: Инструмент | Narzędzia | Tooling

**🇷🇺 Русский**
# Покрытия твердого сплава PVD и CVD: выбор под материал и операцию
Технология нанесения защитного покрытия на твердосплавный инструмент делится на два фундаментальных класса: **PVD (Physical Vapor Deposition — физическое осаждение из паровой фазы)** и **CVD (Chemical Vapor Deposition — химическое осаждение)**. Процесс **PVD** протекает в вакуумной камере при относительно низких температурах (`400–600 °C`) и формирует тонкий (`1–4 мкм`), плотный слой с внутренними напряжениями сжатия, который не снижает прочность основы на изгиб и позволяет сохранить бритвенно острую режущую кромку. Именно поэтому PVD-покрытия (`TiAlN`, `AlTiN`, `AlCrN`, `TiCN`, `TiN`) доминируют в монолитных концевых фрезах, сверлах, резьбофрезах, отрезных пластинах, а также при чистовом точении и обработке вязких материалов — аустенитных нержавеющих сталей (`ISO M`, `12Х18Н10Т`/`AISI 304`) и жаропрочных сплавов (`ISO S`, титан, инконель), где тупая кромка мгновенно вызывает наклеп и наростообразование.

В отличие от него, процесс **CVD** проходит при температурах `750–1050 °C` (или `MT-CVD` при `700–850 °C`) и позволяет наносить толстые многослойные покрытия (`5–20 мкм`), включающие карбонитрид титана `TiCN` (защита от абразивного износа по задней грани) и керамический слой оксида алюминия **Al2O3**, который служит непревзойденным тепловым барьером. Из-за большой толщины покрытия и термического воздействия кромка CVD-пластины предварительно хонингуется (скругляется до `ER = 30–70 мкм`), что делает такие пластины идеальными для высокоскоростного непрерывного и чернового точения углеродистых и легированных сталей (`ISO P`) и чугунов (`ISO K`). Для обработки цветных сплавов (`ISO N` — алюминий, медь, латунь) категорически нельзя применять покрытия, содержащие алюминий (`TiAlN`, `AlTiN`, `Al2O3`), так как алюминий детали химически сваривается с покрытием на кромке; здесь используются либо полированные пластины без покрытия, либо сверхскользкие PVD-покрытия **ZrN (нитрид циркония)**, **TiB2 (диборид титана)** и алмазоподобные **DLC (Diamond-Like Carbon)**.

**🇵🇱 Polski**
# Powłoki węglików spiekanych PVD a CVD: dobór do materiału i obróbki
Nowoczesne pokrycia ochronne narzędzi z węglika spiekanego dzielą się na dwie główne grupy technologiczne: **PVD (Physical Vapor Deposition — fizyczne osadzanie z fazy gazowej)** oraz **CVD (Chemical Vapor Deposition — chemiczne osadzanie z fazy gazowej)**. Proces **PVD** przebiega w próżni w stosunkowo niskiej temperaturze (`400–600 °C`) i tworzy cienką (`1–4 µm`), gładką warstwę o korzystnych naprężeniach ściskających, która nie osłabia udarności podłoża węglikowego i pozwala zachować bardzo ostrą krawędź skrawającą. Z tego powodu powłoki PVD (`TiAlN`, `AlTiN`, `AlCrN`, `TiCN`, `TiN`) są pierwszym wyborem dla frezów monolitycznych VHM, głowic frezarskich, wierteł, gwintowników, płytek do odcinania oraz do toczenia wykańczającego stali nierdzewnych (`ISO M`) i superstopów żaroodpornych (`ISO S` — tytan, Inconel), gdzie zaokrąglona krawędź powodowałaby zgniot i narost na ostrzu.

Z kolei proces **CVD** (oraz średniotemperaturowy `MT-CVD` w `700–850 °C`) umożliwia nakładanie grubych, wielowarstwowych powłok (`5–20 µm`) składających się z odpornego na ścieranie węglikoazotku tytanu `TiCN` oraz ceramicznej warstwy tlenku glinu **Al2O3**, stanowiącej doskonałą barierę termiczną w temperaturach powyżej `900 °C`. Ze względu na dużą grubość powłoki krawędź płytki CVD musi być wcześniej honowana (zaokrąglona do `ER = 30–70 µm`), co czyni ją niezastąpioną przy wydajnym toczeniu zgrubnym i ciągłym stali węglowych oraz stopowych (`ISO P`) i żeliwa (`ISO K`). Natomiast do obróbki metali nieżelaznych (`ISO N` — stopy aluminium, miedź, mosiądz) nigdy nie należy stosować powłok zawierających glin (`TiAlN`, `AlTiN`, `Al2O3`) z uwagi na powinowactwo chemiczne i natychmiastowe zaklejanie ostrza; w tych materiałach stosuje się polerowane płytki niepowlekane lub superśliskie powłoki PVD **ZrN**, **TiB2** oraz węglowe **DLC (Diamond-Like Carbon)**.

**🇬🇧 English**
# PVD vs CVD Carbide Coatings: Selecting the Right Grade for Your Cut
Protective coatings on carbide cutting tools fall into two primary families: **PVD (Physical Vapor Deposition)** and **CVD (Chemical Vapor Deposition)**. **PVD** coatings are applied inside a vacuum chamber at relatively low temperatures (`400–600 °C`), depositing a thin (`1–4 µm`), crack-free film with beneficial compressive stress that preserves substrate toughness and retains a razor-sharp cutting edge. Consequently, PVD grades (`TiAlN`, `AlTiN`, `AlCrN`, `TiCN`, `TiN`) are the industry standard for solid carbide end mills, indexable milling inserts, drills, threading tools, parting blades, and finishing inserts—especially when machining gummy austenitic stainless steels (`ISO M`) and heat-resistant superalloys (`ISO S` such as Titanium and Inconel), where a honed edge would rub and cause severe work hardening.

By contrast, **CVD** (and medium-temperature `MT-CVD` at `700–850 °C`) deposits thick, multi-layer coatings (`5–20 µm`) combining abrasion-resistant `TiCN` with a ceramic **Al2O3 (aluminum oxide)** layer that acts as a formidable thermal barrier against crater wear during high-speed continuous cutting. Because thick CVD layers require a pre-honed edge preparation (`ER = 30–70 µm`) and exhibit residual tensile stress, CVD inserts excel in heavy roughing and high-speed turning of carbon/alloy steels (`ISO P`) and cast irons (`ISO K`), where thermal load and flank abrasion dominate. When machining non-ferrous materials (`ISO N`—aluminum, copper, brass), never use aluminum-bearing coatings (`TiAlN`, `AlTiN`, `Al2O3`), as chemical affinity causes the workpiece aluminum to weld directly onto the cutting edge; instead, choose uncoated mirror-polished inserts or low-friction **ZrN**, **TiB2**, or **DLC (Diamond-Like Carbon)** PVD coatings.

---

id: face-milling-strategies
tag: Фрезерование | Frezowanie | Milling

**🇷🇺 Русский**
# Стратегии торцевого фрезерования: угол в плане, смещение оси и вход по дуге
Эффективность и стойкость пластин при торцевом фрезеровании зависят от правильного выбора угла в плане фрезы `κr` и траектории прохода относительно заготовки. Фрезы с углом в плане **45°** являются лучшим выбором для общего торцевания плоскостей без уступов: они перераспределяют силу резания примерно поровну между радиальной и осевой составляющими (нагружая шпиндель вдоль оси `Z`, где его жесткость максимальна), плавно входят и выходят из металла (снижая выкрашивание кромок на чугуне) и за счет аксиального утонения стружки позволяют повысить подачу на зуб `fz` в `1.4` раза по сравнению с фрезами **90°**. Фрезы `90°` применяются там, где требуется получить прямоугольный уступ или при обработке тонкостенных деталей, чувствительных к осевому давлению, а фрезы с круглыми пластинами (`RCMT`/`RDMT`) обладают максимальной прочностью кромки для чернового обдира корки и поковок.

Оптимальный диаметр торцевой фрезы `Dc` должен составлять **1.25–1.5 ширины фрезеруемой поверхности `Ae`**. При этом **категорически избегайте симметричного расположения оси фрезы строго по центру заготовки**: при симметричном фрезеровании толщина стружки на входе и выходе минимальна, а вектор радиальной силы постоянно меняет направление, вызывая вибрацию и ударную нагрузку. Смещайте ось фрезы так, чтобы `60–75%` диаметра перекрывало деталь (в режиме попутного фрезерования), обеспечивая формирование стружки оптимальной толщины на входе зуба. Врезание в заготовку выполняйте **плавно по дуге (Roll-in Entry)** вместо прямого линейного удара, и никогда не прерывайте подачу над деталью. Для получения зеркальной шероховатости `Ra 0.2–0.4 мкм` на высоких подачах установите в один из пазов корпуса зачистную пластину **Wiper**, выставив ее на `0.03–0.05 мм` ниже основных пластин.

**🇵🇱 Polski**
# Strategie frezowania czołowego: kąt przystawienia, pozycja głowicy i wjazd po łuku
Trwałość płytek oraz jakość powierzchni w frezowaniu czołowym zależą bezpośrednio od doboru kąta przystawienia głowicy `κr` oraz położenia osi narzędzia względem obrabianego przedmiotu. Głowice o kącie przystawienia **45°** to najlepszy wybór do planowania otwartych powierzchni płaskich: rozkładają one siłę skrawania równomiernie na składową promieniową i osiową (dociskając wrzeciono wzdłuż sztywnej osi `Z`), zapewniają łagodne wejście i wyjście ostrza z materiału (co zapobiega wykruszaniu krawędzi odlewu żeliwnego) oraz dzięki osiowemu ścienianiu wióra pozwalają zwiększyć posuw na ostrze `fz` aż o `40%` względem głowic **90°**. Głowice walcowo-czołowe `90°` stosuje się tam, gdzie wymagane jest uzyskanie prostopadłego progu lub przy obróbce wiotkich ścianek wrażliwych na nacisk osiowy, natomiast głowice na płytki okrągłe (`RCMT`/`RDMT`) sprawdzają się przy ciężkiej obróbce zgrubnej odkuwek i naskórka odlewniczego.

Średnica głowicy czołowej `Dc` powinna wynosić **1.25–1.5 szerokości planowanej powierzchni `Ae`**. Podczas programowania ścieżki **nigdy nie prowadź osi głowicy symetrycznie przez środek detalu**: przy układzie symetrycznym grubość wióra na wejściu jest niekorzystna, a wektor siły promieniowej nieustannie zmienia zwrot, wywołując drgania wrzeciona. Przesuń oś frezu tak, aby `60–75%` średnicy głowicy pracowało w materiale (z zachowaniem przewagi frezowania współbieżnego), co gwarantuje stabilny nacisk i odpowiednią grubość wióra na wejściu ostrza. Wchodzenie w materiał programuj **płynnie po łuku (Roll-in Entry)** zamiast uderzenia na wprost, utrzymując stały kontakt głowicy z materiałem. Aby uzyskać lustrzaną gładkość `Ra 0.2–0.4 µm` przy wysokich posuwach stołu, zamontuj w jednym gnieździe płytkę dogładzającą **Wiper**, wysuniętą poosiowo o `0.03–0.05 mm` poniżej pozostałych płytek roboczych.

**🇬🇧 English**
# Face Milling Best Practices: Lead Angle, Cutter Offset, and Roll-In Entry
Maximizing insert life and surface finish in face milling requires matching the cutter lead angle `κr` and toolpath geometry to the workpiece. **45° lead-angle face mills** are the gold standard for general flat surfacing without vertical shoulders: they balance radial and axial cutting forces (directing roughly half the load axially up into the rigid spindle bearings), cushion entry and exit impact (preventing edge breakout on cast iron), and induce axial chip thinning that lets you boost programmed feed per tooth `fz` by `1.4x` compared to **90° shoulder mills**. Reserve `90°` cutters for parts requiring square shoulders or thin-walled floors that would deflect under axial pressure, and choose **round-insert (`RCMT`/`RDMT`) cutters** when hogging through tough scale, weldments, or interrupted forgings.

Select a cutter diameter `Dc` roughly **1.25 to 1.5 times the workpiece width `Ae`**, and **never run the cutter centerline symmetrically down the middle of the part**. Centerline milling generates alternating radial force vectors that induce chatter and leaves an unfavorable exit angle. Instead, offset the cutter axis toward one side so that `60–75%` of the cutter diameter engages the part in a predominantly climb-milling orientation, producing a thick chip at entry that thins cleanly at exit. Program a **smooth roll-in arc entry** into the cut rather than slamming straight into the raw edge, which shocks cold carbide and causes thermal cracking when cutting with coolant. To achieve a mirror finish (`Ra 0.2–0.4 µm`) at high table feeds, install a single **Wiper insert** sitting `0.03–0.05 mm` proud axially of the standard cutting inserts.

---

id: cast-iron-machining
tag: Материалы | Materiały | Materials

**🇷🇺 Русский**
# Обработка серого (GG25) и высокопрочного (GGG40) чугуна на станках с ЧПУ
Чугуны делятся на две совершенно разные по обрабатываемости группы: **серый чугун с пластинчатым графитом (`GG25` / `СЧ25` / `EN-GJL-250`)** и **высокопрочный чугун с шаровидным графитом (`GGG40–GGG60` / `ВЧ40` / `EN-GJS-400`)**. Серый чугун `GG25` хрупок, дает мелкую порошкообразную стружку надлома и практически не создает нароста на режущей кромке, но обладает сильным абразивным действием из-за включений песка, литейной корки и карбидов. Главное правило фрезерования серого чугуна твердосплавным инструментом группы **ISO K** (с толстым CVD-покрытием `TiCN + Al2O3`) — **работа всухую (со сжатым воздухом) без эмульсии**! Прерывистая подача СОЖ при фрезеровании вызывает резкий термоудар и сетку термических трещин на пластине, а смешивание мелкой чугунной пыли с малым количеством СОЖ превращает ее в густую абразивную пасту, которая моментально съедает направляющие станка, ШВП и телескопические защиты. Если СОЖ необходима (при сверлении или чистовом точении для контроля размеров), подавайте ее мощным потоком (flood coolant) для полного смыва шлама и ставьте магнитные сепараторы в бак.

Высокопрочный чугун `GGG40/GGG50` по механике резания гораздо ближе к легированной стали, чем к серому чугуну: он образует сливную или суставчатую стружку, требует больших усилий резания и выделяет много тепла, поэтому для него выбирают более вязкие сплавы переходной группы **ISO K20–K30 / P25** и снижают скорость резания со `180–280 м/мин` (для `GG25`) до `120–180 м/мин`. Еще одна специфическая проблема чугунов — **выкрашивание края заготовки (edge breakout)** при выходе фрезы или резца из металла. Чтобы кромка отливки не откололась, используйте торцевые фрезы с углом в плане `45°` (никогда не выходите из края отливки фрезой `90°` на полной подаче!), предварительно снимайте фаску по контуру детали либо программируйте траекторию так, чтобы вектор резания на кромке был направлен внутрь массива отливки.

**🇵🇱 Polski**
# Obróbka żeliwa szarego (GG25) i sferoidalnego (GGG40) na obrabiarkach CNC
W praktyce warsztatowej żeliwa dzielą się na dwie grupy o diametralnie różnej skrawalności: **żeliwo szare z grafitem płatkowym (`GG25` / `EN-GJL-250`)** oraz **żeliwo sferoidalne z grafitem kulkowym (`GGG40–GGG60` / `EN-GJS-400`)**. Żeliwo szare `GG25` jest kruche, daje krótki, sypki wiór odpryskowy i generuje niewielkie siły skrawania, ale wykazuje silne działanie ścierne na ostrze z powodu naskórka odlewniczego i wtrąceń piasku formierskiego. Złotą zasadą podczas frezowania żeliwa szarego płytkami węglikowymi grupy **ISO K** (z grubą powłoką CVD `TiCN + Al2O3`) jest **obróbka całkowicie na sucho lub z wydmuchem sprężonego powietrza**! Przerywane chłodzenie emulsją w trakcie frezowania wywołuje szok termiczny i pęknięcia grzebieniowe węglika, a ponadto drobny pył żeliwny zmieszany z mgłą chłodziwa tworzy gęstą pastę ścierną, która błyskawicznie niszczy prowadnice liniowe, śruby kulowe i zgarniacze osłon. Jeśli chłodziwo jest konieczne (np. przy wierceniu lub wytaczaniu wykańczającym), stosuj bardzo obfity zalew (flood coolant) oraz filtry magnetyczne w wannie.

Żeliwo sferoidalne `GGG40/GGG50` zachowuje się podczas skrawania znacznie bliżej stali stopowej niż żeliwa szarego: tworzy dłuższy wiór, wywołuje zjawisko narostu oraz wysoką temperaturę na ostrzu, dlatego wymaga bardziej ciągliwych gatunków węglika **ISO K20–K30 / P25** oraz obniżenia prędkości skrawania z `180–280 m/min` (dla `GG25`) do `120–180 m/min`. Typowym problemem przy obróbce odlewów żeliwnych jest **wykruszanie krawędzi detalu (edge breakout)** w momencie wyjścia narzędzia z materiału. Aby temu zapobiec, stosuj głowice czołowe o kącie przystawienia `45°`, wykonaj fazę ochronną na krawędzi przed planowaniem lub zredukuj posuw o `50%` na ostatnich `3 mm` wyjścia z odlewu.

**🇬🇧 English**
# Machining Grey Cast Iron (GG25) and Ductile Iron (GGG40) on CNC Machines
Cast irons split into two distinct machinability regimes: **grey cast iron with flake graphite (`GG25` / `EN-GJL-250`)** and **ductile (nodular) cast iron with spheroidal graphite (`GGG40–GGG60` / `EN-GJS-400`)**. Grey iron `GG25` fractures along its graphite flakes into fine, powdery chips with low cutting forces, making abrasive flank wear from sand inclusions and casting skin the primary failure mode. When milling grey cast iron with **ISO K** carbide grades (thick CVD `TiCN + Al2O3` coatings), the golden rule is to **cut completely dry using compressed air blast**! Applying flood coolant during interrupted milling subjects hot carbide inserts to severe thermal shock and comb cracking, while light mist or weak coolant mixes with abrasive graphite dust to form a destructive grinding slurry that ruins linear guideways, ballscrews, and way covers. When coolant is mandatory—such as in deep drilling or tight-tolerance finish boring—use high-volume flood coolant to flush all swarf away and fit magnetic filtration to the sump.

Ductile iron `GGG40/GGG50` behaves much more like alloy steel than grey iron: its nodular graphite matrix is tough and ductile, producing segmented or continuous chips, higher cutting pressures, and adhesive built-up edge at low speeds. Consequently, select tougher **ISO K20–K30 / P25** grades and reduce cutting speeds from `180–280 m/min` (typical for `GG25`) down to `120–180 m/min`. Both irons suffer from **exit edge breakout (spalling)** where the cutter leaves the casting wall. Prevent edge breakout by using `45°` lead-angle face mills instead of `90°` shoulder mills, pre-chamfering the exit edge before roughing, or programming the toolpath so the cutting edge always enters across the casting perimeter rather than exiting outward.

---

id: engineering-plastics-pom-peek
tag: Материалы | Materiały | Materials

**🇷🇺 Русский**
# Механическая обработка конструкционных пластиков: POM-C, PA6, PTFE, PEEK и PMMA
Конструкционные полимеры обладают в сотни раз меньшей теплопроводностью и в `10–30` раз большим коэффициентом теплового расширения, чем стали, поэтому главные проблемы при их обработке на ЧПУ — **оплавление стружки, налипание на фрезу, тягучие заусенцы и потеря размеров после остывания детали**. Категорически нельзя резать пластики стандартным инструментом по стали со скругленной кромкой и многослойным покрытием `TiAlN`: тупая режущая кромка сминает упругий пластик вместо срезания и разогревает зону резания выше точки размягчения. Используйте специализированный инструмент для пластиков и алюминия (`ISO N`) — **однозубые (`Z=1`) или двухзубые (`Z=2`) твердосплавные фрезы без покрытия с зеркально полированными канавками**, большим положительным передним углом (`12°–20°`) и задним углом `10°–15°`, а для точения — шлифованные пластины `VCGT`/`DCGT`/`CCGT` с индексом `-AL`.

Чтобы тепло уходило вместе со стружкой, работайте на высоких скоростях резания (`Vc = 200–500 м/мин`) с **большой подачей на зуб (`fz = 0.08–0.25 мм/зуб`)**: малая подача превращает стружку в расплавленную вату, наматывающуюся на фрезу. Полиацеталь (**POM-C / Delrin**) отлично держит размеры и дает сухую ломкую стружку; капролон (**PA6 / Nylon**) активно впитывает воду (до `2–3%` по объему с разбуханием размеров), поэтому точные детали из `PA6` лучше обрабатывать с охлаждением холодным воздухом (вихревой трубкой) вместо водной эмульсии; фторопласт (**PTFE / Teflon**) чрезвычайно мягок и ползуч под нагрузкой, требуя минимального прижима кулачков через разрезные втулки. При обработке дорогостоящего **PEEK** и оргстекла (**PMMA / акрил**) выполняйте черновую выборку с припуском `0.5–1.0 мм`, давайте детали остыть и снять внутренние напряжения (для ответственных деталей — промежуточный отжиг), и лишь затем делайте чистовой проход.

**🇵🇱 Polski**
# Obróbka tworzyw konstrukcyjnych: POM-C, PA6, PTFE, PEEK oraz PMMA
Tworzywa sztuczne charakteryzują się wielokrotnie niższą przewodnością cieplną oraz `10–30` razy większym współczynnikiem rozszerzalności termicznej niż stal, dlatego głównym wyzwaniem na obrabiarkach CNC jest **nadtapianie materiału, zaklejanie rowków wiórowych, ciągliwe zadziory oraz zmiana wymiarów detalu po ostygnięciu**. Do obróbki tworzyw nigdy nie używaj narzędzi przeznaczonych do stali z zaokrągloną krawędzią i powłoką `TiAlN`: tępe ostrze zamiast ścinać sprężysty polimer wywołuje tarcie i przekracza temperaturę mięknienia. Stosuj narzędzia dedykowane do tworzyw i aluminium (`ISO N`) — **jednoostrzowe (`Z=1`) lub dwuostrzowe (`Z=2`) frezy VHM niepowlekane z polerowanymi rowkami wiórowymi**, dużym dodatnim kątem natarcia (`12°–20°`) i kątem przyłożenia `10°–15°`, a w toczeniu szlifowane na ostro płytki `VCGT`/`DCGT`/`CCGT` z łamaczem `-AL`.

Aby odprowadzać ciepło wraz z wiórem, stosuj wysokie prędkości skrawania (`Vc = 200–500 m/min`) połączone z **dużym posuwem na ostrze (`fz = 0.08–0.25 mm/z`)** — zbyt mały posuw powoduje tarcie i nawijanie stopionego plastiku na frez. Poliacetal (**POM-C / Delrin**) cechuje się świetną stabilnością wymiarową i łamliwym wiórem; poliamid (**PA6 / Ertalon**) jest silnie higroskopijny i chłonie wodę z emulsji (pęczniejąc nawet o `1–2%`), dlatego precyzyjne detale z `PA6` należy chłodzić sprężonym powietrzem; z kolei teflon (**PTFE**) płynie pod naciskiem szczęk i wymaga mocowania przez tuleje obejmujące na dużej powierzchni. Przy obróbce wysokowytrzymałego tworzywa **PEEK** oraz szkła akrylowego (**PMMA / Plexi**) zawsze zostawiaj naddatek `0.5–1.0 mm` po obróbce zgrubnej, pozwól detalowi wyrównać temperaturę do `20 °C` (a przy wąskich tolerancjach zastosuj wyżarzanie odprężające) przed przejściem wykańczającym.

**🇬🇧 English**
# Machining Engineering Plastics: POM-C, PA6, PTFE, PEEK, and PMMA
Engineering plastics exhibit thermal conductivity hundreds of times lower than steel and thermal expansion coefficients `10–30x` higher, making **chip melting, flute packing, stringy burrs, and post-machining dimensional drift** the primary shop-floor challenges. Never machine plastics with standard honed, `TiAlN`-coated steel-cutting tools: a dull or coated edge rubs and elastic-deforms the polymer instead of shearing it, instantly melting the surface. Always select dedicated `ISO N` geometry—**uncoated, mirror-polished 1-flute (`Z=1`) or 2-flute (`Z=2`) solid carbide end mills** with high positive rake angles (`12°–20°`) and generous primary relief (`10°–15°`), and periphery-ground, razor-sharp `VCGT`/`DCGT`/`CCGT` `-AL` inserts for turning.

To evacuate heat into the chip before it conducts into the workpiece, run high cutting speeds (`Vc = 200–500 m/min`) paired with an **aggressive feed per tooth (`fz = 0.08–0.25 mm/tooth`)**; timid feed rates cause frictional rubbing and wrap molten plastic around the cutter. Acetal (**POM-C / Delrin**) machines cleanly with minimal moisture absorption; Nylon (**PA6**) is highly hygroscopic and swells when soaked in water-based flood coolant, so machine tight-tolerance `PA6` parts dry with a cold-air vortex gun; **PTFE (Teflon)** creeps under clamping pressure and requires low-pressure pie jaws or vacuum fixtures. When machining high-performance **PEEK** (especially glass- or carbon-filled grades, which require `PCD` or diamond-coated tooling) or optical **PMMA (Acrylic)**, rough the part leaving `0.5–1.0 mm` stock, perform a stress-relief anneal or let the part thermally stabilize to `20 °C`, and unclamp/re-clamp lightly before the final finishing pass.

---

id: copper-brass-machining
tag: Материалы | Materiały | Materials

**🇷🇺 Русский**
# Обработка чистой электротехнической меди (М1) и автоматной латуни
Несмотря на внешнее сходство, **чистая электротехническая медь (`М1` / `Cu-ETP` / `CW004A`, 99.9% Cu)** и **свинцовистая автоматная латунь (`ЛС59-1` / `CuZn39Pb3` / `CW614N`)** представляют собой две полные противоположности в металлообработке. Автоматная латунь `ЛС59-1` содержит `1.5–3%` свинца, который выступает внутренней твердой смазкой и охрупчивает стружку: она режется на экстремальных скоростях (`Vc = 200–450 м/мин`), дает мелкую игольчатую стружку, почти не изнашивает инструмент и не дает заусенцев. Напротив, чистая медь `М1` чрезвычайно пластична и вязка, обладает высокой теплопроводностью и коэффициентом трения: при резании она течет, как мягкая жевательная резинка, налипает на переднюю поверхность инструмента, образует огромные трудноудаляемые заусенцы и способна заклинить и сломать фрезу или метчик за доли секунды.

Для успешного точения и фрезерования чистой меди необходим инструмент с **максимально острым положительным передним углом (`15°–25°`)**, зеркально полированными стружечными канавками и антиадгезионным покрытием **DLC (алмазоподобный углерод)**, **ZrN** или **TiB2** (либо полированный твердый сплав/алмаз `PCD`). Скорость резания по меди поддерживайте достаточно высокой (`Vc = 120–250 м/мин`), чтобы преодолеть зону наростообразования, обязательно используя обильную подачу эмульсии повышенной концентрации (`8–12%`) для смазки зоны контакта. При сверлении меди используйте параболические сверла с полированными канавками и циклом дробления стружки `G73`. Нарезание мелких резьб (`М3–М10`) в медных шинах и теплообменниках режущим метчиком часто приводит к его заклиниванию и обрыву при реверсе — вместо режущих метчиков переходите на **бесстружечные раскатники (forming taps)** с титановым или `DLC` покрытием (просверлив отверстие большего диаметра, например `Ø5.55 мм` под резьбу `М6х1`) либо используйте **резьбофрезерование**.

**🇵🇱 Polski**
# Obróbka czystej miedzi elektrolitycznej (Cu-ETP) a mosiądzu automatowego
Mimo przynależności do tej samej grupy metali kolorowych, **czysta miedź elektrolityczna (`Cu-ETP` / `M1E` / `CW004A`, 99.9% Cu)** oraz **mosiądz automatowy ołowiowy (`CuZn39Pb3` / `MO58` / `CW614N`)** zachowują się podczas skrawania jak dwa zupełnie inne światy. Mosiądz automatowy zawiera `1.5–3%` ołowiu, który działa jak wewnętrzny smar i łamacz wióra: pozwala na obróbkę z ekstremalnymi prędkościami (`Vc = 200–450 m/min`), tworzy drobny, sypki wiór igłowy i zapewnia doskonałą gładkość powierzchni bez zadziorów. Natomiast czysta miedź `Cu-ETP` jest wyjątkowo plastyczna, ciągliwa i lepka: podczas skrawania płynie pod ostrzem, natychmiast zakleja rowki wiórowe (tworząc masywny narost), generuje ogromne zadziory i potrafi zakleszczyć oraz złamać frez lub gwintownik w ułamku sekundy.

Aby skutecznie toczyć i frezować czystą miedź, należy stosować narzędzia o **bardzo ostrym, dodatnim kącie natarcia (`15°–25°`)**, lustrzanie polerowanych powierzchniach natarcia oraz powłokach przeciwciernych **DLC**, **ZrN** lub **TiB2** (ewentualnie narzędzia niepowlekane polerowane lub ostrza diamentowe `PCD`). Prędkość skrawania w miedzi utrzymuj na poziomie `Vc = 120–250 m/min` przy intensywnym chłodzeniu emulsją o podwyższonym stężeniu (`8–12%`), która zapewnia poślizg wióra po ostrzu. Podczas wiercenia w miedzi używaj wierteł z polerowanymi rowkami i cyklem łamania wióra `G73`. Wykonywanie gwintów wewnętrznych (`M3–M10`) w szynach prądowych i radiatorach miedzianych zwykłym gwintownikiem skrawającym często kończy się jego ukręceniem przy wycofywaniu — znacznie bezpieczniejszym rozwiązaniem jest **gwintowanie bezwiórowe (wygniatakami / forming taps)** z powłoką `DLC`/`TiCN` (pamiętając o większej średnicy otworu pod wygniatak, np. `Ø5.55 mm` pod `M6x1`) lub **frezowanie gwintu**.

**🇬🇧 English**
# Machining Pure Electrolytic Copper (Cu-ETP) vs Free-Cutting Brass
Although both are copper-base non-ferrous metals (`ISO N`), **pure electrolytic tough-pitch copper (`Cu-ETP` / `C11000` / `CW004A`, 99.9% Cu)** and **leaded free-cutting brass (`CuZn39Pb3` / `C36000` / `CW614N`)** sit at opposite extremes of machinability. Free-cutting brass contains `1.5–3%` dispersed lead, which acts as a microscopic chipbreaker and lubricant: it shears effortlessly at `Vc = 200–450 m/min` into tiny needle chips with minimal tool wear and virtually zero burrs. Pure copper, by contrast, is notoriously gummy, ductile, and adhesive: it smears rather than shears, welds onto tool flutes (built-up edge), throws heavy rollover burrs, and expands thermally to seize drills, end mills, and taps mid-cut.

To machine pure copper cleanly, use tooling with a **razor-sharp, high positive rake angle (`15°–25°`)**, mirror-polished flutes, and low-friction **DLC (Diamond-Like Carbon)**, **ZrN**, or **TiB2** coatings (or `PCD` diamond inserts for high-volume production). Maintain brisk surface speeds (`Vc = 120–250 m/min`) to stay above the built-up-edge zone, and flood the cut with rich emulsion (`8–12%` concentration) to lubricate chip flow. When drilling copper busbars or heat sinks, use polished parabolic-flute drills with a `G73` chip-breaking cycle. Cut-tapping small threads (`M3–M10`) in pure copper is a notorious tap-breaker because the gummy threads spring back and grab the tap during spindle reversal; eliminate tap breakage by switching to **cold-forming (roll) taps** lubricated with rich coolant (drilling the proper larger pre-hole, such as `Ø5.55 mm` for `M6x1`) or **thread milling**.

---

id: inconel-superalloys
tag: Материалы | Materiały | Materials

**🇷🇺 Русский**
# Обработка жаропрочных никелевых сплавов: Inconel 718, Hastelloy и Waspaloy
Никелевые жаропрочные суперсплавы (**Inconel 718**, **Inconel 625**, **Hastelloy C-276**, **Waspaloy** — группа **ISO S**) относятся к самым труднообрабатываемым материалам в промышленности. Их главная особенность — сохранение высокой прочности при температурах до `700–800 °C`, крайне низкая теплопроводность (около `11 Вт/(м·К)` у Inconel 718 — почти в `4–5` раз ниже, чем у углеродистой стали, из-за чего `80%` тепла концентрируется на режущей кромке) и **мгновенный деформационный наклеп (work hardening)** поверхностного слоя под действием давления инструмента. При работе твердосплавным инструментом скорость резания по `Inconel 718` необходимо жестко ограничивать в узком диапазоне **`Vc = 25–45 м/мин`** при точении и `20–35 м/мин` при фрезеровании; попытка поднять скорость для твердого сплава до `60–80 м/мин` приводит к пластической деформации и сгоранию кромки за `30–60 секунд`. Альтернатива для чернового обдира — режущая керамика, армированная нитевидными кристаллами карбида кремния (**SiCw whiskered ceramics** или **SiAlON**), которая работает в режиме термопластического размягчения стружки на скоростях `Vc = 180–350 м/мин`.

Чтобы победить наклеп и характерный **проточинный износ (notch wear)** на границе глубины резания, никогда не допускайте трения кромки без съема стружки: поддерживайте уверенную подачу (`fn = 0.12–0.25 мм/об`), используйте **круглые пластины (`RCMT`/`RNGN`)** или державки с малым углом в плане (`κr = 45°`), которые плавно распределяют нагрузку на линии глубины резания. При многопроходном точении или фрезеровании **меняйте глубину резания `Ap` от прохода к проходу** (например, `2.0 мм` → `1.6 мм` → `1.8 мм`), чтобы зона контакта с наклепанным слоем предыдущего прохода не приходилась на одну и ту же точку пластины, и подавайте СОЖ под высоким давлением **`50–70 бар`** точно под стружку.

**🇵🇱 Polski**
# Obróbka nadstopów niklu: Inconel 718, Hastelloy oraz Waspaloy
Żarowytrzymałe nadstopy na bazie niklu (**Inconel 718**, **Inconel 625**, **Hastelloy C-276**, **Waspaloy** — grupa materiałowa **ISO S**) należą do najtrudniej skrawalnych materiałów w przemyśle lotniczym i energetycznym. Ich specyfika wynika z utrzymywania wysokiej wytrzymałości mechanicznej w temperaturach rzędu `700–800 °C`, bardzo niskiej przewodności cieplnej (ok. `11 W/(m·K)` dla Inconel 718, przez co aż `80%` ciepła skrawania trafia bezpośrednio w ostrze) oraz **gwałtownego utwardzania zgniotowego (work hardening)** warstwy wierzchniej podczas przejścia narzędzia. Skrawając narzędziami z węglika spiekanego, prędkość skrawania dla `Inconel 718` należy rygorystycznie utrzymywać w przedziale **`Vc = 25–45 m/min`** przy toczeniu i `20–35 m/min` przy frezowaniu; przekroczenie `60 m/min` dla węglika powoduje jego uplastycznienie i zniszczenie w kilkadziesiąt sekund. Alternatywą w obróbce zgrubnej jest ceramika zbrojona wiskerami (**SiCw whiskered ceramics** lub **SiAlON**), pracująca w zakresie `Vc = 180–350 m/min`.

Aby ograniczyć zgniot oraz typowe dla nadstopów **zużycie wrębowe (notch wear)** na linii głębokości skrawania, nigdy nie dopuszczaj do zatrzymania posuwu ani pracy ze zbyt małym naddatkiem: stosuj dodatnie, ostre geometrie PVD (`TiAlN`/`AlTiN`), używaj **płytek okrągłych (`RCMT`/`RNGN`)** lub głowic o kącie przystawienia `κr = 45°`, które zmniejszają kąt wejścia w utwardzony naskórek. W obróbce wieloprzejściowej **różnicuj głębokość skrawania `Ap` w kolejnych przejściach** (np. `2.0 mm` → `1.6 mm` → `1.8 mm`), aby styk z utwardzoną warstwą nie wypadał stale w tym samym punkcie krawędzi, oraz podawaj chłodziwo pod wysokim ciśnieniem **`50–70 bar`** bezpośrednio w strefę wióra.

**🇬🇧 English**
# Machining Nickel-Based Superalloys: Inconel 718, Hastelloy, and Waspaloy
Nickel-based heat-resistant superalloys (**Inconel 718**, **Inconel 625**, **Hastelloy C-276**, **Waspaloy**—classified under **ISO S**) are among the most punishing materials in CNC machining. They retain extreme shear strength at temperatures above `700 °C`, possess notoriously poor thermal conductivity (roughly `11 W/(m·K)` for aged Inconel 718, concentrating `80%` of cutting heat directly into the tool tip), and suffer from **rapid work hardening** whenever a cutting edge rubs or dwells. When machining aged `Inconel 718` with PVD-coated carbide (`TiAlN`/`AlTiN`), surface speeds must be strictly kept between **`Vc = 25–45 m/min`** in turning and `20–35 m/min` in milling; pushing carbide to `60–80 m/min` causes catastrophic plastic deformation of the cutting edge within seconds. For high-metal-removal roughing, switch to **SiCw whisker-reinforced ceramic** or **SiAlON** inserts run at `Vc = 180–350 m/min`, which plasticize the shear zone ahead of the tool.

To combat work hardening and severe **depth-of-cut notch wear**, never dwell in the cut and never take skim passes shallower than the work-hardened skin (`Ap > 0.25 mm`). Use **round inserts (`RCMT`/`RNGN`)** or `45°` lead-angle tools to thin the chip at the depth-of-cut line and distribute notch stress along a long arc of the cutting edge. On multi-pass roughing cycles, **vary the axial depth of cut `Ap` between successive passes** (for example, `2.0 mm` → `1.6 mm` → `1.8 mm`) so the hardened boundary from the previous pass does not hammer the exact same spot on the insert, and apply high-pressure directed coolant at **`50–70 bar`** to fracture chips and cool the cutting interface.

---

id: hsk-vs-bt-cat-tapers
tag: Инструмент | Narzędzia | Tooling

**🇷🇺 Русский**
# Конусы шпинделя BT40 / CAT40 / SK40 против HSK-A63 и BBT40 (Big-Plus)
Классические инструментальные оправки с крутым конусом **7:24** (**BT40**, **CAT40**, **SK40 / DIN 69871**) десятилетиями оставались стандартом фрезерных станков, но они базируются в шпинделе **исключительно по конической поверхности**, оставляя конструктивный торцевой зазор `2–3.2 мм` между фланцем оправки и торцом шпинделя. Такая схема прекрасно работает на оборотах до `8,000–10,000 об/мин`, но при переходе к высокоскоростной обработке (`15,000–24,000 об/мин`) центробежная сила заставляет тонкостенный носок шпинделя расширяться в радиальном направлении. В результате тяга затягивает жесткий монолитный конус `BT40/SK40` глубже внутрь шпинделя на **`0.02–0.06 мм` по оси Z** (вызывая ступеньки на чистовых поверхностях при смене оборотов и заклинивание оправки после остановки шпинделя), а при больших боковых нагрузках оправка наклоняется в расширенном конусе, увеличивая радиальное биение и вибрацию.

Для устранения этого дефекта были созданы две системы с **двойным контактом (по конусу и торцу шпинделя одновременно — Dual Contact)**. Система **BBT40 (Big-Plus)** сохраняет стандартный угол конуса `7:24` и полную обратную совместимость с обычными оправками `BT40`, но имеет прецизионно шлифованный фланец, который упирается в торец шпинделя при упругом натяге конуса, повышая жесткость на изгиб на `30–50%` и исключая проваливание по оси `Z`. Еще более совершенна система **HSK (Hohl-Schaft-Kegel, например HSK-A63)** с полым тонкостенным конусом **1:10**: цанговый захват разжимает полую стенку хвостовика изнутри, прижимая торец оправки к шпинделю, а при росте оборотов центробежная сила еще сильнее распирает упругий конус `HSK`, **увеличивая усилие зажима с ростом RPM**. При эксплуатации `HSK` и `BBT` критически важно держать конус и торец идеально чистыми от микростружки и регулярно смазывать конус `HSK` специальной монтажной пастой (*Metaflux*).

**🇵🇱 Polski**
# Stożki wrzeciona BT40 / CAT40 / SK40 a systemy HSK-A63 oraz BBT40 (Big-Plus)
Tradycyjne oprawki narzędziowe ze stożkiem stromym **7:24** (**BT40**, **CAT40**, **SK40 / DIN 69871**) bazują we wrzecionie **wyłącznie na powierzchni stożkowej**, pozostawiając celową szczelinę konstrukcyjną `2–3.2 mm` pomiędzy kołnierzem oprawki a czołem wrzeciona. Konstrukcja ta sprawdza się dobrze do `8,000–10,000 obr./min`, jednak w obróbce szybkościowej HSC (`15,000–24,000 obr./min`) siła odśrodkowa powoduje promieniowe rozszerzanie się gniazda wrzeciona. W rezultacie dociągacz wciąga sztywny, pełny stożek `BT40/SK40` głębiej do wnętrza wrzeciona o **`0.02–0.06 mm` w osi Z** (co skutkuje powstawaniem progów na powierzchni detalu po zmianie obrotów oraz zakleszczaniem oprawki po zatrzymaniu wrzeciona), a przy dużych siłach bocznych oprawka traci podparcie i wpada w drgania.

Rozwiązaniem tego problemu są systemy z **jednoczesnym stykiem stożka i czoła (Dual Contact)**. Standard **BBT40 (Big-Plus)** zachowuje kąt stożka `7:24` oraz pełną kompatybilność wsteczną ze zwykłymi oprawkami `BT40`, ale dzięki precyzyjnie szlifowanemu kołnierzowi opiera się o czoło wrzeciona, zwiększając sztywność zginania o `30–50%` i blokując wciąganie narzędzia w osi `Z`. Jeszcze wyższe parametry przy wysokich obrotach oferuje system **HSK (np. HSK-A63)** z krótkim, cienkościennym stożkiem drążonym **1:10**: rozprężny chwytak wewnętrzny dociska kołnierz do czoła wrzeciona, a wraz ze wzrostem obrotów siła odśrodkowa rozszerza elastyczną ściankę stożka `HSK` szybciej niż korpus wrzeciona, **zwiększając siłę zacisku przy wysokim RPM**. Eksploatując systemy `HSK` i `BBT`, należy bezwzględnie utrzymywać stożek i powierzchnię czołową w idealnej czystości (jeden opiłek o grubości `0.01 mm` na czole wprowadza bicie promieniowe) oraz okresowo smarować stożki `HSK` pastą montażową (*Metaflux*).

**🇬🇧 English**
# Spindle Taper Comparison: BT40 / CAT40 / SK40 vs HSK-A63 and BBT40 (Big-Plus)
Conventional **7:24 steep-taper toolholders** (**BT40**, **CAT40**, **SK40 / DIN 69871**) locate inside the machine spindle **solely on the tapered surface**, intentionally leaving a `2–3.2 mm` axial gap between the toolholder flange and the spindle nose face. While reliable below `8,000–10,000 RPM`, standard `7:24` tapers suffer severe limitations in high-speed machining (`15,000–24,000 RPM`): centrifugal force causes the hollow spindle nose to expand radially faster than the solid steel toolholder shank. As the spindle mouth widens, the drawbar pulls the `BT40/SK40` taper deeper into the spindle by **`0.02–0.06 mm` along the Z-axis** (ruining Z-depth blending accuracy and wedging the holder tight when the spindle stops), while lateral milling forces rock the holder inside the bell-mouthed taper, triggering chatter and fretting corrosion.

Two **dual-contact (simultaneous taper-and-face contact)** interfaces solve this limitation. **BBT40 (Big-Plus)** retains the `7:24` steep taper and backward compatibility with standard `BT40` racks, but uses a precision-ground gauge-line flange that seats firmly against the spindle face as the taper elastically compresses, boosting bending rigidity by `30–50%` and eliminating axial Z pull-in. **HSK (such as HSK-A63)** uses a lightweight, hollow **1:10 taper** gripped from the inside by expanding collet segments: as spindle RPM climbs, centrifugal force expands the thin hollow `HSK` shank walls outward against the spindle bore, **increasing radial clamping force at high RPM** while maintaining sub-micron axial repeatability. Because both `HSK` and `BBT` rely on face contact, keep both the taper and spindle face spotless—a single `0.01 mm` chip trapped on the face tilts the tool axis—and coat `HSK` tapers regularly with anti-fretting paste (*Metaflux*).

---

id: pull-studs-retention-knobs
tag: Инструмент | Narzędzia | Tooling

**🇷🇺 Русский**
# Штревели (Pull Studs): как деталь за $10 защищает шпиндель за $25 000
**Штревель (Retention Knob / Pull Stud)** — это самый нагруженный элемент инструментальной оправки `BT40`, `CAT40` или `SK40`, через который цанговый захват тяги шпинделя (**Drawbar**) втягивает конус с усилием от `8` до `15 кН`. Категорически запрещено путать стандарты: штревели `DIN 69872`, `ISO 7388/2` и японские `MAS 403` (`BT Type I` с углом захвата `45°` и `Type II` с углом `60°` или `90°`) визуально похожи, но несовместимы. Установка штревеля с неверным углом приводит к тому, что лепестки захвата давят только на острую кромку буртика: оправка теряет жесткость, возникает фреттинг-коррозия конуса, а при тяжелом фрезеровании штревель обрывает, выбрасывая фрезу из шпинделя на полных оборотах.

При сборке всегда используйте динамометрический ключ (обычно `50–70 Н·м` для `40`-го конуса согласно каталогу производителя): затяжка «от руки» длинным воротком или трубой раздувает тонкую резьбовую часть конуса оправки на `0.005–0.015 мм`, из-за чего она перестает плотно прилегать к зеркалу шпинделя. Для станков с подачей СОЖ через шпиндель (**TSC — Through-Spindle Coolant**) до `70 бар` применяйте штревели с торцевым или радиальным уплотнительным кольцом **O-ring**, регулярно проверяя его эластичность. Раз в месяц осматривайте рабочую фаску штревеля: глубокие вмятины, кольцевая выработка или микротрещины от закаленных лапок захвата требуют немедленной замены детали.

**🇵🇱 Polski**
# Grzybki pociągowe (Pull Studs): jak element za 10 USD chroni wrzeciono warte 25 000 USD
**Grzybek pociągowy (Pull Stud / Retention Knob)** to najbardziej obciążony element oprawki narzędziowej `BT40`, `CAT40` lub `SK40`, za który chwytak ściągacza wrzeciona (**Drawbar**) wciąga stożek z siłą od `8` do `15 kN`. Bezwzględnie nie wolno mieszać standardów: grzybki `DIN 69872`, `ISO 7388/2` oraz japońskie `MAS 403` (`BT Typ I` z kątem chwytu `45°` oraz `Typ II` z kątem `60°` lub `90°`) wyglądają podobnie, ale są niekompatybilne. Zamontowanie grzybka o niewłaściwym kącie sprawia, że pazury chwytaka opierają się wyłącznie na ostrej krawędzi kołnierza: oprawka traci sztywność, pojawia się korozja cierna (**fretting**) stożka, a podczas ciężkiego frezowania grzybek pęka, wyrzucając narzędzie z wrzeciona przy pełnych obrotach.

Podczas montażu zawsze używaj klucza dynamometrycznego (zazwyczaj `50–70 Nm` dla stożka `40` według katalogu producenta): dokręcanie „na wyczucie” długim kluczem z przedłużką rozpiera cienkościenną część gwintowaną stożka oprawki o `0.005–0.015 mm`, przez co stożek przestaje przylegać do gniazda wrzeciona. W obrabiarkach z chłodzeniem przez wrzeciono (**TSC — Through-Spindle Coolant**) do `70 bar` stosuj grzybki z uszczelnieniem **O-ring**, regularnie kontrolując stan uszczelki. Raz w miesiącu sprawdzaj fazę roboczą grzybka: głębokie wgniecenia, rowki lub mikropęknięcia od zahartowanych pazurów ściągacza oznaczają konieczność natychmiastowej wymiany.

**🇬🇧 English**
# Pull Studs (Retention Knobs): Why a $10 Part Protects a $25,000 Spindle
A **pull stud (retention knob)** is the single most stressed component on a `BT40`, `CAT40`, or `SK40` toolholder, transmitting `8` to `15 kN` of drawbar clamping force directly into the spindle taper. Never mix pull-stud standards: `DIN 69872`, `ISO 7388/2`, and Japanese `MAS 403` (`BT Type I` with a `45°` head angle vs. `Type II` with `60°` or `90°` angles) look deceptively similar on a workbench but are strictly incompatible. Threading the wrong angle stud into a holder causes the drawbar claws to make point contact on the shoulder edge rather than full surface contact, resulting in taper fretting, severe chatter, or catastrophic stud fracture that launches the toolholder out of the spindle at high RPM.

Always install retention knobs using a calibrated **torque wrench** (typically `50–70 Nm` for `40`-taper holders per manufacturer specs) and a dedicated socket. Over-tightening with a cheater bar swells the thin backend of the toolholder taper by `0.005–0.015 mm`, ruining taper contact and inducing runout, while also risking stress cracks at the thread relief. On machines equipped with high-pressure **Through-Spindle Coolant (TSC)** up to `70 bar`, use coolant-style studs with an intact **O-ring** seal to prevent coolant from flooding the spindle bearings, and inspect every stud monthly for claw indentation wear or hairline fatigue cracks.

---

id: shrink-fit-vs-hydraulic-chucks
tag: Инструмент | Narzędzia | Tooling

**🇷🇺 Русский**
# Термоусадочные (Shrink-Fit) против гидропластовых (Hydraulic) оправок: выбор под задачу
**Термоусадочные оправки (Shrink-Fit Chucks)** и **гидропластовые патроны (Hydraulic Chucks)** обеспечивают радиальное биение менее `0.003 мм` на вылете `3×D`, но работают на совершенно разных физических принципах. В термооправке индукционная станция за `5–8 секунд` разогревает стальной корпус до `300–350 °C`; отверстие расширяется, в него вставляется твердосплавная фреза с допуском хвостовика не грубее `h6`, и после охлаждения возникает монолитный натяг по всей поверхности. Главный козырь термоусадки — тонкий профиль носовой части (угол `3°` или `4.5°`) и высокая жесткость на изгиб, что делает ее безальтернативной для `5`-осевой обработки глубоких полостей пресс-форм, однако после `1500–2000` циклов нагрева сталь теряет упругость.

**Гидропластовая оправка** зажимает инструмент с помощью шестигранного ключа: поршень нагнетает давление до `600 бар` в замкнутую масляную камеру, и тонкостенная стальная гильза равномерно обжимает хвостовик. Масляная прослойка работает как встроенный гидравлический демпфер, гасящий высокочастотные микровибрации при чистовом фрезеровании, развертывании и сверлении, что повышает стойкость режущей кромки на `20–40%` и дает зеркальную шероховатость `Ra < 0.4 мкм`. Кроме того, гидропатроны позволяют использовать разрезные **переходные втулки (Reducer Sleeves)** для зажима разных диаметров в одной оправке `Ø20` или `Ø32 мм` и не требуют покупки дорогостоящей станции индукционного нагрева.

**🇵🇱 Polski**
# Oprawki termokurczliwe (Shrink-Fit) kontra hydrauliczne (Hydraulic): porównanie warsztatowe
**Oprawki termokurczliwe (Shrink-Fit)** oraz **oprawki hydrauliczne (Hydraulic Chucks)** gwarantują bicie promieniowe poniżej `0.003 mm` na wysięgu `3×D`, lecz wykorzystują odmienne zjawiska fizyczne. W oprawce termokurczliwej nagrzewnica indukcyjna w `5–8 sekund` podgrzewa stalowy korpus do `300–350 °C`; otwór rozszerza się, umożliwiając wsunięcie chwytu frezu węglikowego wykonanego w tolerancji `h6`, a po schłodzeniu powstaje niemal monolityczne połączenie skurczowe. Największą zaletą systemu **Shrink-Fit** jest niezwykle smukły zarys noska (kąt `3°` lub `4.5°`) i ogromna sztywność promieniowa, co czyni go niezastąpionym w `5`-osiowej obróbce głębokich gniazd form wtryskowych, choć po `1500–2000` cyklach grzania stal traci swoje właściwości sprężyste.

**Oprawka hydrauliczna** zaciska narzędzie za pomocą zwykłego klucza imbusowego: śruba tłoczkowa wytwarza ciśnienie do `600 bar` w zamkniętej komorze olejowej, a cienkościenna tuleja rozprężna równomiernie obejmuje chwyt narzędzia. Warstwa oleju działa jak wbudowany tłumik drgań, pochłaniając mikrodrgania wysokiej częstotliwości podczas frezowania wykańczającego, rozwiercania i wiercenia, co wydłuża trwałość ostrza o `20–40%` i pozwala uzyskać lustrzaną chropowatość `Ra < 0.4 µm`. Co więcej, oprawki hydrauliczne współpracują z **tulejami redukcyjnymi (Reducer Sleeves)** dla średnic bazowych `Ø20` lub `Ø32 mm` i nie wymagają kosztownej nagrzewnicy indukcyjnej.

**🇬🇧 English**
# Shrink-Fit vs. Hydraulic Chucks: Choosing the Right High-Precision Toolholder
Both **shrink-fit toolholders** and **hydraulic chucks** deliver exceptional concentricity with less than `0.003 mm` radial runout at `3×D` overhang, yet they excel in very different machining scenarios. An induction shrink-fit unit heats the toolholder nose to `300–350 °C` in `5–8 seconds`, expanding the bore so a carbide shank with an `h6` tolerance slips in effortlessly; once cooled, `360°` interference contact locks the cutter with maximum bending stiffness. Because shrink-fit holders need no mechanical clamping mechanisms in the nose, they feature ultra-slim `3°` or `4.5°` wall profiles ideal for reaching deep `5`-axis mold cavities and die ribs, though they require an induction heater and degrade after roughly `1,500–2,000` thermal cycles.

A **hydraulic chuck** uses a simple hex wrench to actuate an internal piston, pressurizing an oil-filled expansion chamber up to `600 bar` so a thin inner membrane clamps tightly around the tool shank. That internal oil cushion provides superior **micro-vibration damping**, suppressing harmonic chatter during finishing passes, reaming, and deep-hole drilling while extending carbide tool life by `20–40%` and improving surface finish below `Ra 0.4 µm`. Furthermore, a single `Ø20 mm` or `Ø32 mm` hydraulic chuck can accept precision **reducer sleeves** to hold multiple shank diameters and allows tool changes at the machine in under `15 seconds`.

---

id: vise-squaring-jaw-lift
tag: Наладка | Ustawianie | Setup

**🇷🇺 Русский**
# Выставление станочных тисков и борьба с подъемом подвижной губки
Точность фрезерной операции начинается с выверки неподвижной губки тисков (**Fixed Jaw**) по оси `X` или `Y` с помощью рычажного индикатора (**Dial Test Indicator**) с ценой деления `0.002` или `0.01 мм`. Слегка подтяните один прижимной болт, установите ножку индикатора на шлифованную плоскость неподвижной губки и прогоните стол на всю длину губок (`150–200 мм`): легкими ударами безынерционного молотка (**Deadblow Hammer**) добейтесь отклонения не более `0.005 мм`, после чего затяните оба болта и обязательно выполните контрольный проход, так как финальная затяжка часто уводит тиски на `0.01–0.02 мм`.

Главная скрытая проблема любых тисков — **подъем подвижной губки (Jaw Lift)** при зажиме, из-за которого заготовка отрывается от подкладок (**Parallels**) на `0.02–0.08 мм` и получает клиновидность по оси `Z`. Даже в прецизионных тисках со сферическим прижимным сегментом типа **Kurt AngLock**, который тянет губку вниз под углом `45°`, износ направляющих или стружка под губкой вызывают подъем детали. Всегда выбирайте параллельки так, чтобы заготовка выступала над губками не более чем на `30–40%`, при зажиме осаживайте деталь ударами мягкого молотка до тех пор, пока обе параллельки не перестанут сдвигаться пальцами, и используйте динамометрический ключ (`40–60 Н·м`) на винте тисков для стабильной высоты `Z` в серии.

**🇵🇱 Polski**
# Ustawianie imadła maszynowego i kompensacja unoszenia szczęki ruchomej
Dokładność operacji frezarskiej zaczyna się od wyosiowania szczęki stałej imadła (**Fixed Jaw**) względem osi `X` lub `Y` za pomocą czujnika zegarowego dźwigniowego (**DTI — Dial Test Indicator**) o działce elementarnej `0.002` lub `0.01 mm`. Lekko dokręć jedną śrubę mocującą, oprzyj końcówkę pomiarową o szlifowaną powierzchnię szczęki stałej i przejedź stołem na całej długości (`150–200 mm`): uderzeniami młotka bezodrzutowego (**Deadblow Hammer**) skoryguj położenie do odchyłki poniżej `0.005 mm`, a po mocnym dokręceniu obu łap zawsze wykonaj przejazd kontrolny, ponieważ dociąganie śrub potrafi przestawić korpus o `0.01–0.02 mm`.

Największą pułapką podczas mocowania jest **unoszenie szczęki ruchomej (Jaw Lift)**, które odrywa obrabiany detal od podkładek równoległych (**Parallels**) o `0.02–0.08 mm` i powoduje błąd równoległości w osi `Z`. Nawet w imadłach z mechanizmem dociągającym typu **Kurt AngLock** (półkula ściągająca szczękę w dół pod kątem `45°`), zużycie prowadnic lub drobny wiór pod szczęką wywołują podnoszenie detalu. Dobieraj podkładki tak, aby detal wystawał ponad szczęki maksymalnie na `30–40%`, podczas zaciskania dobijaj go młotkiem z tworzywa, aż obie podkładki przestaną przesuwać się pod palcami, a w produkcji seryjnej stosuj klucz dynamometryczny (`40–60 Nm`), by zachować powtarzalną bazę `Z`.

**🇬🇧 English**
# Machine Vise Setup: Squaring the Fixed Jaw and Eliminating Jaw Lift
Every accurate milling setup starts by tramming the vise’s **fixed jaw** parallel to the machine axis using a `0.002 mm` or `0.01 mm` **dial test indicator (DTI)** mounted to the spindle. Snug one hold-down bolt as a pivot point, sweep the indicator stylus across the full `150–200 mm` ground face of the fixed jaw, and tap the vise body with a **deadblow hammer** until total indicator reading (**TIR**) stays within `0.005 mm`. Always sweep the jaw one final time after fully torquing both toe clamps, as uneven clamping pressure on T-nuts frequently pulls the vise out of square by `0.01–0.02 mm`.

Once squared, you must guard against **movable-jaw lift**, where clamping force causes the sliding jaw to tilt upward and lift the workpiece `0.02–0.08 mm` off the **parallels**, ruining `Z`-height repeatability and flatness. Modern pull-down vises using the **Kurt AngLock** spherical-segment design drive the movable jaw downward at a `45°` angle during clamping, but worn ways or packed chips underneath the jaw slide will defeat this mechanism. Select parallels that keep less than `30–40%` of the part above the jaw line, tap the top of the stock with a deadblow hammer while tightening until neither parallel can be slid by thumb pressure, and use a **torque wrench** (`40–60 Nm`) on the vise screw for consistent clamping deformation across a batch.

---

id: zero-point-clamping-systems
tag: Наладка | Ustawianie | Setup

**🇷🇺 Русский**
# Системы нулевого базирования (Zero-Point Clamping): переналадка станка за 30 секунд
**Системы нулевого базирования (Zero-Point Clamping Systems)**, такие как **Schunk Vero-S**, **Lang Quick-Point** или **Erowa**, позволяют сократить время смены приспособлений с `30–45 минут` до `30 секунд` при гарантированной повторяемости позиционирования `< 0.005 мм` (а в прецизионных сериях до `0.002 мм`). В стол станка монтируется базовая плита с пневматическими или механическими зажимными модулями, а на нижнюю плоскость тисков, паллет, трехкулачковых патронов или непосредственно заготовок прикручиваются закаленные **центрирующие штифты (Pull Studs)**. При подаче сжатого воздуха (`6 бар`) кулачки модуля разжимаются, а при сбросе давления пакет мощных тарельчатых пружин мгновенно втягивает штифт вниз и жестко базирует паллету по торцу и короткому конусу.

Главный экономический эффект технологии **Zero-Point** заключается в вынесении наладки за пределы рабочей зоны станка (**Offline Setup**). Пока шпиндель режет текущую партию деталей, наладчик на слесарном верстаке спокойно устанавливает следующую заготовку в тиски-спутник, обкатывает ее и при необходимости измеряет на КИМ. Стандартизация сетки модулей (например, шаг `200 мм` или квадрат `96×96 мм`) позволяет за секунды переставлять деталь с `3`-осевого вертикального фрезерного центра на `5`-осевой станок или электроэрозионный станок без повторного обнуления `G54` датчиком касания.

**🇵🇱 Polski**
# Systemy bazowania zerowego (Zero-Point Clamping): przezbrojenie maszyny w 30 sekund
**Systemy mocowania w punkcie zerowym (Zero-Point Clamping Systems)**, takie jak **Schunk Vero-S**, **Lang Quick-Point** czy **Erowa**, skracają czas wymiany oprzyrządowania z `30–45 minut` do zaledwie `30 sekund`, zachowując powtarzalność pozycjonowania poniżej `0.005 mm` (a w wersjach precyzyjnych nawet `0.002 mm`). Na stole obrabiarki montuje się płytę bazową z modułami pneumatycznymi lub mechanicznymi, natomiast do spodu imadeł, uchwytów trójszczękowych, palet lub bezpośrednio do detali przykręca się hartowane **sworznie bazujące (Pull Studs)**. Podanie sprężonego powietrza (`6 bar`) otwiera zamek modułu, a odcięcie ciśnienia sprawia, że pakiet sprężyn talerzowych z ogromną siłą dociąga sworzeń do powierzchni czołowej i stożka centrującego.

Największą korzyścią wdrożenia systemu **Zero-Point** jest przeniesienie operacji ustawiania poza przestrzeń roboczą obrabiarki (**Offline Setup**). Podczas gdy wrzeciono obrabia bieżącą serię, operator na stanowisku przygotowawczym mocuje kolejny detal w imadle paletowym lub weryfikuje go na maszynie pomiarowej CMM bez zatrzymywania produkcji. Ujednolicenie siatki montażowej (np. rozstaw `200 mm` lub system `96×96 mm`) pozwala w kilka sekund przenieść zamocowany detal z `3`-osiowego centrum pionowego na obrabiarkę `5`-osiową bądź drążarkę EDM bez konieczności ponownego sondowania bazy `G54`.

**🇬🇧 English**
# Zero-Point Clamping Systems: Cutting Setup Changeovers from 45 Minutes to 30 Seconds
**Zero-point clamping systems**—such as **Schunk Vero-S**, **Lang Quick-Point**, and **Erowa**—transform high-mix CNC job shops by reducing fixture changeover times from `30–45 minutes` down to under `30 seconds` with `< 0.005 mm` positioning repeatability (`0.002 mm` on ultra-precision modules). A baseplate remains permanently bolted and indicated to the machine table, while hardened **locating pull studs** are fastened to the underside of machine vises, `3`-jaw chucks, custom tombstone fixtures, or directly into raw workpieces. Applying `6 bar` pneumatic pressure releases the internal locking slides to drop in a new pallet; venting the air allows heavy Belleville spring stacks to pull the stud down with up to `40 kN` of holding force against precision radial tapers and face pads.

The true profitability of **zero-point fixturing** comes from **offline setup**: while the spindle continues making chips, the operator pre-loads raw stock into secondary vises on a prep bench or transfers an entire pallet to a CMM for in-process inspection without losing her `G54` reference. Standardizing on a universal grid pattern (such as a `200 mm` bore spacing or `96×96 mm` stud pattern) lets shops move complex parts seamlessly between `3`-axis roughing mills, `5`-axis finishing centers, and wire EDM machines with zero re-indicating.

---

id: custom-soft-jaws-milling
tag: Наладка | Ustawianie | Setup

**🇷🇺 Русский**
# Проектирование и расточка сырых кулачков (Soft Jaws) для тисков и токарных патронов
**Сырые кулачки (Soft Jaws)** из алюминия `6061-T6` / `Д16Т` или низкоуглеродистой стали `Сталь 20` / `C45` незаменимы для захвата деталей сложного контура на второй установке (`Op20`) и тонкостенных колец без деформации. Главная ошибка при фрезеровании профиля в губках тисков или расточке токарных кулачков — обработка в свободном, ненагруженном состоянии. Чтобы выбрать все зазоры в винте тисков и спирали/клине токарного патрона, кулачки перед обработкой **обязательно нужно зажать под рабочим усилием** на распорный штифт (**Spacer Pin**), параллельку вне зоны резания или расточное кольцо (**Boring Ring**). Если расточить токарные кулачки без преднатяга, при зажиме детали их передние кромки разойдутся на конус («колокольчик»), и деталь будет держаться только задней частью на длине `1–2 мм`, что приведет к ее вырыванию.

При программировании контура в сырых губках закладывайте глубину ступеньки `2.5–5.0 мм`, а во всех внутренних углах делайте занижения (**Corner Reliefs / Dog-bones**) фрезой `Ø3–6 мм`, чтобы острые кромки детали не упирались в радиус фрезы. Диаметр расточки токарных кулачков должен совпадать с диаметром заготовки с точностью `±0.02 мм` при длине охвата не менее `120°–240°`. Перед снятием кулачков со станка обязательно отгравируйте на них декомпрессионной центровкой номер чертежа, обозначение установки, базовый угол `G54` и давление гидрозажима (например, `18 bar`).

**🇵🇱 Polski**
# Projektowanie i obróbka miękkich szczęk (Soft Jaws) do imadeł i uchwytów tokarskich
**Miękkie szczęki (Soft Jaws)** wykonywane z aluminium `6061-T6` (`PA6` / `AW-2017A`) lub stali niskowęglowej `C45` są niezastąpione przy mocowaniu detali o nieregularnym kształcie w drugiej operacji (`Op20`) oraz cienkościennych tulei bez ich zgniatania. Podstawowym błędem podczas wytaczania szczęk tokarskich lub frezowania gniazd w szczękach imadła jest obróbka bez napięcia wstępnego. Aby skasować luzy na śrubie imadła lub przekładni klinowej uchwytu, szczęki przed obróbką **muszą zostać zaciśnięte z roboczą siłą** na kołku rozporowym (**Spacer Pin**) umieszczonym poza strefą obróbki lub w przyrządzie do wytaczania (**Boring Ring**). Wytoczenie szczęk bez napięcia wstępnego sprawi, że po zaciśnięciu detalu ich czoło rozejdzie się stożkowo („dzwon”), trzymając przedmiot jedynie tylną krawędzią na odcinku `1–2 mm`.

Projektując gniazdo w miękkich szczękach, stosuj głębokość stopnia `2.5–5.0 mm`, a we wszystkich narożach wewnętrznych wykonuj podcięcia technologiczne (**Corner Reliefs / Dog-bones**) frezem `Ø3–6 mm`, aby ostre naroża detalu nie opierały się na promieniu narzędzia. Średnica wytaczania szczęk tokarskich musi odpowiadać średnicy detalu z dokładnością `±0.02 mm`, obejmując jak największy łuk styku. Przed demontażem szczęk wygraweruj na nich numer rysunku, numer operacji, położenie bazy `G54` oraz ciśnienie zacisku hydraulicznego (np. `18 bar`).

**🇬🇧 English**
# Designing and Machining Custom Soft Jaws for CNC Vises and Lathe Chucks
Custom **soft jaws** machined from `6061-T6` aluminum or `1018`/`1045` mild steel are the gold standard for gripping contoured `Op20` milled parts and delicate thin-walled lathe rings without distortion. The number-one mistake machinists make when cutting soft jaws is boring or milling the pocket with the jaws unloaded. You must **preload the jaws under normal clamping pressure**—using a **spacer pin** or `1-2-3` block tucked outside the cut zone on a milling vise, or a **spider / boring ring** on a `3`-jaw hydraulic lathe chuck—before cutting the contour. If you bore lathe jaws without preloading the chuck wedges, mechanical play causes the jaws to flare outward ("bell-mouthing") when clamped onto the workpiece, leaving only a `1–2 mm` line contact at the rear that can easily throw a part out of the chuck.

Machine your pocket step depth between `2.5 mm` and `5.0 mm` for rigid gripping while keeping adequate clearance for tools, and always program **dog-bone corner reliefs** (`Ø3–6 mm`) so sharp part corners seat cleanly against the jaw walls. Match bored lathe jaw diameters within `±0.02 mm` of the workpiece diameter to prevent trilobe crushing, and engrave the part number, `G54` zero corner, and chuck hydraulic pressure (e.g., `18 bar`) directly onto the top face before pulling the setup.

---

id: surface-roughness-ra-rz
tag: Точность | Dokładność | Precision

**🇷🇺 Русский**
# Шероховатость поверхности Ra и Rz: как правильно читать чертеж и измерять профилометром
На машиностроительных чертежах по `ISO 1302` чаще всего указывают два параметра шероховатости: **Ra** (среднее арифметическое отклонение профиля) и **Rz** (средняя высота неровностей по десяти точкам / сумма средних высот пяти наибольших выступов и пяти глубочайших впадин на базовой длине). Понимание разницы между ними критично: две детали могут иметь одинаковый параметр `Ra 1.6 мкм`, но совершенно разный `Rz`. Поскольку `Ra` усредняет весь профиль, одиночная глубокая риска от налипшей стружки или задира пластины почти не изменит показание `Ra`, но мгновенно выведет `Rz` (и особенно `Rmax`) за пределы допуска, что недопустимо для посадочных шеек под манжетные уплотнения, гидравлических золотников и динамически нагруженных валов.

При измерении портативным профилометром (например, **Mitutoyo SJ-210**) алмазная игла (`r = 2` или `5 мкм`) должна двигаться строго **перпендикулярно следам обработки** (поперек рисок от резца или фрезы). Обязательно проверяйте настройку базовой длины отсечки шага (**Cutoff Length `λc`**) согласно `ISO 4288`: для диапазона `Ra 0.1–2.0 мкм` устанавливается `λc = 0.8 мм` (длина оценки `4.0 мм`), а для `Ra 2.0–10.0 мкм` — `λc = 2.5 мм`. В точении теоретическую шероховатость можно заранее рассчитать по формуле `Rz ≈ (f² / (8 × r_ε)) × 1000` (в мкм), где `f` — подача (`мм/об`), а `r_ε` — радиус при вершине пластины (`мм`): уменьшение подачи вдвое снижает шероховатость в четыре раза.

**🇵🇱 Polski**
# Chropowatość powierzchni Ra oraz Rz: interpretacja rysunku i pomiar profilometrem
Na rysunkach technicznych zgodnych z normą `ISO 1302` najczęściej spotyka się dwa parametry chropowatości: **Ra** (średnie arytmetyczne odchylenie profilu od linii średniej) oraz **Rz** (największa wysokość profilu chropowatości w przedziale odcinka elementarnego). Zrozumienie różnicy między nimi ma kluczowe znaczenie warsztatowe: dwa detale mogą wykazywać identyczną wartość `Ra 1.6 µm`, lecz diametralnie różne `Rz`. Ponieważ parametr `Ra` uśrednia cały profil, pojedyncza głęboka rysa od przyklejonego wióra lub wykruszonego naroża płytki niemal nie wpłynie na wynik `Ra`, ale natychmiast przekroczy tolerancję `Rz` (oraz `Rmax`), dyskwalifikując czop pod uszczelnienie wargowe lub suwak hydrauliczny.

Podczas pomiaru profilometrem stykowym (np. **Mitutoyo SJ-210**) diamentowa końcówka pomiarowa (`r = 2` lub `5 µm`) musi przemieszczać się **prostopadle do kierunkowości śladów obróbki**. Zawsze weryfikuj ustawienie odcinka elementarnego (**Cutoff Length `λc`**) według `ISO 4288`: dla zakresu `Ra 0.1–2.0 µm` obowiązuje `λc = 0.8 mm` (odcinek pomiarowy `4.0 mm`), natomiast dla `Ra 2.0–10.0 µm` należy ustawić `λc = 2.5 mm`. Przy toczeniu teoretyczną chropowatość można oszacować ze wzoru `Rz ≈ (f² / (8 × r_ε)) × 1000` (w `µm`), gdzie `f` to posuw (`mm/obr`), a `r_ε` to promień naroża płytki (`mm`) — zmniejszenie posuwu o połowę aż czterokrotnie obniża wysokość nierówności.

**🇬🇧 English**
# Surface Roughness Ra vs. Rz: Reading Drawings and Measuring with a Profilometer
Engineering drawings governed by `ISO 1302` typically specify surface finish using **Ra** (Roughness Average across the evaluation profile) or **Rz** (mean peak-to-valley height across five sampling lengths). Knowing why designers specify one over the other prevents costly scrap: two machined surfaces can both measure `Ra 1.6 µm` while having wildly different `Rz` values. Because `Ra` mathematically averages all peaks and valleys, an isolated deep scratch caused by chip recutting or a chipped insert edge barely shifts the `Ra` reading, yet it spikes `Rz` (and `Rmax`) out of tolerance—causing catastrophic leakage on rotary shaft seals, O-ring grooves, or high-pressure hydraulic spools.

When inspecting parts with a contact **profilometer** such as a **Mitutoyo SJ-210**, always orient the diamond stylus (`2 µm` or `5 µm` tip radius) **perpendicular to the lay** (across the tool feed marks) to capture the true peak-to-valley topography. Verify that the instrument’s **cutoff length (`λc`)** matches `ISO 4288`: use `λc = 0.8 mm` (`4.0 mm` total evaluation length) for `Ra 0.1–2.0 µm`, and switch to `λc = 2.5 mm` for rougher surfaces between `Ra 2.0–10.0 µm`. In turning, theoretical roughness follows `Rz ≈ (f² / (8 × r_ε)) × 1000` (in `µm`), meaning that halving your feed rate `f` (`mm/rev`) or quadrupling nose radius `r_ε` (`mm`) reduces theoretical `Rz` by a factor of four.

---

id: micrometer-bore-gauge-metrology
tag: Точность | Dokładność | Precision

**🇷🇺 Русский**
# Цеховая метрология: как избежать погрешности 0.005–0.020 мм при работе с микрометром и нутромером
Даже самый точный станок с ЧПУ не поможет удержать допуск `IT6` (`0.011–0.016 мм`), если оператор допускает методические ошибки при измерениях микрометром или индикаторным нутромером (**Bore Gauge**). Главный враг микронной точности в цеху — **температурная деформация** (стандарт метрологии — `20 °C`). Коэффициент теплового расширения конструкционной стали составляет около `11.5 × 10⁻⁶ /°C`, а алюминия — `23 × 10⁻⁶ /°C`: если деталь диаметром `100 мм` нагрелась при резании всего на `10 °C` выше температуры калибра (или оператор `3 минуты` держал скобу микрометра голыми руками без теплоизоляционных накладок), размер изменится на `0.0115 мм` по стали и на `0.023 мм` по алюминию!

При работе с гладким микрометром никогда не вращайте основной барабан: сводите измерительные пятки только через **трещотку (Ratchet Stop)** или фрикционный барабан (`3–5 щелчков`), протирая эталонную меру и губки чистым листом бумаги перед проверкой нуля. Двухточечный индикаторный нутромер настраивается на ноль строго по аттестованному **установочному кольцу (Master Ring)**, а не по внешнему микрометру (настройка в микрометре дает систематическую ошибку `0.004–0.008 мм` из-за разной геометрии контакта сферы и плоскости). Внутри отверстия плавно покачивайте нутромер вдоль оси для поиска точки **минимального диаметра** (разворота стрелки индикатора), одновременно проверяя конусность и эллипсность в двух взаимно перпендикулярных плоскостях.

**🇵🇱 Polski**
# Metrologia warsztatowa: jak uniknąć błędów 0.005–0.020 mm przy pomiarach mikrometrem i średnicówką
Nawet najdokładniejsza obrabiarka CNC nie utrzyma tolerancji `IT6` (`0.011–0.016 mm`), jeśli operator popełnia błędy metodyczne podczas pomiaru mikrometrem zewnętrznym lub średnicówką czujnikową (**Bore Gauge**). Głównym wrogiem dokładności mikronowej na hali produkcyjnej jest **rozszerzalność cieplna** (temperatura odniesienia to `20 °C`). Współczynnik rozszerzalności stali konstrukcyjnej wynosi ok. `11.5 × 10⁻⁶ /°C`, a aluminium aż `23 × 10⁻⁶ /°C`: jeśli detal o średnicy `100 mm` jest po obróbce cieplejszy o zaledwie `10 °C` od wzorca (lub operator przez kilka minut trzymał kabłąk mikrometru gołą dłonią), wymiar zmieni się o `0.0115 mm` dla stali i `0.023 mm` dla aluminium!

Mierząc mikrometrem, nigdy nie dociągaj wrzeciona za tuleję bębna: używaj wyłącznie **sprzęgła ciernego lub grzechotki (Ratchet Stop)** (`3–5 kliknięć`), uprzednio czyszcząc powierzchnie pomiarowe czystą kartką papieru i sprawdzając zero na wzorcu. Dwupunktową średnicówkę czujnikową zeruj wyłącznie w certyfikowanym **pierścieniu wzorcowym (Master Ring)**, a nie między kowadełkami mikrometru (co generuje błąd `0.004–0.008 mm` wskutek styku kulistych końcówek z płaszczyzną). Wewnątrz otworu wykonuj płynny ruch wahadłowy wzdłuż osi, aby uchwycić **punkt zwrotny wskazówki** odpowiadający rzeczywistej minimalnej średnicy, badając jednocześnie owalność oraz stożkowatość na kilku głębokościach.

**🇬🇧 English**
# Shop-Floor Metrology: Avoiding 0.005–0.020 mm Errors with Micrometers and Bore Gauges
Holding an `IT6` tolerance (`0.011–0.016 mm`) on a CNC lathe or mill is impossible if shop-floor measurement habits introduce `0.005–0.020 mm` of human and thermal error. The biggest hidden culprit is **thermal expansion** relative to the `20 °C` metrology standard. Carbon steel expands at roughly `11.5 × 10⁻⁶ /°C` and aluminum at `23 × 10⁻⁶ /°C`: measuring a `100 mm` steel shaft that is just `10 °C` warmer than ambient—or holding a micrometer frame in bare hands for a few minutes without heat shields—produces an `0.0115 mm` error on steel and `0.023 mm` on aluminum. Always cool workpieces in temperature-stabilized coolant and let gauges acclimate on the inspection surface plate together with the part.

When using an outside micrometer, clean the carbide anvils by drawing a lint-free paper strip between them and apply consistent measuring force using the **ratchet stop** (`3–5 clicks`) or friction thimble—differences in thumb pressure on the sleeve easily flex a micrometer frame by `0.005 mm`. Never zero a `2`-point **dial bore gauge** inside an outside micrometer, which introduces a `0.004–0.008 mm` cosine and spherical-contact error; always set it in a calibrated **master setting ring**. Inside the bore, gently rock the gauge across the axis and read the exact **minimum reversal point** of the needle, checking at multiple depths and `90°` orientations to detect taper and lobing.

---

id: ballbar-backlash-diagnostics
tag: Обслуживание | Konserwacja | Maintenance

**🇷🇺 Русский**
# Диагностика геометрии ЧПУ: люфт ШВП, пики реверса и тест Renishaw Ballbar
Когда при фрезеровании точного отверстия по круговой интерполяции `G02`/`G03` вместо цилиндра получается эллипс или видны вертикальные ступеньки на переходах квадрантов (`0°`, `90°`, `180°`, `270°`), необходима диагностика кинематики станка с помощью телескопического датчика **Renishaw QC20-W Ballbar** или контрольной расточки/фрезерования тестового кольца. График круглограммы Ballbar мгновенно показывает первопричину погрешности: вытянутость окружности под углом `45°` или `135°` указывает на **рассогласование коэффициентов усиления приводов (Servo Mismatch)** осей `X` и `Y` или неперпендикулярность станины (**Squareness Error**), тогда как вытянутость строго вдоль `X` или `Y` свидетельствует об ошибке масштабирования (**Scaling Error**) или тепловом удлинении ШВП.

Если при смене направления движения оси в квадрантах на графике возникают резкие выбросы наружу — это **пики реверса (Reversal Spikes)**, вызванные трением покоя (**Stick-Slip**) в направляющих и задержкой реакции сервопривода. Ступенька смещения радиуса после прохождения квадранта указывает на **осевой люфт (Backlash)**. Прежде чем вводить коррекцию люфта в параметры ЧПУ (например, `Parameter 1851` на Fanuc), проверьте часовым индикатором торцевое биение винта ШВП: если люфт вызван ослаблением гайки или износом **радиально-упорных опорных подшипников ШВП (Ballscrew Support Bearings)**, программная компенсация не спасет от вибраций при попутном фрезеровании — требуется механический ремонт опоры.

**🇵🇱 Polski**
# Diagnostyka geometrii CNC: luz nawrotny, piki rewersji i test Renishaw Ballbar
Gdy podczas frezowania dokładnego otworu z interpolacją kołową `G02`/`G03` zamiast walca powstaje elipsa lub widoczne są pionowe progi w przejściach kwadrantowych (`0°`, `90°`, `180°`, `270°`), niezbędna jest diagnostyka kinematyki obrabiarki za pomocą teleskopowego systemu **Renishaw QC20-W Ballbar** lub obróbka próbnego pierścienia. Wykres polarny z testu Ballbar natychmiast ujawnia źródło błędu: rozciągnięcie okręgu pod kątem `45°` lub `135°` oznacza **niedopasowanie wzmocnienia serwonapędów (Servo Mismatch)** osi `X` i `Y` bądź błąd prostopadłości osi (**Squareness Error**), natomiast owalność wzdłuż osi `X` lub `Y` wskazuje na błąd skalowania (**Scaling Error**) lub rozszerzalność cieplną śruby kulowej.

Ostre szpilki skierowane na zewnątrz wykresu dokładnie w punktach zmiany zwrotu ruchu to **piki rewersji (Reversal Spikes)**, wywołane tarciem statycznym (**Stick-Slip**) na prowadnicach oraz opóźnieniem pętli regulacji napędu. Z kolei trwały uskok promienia po przejściu przez kwadrant świadczy o **luzie nawrotnym (Backlash)**. Zanim jednak wpiszesz kompensację luzu w parametrach sterowania (np. `Parametr 1851` w Fanuc), sprawdź czujnikiem zegarowym luz osiowy samego czopa śruby kulowej: jeśli przyczyną jest poluzowana nakrętka łożyskowa lub zużycie **łożysk podporowych śruby kulowej (Ballscrew Support Bearings)**, kompensacja programowa nie wyeliminuje drgań przy frezowaniu współbieżnym.

**🇬🇧 English**
# Diagnosing CNC Geometry Errors: Backlash, Reversal Spikes, and Ballbar Testing
When circular interpolation (`G02`/`G03`) produces out-of-round bores or leaves witness marks at the `0°`, `90°`, `180°`, and `270°` quadrant transitions, a **Renishaw QC20-W Ballbar** test or precision circle-diamond-square test piece quickly isolates whether the fault is mechanical or electronic. On a ballbar polar plot, ovality tilted along the `45°` or `135°` diagonal indicates either **servo gain mismatch** between the `X` and `Y` drives or mechanical **axis squareness error** (distinguished by running the circle both clockwise and counter-clockwise), whereas ovality aligned directly with the `X` or `Y` axis points to linear **scaling errors** or uncompensated ballscrew thermal growth.

Sharp outward needles appearing exactly at the quadrant points are **reversal spikes**, caused by guideway **stick-slip** friction momentarily stalling the axis while the opposite axis keeps moving. A permanent step change in plot radius at the quadrant transition reveals **mechanical backlash**. Before blindly adding numbers to your CNC backlash compensation table (such as Fanuc `Parameter 1851`), place a dial indicator against the end of the ballscrew shaft while jogging the axis back and forth: if the screw itself shifts axially due to worn **angular-contact thrust bearings** or a loose locknut, software compensation will never prevent cutter pull-in during climb milling—the support housing must be rebuilt.

---

id: spindle-warmup-bearings
tag: Обслуживание | Konserwacja | Maintenance

**🇷🇺 Русский**
# Прогрев шпинделя и защита высокоскоростных подшипников
Высокоскоростные шпиндели современных станков с ЧПУ (`10 000–24 000 об/мин`) вращаются на прецизионных **радиально-упорных подшипниках (Angular-Contact Bearings)** — стальных или гибридных с керамическими шариками из нитрида кремния (`Si3N4`), заправленных консистентной смазкой на весь срок службы (**Grease-Packed**) либо смазываемых масляно-воздушной смесью (**Oil-Air**). Когда станок простаивает выходные или ночную смену в холодном цеху, смазка выдавливается из пятна контакта шариков с дорожкой качения и густеет. Если сразу после включения станка запустить рабочую программу на `12 000 об/мин`, первые секунды шарики скользят в режиме сухого трения, а внутреннее кольцо подшипника мгновенно нагревается и расширяется быстрее массивного наружного корпуса, что приводит к **тепловому заклиниванию преднатяга** и выкрашиванию дорожек.

Никогда не начинайте резание без автоматического **цикла прогрева шпинделя (Spindle Warm-Up Macro)** длительностью `10–20 минут`: стандартный алгоритм плавно ступенями поднимает обороты — `10 мин` на `25–50%` от максимума, `5 мин` на `75%` и `3–5 мин` на `100%` с одновременным перемещением осей `X/Y/Z` для разгона масла по ШВП. Во время прогрева следите за индикатором нагрузки (**Spindle Load**) и отсутствием постороннего гула. Кроме того, на станках с воздушным лабиринтным уплотнением (**Spindle Air Purge / Air Curtain**) ежедневно проверяйте блок подготовки воздуха: попадание влаги или отключение продувки мгновенно затягивает эмульсию внутрь передней опоры шпинделя.

**🇵🇱 Polski**
# Rozgrzewanie wrzeciona i ochrona łożysk wysokoobrotowych CNC
Wrzeciona wysokoobrotowe nowoczesnych centrów CNC (`10 000–24 000 obr./min`) pracują na precyzyjnych **łożyskach kulkowych skośnych (Angular-Contact Bearings)** — stalowych lub hybrydowych z kulkami ceramicznymi z azotku krzemu (`Si3N4`), smarowanych smarem stałym (**Grease-Packed**) bądź mgłą olejowo-powietrzną (**Oil-Air**). Gdy obrabiarka stoi nieużywana przez weekend lub chłodną noc, smar zostaje wypchnięty ze strefy styku kulek z bieżnią i gęstnieje. Uruchomienie obróbki od razu na `12 000 obr./min` powoduje, że przez pierwsze sekundy kulki ślizgają się na sucho, a pierścień wewnętrzny nagrzewa się i rozszerza znacznie szybciej niż chłodna obudowa zewnętrzna, co prowadzi do **termicznego zaciśnięcia napięcia wstępnego** i trwałego uszkodzenia bieżni.

Nigdy nie rozpoczynaj skrawania bez wykonania **makra rozgrzewania wrzeciona (Spindle Warm-Up)** trwającego `10–20 minut`: prawidłowy cykl stopniowo zwiększa obroty — `10 min` na `25–50%` prędkości maksymalnej, `5 min` na `75%` oraz `3–5 min` na `100%`, połączony z powolnymi przejazdami osi `X/Y/Z` w celu rozprowadzenia oleju po śrubach kulowych. Podczas rozgrzewki obserwuj obciążenie wrzeciona (**Spindle Load**) i nasłuchuj nietypowych drgań. W maszynach wyposażonych w przedmuch uszczelnienia labiryntowego (**Spindle Air Purge / Air Curtain**) codziennie kontroluj osuszacz powietrza: brak ciśnienia lub woda w instalacji błyskawicznie wciągną chłodziwo do łożysk przednich.

**🇬🇧 English**
# CNC Spindle Warm-Up Routines: Protecting High-Speed Angular-Contact Bearings
Modern high-speed CNC spindles (`10,000–24,000 RPM`) rely on ultra-precision **angular-contact bearings**—often hybrid designs pairing steel races with silicon nitride (`Si3N4`) ceramic balls—lubricated either by permanent **grease packing** or continuous **oil-air mist**. After a machine sits idle overnight or across a cold weekend, bearing grease settles and channels away from the ball-to-raceway contact track. Command full `12,000 RPM` immediately on a cold spindle and the balls skid without an elastohydrodynamic lubricant film; worse, the thin inner bearing ring heats up and expands radially long before the heavy outer spindle housing warms up, spiking internal **bearing preload** until the raceways brinell or seize.

Always run an automated `10–20 minute` **spindle warm-up macro** before cutting: step the spindle through `50%` max RPM for `10 minutes`, `75%` RPM for `5 minutes`, and `100%` RPM for the final `3–5 minutes` while simultaneously exercising the `X`, `Y`, and `Z` axes to distribute way lube and thermally stabilize the ballscrews. Watch the **spindle load meter** during warm-up—an abnormally high baseline load signals grease degradation or excessive preload. Finally, protect the front bearing labyrinth seal by keeping the **spindle air purge (air curtain)** supplied with clean, dry air (`ISO 8573-1`); shutting off shop air while coolant drips off the spindle nose draws moisture directly into the bearings.

---

id: way-lube-skimmer-maintenance
tag: Обслуживание | Konserwacja | Maintenance

**🇷🇺 Русский**
# Смазка направляющих, уход за СОЖ и чек-лист ежедневного ТО станка с ЧПУ
Долговечность направляющих качения (**Linear Roller/Ball Guideways**) и скольжения (**Box Ways**) напрямую зависит от исправности автоматической станции централизованной смазки. В большинство станков заливается специализированное масло для направляющих класса вязкости **ISO VG 68** с противоскачковыми присадками (например, **Mobil Vactra No. 2**); категорически запрещено заменять его обычным гидравлическим или моторным маслом, которое мгновенно смывается эмульсией и вызывает рывки (**Stick-Slip**). Ежедневно проверяйте не только уровень масла в бачке, но и реальный цикл срабатывания насоса по манометру (`15–30 бар`), так как засор одного **дозирующего питателя (Metering Valve)** оставляет каретку или гайку ШВП полностью сухой при полном бачке.

Отработанное масло с направляющих (**Tramp Oil**) стекает в бак СОЖ и образует на поверхности плотную масляную пленку, которая перекрывает доступ кислорода: в эмульсии начинают размножаться анаэробные бактерии, появляется резкий запах сероводорода, падает уровень `pH` (норма `8.8–9.2`), и станина покрывается коррозией. Обязательно включайте **скиммер (Oil Skimmer — ленточный или дисковый маслоотделитель)** на `2–4 часа` в сутки, ежедневно проверяйте концентрацию эмульсии рефрактометром (`6–10%`), очищайте резиновые **грязесъемники (Way Wipers)** телескопических кожухов от налипшей мелкой стружки и сливайте конденсат из фильтра-влагоотделителя пневмосистемы на входе в станок.

**🇵🇱 Polski**
# Smarowanie prowadnic, odolejanie chłodziwa i codzienna konserwacja obrabiarki CNC
Żywotność prowadnic tocznych (**Linear Guideways**) oraz ślizgowych (**Box Ways**) zależy bezpośrednio od sprawności układu centralnego smarowania. W większości obrabiarek stosuje się dedykowany olej do prowadnic klasy lepkości **ISO VG 68** z dodatkami przeciwciernymi zapobiegającymi zjawisku **Stick-Slip** (np. **Mobil Vactra No. 2**); pod żadnym pozorem nie wolno zastępować go zwykłym olejem hydraulicznym, który zostaje błyskawicznie wypłukany przez chłodziwo. Codziennie kontroluj nie tylko poziom oleju w zbiorniku, ale także ciśnienie tłoczenia na manometrze pompy (`15–30 bar`) podczas cyklu pracy, ponieważ zablokowany **rozdzielacz dozujący (Metering Valve)** potrafi pozbawić smarowania pojedynczy wózek lub nakrętkę śruby kulowej mimo pełnego zbiornika.

Zużyty olej z prowadnic (**Tramp Oil**) spływa do wanny chłodziwa i tworzy na powierzchni szczelny kożuch odcinający dostęp tlenu: w emulsji namnażają się bakterie beztlenowe, pojawia się przykry zapach, spada odczyn `pH` (norma `8.8–9.2`), a nieosłonięte elementy żeliwne zaczynają korodować. Uruchamiaj **skimmer olejowy (Oil Skimmer — taśmowy lub tarczowy)** na `2–4 godziny` dziennie, codziennie mierz stężenie emulsji refraktometrem (`6–10%`), czyść gumowe **zgarniacze (Way Wipers)** osłon teleskopowych z drobnego wióra oraz spuszczaj kondensat z odstojnika zespołu przygotowania powietrza zasilającego maszynę.

**🇬🇧 English**
# Way Lube, Tramp Oil Skimmers, and Preventive Maintenance Routines for CNC Operators
The lifespan of your CNC machine’s **linear guideways** or cast-iron **box ways** depends entirely on clean, properly metered lubrication. Most oil-lubricated systems require a dedicated **ISO VG 68** tackified way oil (such as **Mobil Vactra No. 2**)—never substitute standard hydraulic oil, which lacks extreme-pressure anti-stick-slip additives and washes straight off the rails on contact with water-soluble coolant. During your daily walk-around, verify not only that the way-lube reservoir is full, but that actual consumption drops by the expected amount each shift and the pressure gauge spikes to `15–30 bar` during a pump cycle; a ruptured line or clogged brass **metering injector** will starve a single ballscrew nut or linear truck silently.

Once total-loss way oil washes off the slides, it collects in the coolant sump as **tramp oil**, forming a floating slick that seals off oxygen, breeds foul-smelling anaerobic bacteria, drops coolant `pH` below `8.5`, and causes flash rust on machine tables. Run a belt or disk **tramp oil skimmer** daily during idle hours, check coolant concentration (`6–10%`) with an optical **refractometer**, wipe fine chip buildup off the rubber **telescopic way-cover wipers** so chips don't score the shields, and drain water condensation from the main pneumatic filter-regulator bowl every morning.

---

id: g28-g53-safe-retract
tag: Безопасность | Bezpieczeństwo | Safety

**🇷🇺 Русский**
# Безопасный отвод по Z: почему G53 G00 Z0 надежнее и безопаснее, чем G28 G91 Z0
Одна из самых разрушительных и частых аварий на фрезерных станках с ЧПУ Fanuc и Haas связана с командой возврата в референтную точку **`G28`**. По стандарту ISO команда `G28 Z0` означает: «выполнить быстрый ход в промежуточную точку `Z0` в текущей системе координат, а затем уйти в машинный ноль». Поэтому программисты пишут **`G91 G28 Z0`**, где `G91` переключает станок в инкрементальный режим (перемещение на `0 мм` от текущей точки и сразу домой), после чего в следующей строке обязательно возвращают абсолютный режим `G90`. Но если оператор при ручном редактировании или перезапуске забудет указать `G91` (либо строка выполнится в модальном `G90`), станок на полном быстром ходу **`G00`** сначала врежется фрезой прямо в деталь до рабочей координаты `Z0` (`G54`), и только потом поедет вверх!

Гораздо более безопасная, читаемая и современная практика — отвод в машинной системе координат через немодальный код **`G53`**: запись **`G53 G00 Z0.`** (или `G53 G00 Z-5.0`) напрямую отправляет шпиндель в верхнюю точку по оси `Z` без каких-либо промежуточных точек и независимо от того, активна ли сейчас `G54` или `G59` (достаточно убедиться, что активен `G90`). На стойках **Siemens Sinumerik** для этой же цели используется команда **`G00 SUPA Z0 D0`** (подавление всех фреймов и корректоров), а на **Heidenhain TNC** — кадр **`L Z+0 R0 FMAX M91`**.

**🇵🇱 Polski**
# Bezpieczny odjazd w osi Z: dlaczego G53 G00 Z0 jest bezpieczniejsze niż G28 G91 Z0
Jedna z najbardziej kosztownych i najczęstszych kolizji na centrach frezarskich CNC ze sterowaniem Fanuc oraz Haas wiąże się z poleceniem powrotu do punktu referencyjnego **`G28`**. Zgodnie ze standardem ISO instrukcja `G28 Z0` oznacza: „wykonaj ruch szybki przez punkt pośredni `Z0` w aktualnym układzie współrzędnych, a następnie zjedź do zera maszynowego”. Dlatego programiści zapisują **`G91 G28 Z0`**, gdzie `G91` przełącza maszynę w tryb przyrostowy (przesunięcie o `0 mm` w miejscu i natychmiastowy odjazd do góry), po czym w kolejnym bloku bezwzględnie przywracają tryb absolutny `G90`. Jeśli jednak podczas edycji przy maszynie ktoś pominie `G91` (lub zapomni przywrócić `G90` przed kolejnym ruchem), wrzeciono na pełnym posuwie szybkim **`G00`** najpierw wbije narzędzie prosto w detal do poziomu bazy `Z0` (`G54`), zanim pojedzie do góry!

Dużo bezpieczniejszą i czytelniejszą praktyką przemysłową jest odjazd w układzie współrzędnych maszynowych za pomocą niemodalnego kodu **`G53`**: blok **`G53 G00 Z0.`** bezpośrednio wysyła oś `Z` do punktu maszynowego bez żadnych punktów pośrednich i niezależnie od aktywnej bazy `G54`–`G59`. Na sterowaniach **Siemens Sinumerik** analogiczną funkcję pełni rozkaz **`G00 SUPA Z0 D0`** (wyłączenie aktywnych baz i korekcji narzędzia), a w systemie **Heidenhain TNC** — bezpieczny blok **`L Z+0 R0 FMAX M91`**.

**🇬🇧 English**
# Safe Z Retract in G-Code: Why G53 G00 Z0 Beats G28 G91 Z0 Every Time
One of the most violent and common CNC milling crashes on Fanuc and Haas controls is caused by misunderstanding **`G28`** (Return to Reference Point via an Intermediate Position). By definition, `G28 Z0.` commands the control to move to the intermediate coordinate `Z0.` first, and then travel to the machine home switch. To prevent intermediate movement, programmers write **`G91 G28 Z0.`**, switching the control into incremental mode (`G91`) so the intermediate move is zero distance, followed immediately by `G90` on the next line to restore absolute mode. However, if an operator hand-edits a program and accidentally writes `G28 Z0.` while modal **`G90`** is active—or forgets to re-command `G90` afterward—the spindle will rapid at `100%` **`G00`** straight down into the workpiece `G54 Z0.` datum before going home!

A far cleaner, safer, and more readable standard is **`G53 G00 Z0.`** (Machine Coordinate System selection). Because `G53` is non-modal and references machine zero directly without an intermediate point, `G90 G53 G00 Z0.` drives the spindle straight up to the tool-change height every time without toggling incremental mode. On **Siemens Sinumerik** controls, the equivalent bulletproof retract is **`G00 SUPA Z0 D0`** (Suppress all work offsets and tool length offsets), while on **Heidenhain TNC** controls it is **`L Z+0 R0 FMAX M91`**.

---

id: restart-mid-program-block
tag: Безопасность | Bezpieczeństwo | Safety

**🇷🇺 Русский**
# Безопасный перезапуск программы с середины кадра (Block Search / Run From Here)
Перезапуск УП с середины операции после поломки фрезы или замены севшей пластины — один из самых рискованных моментов в работе оператора ЧПУ. Если просто навести курсор на нужную строку `G01` в середине контура и нажать **Cycle Start**, станок почти гарантированно попадет в аварию: в памяти ЧПУ не будут активированы модальные коды, заданные в шапке операции — система координат (`G54`–`G59`), абсолютный отсчет (`G90`), коррекция на длину инструмента (`G43 H..`), постоянная скорость резания (`G96`/`G97`), подача на оборот/минуту (`G95`/`G94`), а также команды включения шпинделя (`M03 S..`) и СОЖ (`M08`). В результате невращающийся инструмент без корректора длины `H` врежется в заготовку по диагонали из точки смены инструмента!

Безопаснее всего перезапускать программу с **шапки инструмента** (строки `T.. M06` или метки `N..` перед ней), где прописан полный безопасный блок подготовки. Если же требуется войти именно в середину длинной траектории 3D-обработки, обязательно используйте функцию поиска кадра с расчетом модального состояния: на **Haas** включите **`Setting 36 (Program Restart = ON)`**, на **Siemens Sinumerik** используйте режим **`Block Search with Calculation (Поиск кадра с расчетом к контуру/конечной точке)`**. Перед нажатием пуска убавьте быстрый ход **Rapid до `5%`**, включите покадровый режим **`Single Block`**, держите палец на кнопке **`Feed Hold`** и сверяйте экран **`Distance to Go` (Остаток пути)** с реальным расстоянием от вершины фрезы до детали.

**🇵🇱 Polski**
# Bezpieczny restart programu od wybranego bloku (Block Search / Run From Here)
Wznawianie programu CNC od środka operacji po złamaniu narzędzia lub wymianie zużytej płytki to jeden z najbardziej ryzykownych momentów w pracy operatora. Jeśli po prostu ustawisz kursor na bloku roboczym `G01` w środku ścieżki i wciśniesz **Cycle Start**, niemal na pewno doprowadzisz do kolizji: sterowanie nie wczyta wcześniejszych kodów modalnych z nagłówka operacji — bazy materiałowej (`G54`–`G59`), wymiarowania absolutnego (`G90`), kompensacji długości narzędzia (`G43 H..`), trybu obrotów (`G96`/`G97`), posuwu (`G94`/`G95`) ani załączenia wrzeciona (`M03 S..`) i chłodziwa (`M08`). W efekcie nieruchome narzędzie bez aktywnej korekcji `H` uderzy po przekątnej prosto w detal!

Najbezpieczniejszą metodą jest zawsze restart od **nagłówka wywołania narzędzia** (linii `T.. M06` lub poprzedzającego numeru `N..`), który zawiera kompletny blok bezpieczeństwa. Jeżeli musisz wznowić długą obróbkę 3D od konkretnego wiersza, użyj funkcji wyszukiwania bloku z przeliczeniem stanu maszyny: na obrabiarkach **Haas** aktywuj **`Setting 36 (Program Restart = ON)`**, a w systemie **Siemens Sinumerik** wybierz **`Wyszukiwanie bloku z obliczeniami (Block Search with Calculation)`**. Podczas pierwszego dojazdu ustaw korektor ruchów szybkich **Rapid na `5%`**, włącz tryb pojedynczego bloku **`Single Block`**, trzymaj dłoń na przycisku **`Feed Hold`** i porównuj wskazanie **`Distance to Go`** z rzeczywistą odległością ostrza od materiału.

**🇬🇧 English**
# Safely Restarting a CNC Program Mid-Cycle (Block Search / Run From Here)
Restarting a CNC program in the middle of an operation after replacing a chipped insert or broken end mill is responsible for countless shop-floor crashes. If you simply scroll the cursor down to a `G01` cutting line and press **Cycle Start**, the control skips all the critical **modal states** commanded earlier in the tool header: work offset (`G54`–`G59`), absolute positioning (`G90`), tool length compensation (`G43 H..`), feed mode (`G94`/`G95`), spindle rotation (`M03 S..`), and coolant (`M08`). Without those modal codes active, the machine will drive a stationary spindle with zero length offset along a 3-axis diagonal straight through the part!

Whenever cycle time permits, restart directly from the **tool-change safe start block** (`N..` line right before `T.. M06`), where every safety modal code is explicitly restated. When resuming mid-toolpath on a long 3D surfacing or deep roughing routine, always use your control’s state-calculating search feature: enable **`Setting 36 (Program Restart = ON)`** on **Haas** so the control scans the entire program from the top, or select **`Block Search with Calculation (to contour/endpoint)`** on **Siemens Sinumerik**. Verify the approach move by turning **Rapid Override down to `5%`**, engaging **`Single Block`**, resting your thumb on **`Feed Hold`**, and checking that the **`Distance to Go`** screen matches the physical gap above the workpiece.

---

id: corner-feed-reduction-pocket
tag: Фрезерование | Frezowanie | Milling

**🇷🇺 Русский**
# Почему фрезы визжат и ломаются во внутренних углах карманов: угол охвата и коррекция подачи
При фрезеровании прямолинейной стенки с радиальным припуском `a_e = 1.5 мм` концевой фрезой `Ø10 мм` (`15%` от диаметра) **угол охвата фрезы (Radial Engagement Angle)** составляет около `45°`, в резании одновременно находится только один зуб, а отвод стружки и охлаждение идеальны. Но как только эта же фреза входит в острый внутренний угол, где радиус угла чертежа равен радиусу инструмента (`R5 мм` для фрезы `Ø10 мм`), дуга контакта мгновенно прыгает до `90°–180°`! Количество одновременно режущих зубьев и радиальная сила отжатия возрастают в `3–4 раза`, фреза начинает сильно вибрировать («визжать»), выбирает зазор, подрывает стенку и выкрашивает режущие кромки.

Существует три золотых правила обработки внутренних углов: во-первых, никогда не фрезеруйте внутренний радиус `R` фрезой диаметра `D = 2 × R` — выбирайте диаметр фрезы так, чтобы радиус угла был минимум в **`1.25–1.3 раза` больше радиуса фрезы** (например, для угла `R5 мм` берите фрезу `Ø8 мм` и обходите угол по дуге `R1 мм`), либо предварительно засверливайте углы. Во-вторых, при движении по внутренней дуге подача режущей кромки на стенке оказывается значительно выше программной подачи центра фрезы! Всегда снижайте минутную подачу в углу по формуле периферийной коррекции: **`F_центр = F_базовая × (R_угла - R_фрезы) / R_угла`** (или активируйте функцию автоматического торможения в углах `G62` на Fanuc / `Corner Rounding & Feed Reduction` в CAM).

**🇵🇱 Polski**
# Dlaczego frezy piszczą i pękają w narożach wewnętrznych: kąt opasania i redukcja posuwu
Podczas frezowania prostej ścianki z szerokością skrawania `a_e = 1.5 mm` frezem palcowym `Ø10 mm` (`15%` średnicy), **kąt opasania narzędzia (Radial Engagement Angle)** wynosi około `45°`, w materiale pracuje tylko jedno ostrze naraz, a odprowadzanie wiórów jest wzorowe. Jednak w chwili, gdy ten sam frez wchodzi w ostre naroże wewnętrzne, gdzie promień naroża rysunkowego równa się promieniowi frezu (`R5 mm` dla frezu `Ø10 mm`), łuk styku gwałtownie rośnie do `90°–180°`! Liczba jednocześnie skrawających ostrzy oraz promieniowa siła odpychająca narzędzie wzrastają `3–4`-krotnie, frez wpada w silny karb drgań samowzbudnych („piszczy”), podcina ściankę i wykrusza naroża.

Stosuj trzy żelazne zasady obróbki naroży wewnętrznych: po pierwsze, nigdy nie wykonuj naroża o promieniu `R` frezem o średnicy `D = 2 × R` — dobierz mniejszy frez tak, aby promień naroża był co najmniej **`1.25–1.3 razy` większy od promienia narzędzia** (np. dla naroża `R5 mm` użyj frezu `Ø8 mm` prowadzonego po łuku `R1 mm`), lub wstępnie nawierć naroża wiertłem. Po drugie, podczas interpolacji kołowej wewnętrznej rzeczywisty posuw na obwodzie ostrza jest znacznie wyższy niż zaprogramowany posuw środka narzędzia! Zawsze redukuj posuw w narożu według wzoru: **`F_środek = F_bazowy × (R_naroża - R_frezu) / R_naroża`** (lub włącz funkcję automatycznego zwalniania w narożach `G62` w Fanuc / optymalizację posuwu w CAM).

**🇬🇧 English**
# Why End Mills Scream and Snap in Pocket Corners: Radial Engagement and Feed Reduction
When climb-milling a straight pocket wall with a `Ø10 mm` carbide end mill at a `1.5 mm` radial stepover (`15%` of cutter diameter), the **radial arc of engagement** is a gentle `45°`, keeping radial deflection low and chip evacuation clean. The moment that same `Ø10 mm` cutter drives straight into an `R5 mm` internal corner, however, the arc of engagement spikes instantaneously to `90°–180°`. Suddenly, multiple flutes are buried in the cut simultaneously, radial cutting forces triple, and the cutter is sucked into the corner—causing deafening harmonic screeching, gouged walls, and snapped carbide shanks.

Follow three shop-floor rules to eliminate corner chatter: first, never cut an internal radius `R` using an end mill of diameter `D = 2 × R`; always select a tool radius so that the corner radius is at least **`1.25–1.3×` the cutter radius** (e.g., use a `Ø8 mm` end mill to roll through an `R5 mm` corner along a `1 mm` toolpath arc) or pre-drill/trochoidal-clear the corners first. Second, remember that during internal circular interpolation (`G02`/`G03`), the peripheral cutting edge travels a longer arc than the tool centerline, artificially multiplying chip load `f_z`! Scale down your programmed centerline feed rate in internal corners using **`F_center = F_nominal × (R_corner - R_tool) / R_corner`**, or enable automatic corner feed rate reduction (`G62` on Fanuc or CAM feed optimization).

---

id: plunge-milling-z-axis
tag: Фрезерование | Frezowanie | Milling

**🇷🇺 Русский**
# Плунжерное фрезерование по оси Z: черновая выборка глубоких карманов без вибраций
При черновой обработке глубоких полостей, штампов и вертикальных стенок с вылетом инструмента `5xD–8xD` даже фрезы для работы на высоких подачах (High-Feed) начинают вибрировать из-за радиального отжатия оправки. **Плунжерное фрезерование** (`Plunge Milling` / фрезерование врезанием по оси `Z`) решает эту проблему кардинально: подача осуществляется строго вертикально сверху вниз вдоль оси шпинделя `Z`, превращая опасные радиальные силы резания в осевые, которые направлены прямо в упорные подшипники шпинделя. Жесткость фрезы в осевом направлении более чем в `10 раз` выше радиальной!

Обработка напоминает серию перекрывающихся сверлений по контуру стенки или по сетке с шагом вдоль траектории (`Pitch`) около `60–75%` диаметра фрезы и радиальным перекрытием (`Ae`) от `15%` до `35% D` в зависимости от геометрии пластин. Используются специальные плунжерные фрезы с усиленным торцевым зубом и перекрывающимися режущими кромками. При выходе из реза фреза должна отходить от стенки по `X/Y` на `0.5–1.0 мм` перед быстрым подъемом `G00 Z`, чтобы пластины не чертили по обработанной поверхности при обратном ходе. Особенно эффективно применение плунжерного фрезерования для **доработки углов** (`Corner Rest-Machining`) перед чистовым фрезерованием: выбирая избыточный припуск в глубоких радиусах вертикальными проходами, вы спасаете длинные концевые фрезы от мгновенной поломки из-за скачка угла обхвата.

**🇵🇱 Polski**
# Frezowanie wgłębne w osi Z (Plunge Milling): obróbka zgrubna głębokich kieszeni bez drgań
Podczas obróbki zgrubnej głębokich wnęk, matryc i pionowych ścian przy wysięgu narzędzia rzędu `5xD–8xD`, nawet głowice wysokoposuwowe (High-Feed) zaczynają wpadać w drgania z powodu promieniowego ugięcia oprawki. **Frezowanie wgłębne** (`Plunge Milling` / wycinanie wzdłuż osi `Z`) rozwiązuje ten problem u podstaw: ruch roboczy odbywa się wyłącznie pionowo z góry na dół wzdłuż osi wrzeciona `Z`, zamieniając niekorzystne promieniowe siły skrawania w siły osiowe, które są bezpośrednio przejmowane przez łożyska wzdłużne wrzeciona. Sztywność narzędzia w kierunku osiowym jest ponad `10-krotnie` wyższa niż w kierunku promieniowym!

Proces przypomina serię nakładających się wierceń wzdłuż zarysu ścianki lub po siatce ze skokiem wzdłuż ścieżki (`Pitch`) wynoszącym `60–75%` średnicy głowicy oraz szerokością skrawania (`Ae`) od `15%` do `35% D` w zależności od wielkości płytek. Stosuje się dedykowane frezy wgłębne z wzmocnioną krawędzią czołową. Na dnie każdego przejścia narzędzie musi odsunąć się od ściany w osiach `X/Y` o `0.5–1.0 mm` przed szybkim wycofaniem `G00 Z`, aby płytki nie rysowały obrobionej powierzchni w ruchu powrotnym. Metoda ta jest niezastąpiona przy **wybieraniu naddatku w narożach** (`Corner Rest-Machining`): pionowe wycięcie materiału w głębokich promieniach chroni długie frezy trzpieniowe przed złamaniem wskutek nagłego wzrostu kąta opasania.

**🇬🇧 English**
# Z-Axis Plunge Milling: Vibration-Free Roughing of Deep Cavities and Walls
When roughing deep mold cavities, dies, and steep vertical walls at extreme tool overhangs of `5xD–8xD`, even high-feed mills begin to chatter violently due to radial toolholder deflection. **Plunge milling** (`Z-axis plunging`) solves this problem fundamentally: cutting feed occurs strictly vertically along the spindle `Z`-axis, converting problematic radial forces into axial forces directed straight into the rigid thrust bearings of the spindle. A cutter assembly is more than `10 times` stiffer axially than radially!

The toolpath resembles a series of overlapping vertical plunges along a wall profile or grid, typically programmed with a forward step (`pitch`) of `60–75%` of cutter diameter and a radial engagement (`Ae`) of `15%` to `35% D` depending on insert geometry. Dedicated plunge cutters feature reinforced bottom-cutting edges and overlapping inner inserts to prevent leaving a central core. At the bottom of each stroke, always program a `0.5–1.0 mm` lateral `X/Y` retract away from the wall before rapid retracting in `G00 Z` so the inserts do not drag and chip on the upstroke. Plunge milling is also the ultimate strategy for **corner rest-machining** in deep pockets, safely hogging out heavy corner stock before sending in a long finishing end mill.

---

id: slot-milling-full-width
tag: Фрезерование | Frezowanie | Milling

**🇷🇺 Русский**
# Фрезерование закрытых пазов полным диаметром (Ae = 100% D): как не сломать фрезу
Фрезерование глухого или сквозного паза на полный диаметр фрезы (`Ae = 100% D`) — одна из самых тяжелых операций на фрезерном станке с ЧПУ. Зубья инструмента находятся в контакте с металлом на угле обхвата `180°`, стружке некуда вылетать из узкой щели, возникает повторное перерезание стружки (`Chip Recutting`), а радиальные силы отжимают фрезу в сторону, из-за чего паз получается кривым и разбитым по ширине. Если ширина паза позволяет, всегда заменяйте проход полным диаметром на **трохоидальное фрезерование** фрезой меньшего диаметра (например, фреза `Ø6–8 мм` для паза `10 мм`).

Если же паз необходимо прорезать за один проход в размер или трохоида невозможна, соблюдайте жесткие правила выживания инструмента:
1. Выбирайте `2-зубые` или `3-зубые` концевые фрезы с большими стружечными канавками (никогда не берите `5–6` зубьев для паза по стали — канавки мгновенно забьются!).
2. Снижайте осевую глубину резания `Ap` до `0.25–0.5xD` по стали (до `0.8–1.0xD` по алюминию с `2-зубой` полированной фрезой) и уменьшайте подачу на зуб `fz` на `30–40%` от табличной для уступа.
3. При изготовлении точных шпоночных пазов по допуску `H9` или `P9` (например, паз `10P9`) никогда не используйте фрезу `Ø10.0 мм`! Пройдите черновой паз по центру фрезой `Ø9.0 мм` или `Ø9.5 мм`, а затем расфрезеруйте обе стенки попутным фрезерованием с коррекцией радиуса `G41`, чтобы компенсировать отжим инструмента и получить идеальную геометрию.

**🇵🇱 Polski**
# Frezowanie rowków pełną średnicą (Ae = 100% D): jak uniknąć złamania frezu
Wykonywanie zamkniętego rowka pełną średnicą narzędzia (`Ae = 100% D`) to jedna z najtrudniejszych operacji na frezarce CNC. Ostrza skrawające pracują przy kącie opasania `180°`, ewakuacja wiórów z wąskiej szczeliny jest skrajnie utrudniona, dochodzi do ponownego przecinania wiórów (`Chip Recutting`), a siły promieniowe odpychają frez na bok, przez co rowek traci prostoliniowość i wymiar. Jeśli geometria na to pozwala, zawsze zastępuj pełny rowek **frezowaniem trochoidalnym** narzędziem o mniejszej średnicy (np. frez `Ø6–8 mm` pod rowek `10 mm`).

Gdy musisz jednak wykonać rowek pełną średnicą, przestrzegaj żelaznych zasad:
1. Wybieraj frezy `2-ostrzowe` lub `3-ostrzowe` z dużymi rowkami wiórowymi (nigdy nie używaj frezów `5–6` ostrzowych do rowkowania w stali, ponieważ natychmiast zakleją się wiórem!).
2. Zredukuj osiową głębokość skrawania `Ap` do `0.25–0.5xD` w stali (do `0.8–1.0xD` w aluminium przy `2-ostrzowym` polerowanym frezie) oraz zmniejsz posuw na ostrze `fz` o `30–40%` względem parametrów dla obróbki bocznej.
3. Przy wykonywaniu dokładnych rowków wpustowych w tolerancji `H9` lub `P9` (np. `10P9`), nigdy nie używaj frezu `Ø10.0 mm`! Najpierw rozfrezuj środek zgrubnie narzędziem `Ø9.0 mm` lub `Ø9.5 mm`, a następnie wykończ obie ścianki obróbką współbieżną z korekcją promienia `G41`, eliminując wpływ ugięcia frezu.

**🇬🇧 English**
# Full-Width Slot Milling (Ae = 100% D): Surviving the Hardest Cut in Milling
Cutting a closed slot at full cutter diameter (`Ae = 100% D`) is one of the most punishing operations on a CNC machining center. The flutes remain buried in metal across a `180°` radial engagement angle, chip evacuation is severely restricted, **chip recutting** generates extreme heat, and radial cutting forces deflect the tool sideways—resulting in tapered walls and an oversize, wandering slot. Whenever possible, replace full slotting with **trochoidal milling** using a smaller cutter (for example, a `Ø6–8 mm` end mill for a `10 mm` slot).

When full-width slotting is unavoidable, follow these strict shop-floor survival rules:
1. Choose `2-flute` or `3-flute` end mills with generous chip gullets (never attempt full slotting in steel with a `5-` or `6-flute` finisher—it will pack with chips and snap immediately!).
2. Step down in multiple passes with axial depth `Ap` limited to `0.25–0.5xD` in steel (`0.8–1.0xD` in aluminum using a polished `2-flute` cutter), and reduce feed per tooth `fz` by `30–40%` compared to side-milling tables.
3. For precision keyways held to `H9` or `P9` tolerances (such as a `10P9` slot), never plunge a `Ø10.0 mm` cutter down the middle! Rough the center with an undersize `Ø9.0 mm` or `Ø9.5 mm` end mill, then climb-mill both side walls using `G41` cutter compensation to eliminate deflection errors.

---

id: micro-milling-small-tools
tag: Фрезерование | Frezowanie | Milling

**🇷🇺 Русский**
# Микрофрезерование инструментом Ø0.1–2.0 мм: биение, обороты и эффект затирания
Работа микрофрезами диаметром от `Ø0.1 мм` до `Ø2.0 мм` при изготовлении мелких пресс-форм, электродов и медицинских деталей подчиняется законам, кардинально отличающимся от силового фрезерования. Главный враг микрофрезы — **радиальное биение в оправке** (`Runout`). Если подача на зуб `fz` для фрезы `Ø0.5 мм` составляет всего `0.004–0.008 мм` (`4–8 мкм`), а биение стандартного цангового патрона `ER` равно `0.010 мм`, то один зуб фрезы вообще не будет касаться металла, а второй примет двойную нагрузку (`200%`) и мгновенно отломится без видимой причины!

Для успешного микрофрезерования соблюдайте следующие требования:
- **Оправки и биение:** используйте исключительно термооправки (`Shrink-Fit`), гидропластовые патроны высокой точности или прецизионные микроцанги (`ER-UP` / `Rego-Fix powRgrip` / `Schunk Tribos`) с гарантированным биением на вылете менее `0.002 мм` (`2 мкм`).
- **Обороты шпинделя:** для достижения разумной скорости резания на диаметре `Ø0.5 мм` необходимы обороты `24,000–60,000 об/мин`. Если основной шпиндель станка крутит только `10,000–12,000 об/мин`, установите пневматический или электрический **мультипликатор оборотов** (`High-Speed Spindle Speeder`).
- **Минимальная толщина стружки:** радиус скругления режущей кромки микрофрезы составляет около `2–4 мкм`. Никогда не занижайте подачу `fz` ниже `0.002 мм/зуб` — вместо срезания стружки начнется **пластическое выдавливание и трение** (`Ploughing`), которое раскалит и сломает инструмент. Привязывайте микрофрезы только лазерным датчиком (`Laser Tool Setter`), так как контактный «грибок» просто скалывает их кромки при касании.

**🇵🇱 Polski**
# Mikrofrezowanie narzędziami Ø0.1–2.0 mm: bicie, obroty i minimalna grubość wióra
Obróbka mikrofrezami o średnicach od `Ø0.1 mm` do `Ø2.0 mm` przy produkcji matryc, elektrod EDM i części medycznych rządzi się zupełnie innymi prawami niż klasyczne frezowanie. Największym wrogiem mikrofrezu jest **bicie promieniowe w oprawce** (`Runout`). Skoro posuw na ostrze `fz` dla frezu `Ø0.5 mm` wynosi zaledwie `0.004–0.008 mm` (`4–8 µm`), a bicie zwykłej oprawki zaciskowej `ER` sięga `0.010 mm`, to jedno ostrze w ogóle nie będzie skrawać, natomiast drugie przejmie podwójne obciążenie (`200%`) i pęknie w ułamku sekundy!

Aby bezpiecznie prowadzić mikrofrezowanie, wdroż poniższe zasady:
- **Oprawki i bicie:** stosuj wyłącznie oprawki termokurczliwe (`Shrink-Fit`), precyzyjne oprawki hydrauliczne lub systemy mikro-zaciskowe (`ER-UP` / `Rego-Fix powRgrip` / `Schunk Tribos`) gwarantujące bicie poniżej `0.002 mm` (`2 µm`).
- **Obroty wrzeciona:** utrzymanie właściwej prędkości skrawania dla `Ø0.5 mm` wymaga obrotów rzędu `24,000–60,000 obr./min`. Na standardowych centrach (`10,000–12,000 obr./min`) zastosuj pneumatyczną lub elektryczną **głowicę szybkoobrotową** (`Spindle Speeder`).
- **Minimalna grubość wióra:** promień zaokrąglenia krawędzi skrawającej mikrofrezu wynosi ok. `2–4 µm`. Nie zmniejszaj posuwu `fz` poniżej `0.002 mm/ostrze` — zamiast ścinania materiału nastąpi **płużenie i tarcie** (`Ploughing`), które natychmiast zniszczy narzędzie. Pomiar długości i średnicy wykonuj wyłącznie systemem laserowym, ponieważ sonda stykowa wykruszy delikatny narożnik frezu.

**🇬🇧 English**
# Micro-Milling with Ø0.1–2.0 mm End Mills: Runout, RPM, and Minimum Chip Thickness
Machining with micro end mills ranging from `Ø0.1 mm` to `Ø2.0 mm` for medical components, watchmaking, and fine mold details follows physics completely different from conventional milling. The number-one killer of micro-tools is **radial runout**. When the programmed feed per tooth `fz` for a `Ø0.5 mm` cutter is only `0.004–0.008 mm` (`4–8 µm`), a standard `ER` collet chuck with `0.010 mm` of runout causes one flute to miss the workpiece entirely while the other flute takes `200%` of the chip load and snaps instantaneously!

To succeed in micro-milling on the shop floor, enforce these critical practices:
- **Toolholding and runout:** exclusively use thermal `Shrink-Fit` holders, ultra-precision hydraulic chucks, or specialized micro-collet systems (`ER-UP`, `Rego-Fix powRgrip`, or `Schunk Tribos`) guaranteeing total indicator runout (`TIR`) under `0.002 mm` (`2 µm`).
- **Spindle speed:** achieving effective cutting speed at `Ø0.5 mm` requires `24,000–60,000 RPM`. On standard `10,000–12,000 RPM` machining centers, mount an air-turbine or electric **high-speed spindle speeder**.
- **Minimum chip thickness:** a micro-cutter's cutting-edge radius (`honing`) is around `2–4 µm`. Never drop `fz` below `0.002 mm/tooth` out of caution—doing so shifts the process from shearing into **ploughing** (rubbing), generating localized heat that snaps the tool. Always measure tools with a non-contact **laser tool setter** rather than a mechanical touch setter.

---

id: reaming-precision-holes
tag: Сверление | Wiercenie | Drilling

**🇷🇺 Русский**
# Развертывание точных отверстий H7 на ЧПУ: припуск, режимы и цикл G85
Машинное развертывание (`Reaming`) остается самым быстрым и стабильным способом получения точных отверстий по квалитету `H7` (и даже `H6`) с шероховатостью `Ra 0.4–0.8 мкм` в серийном производстве. Однако многие операторы портят развертки и получают прослабленные или заниженные отверстия из-за неправильного **припуска под развертывание** и ошибок в управляющей программе.

Запомните золотые правила работы машинными развертками (твердосплавными и `HSS-E`):
1. **Точный припуск на диаметр:** оставляйте после сверла или расточки строго `0.10–0.25 мм` на диаметр (для отверстий `Ø5–20 мм`). Если оставить слишком мало (`< 0.05 мм`), зубья развертки не смогут врезаться в наклепанный слой, начнут тереть и завальцовывать металл, а отверстие получится **меньше номинала**! Если оставить слишком много (`> 0.4 мм`), развертка перегрузится и пойдет в дробление.
2. **Скорость и подача:** используйте правило **«половина скорости, двойная подача»** относительно сверления. Снизьте скорость резания `Vc` до `10–20 м/мин` для `HSS-E` (`40–80 м/мин` для твердого сплава), но увеличьте оборотную подачу `fn` до `0.15–0.40 мм/об`, чтобы каждый из `6–8` зубьев снимал полноценную стружку.
3. **Цикл `G85` и вывод инструмента:** используйте цикл `G85` (вывод на рабочей подаче при вращающемся шпинделе). **Никогда не останавливайте шпиндель (`M05`) и не включайте реверс (`M04`) внутри отверстия** — застрявшие между ленточками и стенкой микрочастицы стружки мгновенно выкрошат режущие кромки и оставят глубокие задиры!

**🇵🇱 Polski**
# Rozwiercanie dokładnych otworów H7 na CNC: naddatek, parametry i cykl G85
Rozwiercanie maszynowe (`Reaming`) to najszybsza i najbardziej powtarzalna metoda wykonywania otworów w klasie dokładności `H7` (a nawet `H6`) o chropowatości `Ra 0.4–0.8 µm` w produkcji seryjnej. Mimo to operatorzy często niszczą rozwiertaki lub otrzymują otwory poza tolerancją z powodu błędnego **naddatku pod rozwiercanie** oraz nieprawidłowego wycofania narzędzia.

Oto najważniejsze zasady poprawnego rozwiercania (narzędziami węglikowymi i `HSS-E`):
1. **Ścisły naddatek na średnicę:** po wierceniu pozostaw dokładnie `0.10–0.25 mm` naddatku na średnicę (dla otworów `Ø5–20 mm`). Zbyt mały naddatek (`< 0.05 mm`) sprawi, że ostrza zamiast skrawać zaczną ślizgać się i nagniatać utwardzoną warstwę, dając otwór **za mały (poniżej wymiaru)**! Zbyt duży naddatek (`> 0.4 mm`) wywoła drgania (karbowanie ścianki) i rozbicie średnicy.
2. **Prędkość i posuw:** stosuj zasadę **„połowa prędkości, podwójny posuw”** w porównaniu do wiercenia. Obniż prędkość skrawania `Vc` do `10–20 m/min` dla `HSS-E` (`40–80 m/min` dla węglika), ale zwiększ posuw na obrót `fn` do `0.15–0.40 mm/obr.`, aby każde z `6–8` ostrzy pobierało właściwy wiór.
3. **Cykl `G85` i wycofanie:** programuj cykl `G85` (wyjazd posuwem roboczym przy obracającym się wrzecionie). **Nigdy nie zatrzymuj wrzeciona (`M05`) ani nie włączaj lewych obrotów (`M04`) na dnie otworu** — drobiny wiórów zakleszczone pod łysinkami natychmiast wykruszą ostrza rozwiertaka i porysują gładź otworu!

**🇬🇧 English**
# CNC Reaming for H7 Precision Holes: Stock Allowance, Feeds, and the G85 Cycle
Machine reaming remains the fastest, most repeatable method for producing `H7` (and even `H6`) tolerance bores with a `Ra 0.4–0.8 µm` surface finish in high-volume production. Yet many machinists struggle with bell-mouthed, oversize, or undersize holes because of improper **stock allowance** and incorrect retract cycles.

Follow these essential shop-floor rules for HSS-E and solid-carbide reamers:
1. **Strict stock allowance on diameter:** leave exactly `0.10–0.25 mm` on diameter after drilling (for `Ø5–20 mm` bores). If you leave too little stock (`< 0.05 mm`), the reamer margins cannot bite beneath the work-hardened layer; the tool will rub, burnish, and push the metal back, resulting in an **undersize hole** and rapid margin wear! Leaving too much (`> 0.4 mm`) overloads the chamfer lead and causes chatter lobes.
2. **Speeds and feeds:** apply the classic **"half the speed, twice the feed"** rule relative to drilling. Reduce cutting speed `Vc` to `10–20 m/min` for `HSS-E` (`40–80 m/min` for carbide), and increase feed rate `fn` to `0.15–0.40 mm/rev` so all `6–8` flutes cut actively rather than rubbing.
3. **Use `G85` and never stop the spindle:** program a `G85` feed-in / feed-out cycle. **Never stop the spindle (`M05`) or reverse it (`M04`) inside the bore**—fine chips trapped behind the cylindrical margins will instantly chip the cutting edges and score the finished bore!

---

id: spot-drilling-chamfer-angle
tag: Сверление | Wiercenie | Drilling

**🇷🇺 Русский**
# Зацентровка под твердосплавное сверло: почему угол 90° убивает сверла 140°
Одна из самых распространенных и дорогих ошибок в цехах ЧПУ — зацентровка отверстий стандартной центровкой с углом при вершине `90°` перед сверлением монолитным твердосплавным сверлом с углом `135°–140°`. Для классических быстрорежущих сверл `HSS` (`118°`) лунка `90°` подходила приемлемо, так как быстрорез упругий и прощает удар уголками. Но твердый сплав хрупок на удар: когда сверло `140°` входит в узкий конус `90°`, его поперечная кромка (перемычка) висит в воздухе в центре, а **внешние уголки режущих кромок** первыми врезаются в наклонные стенки лунки! В этот момент вся осевая нагрузка приходится на самые тонкие и уязвимые уголки ленточек — они мгновенно скалываются, и сверло лопается на первых миллиметрах прохода.

Как правильно готовить вход для монолитных твердосплавных сверл:
- **Без зацентровки вообще:** на плоской фрезерованной или торцованной поверхности короткие твердосплавные сверла (`3xD–5xD`) с современной самоцентрирующейся подточкой (`4-гранная` или `S-образная` перемычка) **не требуют зацентровки**! Достаточно снизить подачу `fn` на `50%` на входе до полного захода конуса сверла (на глубину `1.5–2.0 мм`), а затем включить `100%` рабочей подачи.
- **Центровка с углом `142°–145°`:** если вы сверлите наклонную, литую или криволинейную поверхность, либо работаете сверлом `8xD–12xD`, используйте специальную твердосплавную центровку с углом `142°–145°`. Тогда сверло `140°` коснется металла строго центральной перемычкой, мягко отцентрируется в конусе, и внешние уголки вступят в резание последними без малейшего удара.

**🇵🇱 Polski**
# Nawiercanie pod wiertła węglikowe: dlaczego nawiertak 90° niszczy wiertła 140°
Jednym z najczęstszych i najbardziej kosztownych błędów na wydziałach CNC jest wykonywanie nakiełków standardowym nawiertakiem o kącie wierzchołkowym `90°` przed wierceniem monolitycznym wiertłem węglikowym (`VHM`) o kącie `135°–140°`. W przypadku klasycznych wierteł szybkotnących `HSS` (`118°`) stożek `90°` sprawdzał się wystarczająco dobrze, ponieważ stal `HSS` jest ciągliwa. Węglik spiekany jest jednak bardzo kruchy na udary: gdy wiertło `140°` wchodzi w wąski stożek `90°`, jego ścin wisi w powietrzu na środku, natomiast **zewnętrzne naroża krawędzi skrawających** uderzają jako pierwsze w skośne ścianki nakiełka! Całe obciążenie skupia się na najcieńszych narożach łysinek, powodując ich natychmiastowe wykruszenie i pęknięcie wiertła.

Jak prawidłowo rozpoczynać otwór wiertłem węglikowym:
- **Całkowita rezygnacja z nawiercania:** na płaskiej, splanowanej powierzchni krótkie wiertła węglikowe (`3xD–5xD`) z samocentrującą geometrią wierzchołka **nie wymagają nawiercania**! Wystarczy zmniejszyć posuw `fn` o `50%` na odcinku wejścia stożka (przez pierwsze `1.5–2.0 mm`), a po ustabilizowaniu wiertła przejść na `100%` posuwu roboczego.
- **Nawiertak o kącie `142°–145°`:** przy wierceniu na powierzchniach pochyłych, surowych odlewach lub przed wiertłami głębokimi (`8xD–12xD`), stosuj nawiertak o kącie `142°–145°`. Wówczas wiertło `140°` oprze się najpierw samym środkiem (ścinem), idealnie wycentruje w gnieździe, a wrażliwe naroża zewnętrzne wejdą w materiał na końcu bez uderzenia.

**🇬🇧 English**
# Spot Drilling Before Carbide Drills: Why a 90° Spot Drill Destroys 140° Drills
One of the most common and expensive mistakes in CNC machine shops is spotting holes with a standard `90°` spot drill prior to running a `135°–140°` solid-carbide drill. While a `90°` spot worked fine for old-school `118°` HSS twist drills—whose tough high-speed steel corners could tolerate initial edge contact—solid carbide is brittle under shock loading. When a `140°` carbide drill enters a `90°` cone, its center point hangs in mid-air while the delicate **outer corners (margins)** slam into the angled walls of the spot first! All cutting force concentrates on the fragile outer tips, chipping the margins immediately and snapping the drill shortly after.

Follow these two proven rules for starting solid-carbide drills:
- **Skip spot drilling on flat surfaces:** up to `5xD` length, modern self-centering solid-carbide drills (`S-chisel` or `4-facet` point geometry) **should not be spot-drilled at all** on flat milled or faced surfaces! Simply program a `50%` feed reduction (`fn`) for the first `1.5–2.0 mm` until the drill point is fully buried, then ramp up to `100%` feed. If a chamfer is needed, cut it *after* drilling.
- **Use a `142°–145°` spot drill when required:** on angled surfaces, rough castings, or before `8xD–12xD` deep-hole drills, spot with a `142°–145°` point angle so the `140°` drill engages dead-center first and protects its outer corners.

---

id: single-point-threading-g76
tag: Токарка | Toczenie | Turning

**🇷🇺 Русский**
# Нарезание резьбы резцом на ЧПУ (G76 / CYCLE99): схемы врезания и расчет проходов
При токарном нарезании резьбы однозубыми пластинами по циклу `G76` (`Fanuc`/`Haas`) или `CYCLE99` (`Siemens`) качество профиля и стойкость пластины зависят прежде всего от выбранного **метода врезания** (`Infeed Method`). Если задать прямое радиальное врезание (`0°`, когда резец идет строго по оси `X`), обе боковые кромки пластины режут одновременно, стружка с двух сторон сталкивается в вершине и рвет витки резьбы, а при шаге более `1.5 мм` возникают сильные вибрации.

Профессиональная настройка цикла резьбонарезания включает:
1. **Модифицированное боковое врезание (`29°` или `29.5°`):** для метрической резьбы с профилем `60°` задавайте угол врезания `29°` (в первом кадре двухстрочного `G76 P010029` последние две цифры `29` задают угол пластины с односторонним врезанием; на `Haas` параметр `A29.`). Тогда `95%` металла срезает передняя кромка, формируя красивую витую стружку как при обычном точении, а задняя кромка лишь зачищает профиль под углом `0.5–1°` без затирания.
2. **Глубина первого и последнего прохода:** первый проход (`Q` во второй строке `G76`) должен снимать около `0.15–0.25 мм` на радиус, чтобы пластина уверенно прорезала наклеп. Минимальная глубина прохода (`Q` в первой строке `G76`) не должна быть меньше `0.04–0.05 мм` (`40–50 мкм`), иначе пластина начнет скользить. В конце обязательно ставьте `1–2` калибрующих прохода (`P01..` или `P02..`).
3. **Полнопрофильные пластины:** по возможности выбирайте полнопрофильные пластины (`Full-Profile`, например `16ER 1.5 ISO`) вместо неполнопрофильных (`A60` / `AG60`) — они сами калибруют наружный диаметр резьбы по вершинам и снимают заусенцы!

**🇵🇱 Polski**
# Gwintowanie nożem na tokarce CNC (G76 / CYCLE99): metody wcinania i głębokości przejść
Podczas toczenia gwintów płytkami jednoostrzowymi w cyklu `G76` (`Fanuc`/`Haas`) lub `CYCLE99` (`Siemens`), jakość zarysu i trwałość ostrza zależą przede wszystkim od **metody wcinania** (`Infeed Method`). Zastosowanie prostego wcinania promieniowego (`0°`, wyłącznie w osi `X`) sprawia, że obie boczne krawędzie płytki skrawają jednocześnie, wióry z obu stron zderzają się na dnie bruzdy, wyrywając materiał na bokach zarysu, a przy skoku powyżej `1.5 mm` pojawiają się silne drgania.

Zasady optymalnego programowania cyklu gwintowania:
1. **Zmodyfikowane wcinanie boczne (`29°` lub `29.5°`):** dla gwintów metrycznych `60°` ustaw kąt wcinania na `29°` (w pierwszym bloku dwulinijkowego `G76 P010029` ostatnie dwie cyfry `29` definiują wcinanie boczne; na `Haas` parametr `A29.`). Wówczas `95%` naddatku zbiera krawędź natarcia, tworząc płynny wiór, natomiast tylna krawędź zostawia minimalny luz `0.5–1°`, unikając zatarcia i wykruszenia płytki.
2. **Głębokość pierwszego i minimalnego przejścia:** pierwsze przejście (`Q` w drugiej linii `G76`) powinno wynosić `0.15–0.25 mm` na promień, aby ostrze przebiło utwardzoną warstwę. Minimalny dosuw (`Q` w pierwszej linii `G76`) nie powinien spadać poniżej `0.04–0.05 mm` (`40–50 µm`), by uniknąć ślizgania się ostrza. Na koniec zaprogramuj `1–2` przejścia wyiskrzające (`Spring Passes`).
3. **Płytki pełnozarysowe:** zamiast płytek wielozakresowych (`A60` / `AG60`) wybieraj płytki pełnozarysowe (`Full-Profile`, np. `16ER 1.5 ISO`), które jednocześnie kalibrują wierzchołki gwintu bez gratów!

**🇬🇧 English**
# Single-Point CNC Threading (G76 / CYCLE99): Flank Infeed and Pass Depth Calculation
When single-point threading on a CNC lathe using `G76` (`Fanuc`/`Haas`) or `CYCLE99` (`Siemens`), thread flank quality and insert life depend heavily on your chosen **infeed method**. Programming straight radial infeed (`0°`, plunging purely along the `X`-axis) forces both edges of the `60°` insert to cut simultaneously. Chips from both flanks collide in the root, tearing the thread walls and triggering severe chatter on pitches above `1.5 mm`.

Set up your threading cycles using these proven shop-floor parameters:
1. **Modified flank infeed (`29°` or `29.5°`):** for `60°` metric or unified threads, specify a `29°` infeed angle (in two-line Fanuc `G76 P010029`, the last two digits `29` select compound flank infeed; on `Haas`, use `A29.`). This directs `95%` of the chip load onto the leading cutting edge—curling a clean, single chip like a normal turning operation—while the trailing edge lightly shaves at a `0.5–1°` clearance angle without rubbing.
2. **First pass and minimum clamping depth:** set the first pass depth (`Q` in the second `G76` block) to `0.15–0.25 mm` radial so the nose cuts cleanly beneath work-hardened skin. Set minimum pass depth (`Q` in the first `G76` block) no lower than `0.04–0.05 mm` (`40–50 µm`) to prevent rubbing, followed by `1–2` spring passes (`P01..` or `P02..`).
3. **Full-profile inserts:** whenever possible, choose pitch-specific **full-profile inserts** (`16ER 1.5 ISO`) over partial-profile (`A60`/`AG60`) inserts to simultaneously top the thread crest and eliminate burrs.

---

id: live-tooling-c-axis-lathe
tag: Токарка | Toczenie | Turning

**🇷🇺 Русский**
# Приводной инструмент и ось C на токарном ЧПУ: фрезерование с G12.1 и G07.1
Токарно-фрезерные центры с приводным инструментом (`Live Tooling`) и управляемой осью шпинделя `C` позволяют полностью изготовить деталь с лысками, пазами, шестигранниками и внецентровыми отверстиями за один установ. Даже если на станке отсутствует физическая линейная ось `Y`, функции **полярной (`G12.1` / `G112`)** и **цилиндрической (`G07.1` / `G107`) интерполяции** превращают связку осей `X + C` и `Z + C` в полноценные фрезерные координаты!

Практические правила работы с приводным инструментом и осью `C`:
- **Полярная интерполяция торца (`G12.1` / `G112` на Fanuc/Haas, `TRANSMIT` на Siemens):** после включения `G12.1` вы программируете контур на торце детали (например, шестигранник или квадрат) в привычных декартовых координатах `X` (по диаметру или радиусу в зависимости от параметров станка) и `C` (выступающей в роли виртуальной оси `Y` в миллиметрах!), используя стандартные коды `G01`, `G02`, `G03` и коррекцию `G41`/`G42`. Стойка ЧПУ сама синхронно вращает патрон `C` и двигает револьвер по `X`. Помните: в режиме `G12.1` **нельзя пересекать центр вращения `X0`**, так как при `X -> 0` требуемая угловая скорость оси `C` стремится к бесконечности!
- **Цилиндрическая интерполяция (`G07.1` / `TRACYL`):** разворачивает боковую поверхность цилиндра на плоскость для фрезерования винтовых и кулачковых пазов.
- **Жесткость приводных блоков:** подшипники приводных блоков `VDI`/`BMT` с цангами `ER25`/`ER32` значительно слабее шпинделя фрезерного станка. Ограничивайте диаметр концевых фрез до `Ø10–12 мм`, используйте фрезы с неравным шагом и всегда включайте гидравлический тормоз шпинделя (`M14` / `M68`) при сверлении вне оси!

**🇵🇱 Polski**
# Narzędzia napędzane i oś C na tokarce CNC: frezowanie z G12.1 oraz G07.1
Centra tokarsko-frezarskie wyposażone w narzędzia napędzane (`Live Tooling`) oraz pozycjonowaną oś wrzeciona `C` pozwalają wykonać na gotowo detale z płaszczyznami pod klucz, rowkami, sześciokątami i otworami pozaosiowymi w jednym zamocowaniu. Nawet jeśli tokarka nie posiada fizycznej osi liniowej `Y`, funkcje **interpolacji biegunowej (`G12.1` / `G112`)** oraz **interpolacji walcowej (`G07.1` / `G107`)** przekształcają ruch osi `X + C` i `Z + C` w pełnoprawny układ współrzędnych frezarskich!

Praktyczne zasady obróbki narzędziami napędzanymi z osią `C`:
- **Interpolacja biegunowa na czole (`G12.1` / `G112` na Fanuc/Haas, `TRANSMIT` na Siemens):** po aktywacji `G12.1` programujesz kontur na czole detalu (np. sześciokąt) w zwykłych współrzędnych kartezjańskich `X` oraz `C` (pełniącej rolę wirtualnej osi `Y` w milimetrach!), używając `G01`, `G02`, `G03` i korekcji `G41`/`G42`. Układ CNC sam synchronizuje obrót uchwytu `C` z ruchem głowicy w `X`. Pamiętaj: w trybie `G12.1` **nie wolno przechodzić przez środek obrotu `X0`**, gdyż przy `X -> 0` wymagana prędkość kątowa osi `C` dąży do nieskończoności!
- **Interpolacja walcowa (`G07.1` / `TRACYL`):** rozwija pobocznicę walca na płaszczyznę, umożliwiając frezowanie krzywek i rowków śrubowych.
- **Sztywność oprawek napędzanych:** łożyska oprawek kątowych `VDI`/`BMT` (`ER25`/`ER32`) mają znacznie mniejszą sztywność niż wrzeciono frezarki. Stosuj frezy do `Ø10–12 mm`, ograniczaj `Ap/Ae` i zawsze załączaj hamulec wrzeciona (`M14` / `M68`) podczas wiercenia poza osią!

**🇬🇧 English**
# Live Tooling and C-Axis Turn-Milling: Mastering G12.1 Polar and G07.1 Cylindrical Interpolation
Turn-mill CNC lathes equipped with **live tooling** (driven tools) and a servo-controlled `C`-axis spindle allow you to complete complex parts with hex flats, keyways, and off-center holes in a single setup. Even when the lathe lacks a physical linear `Y`-axis, **polar coordinate interpolation (`G12.1` / `G112`)** and **cylindrical interpolation (`G07.1` / `G107`)** transform synchronized `X + C` and `Z + C` movements into virtual milling planes!

Apply these shop-floor rules when programming live tools:
- **Face milling with Polar Interpolation (`G12.1` / `G112` on Fanuc/Haas, `TRANSMIT` on Siemens):** once `G12.1` is active, you program face contours (such as hex flats or pockets) using standard Cartesian coordinates `X` and `C` (where `C` acts as a virtual `Y`-axis in millimeters!), complete with `G01`, `G02`/`G03` arcs, and `G41`/`G42` cutter compensation. The CNC automatically coordinates `C`-axis rotation with `X`-axis linear motion. Critical rule: **never program the tool center to cross `X0`** while in `G12.1`, because as `X` approaches zero, the required `C`-axis angular velocity spikes toward infinity and triggers an axis overload alarm!
- **Cylindrical Interpolation (`G07.1` / `TRACYL`):** unwraps the cylindrical OD onto a flat plane for milling cam slots and helical grooves.
- **Driven toolholder rigidity:** `VDI`/`BMT` live holders with `ER25`/`ER32` collets are far less rigid than a VMC spindle. Keep end mill diameters under `Ø10–12 mm`, use high-speed low-radial-engagement cuts, and always clamp the spindle brake (`M14` / `M68`) when drilling off-center holes!

---

id: sub-spindle-part-transfer
tag: Токарка | Toczenie | Turning

**🇷🇺 Русский**
# Перехват детали в противошпиндель: синхронизация оборотов и отрезка без бобышки
Токарные станки с **противошпинделем** (`Sub-Spindle` / ось `B` или `W`) позволяют полностью обработать деталь с двух сторон в автоматическом цикле без участия оператора. Однако неправильно запрограммированный перехват (`Part Transfer`) приводит к появлению торцевого и радиального биения на второй стороне (`Op2`), уходу линейных размеров по оси `Z` на `0.1–0.3 мм` из-за стружки под губками или поломке отрезного резца в момент дорезания!

Надежный алгоритм перехвата и отрезки включает 4 обязательных этапа:
1. **Продувка кулачков и контроль упора:** перед подходом к детали противошпиндель с разжатыми цангой или кулачками должен включить обдув воздухом (`Air Blast`) или СОЖ через шпиндель, чтобы смыть стружку с базовых поверхностей. Если станок поддерживает функцию **контроля момента по оси `B/W`** (`Torque Limit Skip G31`), упритесь торцом цанги в торец детали с ограничением усилия `20–30%` — это гарантирует плотный контакт по `Z` и вызовет ошибку, если под упор попала стружка.
2. **Синхронизация скорости и фазы (`M151` / `G110` / `COUPON`):** для круглых деталей достаточно синхронизации оборотов, но если на первой установке были профрезерованы лыски или шестигранник, обязательно включите **фазовую синхронизацию оси `C`** обоих шпинделей перед зажимом!
3. **Снятие осевого натяга:** после закрытия цанги противошпинделя оба шпинделя жестко связаны через деталь. Сделайте короткую паузу `G04 X0.5`, чтобы гидроцилиндр зажима стабилизировал давление и не тянул пруток на себя.
4. **Отрезка без бобышки:** используйте отрезные пластины с углом врезания `6°–15°` (`Right/Left Hand` в сторону главного шпинделя) и снижайте подачу `fn` на `50%` с диаметра `Ø6 мм` до `X-1.0`, чтобы чисто срезать центральную бобышку без отрыва детали.

**🇵🇱 Polski**
# Przechwyt detalu przez przeciwwrzeciono: synchronizacja obrotów i odcinanie bez wypustki
Tokarki CNC wyposażone w **przeciwwrzeciono** (`Sub-Spindle` / oś `B` lub `W`) umożliwiają kompletną obróbkę detalu z obu stron w cyklu automatycznym bez udziału operatora. Jednak błędnie zaprogramowany przechwyt (`Part Transfer`) powoduje bicie promieniowe i osiowe na drugiej operacji (`Op2`), pływanie długości całkowitej w osi `Z` o `0.1–0.3 mm` przez wióry pod szczękami lub wyłamanie płytki odcinającej w ostatniej fazie cięcia!

Niezawodna procedura przechwytu i odcinania obejmuje 4 kluczowe kroki:
1. **Przedmuch szczęk i kontrola docisku:** podczas dojazdu do detalu przeciwwrzeciono z otwartą tuleją zaciskową musi włączyć przedmuch powietrzem (`Air Blast`) lub chłodziwem przez wrzeciono, aby zdmuchnąć wióry ze strefy bazowania. Jeśli maszyna posiada funkcję **kontroli momentu osi `B/W`** (`Torque Skip G31`), dociśnij czoło tulei do detalu z ograniczeniem siły do `20–30%` — zapewni to powtarzalność wymiaru `Z` i zatrzyma cykl w razie wykrycia wióra.
2. **Synchronizacja prędkości i fazy (`M151` / `G110` / `COUPON`):** przy detalach okrągłych wystarcza synchronizacja obrotów, natomiast przy chwytaniu za wyfrezowany sześciokąt lub kontur włącz **synchronizację fazową osi `C`** obu wrzecion przed zaciśnięciem uchwytu!
3. **Odprężenie osiowe:** po zamknięciu tulei przeciwwrzeciona odczekaj `G04 X0.5`, aby siłownik ustabilizował ciśnienie i nie wprowadzał naprężeń osiowych w pręt.
4. **Odcinanie bez wypustki (pip-free):** stosuj płytki odcinające ze skosem `6°–15°` skierowanym w stronę wrzeciona głównego i zmniejsz posuw `fn` o `50%` od średnicy `Ø6 mm` do `X-1.0`, aby czysto ściąć środek bez narostu.

**🇬🇧 English**
# Sub-Spindle Part Transfer: Synchronization, Torque Skip, and Pip-Free Part-Off
Twin-spindle CNC lathes equipped with a **sub-spindle** (`B` or `W` axis) enable complete "Done-in-One" machining of both `Op1` and `Op2` ends without manual handling. However, a poorly programmed part transfer leads to `Op2` concentricity runout, axial `Z`-length variations of `0.1–0.3 mm` from chips trapped against the collet face, or catastrophic parting-blade breakage just as the part severs!

Build a bulletproof sub-spindle transfer sequence around these 4 steps:
1. **Air/coolant wash and torque-skip seating:** as the open sub-spindle approaches the part in `G01`, keep through-spindle air blast or coolant (`M-code`) running to flush swarf off the `Op1` diameter and face. Use a **torque-limited skip move (`G31`)** at `20–30%` axial thrust to seat the sub-spindle collet stop firmly against the part face—if a stray chip is trapped, the position check will catch the `Z` discrepancy and alarm out before clamping.
2. **Speed and phase synchronization (`M151` / `G110` / `COUPON`):** while RPM synchronization suffices for round parts, gripping across milled hex flats or contoured jaws requires **C-axis phase synchronization** prior to advancing onto the workpiece!
3. **Dwell after clamping:** always program a `G04 X0.5` dwell immediately after closing the sub-spindle collet so drawtube pull-back forces stabilize before the parting tool enters the cut.
4. **Pip-free part-off:** use a `6°–15°` angled front-edge parting insert (lead angle biased toward the main spindle so the `Op2` face stays clean) and reduce feed rate `fn` by `50%` from `Ø6 mm` down to `X-1.0` to shear the center cleanly without snapping the insert.

---

id: bar-feeder-vibration-lathe
tag: Токарка | Toczenie | Turning

**🇷🇺 Русский**
# Работа с барфидером на токарном ЧПУ: втулки шпинделя и опасность разгиба прутка
Автоматический податчик прутка (**барфидер** / `Bar Feeder`) превращает токарный станок с ЧПУ в высокопроизводительный автомат, но ошибки при подготовке прутка и выборе оборотов могут привести к тяжелой аварии. Если калиброванный пруток `Ø20 мм` вращается со скоростью `3,500–4,000 об/мин` внутри пустой трубы шпинделя (`Drawtube`) с проходным отверстием `Ø65 мм`, под действием центробежной силы несоосный конец прутка начинает бить о стенки трубы! Возникает сильная низкочастотная вибрация, на чистовой поверхности деталей появляется «дробление», разбиваются подшипники шпинделя, а выступающий сзади пруток может мгновенно **согнуться под углом 90° в букву «Г»** и разнести барфидер или пробить кожух!

Обязательные правила безопасной работы с прутком и барфидером:
1. **Никогда не допускайте вылета прутка за габарит шпинделя без барфидера:** открытый вращающийся конец прутка за пределами гидравлического цилиндра гнется за долю секунды уже при `1,000–1,500 об/мин`.
2. **Втулки шпинделя (`Spindle Liners` / редукционные трубы):** всегда устанавливайте в трубу шпинделя полиамидные (капролоновые) или стальные направляющие втулки с внутренним диаметром на **`0.5–1.0 мм` больше диаметра прутка** (или на `1.0–1.5 мм` больше описанной окружности шестигранника). Втулка удерживает пруток строго по оси вращения и гасит вибрации.
3. **Подготовка торцов прутка:** перед загрузкой в гидродинамический барфидер заправьте задний торец под цангу толкателя, а на переднем торце снимите фаску `2–3 мм x 30°–45°`, чтобы пруток плавно заходил в направляющую втулку и цангу `Hainbuch`/`Dead-Length` без утыкания.
4. **Ограничение оборотов `G50`:** при работе с шестигранным или горячекатаным прутком принудительно ограничивайте максимальные обороты `G50 S1800–2500`.

**🇵🇱 Polski**
# Praca z podajnikiem pręta (Bar Feeder) na tokarce CNC: tuleje redukcyjne i drgania
Automatyczny podajnik pręta (**barfeeder** / `Bar Feeder`) zmienia tokarkę CNC w bezobsługowy automat produkcyjny, jednak zaniedbania w prowadzeniu pręta i doborze obrotów mogą doprowadzić do katastrofalnej awarii. Gdy pręt ciągniony `Ø20 mm` obraca się z prędkością `3,500–4,000 obr./min` wewnątrz pustej rury ciągnącej wrzeciona (`Drawtube`) o przelocie `Ø65 mm`, siła odśrodkowa powoduje gwałtowne biczowanie pręta o ścianki rury! Pojawiają się silne drgania pogarszające chropowatość detalu i niszczące łożyska wrzeciona, a wystający z tyłu pręt może w ułamku sekundy **zgiąć się pod kątem 90° w kształt litery „L”**, niszcząc podajnik i stwarzając śmiertelne zagrożenie!

Bezwzględne zasady bezpiecznej obróbki z pręta:
1. **Nigdy nie wypuszczaj niepodpartego pręta poza tył wrzeciona:** obracający się swobodnie koniec pręta poza cylindrem hydraulicznym zegnie się błyskawicznie już przy `1,000–1,500 obr./min`.
2. **Tuleje redukcyjne wrzeciona (`Spindle Liners`):** zawsze montuj wewnątrz rury wrzeciona poliamidowe lub stalowe tuleje prowadzące o średnicy wewnętrznej większej o **`0.5–1.0 mm` od średnicy pręta** (lub o `1.0–1.5 mm` większej od średnicy opisanej na sześciokącie). Tuleja utrzymuje pręt w osi obrotu i tłumi wibracje.
3. **Fazowanie końców pręta:** przed załadunkiem do podajnika sfazuj przedni koniec pręta (`2–3 mm x 30°–45°`), aby łagodnie wchodził w tuleję redukcyjną oraz tuleję zaciskową bez zacięć.
4. **Limit obrotów `G50`:** przy prętach sześciokątnych lub walcowanych o gorszej prostoliniowości ograniczaj obroty kodem `G50 S1800–2500`.

**🇬🇧 English**
# CNC Lathe Bar Feeders: Spindle Liners, Bar Whipping, and Safe G50 RPM Limits
An automatic **bar feeder** turns a CNC lathe into an unattended production powerhouse, but ignoring bar support inside the spindle drawtube can trigger catastrophic machine crashes. When a `Ø20 mm` bar spins at `3,500–4,000 RPM` inside an empty `Ø65 mm` spindle bore, centrifugal force causes any slight bar bow to **whip violently** against the drawtube walls! This harmonic whipping ruins surface finish with chatter marks, hammers spindle bearings to death, and—worst of all—any unsupported bar stock extending past the rear hydraulic actuator can instantly **bend `90°` into a lethal spinning L-shape**, tearing the bar feeder off the floor!

Follow these non-negotiable bar-feeding safety and quality rules:
1. **Never let an unsupported bar stick out the back of the spindle:** even a `150 mm` overhang outside the rear cylinder will whip and bend at `1,000–1,500 RPM`.
2. **Always install fitted spindle liners:** insert polyamide (nylon/urethane) or steel **spindle liners** sized **`0.5–1.0 mm` larger than the round bar diameter** (or `1.0–1.5 mm` over the across-corners dimension of hex stock). Proper liners confine the bar on centerline and allow smooth high-RPM operation.
3. **Chamfer bar ends:** before loading bars into a hydrodynamic magazine, machine a `2–3 mm x 30°–45°` lead chamfer on the front end so the bar glides smoothly through the spindle liner and collet jaws without jamming on transfer.
4. **Clamp maximum RPM with `G50`:** when running hex, square, or hot-rolled bar stock, cap spindle speed with `G50 S1800–2500` to keep centrifugal vibration under control.

---

id: tailstock-steady-rest-turning
tag: Токарка | Toczenie | Turning

**🇷🇺 Русский**
# Точение длинных нежестких валов (L/D > 4): задняя бабка, центровые отверстия и люнеты
При токарной обработке длинных валов и осей с отношением длины к диаметру `L/D > 3.5–4` закрепление только в трехкулачковом патроне становится невозможным: под действием радиальной составляющей силы резания `Py` деталь отжимается от резца, возникает «бочкообразность» (диаметр в середине получается больше, чем у кулачков) и сильный вой вибраций. Для надежной обработки таких валов применяют поджим вращающимся центром **задней бабки** (`Tailstock`) и **самоцентрирующиеся гидравлические люнеты** (`Steady Rests`).

Ключевые тонкости настройки задней бабки и люнетов в цеху:
1. **Давление прижима задней бабки:** не выставляйте максимальное давление гидравлики (`20–30 бар`) на тонких валах! Чрезмерное осевое усилие **выгибает нежесткий вал дугой**, а при длительной черновой обработке вал нагревается и удлиняется на `0.1–0.3 мм` из-за теплового расширения. Если центр не имеет встроенной тарельчатой пружины компенсации удлинения, подшипники центра заклинят и сгорят, а деталь вырвет! Оптимальное давление для тонких валов — `4–8 бар`.
2. **Геометрия центрового отверстия (`DIN 332`):** используйте центровки **типа B** (с предохранительной фаской `120°` снаружи рабочего конуса `60°`). Фаска `120°` защищает точный рабочий конус `60°` от забоин при транспортировке и позволяет подрезать торец вала вчистовую.
3. **Базирование под люнет:** никогда не зажимайте ролики гидравлического люнета по необработанному черному прокату! Сначала проточите узкую базовую шейку (`Spot Turn` шириной `20–30 мм`) на малых режимах или в поджиме центром с биением `< 0.01 мм`, зажмите по ней люнет и только после этого обрабатывайте торец или внутреннее отверстие.

**🇵🇱 Polski**
# Toczenie długich, wiotkich wałków (L/D > 4): konik, nakiełki DIN 332 i podtrzymki
Podczas toczenia smukłych wałków i osi o stosunku długości do średnicy `L/D > 3.5–4`, mocowanie wyłącznie w uchwycie trójszczękowym staje się niewystarczające: pod wpływem odporowej (promieniowej) składowej siły skrawania `Py` detal odgina się od noża, co powoduje **baryłkowatość** (większa średnica na środku wałka niż przy szczękach i końcu) oraz gwałtowne drgania. Do stabilnej obróbki takich części niezbędne jest podparcie kłem obrotowym **konika** (`Tailstock`) oraz stosowanie **samocentrujących podtrzymek hydraulicznych** (`Steady Rests`).

Najważniejsze zasady pracy z konikiem i podtrzymką na wydziale CNC:
1. **Ciśnienie docisku konika:** nigdy nie ustawiaj maksymalnego ciśnienia hydrauliki (`20–30 bar`) przy cienkich wałkach! Zbyt duża siła osiowa **wyboczy (wygnie w łuk) wiotki wałek**, a podczas długiej obróbki zgrubnej nagrzewający się detal wydłuży się termicznie o `0.1–0.3 mm`. Jeśli kieł obrotowy nie ma kompensacji sprężynowej, nadmierny nacisk zatrze jego łożyska! Dla cienkich wałków ustawiaj `4–8 bar`.
2. **Geometria nakiełka (`DIN 332`):** stosuj nawiertaki **typu B** (z fazą ochronną `120°` na zewnątrz stożka roboczego `60°`). Faza `120°` chroni powierzchnię bazową `60°` przed uderzeniami i umożliwia bezpieczne planowanie czoła.
3. **Baza pod podtrzymkę (lunetę):** nigdy nie zaciskaj rolek podtrzymki na surowym, czarnym pręcie! Najpierw zatocz wąski czop bazowy (`szerokość 20–30 mm`) z biciem `< 0.01 mm`, oprzyj na nim rolki podtrzymki i dopiero wtedy obrabiaj czoło lub otwór.

**🇬🇧 English**
# Turning Long Slender Shafts (L/D > 4): Tailstock Thrust, Center Holes, and Steady Rests
When turning slender shafts with a length-to-diameter ratio exceeding `L/D > 3.5–4`, chucking alone is impossible: radial cutting forces (`Py`) push the unsupported shaft away from the insert, producing severe chatter and a **tapered or barrel-shaped profile** (oversize in the middle of the shaft). Achieving tight cylindricity requires proper use of a hydraulic **tailstock live center** and **self-centering hydraulic steady rests**.

Master these essential shop-floor rules for slender shaft turning:
1. **Regulate tailstock hydraulic pressure:** never crank tailstock pressure up to `20–30 bar` on a thin shaft! Excessive axial thrust physically **bows slender shafts** into a banana shape before the tool even touches the metal. Furthermore, during heavy roughing, thermal expansion elongates steel shafts by `0.1–0.3 mm`; without regulated hydraulic relief (`4–8 bar` for small shafts) or a spring-loaded live center, thermal growth will overload and seize the live-center bearings!
2. **Use `DIN 332 Type B` center drills:** choose Type B center drills that cut a `120°` protective outer countersink above the `60°` bearing cone. This protects the precision `60°` datum cone from handling dings and lets you face the shaft end cleanly.
3. **Turn a true steady-rest journal first:** never clamp steady-rest rollers onto raw, scaly bar stock—any bar runout will be copied directly into your bore or OD! Always spot-turn a true `20–30 mm` wide bearing band (`< 0.01 mm` TIR) first, close the steady rest on that journal, and then machine the end features.

---

id: fanuc-custom-macro-alarms
tag: Программирование | Programowanie | Programming

**🇷🇺 Русский**
# Защита от ошибок оператора (Poka-Yoke) в Fanuc Macro B: аварии #3000 и проверка корректоров
Большинство тяжелых аварий на станках с ЧПУ происходит из-за банальной опечатки уставшего оператора: например, при вводе износа (`Wear`) вместо `-0.02 мм` человек случайно пропустил точку и вбил `-2.0 мм`, или забыл привязать координату `Z` в системе `G54` после смены приспособления! Язык параметрического программирования **Fanuc / Haas Custom Macro B** позволяет встроить в шапку управляющей программы автоматические проверки системных переменных и мгновенно остановить станок с понятным русским или английским текстом ошибки через переменную **`#3000`** (аварийный останов с красным экраном) или **`#3006`** (пауза с сообщением оператору).

Примеры реальных защитных макро-блоков для внедрения в постпроцессор или подпрограмму:
- **Проверка привязки нуля детали `G54 Z`:** координата `G54 Z` хранится в системной переменной `#5223` (`#5221=#5223` для `X, Y, Z`). Если вы знаете, что верхняя плоскость тисков всегда находится в диапазоне от `-350.0` до `-345.0 мм`, добавьте в начало программы строку:
  `IF [[#5223 LT -350.0] OR [#5223 GT -345.0]] THEN #3000=101 (PROVERTE PRIVYAZKU G54 Z!)`
  При выходе `Z` за пределы допуска станок даже не включит шпиндель и выдаст ошибку `3101 PROVERTE PRIVYAZKU G54 Z!`.
- **Защита от огромного корректора на износ (`Wear`):** износ длины/радиуса инструмента №1 хранится в `#2001`/`#2401` (или `#10001`/`#12001` в зависимости от таблицы корректоров `Type C`). Проверка `IF [ABS[#2001] GT 0.3] THEN #3000=102 (IZNOS T1 BOLSHE 0.3 MM!)` навсегда спасет ваш цех от брака и ударов из-за лишнего нуля в таблице корректоров!

**🇵🇱 Polski**
# Zabezpieczenie przed błędem operatora (Poka-Yoke) w Fanuc Macro B: alarmy #3000 i kontrola korektorów
Większość kosztownych kolizji na obrabiarkach CNC wynika ze zwykłej literówki zmęczonego operatora: na przykład przy wpisywaniu korektora zużycia (`Wear`) zamiast `-0.02 mm` operator pominął kropkę i wpisał `-2.0 mm`, albo zapomniał zmierzyć bazę `Z` w układzie `G54` po zmianie imadła! Język programowania parametrycznego **Fanuc / Haas Custom Macro B** pozwala umieścić na początku programu automatyczne testy zmiennych systemowych i natychmiast zatrzymać maszynę z czytelnym komunikatem alarmowym za pomocą zmiennej **`#3000`** (alarm krytyczny) lub **`#3006`** (stop z komunikatem dla operatora).

Praktyczne przykłady bloków zabezpieczających do wdrożenia w programach:
- **Kontrola bazy materiałowej `G54 Z`:** współrzędna `G54 Z` jest zapisana w zmiennej systemowej `#5223` (`#5221–#5223` dla `X, Y, Z`). Jeśli wiesz, że czoło detalu w imadle zawsze wypada w przedziale od `-350.0` do `-345.0 mm`, dodaj na początku programu:
  `IF [[#5223 LT -350.0] OR [#5223 GT -345.0]] THEN #3000=101 (SPRAWDZ BAZE G54 Z!)`
  W razie błędnej bazy maszyna nawet nie uruchomi wrzeciona i wyświetli alarm `3101 SPRAWDZ BAZE G54 Z!`.
- **Ochrona przed zbyt dużym korektorem zużycia (`Wear`):** zużycie narzędzia T1 znajduje się w `#2001`/`#2401` (lub `#10001`/`#12001` w tabeli `Type C`). Linia `IF [ABS[#2001] GT 0.3] THEN #3000=102 (ZBYT DUZY WEAR T1!)` całkowicie wyeliminuje braki i kolizje spowodowane wpisaniem `-2.0` zamiast `-0.02`!

**🇬🇧 English**
# Foolproofing CNC Programs (Poka-Yoke) in Fanuc Macro B: #3000 Alarms and Offset Checks
Most catastrophic CNC crashes and scrapped parts stem from simple operator typos on the shop floor—for example, typing `-2.0 mm` instead of `-0.02 mm` into a tool wear offset, or forgetting to touch off `G54 Z` after swapping fixtures! Using **Fanuc / Haas Custom Macro B**, you can embed automated safety checks right at the top of your NC program or tool-change macro, reading internal system variables and halting the machine immediately with a custom plain-text message via **`#3000`** (custom red-screen alarm) or **`#3006`** (programmable operator stop message).

Here are two high-impact Macro B safety checks every shop should use:
- **Verify `G54 Z` work offset is within a safe window:** the `G54 Z` coordinate is stored in system variable `#5223` (`#5221–#5223` correspond to `G54 X, Y, Z`). If your fixture height always places `G54 Z` between `-350.0 mm` and `-345.0 mm`, add this line at the start of the program:
  `IF [[#5223 LT -350.0] OR [#5223 GT -345.0]] THEN #3000=101 (CHECK G54 Z WORK OFFSET!)`
  If the offset is zero or outside the `5 mm` window, the control triggers `3101 CHECK G54 Z WORK OFFSET!` before the spindle even starts.
- **Guard against fat-fingered tool wear offsets:** tool #1 length/radius wear resides in `#2001`/`#2401` (or `#10001`/`#12001` on `Memory C` controls). Adding `IF [ABS[#2001] GT 0.3] THEN #3000=102 (T1 WEAR EXCEEDS 0.3MM!)` permanently prevents `-2.0 mm` typo disasters!

---

id: siemens-r-params-frames
tag: Системы ЧПУ | Sterowania CNC | CNC controls

**🇷🇺 Русский**
# Переменные R и фреймы координат (TRANS, ROT, SCALE) на стойках Siemens SINUMERIK
Стойки **Siemens SINUMERIK** (`828D`, `840D sl`, `SINUMERIK ONE`) обладают одним из самых мощных и наглядных языков программирования высокого уровня в мире ЧПУ. В отличие от безликих номеров макропеременных `#100` на Fanuc, на Сименсе помимо классических глобальных **R-параметров** (`R0–R299`, отображаемых прямо на экране стойки и удобных для быстрой подналадки оператором) программист может создавать собственные именованные переменные любого типа в начале программы: `DEF REAL DIAMETR=50.5`, `DEF INT KOLVO_OTV=8`, `DEF BOOL PROVERKA=TRUE`.

Еще более мощный инструмент SINUMERIK — программируемые **фреймы трансформации системы координат** (`Programmable Frames`), которые позволяют переносить, поворачивать, масштабировать и зеркалить контур обработки, вообще не трогая базовую привязку `G54`!
- **Замещающие и аддитивные команды:** команды без буквы `A` (`TRANS`, `ROT`, `SCALE`, `MIRROR`) сбрасывают предыдущие программируемые трансформации и задают новую от базовой `G54`. Команды с приставкой **`A` (Additive — добавочные)**: `ATRANS X50 Y20` (добавить смещение нуля), `AROT RPL=45` (довернуть плоскость обработки `G17` на `45°`), `ASCALE`, `AMIRROR` — накладываются поверх уже действующего фрейма!
- **Практический пример:** при обработке `6` одинаковых пазов по кругу достаточно написать контур одного паза вдоль оси `X` в подпрограмме `PAZ.SPF`, а в главной программе в цикле `FOR R1=1 TO 6` вызывать `PAZ` и поворачивать координаты командой `AROT RPL=60`. В конце обязательно вызовите одиночный кадр **`TRANS`** без аргументов, чтобы полностью отменить все смещения и повороты!

**🇵🇱 Polski**
# Parametry R oraz ramki układów współrzędnych (TRANS, ROT, SCALE) w Siemens SINUMERIK
Sterowania **Siemens SINUMERIK** (`828D`, `840D sl`, `SINUMERIK ONE`) oferują jeden z najbardziej przejrzystych i zaawansowanych języków programowania wysokiego poziomu w świecie CNC. W przeciwieństwie do anonimowych zmiennych `#100` w systemie Fanuc, w Sinumeriku oprócz klasycznych globalnych **parametrów R** (`R0–R299`, widocznych bezpośrednio w tabeli na ekranie i idealnych do szybkich korekt przez operatora), programista może deklarować własne nazwane zmienne na początku programu: `DEF REAL SREDNICA=50.5`, `DEF INT LICZBA_OTW=8`, `DEF BOOL KONTROLA=TRUE`.

Jeszcze potężniejszym narzędziem SINUMERIK są programowalne **ramki transformacji układu współrzędnych** (`Programmable Frames`), które pozwalają przesuwać, obracać, skalować i odbijać lustrzanie ścieżkę narzędzia bez jakiejkolwiek ingerencji w bazę `G54`!
- **Instrukcje zastępujące i przyrostowe (addytywne):** komendy bez litery `A` (`TRANS`, `ROT`, `SCALE`, `MIRROR`) kasują wcześniejsze transformacje programowe i ustawiają nową względem `G54`. Natomiast komendy z przedrostkiem **`A` (Additive)**: `ATRANS X50 Y20` (dodatkowe przesunięcie zera), `AROT RPL=45` (dodatkowy obrót płaszczyzny `G17` o `45°`), `ASCALE`, `AMIRROR` — nakładają się na aktualnie aktywną ramkę!
- **Przykład z warsztatu:** aby wyfrezować `6` identycznych kieszeni rozmieszczonych co `60°` na obwodzie, wystarczy zaprogramować jedną kieszeń w osi `X` jako podprogram `KIESZEN.SPF`, a w pętli `FOR R1=1 TO 6` wywoływać podprogram i obracać układ komendą `AROT RPL=60`. Po zakończeniu zawsze wpisz samą komendę **`TRANS`** w osobnym bloku, aby odwołać wszystkie transformacje!

**🇬🇧 English**
# R-Parameters and Programmable Coordinate Frames (TRANS, ROT, SCALE) on Siemens SINUMERIK
**Siemens SINUMERIK** controls (`828D`, `840D sl`, `SINUMERIK ONE`) feature one of the most readable, structured high-level programming languages in the CNC industry. Unlike cryptic numbered macro variables (`#100`) on Fanuc, Siemens gives you both global **R-parameters** (`R0–R299`, displayed in a dedicated screen table for easy shop-floor adjustments) and self-explanatory **user-defined variables** declared at the header of any program: `DEF REAL BOSS_DIA=50.5`, `DEF INT HOLE_COUNT=8`, or `DEF BOOL RUN_FINISH=TRUE`.

Where SINUMERIK truly shines is its **programmable coordinate frames** (`FRAMES`), which let you shift, rotate, scale, or mirror complex subprograms across multi-cavity fixtures or circular patterns without ever modifying your `G54` work offset!
- **Absolute vs. Additive Frames:** standalone frame commands (`TRANS`, `ROT`, `SCALE`, `MIRROR`) overwrite any active programmable frame relative to `G54`. Commands prefixed with **`A` (Additive)**—such as `ATRANS X50 Y20` (add a coordinate shift), `AROT RPL=45` (add a `45°` in-plane rotation in `G17`), `ASCALE`, and `AMIRROR`—stack cumulatively on top of the current frame!
- **Shop-floor example:** to machine `6` identical complex pockets spaced `60°` apart around a flange, simply program a single pocket along the `X`-axis inside a subprogram `POCKET.SPF`, then run a loop `FOR R1=1 TO 6` calling `POCKET` followed by `AROT RPL=60`. Always program a standalone **`TRANS`** block at the end of the operation to cancel all active programmable frames!

---

id: heidenhain-q-params-klartext
tag: Системы ЧПУ | Sterowania CNC | CNC controls

**🇷🇺 Русский**
# Параметрическое программирование Q-параметрами в Heidenhain Klartext
Стойки **Heidenhain TNC** (`iTNC 530`, `TNC 640`, `TNC7`) позволяют создавать гибкие параметрические программы прямо на диалоговом языке **Klartext** с помощью переменных `Q`. Классические параметры `Q1–Q99` доступны во всей программе, а на современных стойках добавлены локальные переменные `QL1–QL99` (действуют только внутри текущей подпрограммы) и глобальные энергонезависимые переменные `QR1–QR99`, сохраняющие значения даже после перезагрузки станка. Присвоение и логика строятся через функции `FN`: `FN 0: Q1 = +50` задает исходное значение, а сложные математические и тригонометрические выражения удобно вводить прямой формулой через клавишу `Q` (`Q10 = Q1 * COS Q2 + SQRT Q3`). Сами параметры подставляются непосредственно в кадры перемещений, например `L X+Q10 Y+Q11 R0 FQ20 M3`, что делает программу универсальной для целого семейства деталей.

Для организации циклов с приращением глубины или обработки массивов элементов используются метки `LBL` и условные переходы. Вызов `CALL LBL 1 REP 5` повторяет блок между `LBL 1` и `LBL 0` ровно пять раз — достаточно внутри подпрограммы добавить строку инкремента `Q5 = Q5 - 1.5`, чтобы организовать послойное фрезерование по оси `Z`. Более гибкие циклы строятся через условия: `FN 9: IF +Q1 EQU +Q2 GOTO LBL 10` (если равно), `FN 11: IF +Q1 GT +Q2 GOTO LBL 10` (если больше) и `FN 12: IF +Q1 LT +Q2 GOTO LBL 10` (если меньше). Кроме того, системные параметры `Q100–Q199` позволяют считывать текущий радиус активного инструмента (`Q108`) или результаты измерительных циклов щупа для автоматической коррекции припуска без участия оператора.

**🇵🇱 Polski**
# Programowanie parametryczne zmiennymi Q w Heidenhain Klartext
Sterowania **Heidenhain TNC** (`iTNC 530`, `TNC 640`, `TNC7`) umożliwiają tworzenie elastycznych programów parametrycznych bezpośrednio w dialogowym języku **Klartext** za pomocą zmiennych `Q`. Klasyczne parametry `Q1–Q99` są dostępne w całym programie, natomiast w nowszych systemach wprowadzono zmienne lokalne `QL1–QL99` (działające wyłącznie wewnątrz bieżącego podprogramu) oraz globalne zmienne nieulotne `QR1–QR99`, które zachowują wartości nawet po wyłączeniu maszyny. Przypisywanie wartości i logika opierają się na funkcjach `FN`: `FN 0: Q1 = +50` definiuje wartość początkową, a złożone obliczenia trygonometryczne najwygodniej wpisywać jako bezpośrednią formułę matematyczną (`Q10 = Q1 * COS Q2 + SQRT Q3`). Parametry podstawia się wprost do bloków ruchu, np. `L X+Q10 Y+Q11 R0 FQ20 M3`, co pozwala jednym programem obrabiać całą rodzinę podobnych części.

Do organizacji pętli z przyrostem głębokości lub obróbki szyków otworów stosuje się etykiety `LBL` oraz skoki warunkowe. Polecenie `CALL LBL 1 REP 5` powtarza sekcję pomiędzy `LBL 1` a `LBL 0` dokładnie pięć razy — wystarczy wewnątrz podprogramu umieścić inkrementację `Q5 = Q5 - 1.5`, aby uzyskać obróbkę warstwową w osi `Z`. Bardziej zaawansowane pętle buduje się za pomocą instrukcji warunkowych: `FN 9: IF +Q1 EQU +Q2 GOTO LBL 10` (skok, gdy równe), `FN 11: IF +Q1 GT +Q2 GOTO LBL 10` (gdy większe) oraz `FN 12: IF +Q1 LT +Q2 GOTO LBL 10` (gdy mniejsze). Dodatkowo parametry systemowe z zakresu `Q100–Q199` pozwalają odczytać aktywny promień narzędzia (`Q108`) lub wyniki cykli pomiarowych sondy, automatyzując korekcję wymiarów na maszynie.

**🇬🇧 English**
# Parametric Programming with Q-Parameters in Heidenhain Klartext
**Heidenhain TNC** controls (`iTNC 530`, `TNC 640`, `TNC7`) allow machinists to build powerful parametric routines directly within conversational **Klartext** programs using `Q`-parameters. Standard variables `Q1–Q99` operate globally across a program, while modern controls also provide local variables `QL1–QL99` (scoped strictly to the active subprogram) and non-volatile global parameters `QR1–QR99` that retain their values after a power cycle. Variable assignment and logic rely on `FN` functions: `FN 0: Q1 = +50` assigns a constant, while complex algebraic and trigonometric equations can be entered directly via the formula editor (`Q10 = Q1 * COS Q2 + SQRT Q3`). These variables drop straight into motion blocks such as `L X+Q10 Y+Q11 R0 FQ20 M3`, enabling a single program to drive an entire part family.

Looping, step-down milling, and pattern repetition are controlled using `LBL` labels and conditional jump functions. Calling `CALL LBL 1 REP 5` executes the code between `LBL 1` and `LBL 0` five times—placing a simple step-down calculation like `Q5 = Q5 - 1.5` inside the label creates an instant multi-pass `Z` routine. Smarter conditional loops use comparison jumps: `FN 9: IF +Q1 EQU +Q2 GOTO LBL 10` (jump if equal), `FN 11: IF +Q1 GT +Q2 GOTO LBL 10` (if greater than), and `FN 12: IF +Q1 LT +Q2 GOTO LBL 10` (if less than). Furthermore, reserved system parameters `Q100–Q199` let the program read the active tool radius (`Q108`) or touch-probe measurement results to automate in-process offset updates.

---

id: smoothing-g187-cycle832-g64
tag: Системы ЧПУ | Sterowania CNC | CNC controls

**🇷🇺 Русский**
# Сглаживание траектории и контроль точности: G187, CYCLE832 и G05.1
При 3D-обработке и высокоскоростном фрезеровании (**HSM**) CAM-система аппроксимирует криволинейные поверхности тысячами коротких линейных отрезков `G01` длиной `0.02–0.10 мм`. Если система ЧПУ пытается пройти каждую микроточку с точным остановом (`G09` / `G61`) или жестким допуском, приводы осей постоянно тормозят и разгоняются: станок начинает мелко дрожать, фактическая подача падает с `4000 мм/мин` до `600 мм/мин`, а на поверхности остаются характерные вертикальные грани (огранка). Чтобы движение стало плавным, необходимо правильно настроить функции предпросмотра кадров (**Look-Ahead**) и компрессии траектории, задав баланс между скоростью осей и допустимым отклонением от геометрии контура.

На станках **Haas** за это отвечает код `G187`: `G187 P1` включает черновой режим со скруглением углов для максимальной скорости, `G187 P2` — получистовой, а `G187 P3 E0.005` — чистовой режим с жестким контролем отклонения контура в пределах `0.005 мм`. На стойках **Siemens Sinumerik** используется цикл `CYCLE832(0.01, _FINISH, 1)`, который автоматически активирует непрерывное управление траекторией `G642`/`G645`, плавное ограничение рывка (**SOFT**) и сплайновую компрессию кадров `COMPCAD` или `COMPSURF` с заданным допуском `0.01 мм` (для черновой ставят `0.05–0.10 мм` и `_ROUGH`). На **Fanuc** аналогичную задачу решает функция **AI Contour Control** (`G05.1 Q1 R5`, где `R1–R10` задает уровень точности, и отмена `G05.1 Q0`). Грамотная настройка этих кодов сокращает машинное время на `25–40%` и дает зеркальную чистоту на пресс-формах.

**🇵🇱 Polski**
# Wygładzanie ścieżki i kontrola tolerancji: G187, CYCLE832 oraz G05.1
Podczas obróbki 3D oraz frezowania szybkościowego (**HSM**) system CAM przybliża złożone powierzchnie swobodne tysiącami krótkich odcinków liniowych `G01` o długości `0.02–0.10 mm`. Jeżeli układ CNC próbuje osiągnąć każdy mikropunkt z dokładnym zatrzymaniem (`G09` / `G61`) lub zbyt wąską tolerancją, napędy osi nieustannie hamują i przyspieszają: maszyna wpada w wyczuwalne drgania, rzeczywisty posuw spada z `4000 mm/min` do `600 mm/min`, a na obrabianej powierzchni powstaje charakterystyczne fasetowanie. Aby ruch był płynny, należy właściwie skonfigurować bufor wyprzedzenia (**Look-Ahead**) oraz funkcje wygładzania ścieżki, dobierając kompromis między dynamiką a dopuszczalną odchyłką kształtu.

W maszynach **Haas** służy do tego funkcja `G187`: `G187 P1` aktywuje tryb zgrubny z dużym zaokrąglaniem naroży dla maksymalnej prędkości, `G187 P2` — tryb półwykańczający, natomiast `G187 P3 E0.005` wymusza tryb wykańczający z maksymalną odchyłką ścieżki `0.005 mm`. W sterowaniach **Siemens Sinumerik** stosuje się cykl `CYCLE832(0.01, _FINISH, 1)`, który automatycznie włącza wygładzanie naroży `G642`/`G645`, ograniczenie udaru kinematycznego (**SOFT**) oraz kompresję wielomianową bloków `COMPCAD` lub `COMPSURF` z tolerancją `0.01 mm` (dla obróbki zgrubnej przyjmuje się `0.05–0.10 mm` i `_ROUGH`). Na sterowaniach **Fanuc** odpowiednikiem jest **AI Contour Control** (`G05.1 Q1 R5`, gdzie `R1–R10` określa poziom dokładności, a wyłączenie następuje przez `G05.1 Q0`). Prawidłowe użycie tych funkcji skraca czas cyklu o `25–40%` i zapewnia gładką powierzchnię form wtryskowych.

**🇬🇧 English**
# High-Speed Path Smoothing and Tolerance Control: G187, CYCLE832, and G05.1
During 3D surfacing and High-Speed Machining (**HSM**), CAM software approximates complex freeform surfaces using thousands of tiny linear `G01` segments measuring just `0.02–0.10 mm` long. If the CNC control attempts to hit every micro-point in exact-stop mode (`G09` / `G61`) or with an overly tight chordal tolerance, the servo drives constantly decelerate and accelerate: the machine stutters violently, actual feedrate drops from `4000 mm/min` down to `600 mm/min`, and visible facets appear on the workpiece. Achieving fluid motion requires properly tuning the control's **Look-Ahead** buffer and path-smoothing parameters to balance servo dynamics against geometric accuracy.

On **Haas** mills, path smoothing is commanded via `G187`: `G187 P1` selects roughing mode for maximum corner velocity, `G187 P2` sets medium smoothing, and `G187 P3 E0.005` enforces finishing accuracy within a `0.005 mm` path deviation tolerance. On **Siemens Sinumerik** controls, `CYCLE832(0.01, _FINISH, 1)` automatically configures continuous-path smoothing (`G642`/`G645`), jerk-limited acceleration (**SOFT**), and spline block compression (`COMPCAD` or `COMPSURF`) to a `0.01 mm` chordal tolerance (while roughing uses `0.05–0.10 mm` with `_ROUGH`). On **Fanuc** systems, **AI Contour Control** (`G05.1 Q1 R5`, where `R1–R10` defines the precision level, canceled by `G05.1 Q0`) performs the same task. Tuning these smoothing cycles cuts 3D cycle times by `25–40%` while eliminating surface witness marks.

---

id: 5axis-kinematics-tcp-calibration
tag: Точность | Dokładność | Precision

**🇷🇺 Русский**
# Калибровка 5-осевой кинематики и точки вращения TCPM / TRAORI
Точность одновременной 5-осевой обработки и позиционной схемы `3+2` напрямую зависит от того, насколько точно в таблице кинематики ЧПУ прописаны координаты центров вращения поворотных осей (`A/C` или `B/C` на глобусном столе или фрезерной голове). Когда активна функция слежения за вершиной инструмента (**TCPM** / `M128` на Heidenhain, `TRAORI` на Siemens, `G43.4` на Fanuc или `G234` на Haas), стойка в реальном времени пересчитывает линейные координаты `X`, `Y`, `Z` при любом наклоне стола. Если записанный в параметрах вектор центра вращения отличается от реального физического положения осей всего на `0.02–0.03 мм` из-за тепловых деформаций, легкого удара или износа червячной пары, то при стыковке плоскостей под разными углами неизбежно появится ступенька в `0.04–0.06 мм`.

Для устранения этой погрешности применяется автоматическая калибровка кинематики с помощью прецизионной эталонной сферы диаметром `Ø25–30 мм` (керамической или твердосплавной, с отклонением от круглости `< 0.001 мм`), жестко закрепленной на краю стола, и измерительного щупа в шпинделе. Запускается специализированный цикл: **KinematicsOpt** (`Cycle 451`) на Heidenhain, `CYCLE996` на Siemens или процедура калибровки **MRZP** на Haas. Станок поворачивает оси `A/B` и `C` под несколькими углами (например, `-60°`, `0°`, `+60°` и `0°`, `90°`, `180°`, `270°`), каждый раз обмеряя сферу щупом, вычисляет фактическое положение осей вращения и автоматически обновляет кинематическую модель. Такую проверку рекомендуется выполнять за `5 минут` перед каждой ответственной 5-осевой деталью.

**🇵🇱 Polski**
# Kalibracja kinematyki 5-osiowej i punktu obrotu TCPM / TRAORI
Dokładność jednoczesnej obróbki 5-osiowej oraz indeksowanej obróbki `3+2` zależy bezpośrednio od tego, jak precyzyjnie w tabeli kinematycznej sterowania CNC zapisano współrzędne środków obrotu osi uchylno-obrotowych (`A/C` lub `B/C` stołu kołyskowego bądź głowicy skrętnej). Gdy aktywna jest funkcja śledzenia wierzchołka narzędzia (**TCPM** / `M128` w Heidenhain, `TRAORI` w Siemens, `G43.4` w Fanuc lub `G234` w Haas), układ sterowania na bieżąco przelicza pozycje liniowe `X`, `Y`, `Z` przy każdej zmianie kąta. Jeśli zapisany w parametrach wektor osi obrotu różni się od rzeczywistej geometrii maszyny zaledwie o `0.02–0.03 mm` wskutek rozszerzalności cieplnej lub drobnej kolizji, w miejscu łączenia płaszczyzn obrabianych pod różnymi kątami powstanie widoczny próg rzędu `0.04–0.06 mm`.

Aby wyeliminować ten błąd, przeprowadza się automatyczną kalibrację kinematyki przy użyciu precyzyjnej kuli wzorcowej o średnicy `Ø25–30 mm` (ceramicznej lub węglikowej, o błędzie kulistości `< 0.001 mm`), zamocowanej sztywno na stole, oraz sondy przedmiotowej w wrzecionie. Uruchamia się dedykowany cykl pomiarowy: **KinematicsOpt** (`Cykl 451`) na Heidenhain, `CYCLE996` na Siemens lub procedurę wyznaczania **MRZP** na maszynach Haas. Obrabiarka ustawia osie `A/B` oraz `C` w kilku pozycjach kątowych (np. `-60°`, `0°`, `+60°` oraz `0°`, `90°`, `180°`, `270°`), za każdym razem mierząc środek kuli sondą, po czym oblicza rzeczywiste położenie osi obrotu i automatycznie koryguje tabelę kinematyki. Taki 5-minutowy test warto wykonać przed każdą precyzyjną obróbką 5-osiową.

**🇬🇧 English**
# 5-Axis Kinematics Calibration and Pivot-Point Accuracy (TCPM / TRAORI)
The accuracy of simultaneous 5-axis machining and `3+2` indexed positioning depends entirely on how closely the CNC control's kinematics table matches the true physical center of rotation of the rotary axes (`A/C` or `B/C` trunnion tables or swivel heads). Whenever Tool Center Point Management (**TCPM** / `M128` on Heidenhain, `TRAORI` on Siemens, `G43.4` on Fanuc, or `G234` on Haas) is active, the control continuously translates `X`, `Y`, and `Z` coordinates as the rotary axes tilt. If the stored pivot-point vectors drift from reality by even `0.02–0.03 mm` due to thermal growth, mechanical wear, or a minor bump, surfaces machined from different indexed orientations will show an unmistakable `0.04–0.06 mm` mismatch step where planes meet.

To eliminate pivot-point error, machinists run an automated kinematics calibration routine using a precision calibration sphere (`Ø25–30 mm` ceramic or carbide ball with `< 0.001 mm` sphericity) mounted off-center on the platter and a spindle touch probe. Executing **KinematicsOpt** (`Cycle 451`) on Heidenhain, `CYCLE996` on Siemens, or the **MRZP** calibration cycle on Haas commands the machine to index the `A/B` and `C` axes through multiple angles (e.g., `-60°`, `0°`, `+60°` and `0°`, `90°`, `180°`, `270°`), probing the sphere center at each attitude. The control calculates the true spatial intersection of the rotary axes and updates the kinematic offsets automatically—a 5-minute check that should precede any tight-tolerance 5-axis job.

---

id: gun-drilling-deep-holes
tag: Сверление | Wiercenie | Drilling

**🇷🇺 Русский**
# Глубокое сверление (15xD–50xD) и ружейные сверла на станках с ЧПУ
Сверление глубоких отверстий с отношением длины к диаметру от `15xD` до `50xD` на стандартных обрабатывающих центрах выполняется длинными монолитными твердосплавными спиральными сверлами или однолезвийными **ружейными сверлами** (gun drills). Поскольку такое сверло обладает крайне низкой поперечной жесткостью и при вращении на рабочих оборотах в воздухе мгновенно изгибается от центробежной силы («эффект скакалки»), категорически запрещено раскручивать его вне детали или врезаться в сплошной металл. Процесс всегда начинается со сверления точного **пилотного (направляющего) отверстия** глубиной `1.5–2.0xD` коротким жестким сверлом с допуском `H7/H8` и углом при вершине, равным или на `1–2°` большим угла глубокого сверла (`135–140°`), либо растачивания пилота концевой фрезой, чтобы кромки длинного сверла при заходе центрировались по периферии, а не били центром.

Цикл работы глубокого сверла требует строгого соблюдения последовательности кадров в УП:
1. Подвод инструмента ко входу в пилотное отверстие и плавный ввод внутрь пилота на малых оборотах `50–300 об/мин` (`S200 M03`) с подачей `F200–500 мм/мин` без включения высоких оборотов.
2. Остановка на `1–2 мм` выше дна пилота, включение внутренней подачи СОЖ высокого давления (`20–70 бар` через шпиндель, `M88` / `M07`) и только затем разгон до рабочей скорости резания (`Vc = 60–90 м/мин` для стали, `S3000–6000`).
3. Рабочий ход на всю глубину без полного вывода сверла (допускаются лишь короткие разгрузки стружки `0.3–0.5 мм`), остановка вращения шпинделя на дне отверстия (`M05`), отключение СОЖ и безопасный вывод из отверстия на `G01` или малых оборотах.

**🇵🇱 Polski**
# Wiercenie głębokich otworów (15xD–50xD) i wiertła lufowe na centrach CNC
Wiercenie głębokich otworów o stosunku głębokości do średnicy od `15xD` do `50xD` na standardowych centrach obróbczych realizuje się za pomocą długich monolitycznych wierteł węglikowych lub jednoostrzowych **wierteł lufowych** (gun drills). Ponieważ tak smukłe narzędzie ma bardzo małą sztywność poprzeczną i po rozpędzeniu do obrotów roboczych w powietrzu natychmiast uległoby wyboczeniu i złamaniu pod wpływem siły odśrodkowej, absolutnie nie wolno włączać wysokich obrotów poza materiałem ani wiercić bezpośrednio w pełnym metalu. Proces zawsze rozpoczyna się od wykonania precyzyjnego **otworu pilotującego** na głębokość `1.5–2.0xD` krótkim, sztywnym wiertłem w tolerancji `H7/H8` o kącie wierzchołkowym równym lub o `1–2°` większym niż w wiertle głębokim (`135–140°`), co zapewnia idealne prowadzenie łysinek od samego początku.

Cykl wiercenia głębokiego wymaga bezwzględnego przestrzegania sekwencji w programie NC:
1. Dojazd przed otwór i wprowadzenie wiertła do wnętrza otworu pilotującego na niskich obrotach `50–300 obr./min` (`S200 M03`) z posuwem `F200–500 mm/min`.
2. Zatrzymanie `1–2 mm` przed dnem pilota, włączenie wysokociśnieniowego chłodzenia przez wrzeciono (`20–70 bar`, `M88` / `M07`) i dopiero wtedy rozpędzenie wrzeciona do roboczej prędkości skrawania (`Vc = 60–90 m/min` dla stali).
3. Ciągłe wiercenie na pełną głębokość bez wycofywania narzędzia na zewnątrz (dozwolone są jedynie mikro-odskoki `0.3–0.5 mm` dla łamania wióra), zatrzymanie obrotów na dnie otworu (`M05`), wyłączenie chłodziwa oraz bezpieczny wyjazd z otworu ruchem `G01`.

**🇬🇧 English**
# Deep-Hole Drilling (15xD–50xD) and Gun Drilling on CNC Machining Centers
Drilling deep holes with length-to-diameter ratios from `15xD` to `50xD` on standard CNC machining centers relies on extra-long solid-carbide twist drills or single-lip **gun drills**. Because these slender tools have minimal lateral stiffness, spinning them at full cutting RPM in free air causes violent centrifugal whip that snaps the carbide shaft instantly. Therefore, deep-hole drills must never spin at full speed outside the part or spot-drill directly into solid stock. Instead, the sequence always starts by machining a precision **pilot guide hole** (`1.5–2.0xD` deep) held to an `H7/H8` diameter tolerance using a stub drill whose point angle matches or exceeds the deep drill's point angle by `1–2°` (`135–140°`), ensuring the outer margins engage and support the tool before the chisel edge touches bottom.

Programming a deep-hole cycle requires a strict, non-standard NC sequence:
1. Position above the hole and feed into the pilot bore at slow guiding speed (`50–300 RPM` with `M03` and `F200–500 mm/min`).
2. Stop `1–2 mm` short of the pilot bottom, engage high-pressure through-spindle coolant (`20–70 bar`, `M88` / `M07`), and only then ramp up to full cutting speed (`Vc = 60–90 m/min` in steel).
3. Feed continuously to final depth without full peck retracts (using only brief `0.3–0.5 mm` dwell/chip-break reliefs if required), command spindle stop `M05` at the bottom of the hole, shut off high-pressure coolant, and retract safely at rapid or high `G01` feed while stationary.

---

id: counterboring-flat-bottom-holes
tag: Сверление | Wiercenie | Drilling

**🇷🇺 Русский**
# Цековка под крепеж и сверление отверстий с плоским дном (180°)
При изготовлении корпусных деталей и штампов постоянно требуется получать отверстия с плоским дном и цилиндрические **цековки** под головки винтов с внутренним шестигранником (`DIN 912` / `ISO 4762`). Традиционная технология предполагает использование обычного сверла с углом `140°`, а затем смену инструмента на концевую фрезу для винтовой интерполяции или специальную цековку с направляющей цапфой. Однако современные монолитные твердосплавные **сверла с плоской вершиной 180°** (flat-bottom drills с геометрией двойной ленточки) позволяют выполнять эти операции гораздо быстрее и без лишней смены инструмента в магазине. Такое сверло формирует идеально плоское дно за один осевой проход `G81`/`G83`, что особенно выгодно при сверлении глухих отверстий под пружины, штифты или вблизи тонких донных стенок, где конус обычного сверла пробил бы деталь насквозь.

Еще одно важнейшее применение сверл с углом `180°` — засверливание в **наклонные, криволинейные и цилиндрические поверхности** (под углом до `30–45°`), а также сверление пересекающихся каналов и выход отверстия на косую стенку. Обычное конусное сверло при касании наклонной грани испытывает сильную одностороннюю радиальную нагрузку, из-за чего его уводит в сторону и скалывает уголки. Сверло `180°` вступает в резание сразу периферийным уголком на малой подаче (`30–50%` от номинальной `fn` до полного врезания всего диаметра, затем `100%` `fn`), сам формирует ровную базовую площадку и дальше идет строго по оси без фрезерования предварительного кармана.

**🇵🇱 Polski**
# Pogłębianie walcowe pod śruby i wiercenie otworów z płaskim dnem (180°)
W produkcji korpusów maszyn oraz tłoczników niezwykle często wykonuje się otwory nieprzelotowe z płaskim dnem oraz **pogłębienia walcowe** pod łby śrub imbusowych (`DIN 912` / `ISO 4762`). Tradycyjna technologia wymaga użycia standardowego wiertła o kącie `140°`, a następnie zmiany narzędzia na frez palcowy do interpolacji śrubowej lub dedykowany pogłębiacz z czopem prowadzącym. Nowoczesne monolityczne **wiertła węglikowe z płaskim czołem 180°** (flat-bottom drills z podwójną łysinką prowadzącą) pozwalają wykonać te operacje znacznie szybciej w jednym przejściu osiowym `G81`/`G83`. Takie wiertło tworzy idealnie płaskie dno, co jest niezastąpione przy gniazdach pod sprężyny, kołki ustalające oraz w miejscach o cienkiej ściance dennej, gdzie stożek zwykłego wiertła przebiłby detal na wylot.

Drugim kluczowym zastosowaniem wierteł `180°` jest wiercenie w **powierzchniach pochylonych, walcowych i krzywoliniowych** (pod kątem aż do `30–45°`) oraz wykonywanie otworów przecinających się pod kątem. Zwykłe wiertło stożkowe przy kontakcie z pochyłą ścianką ulega jednostronnemu odpychaniu promieniowemu, co powoduje bicie i wykruszenie naroży. Wiertło płaskie `180°` rozpoczyna skrawanie zewnętrzną krawędzią przy zredukowanym posuwie (`30–50%` nominalnego posuwu `fn` do momentu pełnego zagłębienia średnicy, a następnie `100%` `fn`), samo wykonuje płaskie podfrezowanie i prowadzi otwór idealnie w osi bez konieczności wcześniejszego frezowania kieszeni startowej.

**🇬🇧 English**
# Counterboring and Machining Flat-Bottom Holes with 180° Carbide Drills
Machining flat-bottom blind holes and socket-head cap screw **counterbores** (`DIN 912` / `ISO 4762`) is a daily requirement in mold, die, and fixture manufacturing. Conventional workflows require drilling with a standard `140°` point drill and then executing a tool change to a square-end mill for helical interpolation or a piloted counterbore cutter. Modern solid-carbide **180° flat-bottom drills** engineered with double-margin geometry eliminate that extra tool change by plunging a true flat bottom in a single `G81`/`G83` axial cycle. This geometry is invaluable when machining spring pockets, dowel seats, or blind holes above thin floor sections where a standard conical drill point would break through the opposite wall.

Equally important is the ability of `180°` flat drills to enter **angled, curved, or cylindrical surfaces** inclined up to `30–45°` and to drill across intersecting cross-holes without walking. When a conventional pointed drill touches an angled surface, radial deflection pushes the tip sideways and chips the cutting corners. By contrast, a `180°` flat drill engages with its outer periphery first—by reducing the feedrate to `30–50%` of nominal `fn` until the full diameter is buried and then ramping to `100%` `fn`, the drill spot-faces its own flat entry seat and tracks straight down the hole axis without requiring a pre-milled flat pocket.

---

id: dovetail-t-slot-undercut-milling
tag: Фрезерование | Frezowanie | Milling

**🇷🇺 Русский**
# Фрезерование Т-образных пазов, «ласточкина хвоста» и внутренних поднутрений
Обработка Т-образных пазов (`DIN 650`), направляющих типа **«ласточкин хвост»** с углом `45°` или `60°`, а также внутренних канавок под стопорные кольца и уплотнения (O-ring) требует особого внимания к отводу стружки и жесткости шейки инструмента. Первым шагом всегда выполняется черновое фрезерование вертикального центрального паза обычной концевой фрезой на полную глубину с припуском `0.2–0.5 мм` по дну, чтобы разгрузить тонкую шейку фасонной фрезы и обеспечить свободный выход стружки. Сами Т-образные фрезы со сменными пластинами или разнонаправленным зубом работают в стесненных условиях: при большой ширине паза рекомендуется разбивать поднутрение на `2–3` радиальных прохода или использовать трохоидальную стратегию с обильной подачей СОЖ прямо в зону резания для предотвращения повторного затирания стружки.

При фрезеровании угловых пазов «ласточкин хвост» монолитными твердосплавными или сборными фрезами нагрузка растет по мере приближения к вершине острого угла, где скорость резания `Vc` выше, а отвод тепла хуже. Чтобы тонкую шейку фрезы не затянуло в деталь и не сломало, черновые проходы делают послойно с радиальным шагом `Ae = 0.5–1.5 мм` (встречным или попутным фрезерованием в зависимости от жесткости станка), оставляя `0.10–0.15 мм` на чистовой проход. Критическое правило программирования любых поднутрений: **безопасный отвод в конце прохода**! В CAM-системе необходимо отключить вертикальный подъем по `Z` и задать горизонтальный отвод по `X/Y` к центру паза перед командой `G00 Z+`, иначе фреза срежет верхнюю полку детали при подъеме.

**🇵🇱 Polski**
# Frezowanie rowków teowych, jaskółczego ogona oraz podcięć wewnętrznych
Obróbka rowków teowych (`DIN 650`), prowadnic typu **„jaskółczy ogon”** o kącie `45°` lub `60°` oraz wewnętrznych kanałków pod pierścienie osadcze Segera i uszczelnienia O-ring wymaga szczególnej dbałości o ewakuację wióra i odciążenie przewężonej szyjki narzędzia. Pierwszym zabiegiem jest zawsze zgrubne wyfrezowanie pionowego rowka środkowego zwykłym frezem walcowo-czołowym na pełną głębokość z naddatkiem `0.2–0.5 mm` na dnie, co chroni szyjkę freza kształtowego przed kolizją i otwiera przestrzeń dla wiórów. Frezy teowe o naprzemianległych ostrzach lub na płytki wymienne pracują w zamkniętej strefie, dlatego przy głębszych podcięciach zaleca się podział naddatku na `2–3` przejścia promieniowe przy intensywnym spłukiwaniu strefy skrawania chłodziwem, aby uniknąć zakleszczenia wiórów.

Podczas frezowania skośnych prowadnic jaskółczego ogona obciążenie krawędzi skrawającej rośnie w kierunku ostrego naroża zewnętrznego, gdzie prędkość skrawania `Vc` jest największa, a odprowadzanie ciepła najtrudniejsze. Aby uniknąć wciągnięcia narzędzia w materiał i złamania szyjki, obróbkę dzieli się na kilka przejść promieniowych o szerokości `Ae = 0.5–1.5 mm`, pozostawiając `0.10–0.15 mm` na przejście wykańczające. Najważniejsza zasada programowania wszelkich podcięć dotyczy **bezpiecznego wycofania narzędzia**: w systemie CAM należy bezwzględnie wyłączyć bezpośredni odjazd w osi `Z` i zaprogramować poziome wyjście w osiach `X/Y` na środek otwartego rowka przed ruchem szybkim `G00 Z+`, w przeciwnym razie frez zetnie górną półkę podcięcia.

**🇬🇧 English**
# Milling T-Slots, Dovetail Grooves, and Internal Undercuts
Machining T-slots (`DIN 650`), `45°` or `60°` **dovetail ways**, and internal undercuts such as O-ring or circlip grooves demands careful chip evacuation and protection of the cutter's narrow neck. The operation must always begin by roughing out the central vertical neck slot to full depth with a standard square-end mill—leaving `0.2–0.5 mm` stock on the floor—so the undercut cutter's shank has clearance and chips have an escape channel. Staggered-tooth HSS or indexable carbide T-slot cutters operate trapped inside the slot; rather than taking the full undercut width in one pass, split deep undercuts into `2–3` radial stepovers (`Ae`) while blasting high-pressure flood coolant directly into the kerf to prevent chip recutting and cutter seizure.

When machining angled dovetail profiles with solid-carbide or indexable dovetail cutters, cutting forces concentrate near the wide outer tip where surface speed `Vc` is highest and the delicate corner is most vulnerable to chipping. Take progressive radial passes of `Ae = 0.5–1.5 mm` using climb milling on rigid CNC mills, leaving a uniform `0.10–0.15 mm` wall allowance for a light finishing pass. Above all, verify the **lead-out and retract motion** in your CAM post-processor: never command a vertical `G00 Z+` retract while the cutter is still engaged under the overhang! Always program a horizontal `X/Y` clearance move back to the center of the neck slot before lifting in `Z`.

---

id: cnc-engraving-g47-vbit
tag: Фрезерование | Frezowanie | Milling

**🇷🇺 Русский**
# Гравировка текста, шкал и серийных номеров на ЧПУ (G47 и граверы)
Маркировка чертежных номеров, серийных кодов, логотипов и шкал непосредственно на фрезерном станке с ЧПУ избавляет от ручного клеймения и слесарных операций. Для чистой гравировки без заусенцев применяются твердосплавные **конические граверы** (половинчатые однозубые или двухзубые V-образные) с углом при вершине `30°`, `45°`, `60°` или `90°` и плоской пяткой на кончике шириной `0.10–0.20 мм`. Поскольку рабочий диаметр у самой вершины близок к нулю, фактическая скорость резания `Vc` там минимальна — поэтому гравер запускают на максимально возможных оборотах шпинделя (`10 000–24 000 об/мин`) с подачей на зуб `fz = 0.01–0.03 мм/зуб` и малой глубиной захода `Ap = 0.05–0.20 мм` с подачей СОЖ или масляного тумана.

Если гравировка выполняется по необработанному литью, поковке или детали с перепадом высот `0.2–0.5 мм`, жестко закрепленный гравер на одних буквах оставит еле заметную царапину, а на других заглубится слишком сильно и сломает кончик. В таких случаях выручает **подпружиненная оправка для гравировки**, которая компенсирует неровности поверхности до `2–3 мм` за счет постоянного осевого усилия пружины. На станках **Haas** для быстрой маркировки без CAM-системы предусмотрен встроенный цикл `G47`: кадр `G47 P0 X10. Y20. I0. J5.0 R0.5 Z-0.15 F300. E100. (PART-104)` гравирует фиксированный текст высотой `5.0 мм` (`J5.0`) на глубину `Z-0.15`, а вызов `G47 P1 ... (0001)` автоматически увеличивает серийный номер на единицу на каждой следующей детали.

**🇵🇱 Polski**
# Grawerowanie tekstu, podziałek i numerów seryjnych na CNC (G47 i grawerki)
Znakowanie numerów rysunkowych, kodów seryjnych, logotypów oraz podziałek bezpośrednio na centrum frezarskim CNC eliminuje ręczne cechowanie i dodatkowe operacje ślusarskie. Do czystego grawerowania bez zadziorów stosuje się węglikowe **frezy grawerskie stożkowe** (półokrągłe jednoostrzowe lub dwuostrzowe typu V-bit) o kącie wierzchołkowym `30°`, `45°`, `60°` lub `90°` ze ściętym, płaskim wierzchołkiem o szerokości `0.10–0.20 mm`. Ponieważ efektywna średnica skrawania przy samym czubku jest bliska zeru, prędkość skrawania `Vc` jest tam bardzo niska — dlatego grawerkę należy uruchamiać na maksymalnych dostępnych obrotach wrzeciona (`10 000–24 000 obr./min`) przy posuwie na ostrze `fz = 0.01–0.03 mm/ząb` oraz niewielkiej głębokości `Ap = 0.05–0.20 mm`.

Gdy grawerowanie odbywa się na surowym odlewie, odkuwce lub powierzchni o wahaniach wysokości rzędu `0.2–0.5 mm`, sztywno zamocowane narzędzie w jednym miejscu ledwo zarysuje materiał, a w innym zagłębi się nadmiernie i wykruszy ostrze. Rozwiązaniem jest **oprawka grawerska ze sprężynową kompensacją osiową**, która utrzymuje stałą siłę docisku przy nierównościach dochodzących do `2–3 mm`. W obrabiarkach **Haas** do szybkiego opisywania detali bez użycia systemu CAM służy wbudowany cykl `G47`: blok `G47 P0 X10. Y20. I0. J5.0 R0.5 Z-0.15 F300. E100. (PART-104)` wygraweruje stały tekst o wysokości `5.0 mm` (`J5.0`) na głębokość `Z-0.15`, natomiast wywołanie `G47 P1 ... (0001)` automatycznie inkrementuje numer seryjny o jeden przy każdej kolejnej sztuce.

**🇬🇧 English**
# CNC Engraving of Part Numbers, Graduations, and Serial Codes (G47 & V-Bits)
Engraving part numbers, traceability codes, and scale graduations directly on the CNC mill eliminates secondary laser or manual stamping operations. Clean, burr-free engraving requires solid-carbide **conical engraving cutters** (single-flute half-round or 2-flute V-bits) with included angles of `30°`, `45°`, `60°`, or `90°` and a precision tip flat of `0.10–0.20 mm`. Because the effective cutting diameter at the tip is nearly zero, surface speed `Vc` is extremely low—always run engraving bits at your spindle's maximum speed (`10,000–24,000 RPM`) with a light chipload of `fz = 0.01–0.03 mm/tooth` and an axial depth of `Ap = 0.05–0.20 mm` under flood coolant or air/oil mist.

When engraving uneven sand castings, forgings, or warped weldments where surface height varies by `0.2–0.5 mm`, a rigidly held V-bit will barely scratch low spots while plunging too deep and snapping its tip on high spots. Using a **spring-loaded engraving holder** solves this by floating axially up to `2–3 mm` under constant spring pressure to maintain uniform line width. On **Haas** controls, you can engrave text without CAM software using the built-in `G47` cycle: `G47 P0 X10. Y20. I0. J5.0 R0.5 Z-0.15 F300. E100. (PART-104)` engraves literal text `5.0 mm` tall (`J5.0`) at `Z-0.15` depth, while `G47 P1 ... (0001)` automatically increments the serial number by one for every subsequent part.

---

id: gear-spline-hobbing-milling
tag: Фрезерование | Frezowanie | Milling

**🇷🇺 Русский**
# Нарезание зубчатых колес и шлицев на универсальных фрезерных станках с ЧПУ
Изготовление прямозубых и косозубых шестерен, а также эвольвентных и прямобочных шлицевых валов (`DIN 5480`, `ГОСТ 1139`) сегодня успешно выполняется на стандартных 3-, 4- и 5-осевых обрабатывающих центрах без зубофрезерных станков. На 4-осевом станке с делительной головкой (`ось A`) классический метод — профильное фрезерование дисковой модульной фрезой по методу деления. Чтобы исключить накопление погрешности от люфта червячной передачи поворотного стола, индексацию между впадинами зубьев всегда программируют **строго в одном направлении вращения** (например, только в `+A` без реверса). На 3- и 5-осевых станках сферическими и коническими концевыми фрезами в CAM-системах реализуется 3D-фрезерование эвольвентного профиля (**InvoMilling**), позволяющее одним стандартным инструментом резать колеса разных модулей `m`.

На современных 5-осевых фрезерно-токарных центрах с синхронизацией шпинделя и поворотного стола широко применяется технология **Power Skiving** (зуботочение обкаточным резцовым инструментом под перекрещивающимся углом `20°`), которая в `5–8 раз` быстрее зубодолбления и позволяет нарезать внутренние зубчатые венцы вплотную к бурту. Контроль толщины зуба и глубины впадины прямо на станке без снятия детали со стола проводят **измерением по роликам (шарикам)** (`размер M по роликам`): два калиброванных штифта укладываются в противоположные впадины зубьев и замеряются микрометром, что позволяет точно скорректировать радиальный износ фрезы перед чистовым проходом.

**🇵🇱 Polski**
# Nacinanie kół zębatych i wielowypustów na uniwersalnych centrach CNC
Wykonywanie kół zębatych o zębach prostych i śrubowych oraz wałków wielowypustowych ewolwentowych (`DIN 5480`) jest dziś powszechnie realizowane na standardowych 3-, 4- i 5-osiowych centrach obróbczych bez użycia dedykowanych obwiedniówek. Na frezarce 4-osiowej z podzielnicą (`oś A`) klasyczną metodą jest frezowanie kształtowe frezem krążkowym modułowym metodą podziałową. Aby wyeliminować wpływ luzu nawrotnego przekładni ślimakowej stołu obrotowego na podziałkę kątową, indeksowanie kolejnych wrębów programuje się **zawsze w tym samym kierunku obrotu** (np. wyłącznie `+A` bez cofania). Na maszynach 3- i 5-osiowych za pomocą frezów kulistych i stożkowych realizuje się obróbkę powierzchniową 3D profilu ewolwentowego (**InvoMilling**), co pozwala jednym narzędziem wykonywać uzębienia o różnych modułach `m`.

W nowoczesnych 5-osiowych centrach tokarsko-frezarskich z synchronizacją wrzeciona narzędziowego i stołu stosuje się technologię **Power Skiving** (skrawanie obwiedniowe specjalną głowicą ustawioną pod kątem skrzyżowania osi `20°`), która jest `5–8 razy` szybsza od dłutowania Fellows i umożliwia nacinanie uzębień wewnętrznych blisko kołnierza. Kontrolę grubości zęba bezpośrednio na maszynie przed odpięciem detalu przeprowadza się metodą **pomiaru przez wałeczki pomiarowe** (`wymiar M przez wałeczki`): dwa kalibrowane wałeczki wkłada się w przeciwległe wręby i mierzy mikrometrem, wprowadzając precyzyjną korektę promieniową narzędzia przed przejściem wykańczającym.

**🇬🇧 English**
# Machining Gears and Involute Splines on Standard CNC Mills
Cutting spur and helical gears as well as involute and straight-sided splines (`DIN 5480`, `ANSI B92.1`) can be performed accurately on standard 3-, 4-, and 5-axis CNC machining centers without dedicated gear hobbers. On a 4-axis mill equipped with a rotary indexer (`A-axis`), form milling with a modular disc cutter or T-slot cutter slot-by-slot remains a reliable solution. To prevent worm-gear backlash in the rotary table from corrupting tooth-to-tooth pitch accuracy, always program `A`-axis indexing moves **in a single rotational direction** (e.g., strictly `+A` without reversing). On 3- and 5-axis machines, 3D surfacing with ball-nose or tapered barrel end mills (**InvoMilling**) traces the exact involute flank, allowing a single standard cutter to machine multiple gear modules `m`.

On modern 5-axis mill-turn centers with synchronized electronic gearing between spindle and rotary table, **Power Skiving** (angling a multi-tooth skiving cutter at a `20°` crossed-axis tilt) cuts internal and external gears `5–8 times` faster than gear shaping and reaches tight shoulders. To verify tooth thickness on the machine before unclamping the blank, machinists perform a **measurement over pins** (`dimension M over rollers/balls`): placing two precision gauge pins into opposite tooth spaces and measuring across them with an outside micrometer provides an exact radial offset correction for the final finishing pass.

---

id: chip-conveyor-evacuation
tag: Безопасность | Bezpieczeństwo | Safety

**🇷🇺 Русский**
# Эвакуация стружки, выбор конвейера и безопасность в рабочей зоне
Эффективный отвод стружки из зоны резания и кабины станка критически важен как для стойкости инструмента, так и для безопасности оператора. Тип конвейера подбирается строго под обрабатываемый материал: **пластинчатые (ленточные шарнирные) транспортеры** отлично справляются с длинной сливной и витой стружкой из конструкционных сталей, нержавейки и алюминиевых сплавов, но быстро заклинивают от мелкой сыпучей крошки. Напротив, **скребковые и магнитные транспортеры** предназначены для мелкой чугунной, латунной и бронзовой стружки, предотвращая ее оседание в баке СОЖ и износ помпы. Внутри самой кабины смыв стружки в шнеки или на ленту обеспечивают помпы смыва кабины и программируемые сопла СОЖ (например, **P-Cool** на станках Haas), которые автоматически меняют угол наклона при смене вылета инструмента `H`.

Особую опасность при точении и сверлении вязких сталей представляет наматывание длинной сливной стружки («птичьего гнезда» / **bird's nest**) на оправку инструмента или заготовку: вращающийся клубок острых как бритва лент мгновенно сбивает сопла СОЖ, царапает чистовую поверхность и может привести к тяжелой травме рук. **Категорически запрещено убирать стружку голыми руками или в перчатках** при работающем станке и даже при остановленном шпинделе — для этого используют только металлический крючок и щипцы при полной остановке по `M00`/`M01`. Однако правильное инженерное решение — устранить саму сливную стружку за счет увеличения подачи `fn`, выбора стружколомающей геометрии пластины или программирования циклов дробления стружки с микропаузами `G04`.

**🇵🇱 Polski**
# Ewakuacja wiórów, dobór transportera i bezpieczeństwo w przestrzeni roboczej
Skuteczne odprowadzanie wiórów ze strefy skrawania oraz kabiny obrabiarki ma kluczowe znaczenie zarówno dla trwałości narzędzi, jak i bezpieczeństwa operatora. Typ transportera wiórów dobiera się ściśle pod kątem obrabianego materiału: **transportery taśmowo-zawiasowe (płytkowe)** doskonale radzą sobie z długimi, wstęgowymi i zwiniętymi wiórami ze stali konstrukcyjnych, nierdzewnych oraz stopów aluminium, lecz mogą ulegać zakleszczeniu przy drobnym urobku. Z kolei **transportery zgrzebłowe oraz magnetyczne** są przeznaczone do krótkiego, sypkiego wióra żeliwnego i mosiężnego, chroniąc zbiornik chłodziwa przed zamuleniem i zużyciem pomp. Wewnątrz przestrzeni roboczej spłukiwanie urobku wspomagają dysze spłukujące łoże oraz programowalne dysze chłodziwa (np. **P-Cool** w maszynach Haas), automatycznie korygujące kąt natrysku do długości narzędzia `H`.

Szczególne zagrożenie podczas toczenia i wiercenia ciągliwych stali stanowi nawijanie się długiego wióra wstęgowego (tzw. **gniazda ptasiego** / bird's nest) na oprawkę lub obrabiany przedmiot: wirujący kłąb ostrych jak brzytwa taśm niszczy dysze chłodziwa, rysuje wykończoną powierzchnię i grozi ciężkim okaleczeniem dłoni. **Bezwzględnie zabrania się usuwania wiórów gołymi rękami lub w rękawicach** — nawet po zatrzymaniu wrzeciona kodem `M00`/`M01` należy zawsze używać stalowego haka lub szczypiec. Najlepszym rozwiązaniem technologicznym jest jednak likwidacja problemu u źródła poprzez zwiększenie posuwu `fn`, dobór agresywniejszego łamacza wióra na płytce lub zastosowanie cykli z mikro-przerwami `G04`.

**🇬🇧 English**
# Chip Evacuation, Conveyor Selection, and Shop-Floor Safety
Reliable chip evacuation from the cutting zone and machine enclosure is vital for both tool life and operator safety. Selecting the right chip conveyor depends on the dominant material in your shop: **hinged-belt conveyors** excel at carrying away long, curly, or bushy swarf produced by mild steel, stainless steel, and aluminum, whereas fine cast-iron dust or short brass chips can slip between belt hinges and jam the rollers. Conversely, **scraper and magnetic conveyors** are engineered specifically for fine cast-iron, bronze, and brass particulates, keeping abrasive sludge out of the coolant sump. Inside the enclosure, bed-wash nozzles and programmable coolant spigots (such as **Haas P-Cool**) automatically adjust their aim to match each tool's length offset `H`, blasting chips away from the tool shank.

A major hazard when turning or drilling gummy materials is the formation of a tangled **"bird's nest"** of stringy chips wrapped around the toolholder or chuck: a spinning mass of razor-sharp steel ribbons will shear off coolant lines, mar finished surfaces, and sever fingers on contact. **Never pull stringy chips by hand—even while wearing gloves and with the spindle stopped!** Always use a dedicated chip hook or pliers during an `M00`/`M01` program stop. Better yet, eliminate bird's nests at the source by increasing feed per rev `fn`, switching to a tighter chipbreaker geometry, or programming micro-dwell chip-breaking cycles (`G04`).

---

id: mist-collectors-air-safety
tag: Охлаждение | Chłodzenie | Cooling

**🇷🇺 Русский**
# Уловители масляного тумана, фильтрация воздуха и здоровье оператора
Работа современных станков с ЧПУ на высоких оборотах шпинделя (`10 000–20 000 об/мин`) в сочетании с подачей СОЖ под высоким давлением (`20–70 бар`) приводит к мгновенному распылению водосмешиваемой эмульсии или чистого масла в мелкодисперсный **масляный туман** и дым с размером капель от `0.1` до `5 мкм`. Без принудительной вытяжки при каждом открытии двери кабины это облако аэрозоля выходит в цех: частицы размером `< 1 мкм` проникают глубоко в альвеолы легких оператора, вызывая хронический бронхит, астму и дерматиты, а осевшая на платах ЧПУ, оптических линейках и сервоприводах липкая масляная пленка приводит к коротким замыканиям и дорогостоящему ремонту электроники.

Для очистки воздуха на крышу станка устанавливают промышленные **уловители масляного тумана** (**Filtermist**, **Losma**, **Donaldson**, **Absolent**). Центробежные сепараторы за счет вращающегося перфорированного барабана эффективно коагулируют капли эмульсии размером `> 2 мкм` и возвращают собранную жидкость обратно в бак станка по дренажной трубке, однако при резании с чистым маслом или на тяжелых режимах с образованием субмикронного дыма их обязательно дооснащают электростатическим блоком или кассетой тонкой очистки **HEPA H13** (удерживающей `99.95%` частиц до `0.3 мкм`). Правило безопасности для оператора и наладчика: после окончания цикла (`M30`) выждать **5–10 секунд** перед открытием двери, чтобы вытяжка полностью очистила объем кабины, и регулярно проверять сифон сливной трубки.

**🇵🇱 Polski**
# Odciągi mgły olejowej, filtracja powietrza i ochrona zdrowia operatora
Praca nowoczesnych obrabiarek CNC przy wysokich obrotach wrzeciona (`10 000–20 000 obr./min`) oraz chłodzeniu wysokociśnieniowym (`20–70 bar`) powoduje natychmiastową atomizację emulsji wodnej lub czystego oleju w drobną **mgłę olejową** oraz dym o średnicy kropel od `0.1` do `5 µm`. W przypadku braku sprawnego odciągu każde otwarcie drzwi kabiny uwalnia chmurę aerozolu na halę produkcyjną: cząstki o wielkości `< 1 µm` przenikają głęboko do pęcherzyków płucnych operatora, wywołując choroby dróg oddechowych i alergie skórne, a osiadający na szafach sterowniczych, liniałach optycznych i serwonapędach lepki film olejowy prowadzi do zwarć i kosztownych awarii elektroniki.

Aby temu zapobiec, na obudowie obrabiarki montuje się przemysłowe **separatory mgły olejowej** (np. **Filtermist**, **Losma**, **Donaldson**, **Absolent**). Odciągi odśrodkowe z wirującym bębnem perforowanym skutecznie wytrącają krople emulsji `> 2 µm` i zawracają odzyskane chłodziwo z powrotem do wanny przewodem spustowym, jednak przy obróbce na czystym oleju lub intensywnym dymieniu należy je bezwzględnie wyposażyć w moduł elektrostatyczny lub filtr końcowy **HEPA H13** (zatrzymujący `99.95%` cząstek o wielkości `0.3 µm`). Złota zasada BHP dla operatora: po zakończeniu cyklu (`M30`) należy odczekać **5–10 sekund** przed otwarciem drzwi, aby separator całkowicie oczyścił wnętrze kabiny.

**🇬🇧 English**
# Oil Mist Collectors, Air Filtration, and Operator Respiratory Safety
Running modern CNC machining centers at high spindle speeds (`10,000–20,000 RPM`) alongside high-pressure coolant (`20–70 bar`) atomizes water-soluble emulsion and neat cutting oil into a dense cloud of **oil mist** and thermal smoke with droplet sizes ranging from `0.1` to `5 µm`. Without dedicated extraction, opening the enclosure door releases this aerosol plume into the shop: breathable sub-micron particles (`< 1 µm`) penetrate deep into operators' lungs—causing occupational asthma, hypersensitivity pneumonitis, and dermatitis—while airborne oil coats optical linear scales, spindle encoders, and CNC cabinet circuit boards, triggering premature electronics failure.

To keep shop air clean, machines should be equipped with properly sized **mist collectors** (such as **Filtermist**, **Losma**, **Donaldson**, or **Absolent** units). Centrifugal impaction collectors use a high-speed perforated drum to coalesce emulsion droplets `> 2 µm` and drain the recovered coolant back into the machine sump via a trapped return hose; however, when machining with neat oil or generating sub-micron smoke, a secondary electrostatic precipitator or **HEPA H13** after-filter (`99.95%` efficiency at `0.3 µm`) is essential. Operators should always wait **5–10 seconds** after spindle stop (`M30`) before opening the enclosure door so the extractor can purge the cabin, and inspect filter differential-pressure gauges monthly.

---

id: residual-stress-warping-relief
tag: Точность | Dokładność | Precision

**🇷🇺 Русский**
# Внутренние напряжения и поводка деталей после фрезерования: как победить «банан»
Каждый технолог и фрезеровщик сталкивался с ситуацией, когда длинная плита, тонкостенный корпус или рама на станке в тисках имеют идеальные размеры в допуске `±0.01 мм`, но сразу после разжатия кулачков выгибаются дугой («бананом») на `0.3–1.5 мм`. Главная причина — **внутренние остаточные напряжения** в прокате и поковках, сосредоточенные в наружной корке металла толщиной `1–3 мм` после прокатки, закалки или волочения. Когда мы снимаем `70–90%` объема заготовки только с одной стороны, равновесие внутренних сил нарушается и деталь деформируется. Первая мера защиты — правильный выбор материала: вместо обычного алюминия `6061-T6` или `Д16Т` следует закладывать предварительно растянутые плиты со снятыми напряжениями **`6061-T651`**, **`7075-T7351`** или литые фрезерные плиты **`АМг6` / `5083`** (EN AW-5083 H111 / Cast Tooling Plate), а для сталей — горячекатаный и нормализованный прокат вместо холоднотянутого калиброванного.

Вторая обязательная мера — **симметричная маршрутная технология с переворотами** («черновая — переворот — чистовая»). Никогда нельзя делать одну сторону детали сразу в чистовой размер: сначала нужно ободрать обе базовые плоскости на `1.5–2.0 мм` для вскрытия напряженной корки, затем выполнить черновое выбирание карманов с обеих сторон, оставив равномерный припуск `0.5–1.0 мм` по всему контуру. После этого деталь полностью отпускают из тисков, дают ей «сыграть» (при необходимости проводят промежуточное старение в печи при `150–180 °C`), а на чистовых установках зажимают с минимальным усилием через динамометрический ключ, подкладывая щупы под свободные опоры, чтобы не упруго выпрямлять поводку тисками перед чистовым проходом.

**🇵🇱 Polski**
# Naprężenia własne i odkształcanie detali po frezowaniu: jak uniknąć „banana”
Każdy technolog i frezer spotkał się z sytuacją, w której długa płyta, cienkościenny korpus lub ramka zmierzona w imadle na maszynie trzyma wymiar w tolerancji `±0.01 mm`, lecz natychmiast po rozluźnieniu szczęk wygina się w łuk („banan”) o `0.3–1.5 mm`. Główną przyczyną są **wewnętrzne naprężenia własne** zmagazynowane w zewnętrznej warstwie walcowanego lub ciągnionego materiału o grubości `1–3 mm`. Gdy podczas obróbki usuwamy `70–90%` objętości półfabrykatu z jednej strony, równowaga sił wewnętrznych zostaje zachwiana i detal ulega wypaczeniu. Pierwszym krokiem zapobiegawczym jest właściwy dobór materiału: zamiast zwykłego stopu `6061-T6` należy stosować płyty odprężane przez rozciąganie **`6061-T651`**, **`7075-T7351`** lub precyzyjne płyty odlewane **`5083`** (AlMg4.5Mn), natomiast w przypadku stali — materiał gorącowalowany i normalizowany zamiast ciągnionego na zimno.

Drugim kluczowym rozwiązaniem jest **symetryczna technologia obróbki z przemocowaniami** („zgrubna – obrót – wykańczająca”). Nigdy nie należy wykonywać jednej strony detalu od razu na gotowo: najpierw należy zebrać zewnętrzny naskórek `1.5–2.0 mm` z obu stron płyty, a następnie wybronić zgrubnie kieszenie, pozostawiając równomierny naddatek `0.5–1.0 mm` na całym obrysie. Po obróbce zgrubnej detal luzuje się z imadła, pozwalając mu swobodnie się odkształcić, a do obróbki wykańczającej mocuje się go minimalną siłą za pomocą klucza dynamometrycznego lub podkładek dystansowych, aby nie prostować sprężyście wygiętej części przed ostatnim przejściem.

**🇬🇧 English**
# Controlling Residual Stress and Part Warping After Machining
Every machinist has experienced hogging out `70–90%` of a long plate or thin-walled housing, measuring it flat within `±0.01 mm` while clamped in the vise, and watching it bow into a `0.3–1.5 mm` "banana" the instant the jaws open. The culprit is **internal residual stress** locked into the outer `1–3 mm` skin of raw stock during rolling, quenching, or cold drawing. Removing metal asymmetrically from one side upsets the internal force equilibrium and causes the part to warp. The first line of defense is specifying stress-relieved stock: choose stretched plate grades like **`6061-T651`**, **`7075-T7351`**, or cast aluminum tooling plate (**`MIC-6` / `5083`**) instead of standard `6061-T6` extruded bar, and prefer hot-rolled normalized steel over cold-drawn bar for thin structural frames.

The second defense is a **symmetric "flip-and-rough" machining sequence**. Never machine one side complete to final size while the opposite face still has its raw mill skin: instead, face `1.5–2.0 mm` off both top and bottom surfaces first to release skin tension symmetrically, then rough out pockets on both setups while leaving a uniform `0.5–1.0 mm` stock envelope everywhere. Unclamp the rough-machined part completely so it can relax into its natural shape, then re-clamp it using light torque-wrench pressure (shimming under any floating contact points so the vise does not elastically flatten the bow) before taking low-heat finishing passes.

---

id: cycle-time-optimization-cam
tag: Режимы резания | Parametry skrawania | Cutting data

**🇷🇺 Русский**
# Сокращение времени цикла ЧПУ без потери стойкости инструмента
Когда нужно ускорить серийную деталь на `15–30%`, неопытный наладчик просто крутит ручку корректора подачи `Feed Override` до `120–150%`, что мгновенно приводит к перегрузке кромок и поломке фрез. Грамотная оптимизация времени цикла начинается с сокращения **«резания воздуха» (air-cutting time)** и холостых перемещений, которые на многих деталях занимают до `40%` цикла. В сверлильных циклах `G81`/`G83` и фрезерных траекториях достаточно уменьшить плоскость отвода `R` с типичных перестраховочных `25–50 мм` до `2.0–3.0 мм` над деталью, а в CAM-системе переключить переходы между проходами на режим **`Stay Down` (без подъема)** или быстрые микроподъемы на `0.5 мм` с подачей `F8000–12000 мм/мин` вместо постоянных отводов на плоскость безопасности `Z50`.

Еще несколько секунд на каждом инструменте экономит правильная структура кадров в постпроцессоре:
- **Предварительный вызов следующего инструмента (Pre-staging ATC)**: сразу после кадра смены `T01 M06` следующей строкой ставят `T02`, чтобы барабан бокового магазина повернулся к следующей ячейке во время резания первого инструмента.
- **Одновременный подход и совмещение M-кодов**: объединяйте выход в точку, пуск шпинделя и включение СОЖ, а также опускание по `Z` с коррекцией длины `G00 G43 H01 Z50. M08`, вместо раздельных последовательных строк.
- **Адаптивное чернение и постоянная толщина стружки**: замена послойного фрезерования с `Ap = 2 мм` на работу всей длиной канавки `Ap = 2xD` с малым радиальным шагом `Ae = 10–15% D` и компенсацией утонения стружки (**Chip Thinning**) удваивает объем снимаемого металла в минуту (`MRR`).

**🇵🇱 Polski**
# Skracanie czasu cyklu CNC bez utraty trwałości narzędzi
Gdy trzeba przyspieszyć produkcję seryjną o `15–30%`, niedoświadczony operator często podkręca potencjometr posuwu `Feed Override` do `120–150%`, co błyskawicznie prowadzi do wykruszenia ostrzy i złamania frezów. Profesjonalna optymalizacja czasu cyklu zaczyna się od eliminacji **„skrawania powietrza” (air-cutting)** oraz ruchów jałowych, które w wielu programach stanowią aż `40%` całkowitego czasu obróbki. W cyklach wiertarskich `G81`/`G83` oraz operacjach frezarskich wystarczy obniżyć płaszczyznę wycofania `R` z zachowawczych `25–50 mm` do `2.0–3.0 mm` nad materiałem, a w systemie CAM zmienić ruchy łączące na tryb **`Stay Down` (bez podnoszenia)** z mikro-odejściem `0.5 mm` przy wysokim posuwie `F8000–12000 mm/min`, zamiast ciągłych powrotów na bezpieczne `Z50`.

Kolejne cenne sekundy na każdym narzędziu oszczędza właściwa konstrukcja kodu w postprocesorze:
- **Wstępne pozycjonowanie magazynu (Tool Pre-staging)**: bezpośrednio po bloku wymiany `T01 M06` należy wpisać wywołanie kolejnego narzędzia `T02`, dzięki czemu magazyn boczny obróci się w tle podczas pracy pierwszego narzędzia.
- **Łączenie ruchów dojazdowych i funkcji M**: grupowanie najazdu z uruchomieniem wrzeciona oraz włączeniem chłodziwa w jednym bloku z kompensacją długości `G00 G43 H01 Z50. M08` eliminuje przestoje na potwierdzenie sygnałów PLC.
- **Obróbka adaptacyjna i kompensacja ścieniania wióra**: zastąpienie płytkich warstw `Ap = 2 mm` pracą pełną wysokością ostrza `Ap = 2xD` przy małym zaangażowaniu `Ae = 10–15% D` (**Chip Thinning**) podwaja wydajność objętościową `MRR`.

**🇬🇧 English**
# Practical CNC Cycle-Time Optimization Without Burning Up Tools
When asked to shave `15–30%` off a production cycle time, novice operators often twist the `Feed Override` dial to `120–150%`, rapidly burning up inserts and snapping end mills. Smart cycle-time reduction starts by eliminating **"air-cutting" time** and wasted non-cutting motion, which routinely consume up to `40%` of a program's runtime. In `G81`/`G83` drilling cycles and pocket milling routines, lowering the `R` retract plane from a conservative `25–50 mm` down to `2.0–3.0 mm` above the stock—and configuring CAM linking moves to **`Stay Down`** with `0.5 mm` micro-lifts at high feed (`F8000–12000 mm/min`) instead of full `Z50` clearance retracts—saves minutes on multi-feature parts without adding a single Newton of cutting load.

Additional seconds can be reclaimed at every tool change by optimizing your CAM post-processor output:
- **Pre-staging the next tool in side-mount ATCs**: command the upcoming tool (`T02`) on the line immediately following `T01 M06` so the carousel indexes while Tool 1 is cutting.
- **Simultaneous approach and M-code overlapping**: combine `X/Y` positioning with spindle start (`M03`), and merge `G00 G43 H01 Z25. M08` on a single block to avoid sequential PLC handshaking delays.
- **High-efficiency milling (HEM) with Radial Chip Thinning**: trading shallow `Ap = 2 mm` stepdowns for full-flute depth `Ap = 2xD` at `Ae = 10–15% D` with compensated feedrate doubles your Material Removal Rate (`MRR`) while spreading wear evenly along the flute.
