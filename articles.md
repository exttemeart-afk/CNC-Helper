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
