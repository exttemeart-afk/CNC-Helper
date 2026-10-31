/* AUTO-GENERATED from articles.md by build.ps1. Edit articles.md to add or update articles. */
const ARTICLES = [
{
 id:"trochoidal-milling", tag:{ru:"Фрезерование",pl:"Frezowanie",en:"Milling"},
 title:{ru:"Трохоидальное фрезерование: Как перестать ломать фрезы",pl:"Frezowanie trochoidalne: Jak przestać łamać frezy",en:"Trochoidal Milling: How to Stop Breaking End Mills"},
 summary:{ru:"Устали ломать дорогие фрезы при обработке глубоких пазов? Пора вспомнить про трохоидальное фрезерование.",pl:"Masz dość łamania drogich frezów przy głębokich rowkach? Czas zaprzyjaźnić się z frezowaniem trochoidalnym.",en:"Tired of snapping expensive end mills when cutting deep slots? It’s time to embrace trochoidal milling."},
 body:{
  ru:`<p>Устали ломать дорогие фрезы при обработке глубоких пазов? Пора вспомнить про трохоидальное фрезерование. Суть проста: фреза двигается по спирали, снимая металл тонкой стружкой, но используя всю длину режущей кромки (High Efficiency Milling). В итоге инструмент не &quot;задыхается&quot; в материале, излишки тепла уходят со стружкой, а срок службы фрезы вырастает в разы. Да, программа выглядит как спагетти из G-кода, но современные CAM-системы генерируют эту траекторию за пару кликов.</p>`,
  pl:`<p>Masz dość łamania drogich frez&#243;w przy głębokich rowkach? Czas zaprzyjaźnić się z frezowaniem trochoidalnym. Zasada jest prosta: frez porusza się ruchem spiralnym, zdejmując cienką warstwę materiału, ale wykorzystując całą długość ostrza. Dzięki temu narzędzie się nie &quot;dusi&quot;, ciepło ucieka z wi&#243;rem, a żywotność frezu rośnie drastycznie. Owszem, G-kod wygląda wtedy jak makaron spaghetti, ale dzisiejsze systemy CAM generują to w kilka kliknięć.</p>`,
  en:`<p>Tired of snapping expensive end mills when cutting deep slots? It’s time to embrace trochoidal milling. The concept is simple: the tool moves in a spiral path, taking light radial cuts but using the full depth of the flute. This means the cutter doesn&#39;t get bogged down, heat leaves with the chip, and your tool life goes through the roof. Sure, your G-code will look like a bowl of spaghetti, but modern CAM software handles it in a couple of clicks.</p>`
 }
},
{
 id:"coolant-care", tag:{ru:"Обслуживание",pl:"Konserwacja",en:"Maintenance"},
 title:{ru:"Выбор и уход за СОЖ: Это вам не просто вода",pl:"Wybór i pielęgnacja chłodziwa: To nie jest zwykła woda",en:"Coolant Selection and Care: It’s Not Just Water"},
 summary:{ru:"СОЖ (смазочно-охлаждающая жидкость) — это кровь вашего станка. Но если в понедельник утром из бака пахнет как из болота, у вас проблемы.",pl:"Chłodziwo to krew maszyny CNC. Ale jeśli w poniedziałek rano pachnie jak bagno, masz spory problem.",en:"Coolant is the lifeblood of your CNC machine. But if it smells like a swamp on a Monday morning, you’ve got a problem."},
 body:{
  ru:`<p>СОЖ (смазочно-охлаждающая жидкость) — это кровь вашего станка. Но если в понедельник утром из бака пахнет как из болота, у вас проблемы. Многие операторы просто доливают воду или концентрат &quot;на глаз&quot;. Это фатальная ошибка! Всегда используйте рефрактометр. Слишком бедная смесь — привет, ржавчина и быстрый износ инструмента. Слишком богатая — дерматит на руках и деньги на ветер. И главное правило: снимайте масляную пленку с поверхности бака (скиммером), иначе анаэробные бактерии устроят там вечеринку.</p>`,
  pl:`<p>Chłodziwo to krew maszyny CNC. Ale jeśli w poniedziałek rano pachnie jak bagno, masz spory problem. Wielu operator&#243;w po prostu dolewa wody lub koncentratu &quot;na oko&quot;. Błąd! Używaj refraktometru. Zbyt uboga mieszanka oznacza rdzę i szybkie zużycie narzędzi. Zbyt bogata – problemy ze sk&#243;rą i wyrzucanie pieniędzy w błoto. I najważniejsza zasada: usuwaj olej z powierzchni zbiornika (skimmerem), inaczej bakterie urządzą tam sobie imprezę.</p>`,
  en:`<p>Coolant is the lifeblood of your CNC machine. But if it smells like a swamp on a Monday morning, you’ve got a problem. Many machinists just top it up with water or concentrate by eye. Big mistake! Use a refractometer. Too lean, and you’re inviting rust and rapid tool wear. Too rich, and you’ll get skin irritation and waste money. Most importantly: skim the tramp oil off the tank, or anaerobic bacteria will throw a massive party in there.</p>`
 }
},
{
 id:"titanium-machining", tag:{ru:"Материалы",pl:"Materiały",en:"Materials"},
 title:{ru:"Укрощение титана: Секреты обработки",pl:"Poskramianie tytanu: Sekrety obróbki",en:"Taming Titanium: Machining Secrets"},
 summary:{ru:"Титан — металл красивый, прочный и жутко капризный. Главная ошибка новичков — пытаться резать его на тех же режимах, что и обычную сталь.",pl:"Tytan jest piękny, wytrzymały i potwornie kapryśny. Głównym błędem nowicjuszy jest traktowanie go jak zwykłej stali.",en:"Titanium is beautiful, strong, and incredibly stubborn. The biggest rookie mistake is running it at typical steel speeds."},
 body:{
  ru:`<p>Титан — металл красивый, прочный и жутко капризный. Главная ошибка новичков — пытаться резать его на тех же режимах, что и обычную сталь. Титан очень плохо отводит тепло, поэтому вся температура ударяет прямо в режущую кромку фрезы. Правило номер один: снижайте обороты (RPM) и держите хорошую подачу на зуб, чтобы стружка успевала забирать тепло с собой. И ради всего святого, не останавливайте инструмент в материале! Если он трется, а не режет — он сгорит за доли секунды.</p>`,
  pl:`<p>Tytan jest piękny, wytrzymały i potwornie kapryśny. Gł&#243;wnym błędem nowicjuszy jest traktowanie go jak zwykłej stali. Tytan słabo odprowadza ciepło, więc cała temperatura uderza bezpośrednio w narzędzie. Zasada numer jeden: obniż obroty (RPM) i utrzymaj konkretny posuw na ząb, aby wi&#243;r zdążył zabrać ciepło ze sobą. I na litość boską, nie zatrzymuj narzędzia w materiale! Jeśli frez tylko trze, a nie skrawa – spali się w ułamku sekundy.</p>`,
  en:`<p>Titanium is beautiful, strong, and incredibly stubborn. The biggest rookie mistake is running it at typical steel speeds. Titanium is a poor conductor of heat, meaning all the thermal shock goes straight into your cutting tool. Rule number one: drop your RPMs and keep a healthy chip load so the heat escapes with the chip. And for the love of machining, never let the tool dwell in the cut! If it rubs instead of cuts, it’s toast in seconds.</p>`
 }
},
{
 id:"chatter-vibrations", tag:{ru:"Фрезерование",pl:"Frezowanie",en:"Milling"},
 title:{ru:"Вибрации (Chatter) и как с ними бороться",pl:"Drgania (Chatter) i jak z nimi walczyć",en:"Chatter Vibrations and How to Fight Them"},
 summary:{ru:"Слышите этот жуткий визг при фрезеровании? Это \"chatter\" (автоколебания), и он прямо сейчас убивает вашу фрезу и подшипники шпинделя.",pl:"Słyszysz ten przeraźliwy pisk przy frezowaniu? To \"chatter\" (drgania samowzbudne), który właśnie w tej chwili niszczy twoje narzędzie i łożyska wrzeciona.",en:"Hear that screeching noise when milling? That’s chatter, and it’s busy destroying your end mill and spindle bearings."},
 body:{
  ru:`<p>Слышите этот жуткий визг при фрезеровании? Это &quot;chatter&quot; (автоколебания), и он прямо сейчас убивает вашу фрезу и подшипники шпинделя. Первый инстинкт — снизить подачу, но часто это делает только хуже, превращая резание в трение. Что делать? Иногда достаточно просто немного изменить обороты шпинделя (буквально на 10%), чтобы выйти из этого гармонического резонанса. Еще лучший вариант — используйте фрезы с неравномерным шагом зубьев. Такая геометрия физически &quot;ломает&quot; ритм возникновения вибраций.</p>`,
  pl:`<p>Słyszysz ten przeraźliwy pisk przy frezowaniu? To &quot;chatter&quot; (drgania samowzbudne), kt&#243;ry właśnie w tej chwili niszczy twoje narzędzie i łożyska wrzeciona. Instynkt podpowiada, by zmniejszyć posuw, ale to często pogarsza sprawę, zamieniając skrawanie w tarcie. Co robić? Czasem wystarczy zmienić obroty wrzeciona zaledwie o 10%, aby wyjść z rezonansu. Albo użyj frezu o zmiennej podziałce – taka geometria fizycznie &quot;łamie&quot; rytm powstawania drgań.</p>`,
  en:`<p>Hear that screeching noise when milling? That’s chatter, and it’s busy destroying your end mill and spindle bearings. Your instinct might tell you to slow the feed rate down, but that often makes it worse by turning cutting into rubbing. The fix? Sometimes just tweaking your spindle speed by 10% is enough to break the harmonic resonance. Alternatively, use a variable-pitch end mill—its geometry naturally disrupts the vibration rhythm.</p>`
 }
},
{
 id:"mql-lubrication", tag:{ru:"Охлаждение",pl:"Chłodzenie",en:"Cooling"},
 title:{ru:"Микросмазка (MQL): Забудьте о лужах вокруг станка",pl:"Mikrosmarowanie (MQL): Zapomnij o kałużach wokół maszyny",en:"Minimum Quantity Lubrication (MQL): Forget Puddles Around the Machine"},
 summary:{ru:"Все привыкли к потокам СОЖ, водопадами заливающим деталь. Но что, если я скажу, что в 70% случаев это совершенно не нужно? MQL (Minimum Quantity Lubrication)вЂ¦",pl:"Wszyscy przyzwyczaili się do rzek chłodziwa zalewających detal.",en:"We’re all used to massive floods of coolant washing over the workpiece."},
 body:{
  ru:`<p>Все привыкли к потокам СОЖ, водопадами заливающим деталь. Но что, если я скажу, что в 70% случаев это совершенно не нужно? MQL (Minimum Quantity Lubrication) или микросмазка — это система, подающая масляный туман прямо на режущую кромку. Расход — буквально капли в час. В итоге деталь чистая, станок сухой, а стружку не нужно отжимать перед сдачей в металлолом. Это абсолютный &quot;геймчейнджер&quot; при обработке алюминия и многих сталей.</p>`,
  pl:`<p>Wszyscy przyzwyczaili się do rzek chłodziwa zalewających detal. A co, jeśli powiem, że w 70% przypadk&#243;w to zupełnie niepotrzebne? MQL (Minimum Quantity Lubrication), czyli mikrosmarowanie, to podawanie mgły olejowej prosto na ostrze. Zużycie? Dosłownie kilka kropel na godzinę. Detal jest czysty, maszyna sucha, a wi&#243;r&#243;w nie trzeba odwirowywać przed sprzedażą na złom. To absolutny &quot;gamechanger&quot; do aluminium i wielu stali.</p>`,
  en:`<p>We’re all used to massive floods of coolant washing over the workpiece. But what if I told you that in 70% of cases, it’s completely unnecessary? MQL (Minimum Quantity Lubrication) delivers a precise oil mist directly to the cutting edge. Usage is literally drops per hour. Your parts stay clean, the machine stays dry, and chips don’t need to be spun before recycling. It’s an absolute game-changer for cutting aluminum and many steels.</p>`
 }
},
{
 id:"climb-vs-conventional", tag:{ru:"Фрезерование",pl:"Frezowanie",en:"Milling"},
 title:{ru:"Попутное против Встречного фрезерования",pl:"Frezowanie współbieżne kontra przeciwbieżne",en:"Climb vs. Conventional Milling"},
 summary:{ru:"Попутное (Climb) или встречное (Conventional) фрезерование? На современных станках с ЧПУ ответ в 99% случаев — попутное.",pl:"Frezowanie współbieżne (Climb) czy przeciwbieżne (Conventional)? Na nowoczesnych maszynach CNC odpowiedź w 99% brzmi: współbieżne.",en:"Climb milling or conventional milling? On a modern CNC machine, the answer is climb milling 99% of the time."},
 body:{
  ru:`<p>Попутное (Climb) или встречное (Conventional) фрезерование? На современных станках с ЧПУ ответ в 99% случаев — попутное. При нём зуб фрезы сразу агрессивно врезается в металл, стружка начинается с максимальной толщины и сходит на нет. Это дает отличную чистоту поверхности и бережет инструмент. Но есть одно &quot;НО&quot;! Если на вашем станке есть люфт в винтах (часто бывает на переделанных ручных станках), используйте только встречное. Иначе фрезу просто затянет в деталь с катастрофическими последствиями.</p>`,
  pl:`<p>Frezowanie wsp&#243;łbieżne (Climb) czy przeciwbieżne (Conventional)? Na nowoczesnych maszynach CNC odpowiedź w 99% brzmi: wsp&#243;łbieżne. Ząb frezu od razu agresywnie wchodzi w materiał, a wi&#243;r zaczyna się od maksymalnej grubości i maleje do zera. Daje to świetną powierzchnię i oszczędza narzędzie. Ale uwaga! Jeśli twoja maszyna ma luzy na śrubach (częste w przerabianych maszynach manualnych), używaj tylko przeciwbieżnego. Inaczej frez zostanie wciągnięty w materiał z katastrofalnym skutkiem.</p>`,
  en:`<p>Climb milling or conventional milling? On a modern CNC machine, the answer is climb milling 99% of the time. The cutting tooth engages the material aggressively, starting with maximum chip thickness and tapering to zero. This leaves a brilliant surface finish and dramatically extends tool life. But a word of warning! If your machine has backlash in the leadscrews (common on retrofitted manual mills), stick to conventional milling, or the cutter will pull itself into the part with disastrous results.</p>`
 }
},
{
 id:"machine-warmup", tag:{ru:"Обслуживание",pl:"Konserwacja",en:"Maintenance"},
 title:{ru:"Зачем нужен прогрев станка (Warm-up)",pl:"Po co jest rozgrzewanie maszyny (Warm-up)",en:"Why Machine Warm-Up Matters"},
 summary:{ru:"Вы же не стартуете на машине зимой с педалью в пол без прогрева двигателя? Так почему вы делаете это со станком за 100 тысяч долларов? Термическое расширение —вЂ¦",pl:"Nie ruszasz samochodem zimą na pełnym gazie bez rozgrzania silnika, prawda? Więc dlaczego robisz to z maszyną za pół miliona złotych? Rozszerzalność cieplna toвЂ¦",en:"You wouldn't redline your car on a freezing winter morning without warming it up, right? So why do it to a $100k CNC machine? Thermal expansion is pureвЂ¦"},
 body:{
  ru:`<p>Вы же не стартуете на машине зимой с педалью в пол без прогрева двигателя? Так почему вы делаете это со станком за 100 тысяч долларов? Термическое расширение — это физика, а не миф. Холодный шпиндель и станина могут дать &quot;уход&quot; размеров на пару сотых долей миллиметра. Напишите простую программу прогрева: 15 минут плавных перемещений по всем осям и постепенное увеличение оборотов шпинделя. Ваш станок скажет вам спасибо стабильными размерами уже на первой детали.</p>`,
  pl:`<p>Nie ruszasz samochodem zimą na pełnym gazie bez rozgrzania silnika, prawda? Więc dlaczego robisz to z maszyną za p&#243;ł miliona złotych? Rozszerzalność cieplna to fizyka, nie mit. Zimne wrzeciono i odlew maszyny potrafią &quot;zgubić&quot; wymiar nawet o kilka setnych milimetra. Napisz prosty program rozgrzewający: 15 minut powolnych ruch&#243;w we wszystkich osiach i stopniowe zwiększanie obrot&#243;w wrzeciona. Maszyna odwdzięczy się stabilnymi wymiarami już na pierwszym detalu.</p>`,
  en:`<p>You wouldn&#39;t redline your car on a freezing winter morning without warming it up, right? So why do it to a $100k CNC machine? Thermal expansion is pure physics, not a myth. A cold spindle and machine casting can cause your dimensions to drift by several hundredths of a millimeter. Write a simple warm-up program: 15 minutes of moving all axes and gradually ramping up spindle RPM. Your machine will thank you by holding tight tolerances right from the first part.</p>`
 }
},
{
 id:"chipbreaker-secrets", tag:{ru:"Токарка",pl:"Toczenie",en:"Turning"},
 title:{ru:"Секрет токарных пластин: Читаем стружколом",pl:"Sekret płytek tokarskich: Czytamy łamacz wióra",en:"Turning Insert Secrets: Reading the Chipbreaker"},
 summary:{ru:"Токарная пластина без стружколома — это просто дорогой кусок твердого сплава. Настоящая магия кроется в этих крошечных бороздках на поверхности.",pl:"Płytka tokarska bez łamacza wióra to tylko drogi kawałek węglika. Prawdziwa magia kryje się w tych małych rowkach na jej powierzchni.",en:"A turning insert without a chipbreaker is just an expensive piece of carbide. The real magic happens in those tiny grooves molded into the top."},
 body:{
  ru:`<p>Токарная пластина без стружколома — это просто дорогой кусок твердого сплава. Настоящая магия кроется в этих крошечных бороздках на поверхности. Если при точении у вас получается длинная стружка-лента, которая наматывается на патрон — вы ошиблись с выбором пластины или режимами. Для чистовой обработки нужны агрессивные, острые стружколомы, для черновой — прочные, способные &quot;сломать&quot; толстый слой металла. Не подгоняйте станок под пластину, подбирайте пластину под конкретную задачу!</p>`,
  pl:`<p>Płytka tokarska bez łamacza wi&#243;ra to tylko drogi kawałek węglika. Prawdziwa magia kryje się w tych małych rowkach na jej powierzchni. Jeśli podczas toczenia powstają długie &quot;wstążki&quot;, kt&#243;re owijają się wok&#243;ł uchwytu – źle dobrałeś płytkę albo parametry skrawania. Do obr&#243;bki wykańczającej potrzebujesz ostrej, agresywnej geometrii, a do zgrubnej – mocnej, kt&#243;ra poradzi sobie z grubym wi&#243;rem. Nie dopasowuj maszyny do płytki, dobieraj płytkę do konkretnego zadania!</p>`,
  en:`<p>A turning insert without a chipbreaker is just an expensive piece of carbide. The real magic happens in those tiny grooves molded into the top. If you’re turning and getting long, stringy bird-nests wrapping around the chuck, you’ve got the wrong insert or feed rate. Finishing passes need aggressive geometry to break light chips, while roughing requires a strong edge to handle heavy loads. Don&#39;t fight the machine—pick the right insert for the specific job!</p>`
 }
},
{
 id:"g68-coordinate-rotation", tag:{ru:"Программирование",pl:"Programowanie",en:"Programming"},
 title:{ru:"Код G68: Как перестать стучать киянкой",pl:"Kod G68: Jak przestać stukać młotkiem",en:"G68 Code: Stop Tapping with a Deadblow Hammer"},
 summary:{ru:"Установка тяжелой, неровной заготовки на стол часто превращается в пытку: вы стучите киянкой полчаса, чтобы выставить ее идеально ровно по индикатору.",pl:"Ustawianie ciężkiego, nieforemnego detalu na stole często przypomina tortury: uderzasz młotkiem przez pół godziny, żeby wyzerować go na czujniku.",en:"Tramming in a massive, awkward block of raw material can be torture. You tap it with a deadblow hammer for half an hour just to get the dial indicator zeroed."},
 body:{
  ru:`<p>Установка тяжелой, неровной заготовки на стол часто превращается в пытку: вы стучите киянкой полчаса, чтобы выставить ее идеально ровно по индикатору. Хватит это терпеть! Используйте код <code>G68</code> (поворот системы координат). Просто коснитесь щупом (или краеискателем) двух точек на базовой кромке детали. Стойка сама вычислит угол перекоса, и <code>G68</code> виртуально &quot;повернет&quot; весь ваш УП-код под криво установленную деталь. Это экономит массу нервов и часы рабочего времени.</p>`,
  pl:`<p>Ustawianie ciężkiego, nieforemnego detalu na stole często przypomina tortury: uderzasz młotkiem przez p&#243;ł godziny, żeby wyzerować go na czujniku. Skończ z tym! Z pomocą przychodzi kod <code>G68</code> (obr&#243;t układu wsp&#243;łrzędnych). Wystarczy dotknąć sondą dw&#243;ch punkt&#243;w na bazowej krawędzi detalu, maszyna sama obliczy kąt odchyłki, a <code>G68</code> wirtualnie &quot;obr&#243;ci&quot; cały program pod tw&#243;j krzywo zamocowany materiał. To niesamowita oszczędność nerw&#243;w i godzin pracy.</p>`,
  en:`<p>Tramming in a massive, awkward block of raw material can be torture. You tap it with a deadblow hammer for half an hour just to get the dial indicator zeroed. Stop doing that! Enter <code>G68</code> (Coordinate System Rotation). Just probe two points along the reference edge of your part, let the controller calculate the angle, and <code>G68</code> will virtually &quot;rotate&quot; your entire toolpath to match the skewed setup. It saves absolute hours of frustration and setup time.</p>`
 }
},
{
 id:"er-collets-truth", tag:{ru:"Инструмент",pl:"Narzędzia",en:"Tooling"},
 title:{ru:"Вся правда о цангах ER",pl:"Cała prawda o tulejkach zaciskowych ER",en:"The Truth About ER Collets"},
 summary:{ru:"ER32, ER20... Какую цангу выбрать? Большинство цехов работают со стандартом ER, и это отличный выбор.",pl:"ER32, ER20... Jaką tulejkę wybrać? Większość warsztatów używa standardu ER i jest on świetny.",en:"ER32, ER20... Which collet system is best? Most machine shops run ER collets, and they’re fantastic all-rounders."},
 body:{
  ru:`<p>ER32, ER20... Какую цангу выбрать? Большинство цехов работают со стандартом ER, и это отличный выбор. Но есть один нюанс, о котором забывают: цанги — это расходный материал! Если вы заметили, что фрезы начали тупиться быстрее обычного, проверьте биение (runout) в цанге индикатором. Зажатая тысячи раз цанга теряет свою упругость и способность центровать инструмент. Меняйте их каждые пару лет. И золотое правило: никогда не затягивайте цангу без инструмента внутри — вы ее навсегда испортите.</p>`,
  pl:`<p>ER32, ER20... Jaką tulejkę wybrać? Większość warsztat&#243;w używa standardu ER i jest on świetny. Ale jest jeden haczyk, o kt&#243;rym często zapominamy: tulejki to materiał eksploatacyjny! Jeśli zauważyłeś, że frezy tępią się szybciej niż zwykle, sprawdź bicie (runout) na tulejce czujnikiem zegarowym. Zaciskana tysiące razy tulejka traci swoją sprężystość i centryczność. Należy je wymieniać co kilka lat. I złota zasada: nigdy nie dokręcaj na siłę pustej tulejki, bo zniszczysz ją bezpowrotnie.</p>`,
  en:`<p>ER32, ER20... Which collet system is best? Most machine shops run ER collets, and they’re fantastic all-rounders. But here’s the catch people forget: collets are consumable items! If you notice your end mills dulling faster than usual, grab a dial indicator and check for runout. A collet squeezed thousands of times loses its elasticity and concentricity. Replace them every couple of years. And the golden rule: never tighten a collet without a tool inside, you’ll ruin it permanently.</p>`
 }
},
{
 id:"gm-basics", tag:{ru:"Основы",pl:"Podstawy",en:"Basics"},
 title:{ru:"G и M коды: с чего начать",pl:"Kody G i M: od czego zacząć",en:"G and M codes: where to start"},
 summary:{ru:"Как устроена управляющая программа и чем G-коды отличаются от M-кодов.",pl:"Jak zbudowany jest program sterujący i czym kody G różnią się od M.",en:"How a part program is structured and how G-codes differ from M-codes."},
 body:{
  ru:`<p>Как устроена управляющая программа и чем G-коды отличаются от M-кодов.</p><p>Управляющая программа состоит из кадров. Каждый кадр содержит слова: <code>N</code> — номер кадра, <code>G</code> — подготовительные функции (как двигаться), <code>M</code> — вспомогательные (включить шпиндель, СОЖ), <code>X Y Z</code> — координаты, <code>F</code> — подача, <code>S</code> — обороты, <code>T</code> — инструмент.</p><h2>Минимальный пример</h2><pre>O0001
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
M30</pre><p>Строка безопасности в начале (<code>G21 G90 G17 G40 G49 G80</code>) сбрасывает старые режимы — это хорошая привычка.</p><ul><li>Модальные коды действуют, пока их не отменит другой код той же группы.</li><li>Немодальные (например, <code>G04</code>) действуют только в своём кадре.</li>`,
  pl:`<p>Jak zbudowany jest program sterujący i czym kody G r&#243;żnią się od M.</p><p>Program sterujący składa się z blok&#243;w. Każdy blok zawiera słowa: <code>N</code> — numer bloku, <code>G</code> — funkcje przygotowawcze (jak się poruszać), <code>M</code> — pomocnicze (włącz wrzeciono, chłodziwo), <code>X Y Z</code> — wsp&#243;łrzędne, <code>F</code> — posuw, <code>S</code> — obroty, <code>T</code> — narzędzie.</p><h2>Minimalny przykład</h2><pre>O0001
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
M30</pre><p>Bezpieczna linia na początku (<code>G21 G90 G17 G40 G49 G80</code>) kasuje stare tryby — to dobry nawyk.</p><ul><li>Kody modalne działają, dop&#243;ki nie anuluje ich inny kod z tej samej grupy.</li><li>Niemodalne (np. <code>G04</code>) działają tylko w swoim bloku.</li>`,
  en:`<p>How a part program is structured and how G-codes differ from M-codes.</p><p>A part program is made of blocks. Each block contains words: <code>N</code> — block number, <code>G</code> — preparatory functions (how to move), <code>M</code> — miscellaneous (spindle, coolant), <code>X Y Z</code> — coordinates, <code>F</code> — feed, <code>S</code> — speed, <code>T</code> — tool.</p><h2>Minimal example</h2><pre>O0001
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
M30</pre><p>The safety line at the start (<code>G21 G90 G17 G40 G49 G80</code>) cancels old modes — a good habit.</p><ul><li>Modal codes stay active until another code from the same group cancels them.</li><li>Non-modal codes (e.g. <code>G04</code>) work only in their own block.</li>`
 }
},
{
 id:"speeds-feeds", tag:{ru:"Режимы резания",pl:"Parametry skrawania",en:"Cutting data"},
 title:{ru:"Как подобрать обороты и подачу",pl:"Jak dobrać obroty i posuw",en:"How to choose speed and feed"},
 summary:{ru:"Формулы n и F, откуда брать Vc и fz и как корректировать режимы по звуку и стружке.",pl:"Wzory na n i F, skąd brać Vc i fz oraz jak korygować parametry po dźwięku i wiórze.",en:"Formulas for n and F, where to get Vc and fz, and how to adjust by sound and chip."},
 body:{
  ru:`<p>Формулы n и F, откуда брать Vc и fz и как корректировать режимы по звуку и стружке.</p><p>Обороты шпинделя: <code>n = 1000 &#183; Vc / (π &#183; D)</code>. Минутная подача при фрезеровании: <code>F = n &#183; fz &#183; z</code>.</p><h2>Откуда брать Vc и fz</h2><p>Из каталога производителя инструмента для вашей пары &#171;материал — пластина/фреза&#187;. Наш калькулятор даёт расчёт, а справочная таблица — стартовые ориентиры для твердого сплава.</p><h2>Корректировка на станке</h2><ul><li><b>Высокий визг</b> — снизьте обороты или увеличьте подачу.</li><li><b>Вибрации (дребезг)</b> — измените обороты на 10–15 %, уменьшите вылет, проверьте крепление.</li><li><b>Стружка синего цвета</b> — слишком высокая скорость.</li><li><b>Стружка пылевидная</b> — слишком малая подача на зуб, инструмент трётся.</li><p>Начинайте с 70–80 % от расчётных значений и увеличивайте, используя оверрайд подачи.</p>`,
  pl:`<p>Wzory na n i F, skąd brać Vc i fz oraz jak korygować parametry po dźwięku i wi&#243;rze.</p><p>Obroty wrzeciona: <code>n = 1000 &#183; Vc / (π &#183; D)</code>. Posuw minutowy przy frezowaniu: <code>F = n &#183; fz &#183; z</code>.</p><h2>Skąd brać Vc i fz</h2><p>Z katalogu producenta narzędzi dla Twojej pary „materiał — płytka/frez”. Nasz kalkulator liczy wartości, a tabela materiał&#243;w podaje orientacyjne dane startowe dla węglika.</p><h2>Korekta na maszynie</h2><ul><li><b>Wysoki pisk</b> — zmniejsz obroty lub zwiększ posuw.</li><li><b>Drgania</b> — zmień obroty o 10–15 %, skr&#243;ć wysięg, sprawdź mocowanie.</li><li><b>Niebieski wi&#243;r</b> — zbyt duża prędkość.</li><li><b>Wi&#243;r pylisty</b> — zbyt mały posuw na ostrze, narzędzie się ociera.</li><p>Zaczynaj od 70–80 % wartości obliczonych i zwiększaj, używając korekcji posuwu.</p>`,
  en:`<p>Formulas for n and F, where to get Vc and fz, and how to adjust by sound and chip.</p><p>Spindle speed: <code>n = 1000 &#183; Vc / (π &#183; D)</code>. Milling feed rate: <code>F = n &#183; fz &#183; z</code>.</p><h2>Where to get Vc and fz</h2><p>From the tool manufacturer&#39;s catalog for your material/insert pair. Our calculator does the math, and the material table gives starting values for carbide.</p><h2>Adjusting at the machine</h2><ul><li><b>High-pitched squeal</b> — lower speed or raise feed.</li><li><b>Chatter</b> — change speed by 10–15 %, shorten stick-out, check workholding.</li><li><b>Blue chips</b> — speed is too high.</li><li><b>Dust-like chips</b> — feed per tooth too low, the tool is rubbing.</li><p>Start at 70–80 % of calculated values and increase using the feed override.</p>`
 }
},
{
 id:"first-part", tag:{ru:"Безопасность",pl:"Bezpieczeństwo",en:"Safety"},
 title:{ru:"Чек-лист запуска первой детали",pl:"Lista kontrolna uruchomienia pierwszej sztuki",en:"First-part run checklist"},
 summary:{ru:"Что проверить перед первым запуском программы, чтобы не разбить станок.",pl:"Co sprawdzić przed pierwszym uruchomieniem programu, aby nie uszkodzić maszyny.",en:"What to check before the first program run to avoid a crash."},
 body:{
  ru:`<p>Что проверить перед первым запуском программы, чтобы не разбить станок.</p><ol><li>Проверьте программу в симуляторе или в графике стойки.</li><li>Убедитесь, что выбран верный ноль детали (<code>G54…G59</code>) и корректны смещения.</li><li>Проверьте длины и диаметры инструментов, номера корректоров <code>H</code>/<code>D</code>.</li><li>Надёжно закрепите заготовку; проверьте вылет и положение кулачков/тисков.</li><li>Запустите с <b>выключенным шпинделем</b> и в воздухе (Z-смещение вверх), если возможно.</li><li>Включите покадровый режим, снизьте оверрайд ускоренного хода до 10–25 %.</li><li>Следите за &#171;Distance to go&#187; перед первым касанием.</li><li>Держите руку на кнопке Feed Hold / аварийной остановке.</li>`,
  pl:`<p>Co sprawdzić przed pierwszym uruchomieniem programu, aby nie uszkodzić maszyny.</p><ol><li>Sprawdź program w symulatorze lub grafice sterowania.</li><li>Upewnij się, że wybrane jest właściwe zero przedmiotu (<code>G54…G59</code>) i korekcje są poprawne.</li><li>Sprawdź długości i średnice narzędzi oraz numery korektor&#243;w <code>H</code>/<code>D</code>.</li><li>Pewnie zamocuj materiał; sprawdź wysięg i położenie szczęk/imadła.</li><li>Uruchom z <b>wyłączonym wrzecionem</b> i nad przedmiotem (przesunięcie Z w g&#243;rę), jeśli to możliwe.</li><li>Włącz tryb blokowy, zmniejsz korekcję szybkiego posuwu do 10–25 %.</li><li>Obserwuj „Distance to go” przed pierwszym kontaktem.</li><li>Trzymaj rękę na Feed Hold / przycisku awaryjnym.</li>`,
  en:`<p>What to check before the first program run to avoid a crash.</p><ol><li>Verify the program in a simulator or the control&#39;s graphics.</li><li>Make sure the correct work offset (<code>G54…G59</code>) is selected and values are right.</li><li>Check tool lengths, diameters and the <code>H</code>/<code>D</code> offset numbers.</li><li>Clamp the workpiece securely; check stick-out and jaw/vise position.</li><li>Run with the <b>spindle off</b> and in the air (Z offset up) if possible.</li><li>Enable single block and reduce rapid override to 10–25 %.</li><li>Watch &quot;Distance to go&quot; before the first contact.</li><li>Keep your hand on Feed Hold / E-stop.</li>`
 }
},
{
 id:"work-offsets", tag:{ru:"Наладка",pl:"Ustawianie",en:"Setup"},
 title:{ru:"Нулевые точки G54–G59 и привязка инструмента",pl:"Punkty zerowe G54–G59 i pomiar narzędzi",en:"Work offsets G54–G59 and tool measuring"},
 summary:{ru:"Как работают рабочие смещения, кромкоискатель, щуп и коррекция длины инструмента.",pl:"Jak działają przesunięcia robocze, sonda krawędziowa i korekcja długości narzędzia.",en:"How work offsets, edge finders, probes and tool length offsets work."},
 body:{
  ru:`<p>Как работают рабочие смещения, кромкоискатель, щуп и коррекция длины инструмента.</p><p>Рабочее смещение (<code>G54…G59</code>) хранит расстояние от нуля станка до нуля детали. Оно задаётся кромкоискателем, индикатором или щупом (например, Renishaw/Blum).</p><h2>Привязка по осям</h2><ul><li><b>X/Y</b> — по кромкам, центру отверстия или цилиндра.</li><li><b>Z</b> — по верхней плоскости заготовки (чаще), по столу или по базе приспособления.</li><h2>Длина инструмента</h2><p>Длину измеряют на станке (по датчику или &#171;бумажкой&#187;) либо в оправке вне станка. В программе вызывайте коррекцию через <code>G43 H..</code> (Fanuc/Haas). Не забывайте <code>G49</code> перед сменой.</p><p><b>Типичные ошибки:</b> перепутан номер корректора, не учтён износ, нулевая точка записана в другое смещение, не очищена плоскость от стружки при привязке.</p>`,
  pl:`<p>Jak działają przesunięcia robocze, sonda krawędziowa i korekcja długości narzędzia.</p><p>Przesunięcie robocze (<code>G54…G59</code>) przechowuje odległość od zera maszyny do zera przedmiotu. Ustawia się je sondą krawędziową, czujnikiem lub sondą pomiarową (np. Renishaw/Blum).</p><h2>Wyznaczanie osi</h2><ul><li><b>X/Y</b> — po krawędziach, środku otworu lub czopa.</li><li><b>Z</b> — na g&#243;rnej płaszczyźnie materiału (najczęściej), na stole lub bazie uchwytu.</li><h2>Długość narzędzia</h2><p>Długość mierzy się na maszynie (czujnikiem lub „kartką”) albo poza maszyną w oprawce. W programie wywołaj korekcję przez <code>G43 H..</code> (Fanuc/Haas). Pamiętaj o <code>G49</code> przed zmianą.</p><p><b>Typowe błędy:</b> pomylony numer korektora, nieuwzględnione zużycie, zero zapisane w innym przesunięciu, niewyczyszczona z wi&#243;r&#243;w płaszczyzna przy pomiarze.</p>`,
  en:`<p>How work offsets, edge finders, probes and tool length offsets work.</p><p>A work offset (<code>G54…G59</code>) stores the distance from machine zero to part zero. It is set with an edge finder, indicator or touch probe (e.g. Renishaw/Blum).</p><h2>Setting the axes</h2><ul><li><b>X/Y</b> — on edges, hole center or boss.</li><li><b>Z</b> — on the top of the stock (most common), on the table or on a fixture datum.</li><h2>Tool length</h2><p>Measure the length on the machine (tool setter or paper feeler) or in a presetter. Call it in the program with <code>G43 H..</code> (Fanuc/Haas). Don&#39;t forget <code>G49</code> before a change.</p><p><b>Common mistakes:</b> wrong offset number, ignored wear, zero stored in a different offset, chips left on the surface when touching off.</p>`
 }
},
{
 id:"cutter-comp", tag:{ru:"Программирование",pl:"Programowanie",en:"Programming"},
 title:{ru:"Коррекция на радиус G41/G42: как не ошибиться",pl:"Korekcja promienia G41/G42: jak się nie pomylić",en:"Cutter compensation G41/G42 without mistakes"},
 summary:{ru:"Левая и правая коррекция, подход к контуру и отмена, подгонка размера износом.",pl:"Korekcja lewa i prawa, dojście do konturu i anulowanie, dopasowanie wymiaru zużyciem.",en:"Left and right comp, lead-in/out, and fine-tuning size with wear."},
 body:{
  ru:`<p>Левая и правая коррекция, подход к контуру и отмена, подгонка размера износом.</p><p>Коррекция позволяет программировать контур детали, а не траекторию центра фрезы. <code>G41</code> — фреза слева от контура по ходу движения, <code>G42</code> — справа. Отмена — <code>G40</code>.</p><h2>Правила</h2><ul><li>Включайте коррекцию на линейном участке (<code>G01</code>), не на дуге и не в ускоренном ходе в деталь.</li><li>Длина подхода должна быть не меньше радиуса инструмента.</li><li>Выходите из контура тоже по прямой, затем <code>G40</code>.</li><li>Попутное фрезерование для внешнего контура — обычно <code>G41</code> при движении против часовой стрелки.</li><p>Для точной подгонки размера меняйте значение износа в корректоре радиуса (<code>D..</code>), а не программу.</p><pre>G01 G41 D01 X-10 Y0 F300
G01 X0
G01 Y50
...
G01 G40 X-10</pre>`,
  pl:`<p>Korekcja lewa i prawa, dojście do konturu i anulowanie, dopasowanie wymiaru zużyciem.</p><p>Korekcja pozwala programować kontur przedmiotu, a nie tor środka freza. <code>G41</code> — frez po lewej stronie konturu w kierunku ruchu, <code>G42</code> — po prawej. Anulowanie — <code>G40</code>.</p><h2>Zasady</h2><ul><li>Włączaj korekcję na odcinku prostym (<code>G01</code>), nie na łuku i nie w ruchu szybkim w przedmiot.</li><li>Droga dojścia nie kr&#243;tsza niż promień narzędzia.</li><li>Wychodź z konturu też po prostej, potem <code>G40</code>.</li><li>Frezowanie wsp&#243;łbieżne konturu zewnętrznego — zwykle <code>G41</code> przy ruchu przeciwnym do ruchu wskaz&#243;wek zegara.</li><p>Do dokładnego dopasowania wymiaru zmieniaj zużycie w korektorze promienia (<code>D..</code>), a nie program.</p><pre>G01 G41 D01 X-10 Y0 F300
G01 X0
G01 Y50
...
G01 G40 X-10</pre>`,
  en:`<p>Left and right comp, lead-in/out, and fine-tuning size with wear.</p><p>Compensation lets you program the part contour instead of the cutter center path. <code>G41</code> — cutter to the left of the contour in the direction of travel, <code>G42</code> — to the right. Cancel with <code>G40</code>.</p><h2>Rules</h2><ul><li>Activate on a linear move (<code>G01</code>), not on an arc and not on a rapid into the part.</li><li>Lead-in length must be at least the tool radius.</li><li>Leave the contour on a straight line too, then <code>G40</code>.</li><li>Climb milling an outside contour is usually <code>G41</code> when travelling counter-clockwise.</li><p>To fine-tune size, change the wear value in the radius offset (<code>D..</code>), not the program.</p><pre>G01 G41 D01 X-10 Y0 F300
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
  ru:`<p>Ключевые отличия программирования на основных стойках ЧПУ.</p><ul><li><b>Fanuc</b> — стандарт &#171;ISO&#187;: G/M-коды, макропеременные <code>#100</code>, циклы G81–G89. Haas очень близок к нему.</li><li><b>Haas</b> — Fanuc-подобный диалект с дружелюбным интерфейсом: VQC, быстрый ввод, расширенные смещения G154, гравировка G47.</li><li><b>Siemens SINUMERIK</b> — ISO + собственный язык: циклы <code>CYCLE81…</code>, <code>TRANS/ROT</code>, R-параметры, <code>WHILE/IF</code>, подпрограммы с именами. Есть ShopMill/ShopTurn — диалоговое программирование.</li><li><b>Heidenhain TNC</b> — диалог Klartext: <code>L X+10 Y+5 R0 FMAX</code>, циклы <code>CYCL DEF</code>, Q-параметры, мощная работа с наклоном плоскости (<code>PLANE</code>). Многие TNC понимают и ISO.</li><p>Совет: переходя на новую стойку, начните с таблицы соответствия кодов — смотрите раздел &#171;Система ЧПУ&#187; в нашей базе кодов.</p>`,
  pl:`<p>Najważniejsze r&#243;żnice w programowaniu na popularnych sterowaniach CNC.</p><ul><li><b>Fanuc</b> — standard „ISO”: kody G/M, zmienne makro <code>#100</code>, cykle G81–G89. Haas jest bardzo podobny.</li><li><b>Haas</b> — dialekt zbliżony do Fanuc z przyjaznym interfejsem: VQC, szybkie wprowadzanie, rozszerzone przesunięcia G154, grawerowanie G47.</li><li><b>Siemens SINUMERIK</b> — ISO + własny język: cykle <code>CYCLE81…</code>, <code>TRANS/ROT</code>, parametry R, <code>WHILE/IF</code>, podprogramy z nazwami. Dostępne ShopMill/ShopTurn — programowanie dialogowe.</li><li><b>Heidenhain TNC</b> — dialog Klartext: <code>L X+10 Y+5 R0 FMAX</code>, cykle <code>CYCL DEF</code>, parametry Q, rozbudowane nachylanie płaszczyzny (<code>PLANE</code>). Wiele TNC rozumie też ISO.</li><p>Wskaz&#243;wka: przechodząc na nowe sterowanie, zacznij od tabeli odpowiednik&#243;w — zobacz sekcję „Sterowanie CNC” w naszej bazie kod&#243;w.</p>`,
  en:`<p>Key programming differences between the most common CNC controls.</p><ul><li><b>Fanuc</b> — the &quot;ISO&quot; standard: G/M codes, macro variables <code>#100</code>, cycles G81–G89. Haas is very close to it.</li><li><b>Haas</b> — a Fanuc-like dialect with a friendly UI: VQC, quick code, extended offsets G154, engraving G47.</li><li><b>Siemens SINUMERIK</b> — ISO plus its own language: <code>CYCLE81…</code> cycles, <code>TRANS/ROT</code>, R-parameters, <code>WHILE/IF</code>, named subprograms. ShopMill/ShopTurn provide conversational programming.</li><li><b>Heidenhain TNC</b> — Klartext conversational: <code>L X+10 Y+5 R0 FMAX</code>, <code>CYCL DEF</code> cycles, Q-parameters, powerful tilted-plane handling (<code>PLANE</code>). Many TNCs also read ISO.</li><p>Tip: when moving to a new control, start with a code comparison table — see the &quot;CNC control&quot; selector in our code database.</p>`
 }
},
{
 id:"tool-wear", tag:{ru:"Инструмент",pl:"Narzędzia",en:"Tooling"},
 title:{ru:"Износ инструмента: как распознать и продлить стойкость",pl:"Zużycie narzędzia: jak rozpoznać i wydłużyć trwałość",en:"Tool wear: how to spot it and extend tool life"},
 summary:{ru:"Виды износа, признаки и практические приёмы увеличения стойкости.",pl:"Rodzaje zużycia, objawy i praktyczne sposoby zwiększenia trwałości.",en:"Wear types, symptoms and practical ways to improve tool life."},
 body:{
  ru:`<p>Виды износа, признаки и практические приёмы увеличения стойкости.</p><h2>Виды износа</h2><ul><li><b>По задней поверхности</b> — нормальный; ограничивайте VB ≈ 0,3 мм для чернового.</li><li><b>Лунка на передней поверхности</b> — слишком высокая скорость/температура.</li><li><b>Наростообразование</b> — слишком низкая скорость, вязкие материалы (алюминий, нержавейка).</li><li><b>Выкрашивание кромки</b> — вибрации, прерывистый рез, слишком твёрдая марка.</li><h2>Как продлить стойкость</h2><li>Снизьте Vc на 10–20 % — стойкость вырастает непропорционально сильнее.</li><li>Обеспечьте подачу СОЖ в зону резания и отвод стружки.</li><li>Используйте минимальный вылет и надёжный зажим.</li><li>Применяйте врезание по дуге (динамическое фрезерование) вместо полного паза.</li>`,
  pl:`<p>Rodzaje zużycia, objawy i praktyczne sposoby zwiększenia trwałości.</p><h2>Rodzaje zużycia</h2><ul><li><b>Na powierzchni przyłożenia</b> — normalne; ogranicz VB do ok. 0,3 mm przy obr&#243;bce zgrubnej.</li><li><b>Krater na powierzchni natarcia</b> — zbyt duża prędkość/temperatura.</li><li><b>Narost na ostrzu</b> — zbyt mała prędkość, materiały ciągliwe (aluminium, nierdzewka).</li><li><b>Wykruszenia krawędzi</b> — drgania, cięcie przerywane, zbyt twardy gatunek.</li><h2>Jak wydłużyć trwałość</h2><li>Zmniejsz Vc o 10–20 % — trwałość rośnie nieproporcjonalnie bardziej.</li><li>Zapewnij chłodziwo w strefie skrawania i odprowadzanie wi&#243;ra.</li><li>Stosuj minimalny wysięg i pewne mocowanie.</li><li>Wejście po łuku (frezowanie dynamiczne) zamiast pełnego rowka.</li>`,
  en:`<p>Wear types, symptoms and practical ways to improve tool life.</p><h2>Wear types</h2><ul><li><b>Flank wear</b> — normal; limit VB to about 0.3 mm for roughing.</li><li><b>Crater wear</b> — speed/temperature too high.</li><li><b>Built-up edge</b> — speed too low, sticky materials (aluminum, stainless).</li><li><b>Edge chipping</b> — vibration, interrupted cut, grade too hard.</li><h2>Extending tool life</h2><li>Cut Vc by 10–20 % — tool life grows disproportionately more.</li><li>Get coolant into the cut and evacuate chips.</li><li>Use minimal stick-out and rigid clamping.</li><li>Use arc entry (dynamic milling) instead of full-width slotting.</li>`
 }
},
{
 id:"threading", tag:{ru:"Резьба",pl:"Gwinty",en:"Threads"},
 title:{ru:"Резьба: метчик, резьбофреза или накатка",pl:"Gwint: gwintownik, frez do gwintów czy wygniatak",en:"Threading: tap, thread mill or forming tap"},
 summary:{ru:"Сравнение способов получения резьбы и расчёт диаметра отверстия под метчик.",pl:"Porównanie metod wykonania gwintu i obliczanie średnicy otworu pod gwintownik.",en:"Comparing threading methods and calculating tap drill size."},
 body:{
  ru:`<p>Сравнение способов получения резьбы и расчёт диаметра отверстия под метчик.</p><ul><li><b>Режущий метчик</b> — быстро и дёшево; сверло ≈ D − P (<code>M10&#215;1,5 → &#216;8,5</code>). Риск поломки в глухих отверстиях.</li><li><b>Раскатник (формующий)</b> — без стружки, прочная резьба; сверло ≈ D − 0,45&#183;P; подходит для пластичных материалов.</li><li><b>Резьбофреза</b> — один инструмент на разные диаметры, безопасна для дорогих деталей и твёрдых материалов, но дольше по времени.</li><p>Используйте наш калькулятор резьбы для диаметров отверстий и внутреннего диаметра. Для жёсткого нарезания (<code>G84</code> / <code>CYCLE84</code> / <code>CYCL DEF 207</code>) подача равна шагу: F = n &#183; P.</p>`,
  pl:`<p>Por&#243;wnanie metod wykonania gwintu i obliczanie średnicy otworu pod gwintownik.</p><ul><li><b>Gwintownik skrawający</b> — szybki i tani; wiertło ≈ D − P (<code>M10&#215;1,5 → &#216;8,5</code>). Ryzyko złamania w otworach nieprzelotowych.</li><li><b>Wygniatak</b> — bez wi&#243;r&#243;w, mocny gwint; wiertło ≈ D − 0,45&#183;P; do materiał&#243;w plastycznych.</li><li><b>Frez do gwint&#243;w</b> — jedno narzędzie na r&#243;żne średnice, bezpieczny dla drogich detali i twardych materiał&#243;w, ale wolniejszy.</li><p>Użyj naszego kalkulatora gwint&#243;w do średnic otwor&#243;w i średnicy rdzenia. Przy gwintowaniu sztywnym (<code>G84</code> / <code>CYCLE84</code> / <code>CYCL DEF 207</code>) posuw r&#243;wna się skokowi: F = n &#183; P.</p>`,
  en:`<p>Comparing threading methods and calculating tap drill size.</p><ul><li><b>Cutting tap</b> — fast and cheap; drill ≈ D − P (<code>M10&#215;1.5 → &#216;8.5</code>). Risk of breakage in blind holes.</li><li><b>Forming tap</b> — chipless, strong thread; drill ≈ D − 0.45&#183;P; for ductile materials.</li><li><b>Thread mill</b> — one tool for several diameters, safe for expensive parts and hard materials, but slower.</li><p>Use our thread calculator for hole and minor diameters. For rigid tapping (<code>G84</code> / <code>CYCLE84</code> / <code>CYCL DEF 207</code>) feed equals pitch: F = n &#183; P.</p>`
 }
}
];
