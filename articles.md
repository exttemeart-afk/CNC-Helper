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
