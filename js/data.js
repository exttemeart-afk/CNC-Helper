/* Reference data. Materials: density kg/m3, vc = carbide milling range, kc = specific cutting force N/mm2 */
const MATERIALS = [
  {k:"mat_steel", den:7850, vc:"120–200", kc:2000},
  {k:"mat_inox",  den:7900, vc:"80–140",  kc:2400},
  {k:"mat_alu",   den:2700, vc:"300–800", kc:700},
  {k:"mat_brass", den:8500, vc:"200–350", kc:800},
  {k:"mat_cu",    den:8960, vc:"150–300", kc:1100},
  {k:"mat_ti",    den:4500, vc:"40–80",   kc:1400},
  {k:"mat_ci",    den:7200, vc:"100–180", kc:1100},
  {k:"mat_bronze",den:8800, vc:"120–220", kc:1000},
  {k:"mat_pom",   den:1410, vc:"200–500", kc:200}
];

/* Metric coarse threads: [name, nominal D, pitch] */
const THREADS = [
  ["M3",3,.5],["M4",4,.7],["M5",5,.8],["M6",6,1],["M8",8,1.25],["M10",10,1.5],["M12",12,1.75],
  ["M14",14,2],["M16",16,2],["M18",18,2.5],["M20",20,2.5],["M24",24,3],["M30",30,3.5],["M36",36,4]
];

/* Codes: [code, ru, pl, en, example] */
const GCODES = [
 ["G00","Ускоренное перемещение","Szybki ruch jałowy","Rapid positioning","G00 X100. Y50. Z5."],
 ["G01","Линейная интерполяция (рабочая подача)","Interpolacja liniowa (posuw roboczy)","Linear interpolation (feed)","G01 X50. Y20. F250"],
 ["G02","Круговая интерполяция по часовой стрелке","Interpolacja kołowa w prawo (CW)","Circular interpolation CW","G02 X20. Y20. I10. J0 F150"],
 ["G03","Круговая интерполяция против часовой стрелки","Interpolacja kołowa w lewo (CCW)","Circular interpolation CCW","G03 X20. Y20. R10. F150"],
 ["G04","Пауза / выдержка времени (P=мс или X=сек)","Postój / czas oczekiwania (P=ms lub X=s)","Dwell time (P=ms or X=sec)","G04 P1000  (или G04 X1.0)"],
 ["G09","Точный останов в текущем кадре","Dokładne zatrzymanie w bieżącym bloku","Exact stop (single block)","G09 G01 X100. F300"],
 ["G10","Программируемый ввод данных (смещения, нули)","Programowalne wprowadzanie danych (korekcje)","Programmable data input (offsets)","G10 L2 P1 X0 Y0 Z0"],
 ["G12","Круговой карман по часовой (фрезерн.)","Kieszeń kołowa w prawo (frezowanie)","Circular pocket milling CW","G12 I15.0 D01 F300"],
 ["G13","Круговой карман против часовой (фрезерн.)","Kieszeń kołowa w lewo (frezowanie)","Circular pocket milling CCW","G13 I15.0 D01 F300"],
 ["G15","Полярные координаты: отмена","Współrzędne biegunowe: wyłączenie","Polar coordinates cancel","G15"],
 ["G16","Полярные координаты: включение (X=радиус, Y=угол)","Współrzędne biegunowe: włączenie","Polar coordinates on (X=radius, Y=angle)","G16"],
 ["G17","Выбор рабочей плоскости XY","Wybór płaszczyzny XY","XY plane selection","G17"],
 ["G18","Выбор рабочей плоскости XZ","Wybór płaszczyzny XZ","XZ plane selection","G18"],
 ["G19","Выбор рабочей плоскости YZ","Wybór płaszczyzny YZ","YZ plane selection","G19"],
 ["G20","Ввод размеров в дюймах","Wymiary w calach","Inch input system","G20"],
 ["G21","Ввод размеров в миллиметрах","Wymiary w milimetrach","Metric input system","G21"],
 ["G27","Проверка возврата в референтную точку","Sprawdzenie powrotu do bazy","Reference point return check","G27 X0 Y0 Z0"],
 ["G28","Автоматический возврат в нулевую точку станка","Automatyczny powrót do punktu zerowego","Return to reference point","G91 G28 Z0"],
 ["G30","Возврат во 2-ю / 3-ю / 4-ю референтную точку","Powrót do 2./3./4. punktu referencyjnego","2nd/3rd/4th reference point return","G91 G30 P2 Z0"],
 ["G31","Функция пропуска по сигналу (измерительный щуп)","Funkcja pomijania sygnałem (sonda pomiarowa)","Skip function (touch probe)","G31 Z-20.0 F100"],
 ["G32","Нарезание резьбы резцом (базовый цикл точения)","Gwintowanie pojedynczym przejściem (toczenie)","Thread cutting single pass (lathe)","G32 Z-25.0 F1.5"],
 ["G33","Нарезание резьбы со станочным шагом","Nacinanie gwintu ze stałym skokiem","Thread cutting constant pitch","G33 Z-20.0 K2.0"],
 ["G34","Нарезание резьбы с переменным шагом","Gwintowanie ze zmiennym skokiem","Variable lead thread cutting","G34 Z-30.0 F2.0 K0.1"],
 ["G40","Отмена коррекции на радиус инструмента","Wyłączenie korekcji promienia narzędzia","Cancel cutter radius compensation","G40 G01 X0 Y0"],
 ["G41","Коррекция на радиус инструмента слева от контура","Korekcja promienia narzędzia z lewej","Cutter radius compensation left","G41 D01 X20. Y0"],
 ["G42","Коррекция на радиус инструмента справа от контура","Korekcja promienia narzędzia z prawej","Cutter radius compensation right","G42 D01 X20. Y0"],
 ["G43","Коррекция длины инструмента в положительную сторону (+)","Korekcja długości narzędzia (+)","Tool length compensation (+)","G43 H01 Z50."],
 ["G44","Коррекция длины инструмента в отрицательную сторону (-)","Korekcja długości narzędzia (-)","Tool length compensation (-)","G44 H01 Z50."],
 ["G49","Отмена коррекции длины инструмента","Wyłączenie korekcji długości narzędzia","Cancel tool length compensation","G49 Z100."],
 ["G50","Ограничение макс. оборотов (токарн.) / масштаб откл.","Ograniczenie maks. obrotów (toczenie) / skala wył.","Max spindle speed clamp (lathe) / Scaling off","G50 S2500"],
 ["G51","Масштабирование координат детали","Programowe skalowanie współrzędnych","Coordinate scaling","G51 X0 Y0 P1500"],
 ["G52","Смещение локальной системы координат","Lokalny układ współrzędnych (przesunięcie)","Local coordinate system offset","G52 X20. Y10."],
 ["G53","Перемещение в абсолютных координатах станка","Ruch we współrzędnych maszynowych","Machine coordinate system move","G53 G00 Z0"],
 ["G54","Рабочая система координат 1 (G54–G59)","Układ współrzędnych roboczych 1 (G54–G59)","Work coordinate system 1 (G54–G59)","G54 X0 Y0"],
 ["G55","Рабочая система координат 2","Układ współrzędnych roboczych 2","Work coordinate system 2","G55 X0 Y0"],
 ["G56","Рабочая система координат 3","Układ współrzędnych roboczych 3","Work coordinate system 3","G56 X0 Y0"],
 ["G57","Рабочая система координат 4","Układ współrzędnych roboczych 4","Work coordinate system 4","G57 X0 Y0"],
 ["G58","Рабочая система координат 5","Układ współrzędnych roboczych 5","Work coordinate system 5","G58 X0 Y0"],
 ["G59","Рабочая система координат 6","Układ współrzędnych roboczych 6","Work coordinate system 6","G59 X0 Y0"],
 ["G54.1","Расширенные системы координат P1–P48 (Fanuc)","Rozszerzone układy współrzędnych P1–P48","Extended work offsets P1–P48 (Fanuc)","G54.1 P5 X0 Y0"],
 ["G61","Режим точного останова (модальный)","Tryb dokładnego zatrzymania (modalny)","Exact stop mode modal","G61"],
 ["G64","Режим непрерывного резания со сглаживанием","Tryb skrawania ciągłego (wygładzanie)","Continuous cutting mode (smoothing)","G64"],
 ["G65","Вызов макроподпрограммы с параметрами (Macro B)","Wywołanie makra użytkownika z parametrami","Custom macro call with arguments","G65 P9100 A10. B20."],
 ["G68","Поворот системы координат в плоскости","Obrót układu współrzędnych w płaszczyźnie","Coordinate rotation","G68 X0 Y0 R45."],
 ["G69","Отмена поворота системы координат","Anulowanie obrotu układu współrzędnych","Cancel coordinate rotation","G69"],
 ["G70","Чистовой контурный цикл (токарн., Fanuc)","Cykl wykańczający profilu (toczenie)","Finishing cycle, turning (Fanuc)","G70 P100 Q200"],
 ["G71","Черновой цикл продольного точения (Fanuc)","Cykl zgrubny toczenia wzdłużnego","Roughing cycle, longitudinal (Fanuc)","G71 U2.0 R0.5 \nG71 P100 Q200 U0.4 W0.1 F0.25"],
 ["G72","Черновой цикл торцевого точения (Fanuc)","Cykl zgrubny toczenia czołowego","Facing roughing cycle (Fanuc)","G72 W2.0 R0.5 \nG72 P100 Q200 U0.4 W0.1 F0.25"],
 ["G73","Высокоскоростное сверление с ломкой / контурный шаблон","Szybkie wiercenie z łamaniem wióra / cykl profilu","High-speed peck drilling / pattern cycle","G73 Z-30. R2. Q3. F120"],
 ["G74","Торцевая канавка / глубокое сверление (токарн.)","Rowkowanie czołowe / głębokie wiercenie (toczenie)","Face grooving / peck drilling (lathe)","G74 R0.5 \nG74 Z-40. Q4000 F0.15"],
 ["G75","Радиальная канавка / отрезка (токарн.)","Rowkowanie promieniowe (toczenie)","OD/ID grooving cycle (lathe)","G75 R0.5 \nG75 X20. P2000 F0.1"],
 ["G76","Многопроходный цикл нарезания резьбы (токарн.)","Wieloprzejściowy cykl gwintowania (toczenie)","Multiple pass threading cycle (lathe)","G76 P020060 Q50 R0.02 \nG76 X28.05 Z-30. P974 Q200 F1.5"],
 ["G80","Отмена всех постоянных циклов","Anulowanie cyklu stałego","Cancel canned cycles","G80 G00 Z50."],
 ["G81","Цикл простого сверления","Cykl wiercenia zwykłego","Drilling canned cycle","G81 Z-15. R2. F100"],
 ["G82","Цикл сверления с выдержкой времени на дне","Cykl wiercenia z postojem na dnie","Drilling cycle with dwell","G82 Z-10. R2. P500 F100"],
 ["G83","Цикл глубокого сверления с полным выводом сверла","Cykl wiercenia głębokiego z pełnym wycofaniem","Peck drilling cycle (deep hole)","G83 Z-50. R2. Q5. F100"],
 ["G84","Цикл нарезания резьбы метчиком","Cykl gwintowania gwintownikiem","Tapping cycle","G84 Z-20. R5. F1.5"],
 ["G84.2","Жесткое синхронное резьбонарезание метчиком","Gwintowanie sztywne z synchronizacją (rigid)","Rigid tapping cycle","G84.2 Z-20. R5. F1.5"],
 ["G85","Цикл растачивания (подача внутрь — подача наружу)","Cykl rozwiercania (posuw w dół – posuw w górę)","Boring cycle (feed in, feed out)","G85 Z-25. R2. F80"],
 ["G86","Цикл растачивания (стоп шпинделя на дне — ускоренный отвод)","Cykl wytaczania (stop wrzeciona – szybki odjazd)","Boring cycle (spindle stop, rapid out)","G86 Z-25. R2. F80"],
 ["G87","Цикл обратного растачивания","Cykl wytaczania wstecznego","Back boring cycle","G87 Z-20. R2. Q2. F80"],
 ["G88","Растачивание с ручным выводом инструмента","Wytaczanie z ręcznym wycofaniem narzędzia","Boring cycle with manual retract","G88 Z-20. R2. P500 F80"],
 ["G89","Растачивание с выдержкой на дне и выводом на подаче","Wytaczanie z postojem na dnie i powrotem na posuwie","Boring cycle with dwell and feed return","G89 Z-20. R2. P500 F80"],
 ["G90","Абсолютное задание координат","Programowanie absolutne","Absolute positioning mode","G90 G00 X50. Y30."],
 ["G91","Задание координат в приращениях (относительное)","Programowanie przyrostowe","Incremental positioning mode","G91 G01 Z-5."],
 ["G92","Установка нуля координат / токарный цикл резьбы","Ustawienie punktu zerowego / cykl gwintowania","Coordinate preset / Lathe thread cycle","G92 X30. Z-20. F1.5"],
 ["G94","Минутная подача инструмента (мм/мин или дюйм/мин)","Posuw minutowy (mm/min lub in/min)","Feed per minute mode (mm/min or in/min)","G94 F500"],
 ["G95","Оборотная подача инструмента (мм/об или дюйм/об)","Posuw na obrót wrzeciona (mm/obr)","Feed per revolution mode (mm/rev)","G95 F0.2"],
 ["G96","Постоянная скорость резания Vc (м/мин или SFM)","Stała prędkość skrawania Vc (m/min)","Constant surface speed (CSS)","G96 S200 M03"],
 ["G97","Постоянные обороты шпинделя (об/мин)","Stałe obroty wrzeciona (obr/min)","Constant spindle speed (RPM)","G97 S1500 M03"],
 ["G98","Возврат инструмента на начальный уровень Z в цикле","Powrót do poziomu początkowego Z w cyklu","Return to initial Z level in cycle","G98 G81 Z-15. R2. F100"],
 ["G99","Возврат инструмента на плоскость отвода R в цикле","Powrót do płaszczyzny wycofania R w cyklu","Return to R level in cycle","G99 G81 Z-15. R2. F100"]
];

const MCODES = [
 ["M00","Безусловный останов программы (пауза до пуска)","Bezwarunkowe zatrzymanie programu (stop)","Program stop (unconditional)","M00"],
 ["M01","Условный останов программы (кнопка Optional Stop)","Warunkowe zatrzymanie programu (Optional Stop)","Optional stop","M01"],
 ["M02","Конец программы","Koniec programu głównego","End of program","M02"],
 ["M03","Вращение шпинделя по часовой стрелке (CW)","Włączenie obrotów wrzeciona w prawo (CW)","Spindle on clockwise (CW)","M03 S2000"],
 ["M04","Вращение шпинделя против часовой стрелки (CCW)","Włączenie obrotów wrzeciona w lewo (CCW)","Spindle on counter-clockwise (CCW)","M04 S2000"],
 ["M05","Остановка вращения шпинделя","Zatrzymanie obrotów wrzeciona","Spindle stop","M05"],
 ["M06","Автоматическая смена инструмента","Automatyczna wymiana narzędzia","Automatic tool change","T03 M06"],
 ["M07","Включение масляного тумана / СОЖ воздухом","Włączenie mgły chłodzącej / chłodzenia powietrzem","Mist coolant / air blast on","M07"],
 ["M08","Включение стандартной подачи СОЖ (насос)","Włączenie chłodzenia cieczą (pompa)","Flood coolant on","M08"],
 ["M09","Выключение всех видов СОЖ и продувки","Wyłączenie chłodziwa i nadmuchu","Coolant off","M09"],
 ["M10","Гидравлический/пневматический зажим оси или патрона","Zacisk hydrauliczny/pneumatyczny osi lub uchwytu","Clamp axis or chuck","M10"],
 ["M11","Разжим оси или патрона","Rozpięcie osi lub uchwytu","Unclamp axis or chuck","M11"],
 ["M12","Зажим тормоза 4-й/5-й поворотной оси","Zacisk hamulca 4./5. osi obrotowej","Rotary 4th/5th axis brake clamp","M12"],
 ["M13","Разжим тормоза 4-й/5-й поворотной оси","Zwolnienie hamulca 4./5. osi obrotowej","Rotary 4th/5th axis brake unclamp","M13"],
 ["M19","Точная угловая ориентация шпинделя","Orientacja kątowa wrzeciona","Spindle orientation","M19  (или M19 R90.)"],
 ["M20","Отвод задней бабки назад (токарн.)","Cofnięcie konika (toczenie)","Tailstock retract (lathe)","M20"],
 ["M21","Подвод задней бабки вперед к детали (токарн.)","Dosunięcie konika (toczenie)","Tailstock advance (lathe)","M21"],
 ["M23","Включение схода резьбы под 45° при нарезании","Włączenie ścięcia gwintu pod kątem 45°","Threading chamfering on","M23"],
 ["M24","Отключение схода резьбы (выход под 90°)","Wyłączenie ścięcia gwintu (wyjście 90°)","Threading chamfering off","M24"],
 ["M30","Конец программы и возврат курсора в начало","Koniec programu i powrót na początek","Program end and rewind","M30"],
 ["M40","Нейтральная передача коробки скоростей","Bieg neutralny skrzyni wrzeciona","Spindle gear neutral","M40"],
 ["M41","1-я ступень передачи шпинделя (низкие обороты)","1. stopień przekładni wrzeciona (niskie obroty)","Spindle gear range 1 (low)","M41"],
 ["M42","2-я ступень передачи шпинделя (средние обороты)","2. stopień przekładni wrzeciona (średnie obroty)","Spindle gear range 2 (medium)","M42"],
 ["M43","3-я ступень передачи шпинделя (высокие обороты)","3. stopień przekładni wrzeciona (wysokie obroty)","Spindle gear range 3 (high)","M43"],
 ["M48","Разрешить регулировку подачи и оборотов потенциометрами","Zezwolenie na korekcję posuwu i obrotów (override)","Enable feed & speed override","M48"],
 ["M49","Заблокировать корректоры подачи и оборотов на 100%","Zablokowanie korekcji posuwu i obrotów (100%)","Disable feed & speed override","M49"],
 ["M50","Обдув стружки воздухом через сопло","Nadmuch powietrza na wióry","Air blast on","M50"],
 ["M51","Продувка конуса шпинделя воздухом","Przedmuch stożka wrzeciona","Spindle taper air blow","M51"],
 ["M68","Зажим патрона гидроприводом (токарн.)","Zacisk hydrauliczny uchwytu tokarskiego","Lathe hydraulic chuck clamp","M68"],
 ["M69","Разжим патрона гидроприводом (токарн.)","Rozpięcie hydrauliczne uchwytu tokarskiego","Lathe hydraulic chuck unclamp","M69"],
 ["M73","Выдвижение ловушки готовых деталей (токарн.)","Wysunięcie chwytaka detali (parts catcher)","Parts catcher extend","M73"],
 ["M74","Отвод ловушки деталей в исходное положение","Ukrycie chwytaka detali","Parts catcher retract","M74"],
 ["M80","Подача прутка барфидером на упор","Podanie pręta przez podajnik (bar feeder)","Bar feeder push","M80"],
 ["M88","Включение подачи СОЖ высокого давления через шпиндель (TSC)","Włączenie chłodzenia wysokociśnieniowego przez wrzeciono (TSC)","Thru-spindle coolant (TSC) on","M88"],
 ["M89","Выключение подачи СОЖ высокого давления через шпиндель","Wyłączenie chłodzenia przez wrzeciono","Thru-spindle coolant (TSC) off","M89"],
 ["M98","Вызов внешней подпрограммы","Wywołanie zewnętrznego podprogramu","Subprogram call","M98 P2000 L3"],
 ["M99","Конец подпрограммы / возврат в главную программу","Koniec podprogramu / powrót do programu głównego","Subprogram return / loop","M99"]
];

/* Control-specific references: [code, ru, pl, en, example] */
const HAASCODES = [
 ["G12","Круговой карман по часовой (с чистовым проходом)","Kieszeń kołowa CW (z przejściem wykańczającym)","Circular pocket milling CW","G12 I10.0 D01 F300"],
 ["G13","Круговой карман против часовой (попутное фрезерование)","Kieszeń kołowa CCW (frezowanie współbieżne)","Circular pocket milling CCW","G13 I10.0 D01 F300"],
 ["G47","Гравировка текста, дат и серийных номеров","Grawerowanie tekstu, daty i numerów seryjnych","Text engraving / serial numbers","G47 P0 X10. Y10. I0.5 J0 R0.1 Z-0.2 F120 (CNC)"],
 ["G65","Вызов макроподпрограммы с аргументами","Wywołanie makra z argumentami","Macro subprogram call with arguments","G65 P9810 A1.0 B2.0"],
 ["G68","Поворот системы координат вокруг центра","Obrót układu współrzędnych wokół środka","Coordinate rotation","G68 X0 Y0 R45."],
 ["G69","Отмена поворота системы координат","Anulowanie obrotu układu współrzędnych","Cancel coordinate rotation","G69"],
 ["G70","Расположение отверстий по окружности PCD","Rozkład otworów na okręgu PCD","Bolt hole circle pattern","G70 I40. J0. L8"],
 ["G71","Расположение отверстий по дуге окружности","Rozkład otworów na łuku okręgu","Bolt hole arc pattern","G71 I40. J0. K30. L4"],
 ["G72","Отверстия по линии под заданным углом","Otwory w linii pod zadanym kątem","Bolt holes along an angle","G72 I15. J45. L5"],
 ["G84","Жесткое резьбонарезание метчиком (Rigid Tap)","Gwintowanie sztywne gwintownikiem","Haas rigid tapping cycle","G84 Z-20. R2. F1.5"],
 ["G100","Зеркальное отображение координат","Odbicie lustrzane współrzędnych","Mirror image","G100 X0"],
 ["G101","Отмена зеркального отображения","Wyłączenie odbicia lustrzanego","Cancel mirror image","G101 X0"],
 ["G103","Ограничение предпросмотра кадров вперед (Lookahead)","Ograniczenie wyprzedzania bloków (lookahead)","Limit block lookahead","G103 P1  (P0 = выкл)"],
 ["G107","Цилиндрическая интерполяция (фрезерование на цилиндре)","Mapowanie cylindryczne (frezowanie na walcu)","Cylindrical mapping","G107 Y0 R25.4"],
 ["G110–G129","Дополнительные системы координат заготовки (1–20)","Dodatkowe bazy obróbcze (1–20)","Additional work coordinate systems (1–20)","G110 X0 Y0"],
 ["G150","Универсальная выборка карманов с островками","Uniwersalna obróbka kieszeni z wyspami","General purpose pocket milling","G150 P1000 I10. J5. K0.5 R2. Z-10. F300"],
 ["G154 P1–P99","Расширенные системы координат P1–P99 (Haas)","Rozszerzone układy współrzędnych P1–P99","Extended work offsets P1–P99","G154 P25 X0 Y0"],
 ["G184","Резьбонарезание левой резьбы метчиком","Gwintowanie lewego gwintu (reverse tapping)","Reverse rigid tapping cycle","G184 Z-15. R2. F1.5"],
 ["G187","Настройка плавности и точности сглаживания контура","Kontrola gładkości i dokładności konturu (G187)","Smoothness / accuracy control","G187 P2 E0.025  (P1=грубо, P2=средне, P3=чисто)"],
 ["M19","Ориентация шпинделя на точный угол (P / R)","Orientacja wrzeciona pod zadanym kątem","Spindle orientation angle (P/R)","M19 R180."],
 ["M36","Включение конвейера стружки","Włączenie transportera wiórów","Chip conveyor forward on","M36"],
 ["M39","Проворот револьвера/магазина без фактической смены","Obrót magazynu narzędzi bez wymiany","Tool carousel rotation without change","M39 T05"],
 ["M51–M58","Пользовательские реле включения (доп. приспособления)","Przekaźniki użytkownika (załączanie osprzętu)","User M relays on (accessories)","M51  (M61=выкл)"],
 ["M88","Включение подачи СОЖ высокого давления через шпиндель (TSC)","Włączenie chłodzenia przez wrzeciono wysokim ciśnieniem","Thru-spindle coolant (TSC) on","M88"],
 ["M89","Выключение СОЖ высокого давления через шпиндель","Wyłączenie chłodzenia przez wrzeciono TSC","Thru-spindle coolant (TSC) off","M89"],
 ["M97","Вызов локальной подпрограммы по номеру кадра N","Wywołanie lokalnego podprogramu wg numeru bloku N","Local subprogram call by N block","M97 P1000 L2"],
 ["M109","Интерактивный ввод данных оператором с клавиатуры","Interaktywne wprowadzanie danych przez operatora","Interactive operator input into macro var","M109 P500  (вводит значение в #500)"],
 ["M130","Вывод изображения, чертежа или медиафайла на дисплей стойки","Wyświetlenie rysunku lub instrukcji na ekranie","Display media/image on Haas screen","M130 (setup_part.png)"],
 ["#3000","Вызов аварийного останова программы с текстом ошибки","Alarm programowy z zatrzymaniem maszyny i komunikatem","Program-generated alarm with stop","#3000=1 (CHECK CLAMP)"],
 ["#3006","Вывод сообщения оператору с остановом и ожиданием 'Cycle Start'","Komunikat dla operatora ze stopem do naciśnięcia startu","Operator message with cycle pause","#3006=1 (FLIP PART)"]
];

const SIEMENSCODES = [
 ["CYCLE81","Сверление, центрование отверстий","Wiercenie, nawiercanie otworów","Drilling, centering cycle","CYCLE81(100,0,2,-15)"],
 ["CYCLE82","Сверление с выдержкой времени на дне","Wiercenie z postojem na dnie","Drilling with dwell cycle","CYCLE82(100,0,2,-15,,0.5)"],
 ["CYCLE83","Глубокое сверление с ломкой или выводом стружки","Wiercenie głębokie z łamaniem/wycofaniem","Deep-hole drilling cycle","CYCLE83(100,0,2,-40,,-10,,5,0,0,1,1,1)"],
 ["CYCLE84","Синхронное жесткое нарезание резьбы метчиком","Gwintowanie sztywne z synchronizacją","Rigid tapping cycle","CYCLE84(100,0,2,-15,,0,3,,1.5,0,0)"],
 ["CYCLE840","Нарезание резьбы метчиком с компенсатором","Gwintowanie z oprawką kompensacyjną","Tapping with floating tapholder","CYCLE840(100,0,2,-15,,0,3,,1.5,0,0)"],
 ["CYCLE85","Развёртывание отверстий (подача вперед и назад)","Rozwiercanie otworów (posuw w dół i w górę)","Reaming cycle (feed in, feed out)","CYCLE85(100,0,2,-20,,0,200,400)"],
 ["CYCLE86","Растачивание с ориентированным остановом шпинделя","Wytaczanie z zatrzymaniem kątowym wrzeciona","Boring with oriented spindle stop","CYCLE86(100,0,2,-20,,0.5,3,0,0.5,0.5,0)"],
 ["CYCLE71","Фрезерование плоской поверхности торцом фрезы","Frezowanie płaszczyzny czołowej","Face milling cycle","CYCLE71(100,0,2,-3,100,80,0,0,10,2,0)"],
 ["CYCLE72","Фрезерование по контуру (чистовое/черновое)","Frezowanie wzdłuż zadanego konturu","Contour milling cycle","CYCLE72(\"CONTOUR\",100,0,2,-10,...)"],
 ["POCKET3","Фрезерование прямоугольного кармана","Kieszeń prostokątna z obróbką dna i ścian","Rectangular pocket complete cycle","POCKET3(100,0,2,-10,60,40,5,0,0,0,0)"],
 ["POCKET4","Фрезерование круглого кармана","Kieszeń okrągła z obróbką dna i ścian","Circular pocket complete cycle","POCKET4(100,0,2,-10,50,0,0,0,0,0)"],
 ["SLOT1","Фрезерование продольных пазов по окружности","Rowki podłużne na okręgu","Slots on a circle cycle","SLOT1(100,0,2,-5,4,30,10,40,0,90)"],
 ["SLOT2","Фрезерование кругового дугового паза","Rowek kołowy po łuku","Circular slot cycle","SLOT2(100,0,2,-5,10,40,0,45)"],
 ["LONGHOLE","Фрезерование продолговатых отверстий/пазов","Wykonywanie otworów podłużnych (fasolek)","Longitudinal slot/hole cycle","LONGHOLE(100,0,2,-5,4,30,10)"],
 ["HOLES1","Ряд отверстий по прямой линии","Rząd otworów wzdłuż prostej","Line of holes pattern","HOLES1(0,0,0,15,6)"],
 ["HOLES2","Расположение отверстий по окружности","Rozmieszczenie otworów na okręgu","Circle of holes pattern","HOLES2(0,0,50,0,45,8)"],
 ["MCALL","Модальный вызов цикла для сетки позиций","Modalne wywołanie cyklu dla kolejnych punktów","Modal cycle call for hole pattern","MCALL CYCLE81(100,0,2,-15)"],
 ["CYCLE93","Прорезка канавок (токарн.)","Wykonywanie rowków (toczenie)","Grooving cycle (lathe)","CYCLE93(20,0,10,4,2,0.2,0.1,...)"],
 ["CYCLE94","Проточка поднутрений по стандарту DIN (токарн.)","Podcięcia obróbkowe wg normy DIN (toczenie)","Undercut cycle per DIN (lathe)","CYCLE94(20,-15,\"E\",0.4,...)"],
 ["CYCLE95","Токарная обработка контура (черновая/чистовая)","Obróbka zgrubna i wykańczająca konturu","Stock removal turning cycle","CYCLE95(\"KONTUR\",2,0.2,0.1,...)"],
 ["CYCLE97","Нарезание резьбы резцом (токарн.)","Nacinanie gwintu nożem (toczenie)","Thread cutting cycle (lathe)","CYCLE97(1.5,0,-30,30,30,5,3,0.92,...)"],
 ["CYCLE800","Поворот плоскости обработки (3+2 осей)","Obrót płaszczyzny obróbki (5 osi / 3+2)","Swivel plane / tilted workplane","CYCLE800(1,\"TABLE\",0,57,0,0,0,45,0,0,0,0,0,-1)"],
 ["CYCLE832","Высокоскоростная обработка HSC (точность/шероховатость)","Obróbka z wysoką prędkością HSC","High-speed settings (accuracy & finish)","CYCLE832(0.02,_FINISH,1)"],
 ["TRANS","Абсолютное смещение нулевой точки детали","Programowane bezwzględne przesunięcie zera","Programmable absolute zero offset","TRANS X50. Y30. Z0"],
 ["ATRANS","Аддитивное (приращенное) смещение нуля","Addytywne (przyrostowe) przesunięcie zera","Additive zero offset","ATRANS X10. Z-5."],
 ["ROT","Абсолютный поворот системы координат детали","Bezwzględny obrót układu współrzędnych","Coordinate rotation absolute","ROT RPL=45"],
 ["AROT","Аддитивный поворот системы координат","Addytywny obrót układu współrzędnych","Additive coordinate rotation","AROT RPL=15"],
 ["MIRROR","Зеркальное отображение относительно оси","Odbicie lustrzane względem osi","Mirror image across axis","MIRROR X0"],
 ["AMIRROR","Аддитивное зеркальное отображение","Addytywne odbicie lustrzane","Additive mirror image","AMIRROR Y0"],
 ["SCALE","Масштабирование координат детали","Skalowanie wymiarów detalu","Coordinate scaling","SCALE X1.05 Y1.05"],
 ["ASCALE","Аддитивное масштабирование координат","Addytywne skalowanie wymiarów","Additive scaling","ASCALE X1.02"],
 ["SUPA","Подавление всех смещений в текущем кадре (машинный ноль)","Wyłączenie wszystkich przesunięć w bieżącym bloku","Suppress all frames (machine datum move)","SUPA G00 Z0 D0"],
 ["G500","Отмена всех настраиваемых смещений G54–G59","Anulowanie ustawialnych przesunięć zera","Cancel settable zero frames G54-G59","G500"],
 ["G53","Блокировка смещений в кадре (машинные координаты)","Wyłączenie przesunięć w bloku maszynowym","Suppress offsets in single block","G53 G00 Z0"],
 ["TRAORI","Включение 5-осевой кинематической трансформации (TCP)","Włączenie transformacji 5-osiowej (TCP)","5-axis transformation on (TCP)","TRAORI(1)"],
 ["TRAFOOF","Отключение трансформации 5 осей","Wyłączenie transformacji 5-osiowej","5-axis transformation off","TRAFOOF"],
 ["DIAMON","Программирование координат оси X в диаметрах (токарн.)","Programowanie osi X w średnicach (toczenie)","Diameter programming on X axis (lathe)","DIAMON"],
 ["DIAMOF","Программирование координат оси X в радиусах (токарн.)","Programowanie osi X w promieniach (toczenie)","Radius programming on X axis (lathe)","DIAMOF"],
 ["SPOS","Позиционирование шпинделя на заданный угол","Pozycjonowanie wrzeciona na zadany kąt","Spindle positioning to specific angle","SPOS=180.0"],
 ["LIMS","Ограничение максимальных оборотов шпинделя при G96","Ograniczenie maksymalnych obrotów przy G96","Spindle speed upper limit with G96","G96 S220 LIMS=2800"],
 ["STOPRE","Остановка предварительной выборки кадров (Stop Preprocessing)","Zatrzymanie wyprzedzania bloków (STOPRE)","Preprocessing stop buffer flush","STOPRE"],
 ["MSG","Вывод пользовательского сообщения оператору на ЧПУ","Wyświetlenie komunikatu dla operatora na ekranie","Operator message string display","MSG(\"CHECK CLAMP\")"],
 ["WALIMON","Включение контроля границ рабочей зоны","Włączenie kontroli strefy roboczej (limity)","Working area limitation on","WALIMON"],
 ["WALIMOF","Отключение контроля границ рабочей зоны","Wyłączenie kontroli strefy roboczej","Working area limitation off","WALIMOF"],
 ["SOFT","Плавный разгон осей с ограничением рывка (Jerk)","Łagodne przyspieszanie z redukcją szarpnięć","Soft axis acceleration (jerk limitation)","SOFT"],
 ["BRISK","Резкий безынерционный разгон приводов","Maksymalnie dynamiczne przyspieszanie","Brisk axis acceleration","BRISK"]
];

const HEIDENHAINCODES = [
 ["BEGIN PGM","Начало программы с именем файла и единицей мм/дюйм","Początek programu z nazwą pliku i jednostką","Program begin with filename and units","0 BEGIN PGM MAIN MM"],
 ["END PGM","Конец программы","Koniec programu","Program end marker","99 END PGM MAIN MM"],
 ["BLK FORM 0.1 / 0.2","Определение габаритов заготовки для графики","Definicja gabarytów półfabrykatu do symulacji","Blank definition for 3D simulation","BLK FORM 0.1 Z X-50 Y-50 Z-25 \nBLK FORM 0.2 X+50 Y+50 Z+0"],
 ["TOOL CALL","Вызов инструмента, оси шпинделя, подачи и оборотов","Wywołanie narzędzia, osi wrzeciona, posuwu i obrotów","Tool call with spindle axis and speed","TOOL CALL 12 Z S3200 F850"],
 ["TOOL DEF","Предварительный вызов следующего инструмента в магазин","Wstępny wybór kolejnego narzędzia w magazynie","Tool pre-selection in carousel","TOOL DEF 5"],
 ["L","Линейное перемещение на рабочей подаче","Ruch prostoliniowy z posuwem roboczym","Straight line linear move","L X+40.0 Y+20.0 R0 F500 M3"],
 ["FMAX","Ускоренное перемещение на максимальной скорости осей","Posuw szybki z maksymalną prędkością osi","Rapid traverse at maximum machine speed","L Z+100.0 R0 FMAX"],
 ["CC / C","Определение центра окружности и круговое движение","Środek okręgu oraz ruch po łuku","Circle center definition and circular path","CC X+0. Y+0. \nC X+25. Y+0. DR+"],
 ["CR","Круговая дуга с заданным радиусом R","Łuk kołowy ze zdefiniowanym promieniem R","Circular arc with defined radius","CR X+50. Y+30. R+25. DR- F350"],
 ["CT","Тангенциальное сопряжение траектории по дуге","Styczny łuk przejścia z poprzedniego konturu","Tangential arc contour transition","CT X+45. Y+15."],
 ["CP","Круговая траектория в полярных координатах","Ruch kołowy we współrzędnych biegunowych","Polar circular path motion","CP IPA+360. DR+ F300"],
 ["RND","Автоматическое скругление угла контура радиусом R","Automatyczne zaokrąglenie narożnika promieniem R","Corner rounding with radius R","RND R5.0 F400"],
 ["CHF","Снятие фаски в углу контура","Fazowanie narożnika konturu","Chamfer corner insertion","CHF 2.0"],
 ["APPR LCT / DEP LCT","Касательный подвод и отвод инструмента по плавной дуге","Styczne dojście i odejście od konturu po łuku","Smooth tangential approach/departure","APPR LCT X+20. Y+10. R5. RL F300"],
 ["RL / RR / R0","Коррекция радиуса фрезы: слева / справа / отмена","Korekcja promienia frezu: lewa / prawa / wyłączona","Radius compensation left / right / cancel","L X+30. RL F400"],
 ["CYCL DEF 200","Цикл сверления","Cykl wiercenia zwykłego","Drilling canned cycle","CYCL DEF 200 DRILLING"],
 ["CYCL DEF 201","Цикл развёртывания отверстий","Cykl rozwiercania otworów","Reaming canned cycle","CYCL DEF 201 REAMING"],
 ["CYCL DEF 202","Цикл чистового растачивания","Cykl wytaczania wykańczającego","Boring canned cycle","CYCL DEF 202 BORING"],
 ["CYCL DEF 203","Цикл универсального сверления с ломкой стружки","Cykl wiercenia uniwersalnego z łamaniem wióra","Universal drilling with chip breaking","CYCL DEF 203 UNIVERSAL DRILLING"],
 ["CYCL DEF 205","Цикл универсального глубокого сверления","Cykl wiercenia głębokiego z odskokiem","Universal pecking deep hole cycle","CYCL DEF 205 UNIVERSAL PECKING"],
 ["CYCL DEF 206 / 207","Нарезание резьбы: с компенсатором / жесткое синхронное","Gwintowanie: z oprawką kompensacyjną / sztywne","Tapping: with floating holder / rigid","CYCL DEF 207 RIGID TAPPING"],
 ["CYCL DEF 208","Винтовое фрезерование отверстий фрезой (Bore milling)","Frezowanie otworów po linii śrubowej","Bore milling helical hole cycle","CYCL DEF 208 BORE MILLING"],
 ["CYCL DEF 209","Нарезание резьбы с ломкой стружки","Gwintowanie z łamaniem wióra","Tapping with chip breaking cycle","CYCL DEF 209 TAPPING W/ CHIP BRKG"],
 ["CYCL DEF 220 / 221","Сетка отверстий: по окружности / по прямоугольной сетке","Wzór otworów: na okręgu (biegunowo) / w siatce","Hole pattern: polar circle / cartesian grid","CYCL DEF 220 POLAR PATTERN"],
 ["CYCL DEF 225","Гравировка текста, переменных и даты","Grawerowanie tekstu, zmiennych i daty","Engraving text and date cycle","CYCL DEF 225 ENGRAVING"],
 ["CYCL DEF 232 / 233","Торцевое фрезерование плоскости","Frezowanie planowe powierzchni","Face milling complete cycle","CYCL DEF 233 FACE MILLING"],
 ["CYCL DEF 251","Фрезерование прямоугольного кармана (полный цикл)","Kieszeń prostokątna (pełny cykl obróbki)","Rectangular pocket complete cycle","CYCL DEF 251 RECTANGULAR POCKET"],
 ["CYCL DEF 252","Фрезерование круглого кармана","Kieszeń okrągła (pełny cykl obróbki)","Circular pocket complete cycle","CYCL DEF 252 CIRCULAR POCKET"],
 ["CYCL DEF 253 / 254","Фрезерование прямого паза / кругового дугового паза","Rowek prostokątny / rowek po łuku","Slot milling / circular slot cycle","CYCL DEF 253 SLOT MILLING"],
 ["CYCL DEF 256 / 257","Фрезерование прямоугольной цапфы / круглого острова","Czop prostokątny / czop okrągły (wyspa)","Rectangular stud / circular stud milling","CYCL DEF 257 CIRCULAR STUD"],
 ["CYCL DEF 262","Резьбофрезерование по спирали","Frezowanie gwintu po linii śrubowej","Thread milling helical cycle","CYCL DEF 262 THREAD MILLING"],
 ["CYCL DEF 14 / 20–25","Контурные SL-циклы (выборка сложных карманов)","Cykle konturowe SL (kieszenie o dowolnym kształcie)","Contour geometry and SL cycles","CYCL DEF 14.0 CONTOUR GEOMETRY"],
 ["CYCL DEF 7","Смещение нулевой точки детали (Datum shift)","Przesunięcie punktu zerowego detalu","Datum shift offset","CYCL DEF 7.0 DATUM SHIFT"],
 ["CYCL DEF 8","Зеркальное отображение осей","Odbicie lustrzane osi","Mirror image axis","CYCL DEF 8.0 MIRROR IMAGE"],
 ["CYCL DEF 10","Поворот системы координат в плоскости","Obrót układu współrzędnych w płaszczyźnie","Coordinate system rotation","CYCL DEF 10.0 ROTATION"],
 ["CYCL DEF 11","Масштабирование геометрии детали","Skalowanie wymiarów geometrii","Scaling factor","CYCL DEF 11.0 SCALING FACTOR"],
 ["CYCL CALL","Команда вызова и выполнения активного цикла","Wywołanie zdefiniowanego cyklu obróbkowego","Cycle call command","CYCL CALL M3"],
 ["PLANE SPATIAL","Пространственный наклон плоскости обработки (3+2 осей)","Przestrzenne nachylenie płaszczyzny obróbki (5 osi)","Spatial tilted working plane","PLANE SPATIAL SPA+0 SPB+45 SPC+0 TURN F5000"],
 ["PLANE RESET","Сброс наклона плоскости в исходное горизонтальное положение","Resetowanie pochylenia płaszczyzny do poziomu","Reset tilted working plane","PLANE RESET STAY"],
 ["FUNCTION TCPM","Управление положением вершины инструмента в 5 осях","Sterowanie punktem końcówki narzędzia (TCPM)","Tool Center Point Management (TCPM)","FUNCTION TCPM F CONTOUR PATHCTRL AXIS"],
 ["TCH PROBE 410–418","Измерительные циклы привязки нуля детали щупом","Cykle pomiarowe sondy do ustawiania bazy detalu","Touch probe automatic datum cycles","TCH PROBE 412 DATUM INSIDE CIRCLE"],
 ["M126","Выбор кратчайшей траектории поворота круговых осей","Najkrótsza droga obrotu osi kątowych","Shortest path travel for rotary axes","M126"],
 ["M128 / M129","Удержание вершины инструмента относительно детали (RTCP)","Śledzenie końcówki narzędzia w 5 osiach (RTCP)","Tool tip tracking on/off (RTCP)","M128 F1000  (M129=откл)"],
 ["Q-параметры / FN","Математические вычисления и условия (FN 0–FN 18)","Parametry Q: obliczenia i warunki (FN 0–FN 18)","Q parameters: calculation and logic","FN 0: Q1 = +50"]
];

const MAZAKCODES = [
 ["G12.1","Полярная интерполяция торца на токарно-фрезерных станках","Interpolacja biegunowa czoła na tokarko-frezarkach","Polar coordinate interpolation (Mill-Turn)","G12.1  (C-ось работает как ось X/Y)"],
 ["G13.1","Отмена полярной интерполяции торца","Anulowanie interpolacji biegunowej","Polar coordinate interpolation cancel","G13.1"],
 ["G07.1","Цилиндрическая интерполяция (фрезерование развертки цилиндра)","Interpolacja cylindryczna (rozwinięcie walca)","Cylindrical interpolation (G107)","G07.1 C25.0  (C=радиус)"],
 ["G61.1","Высокоточный контурный контроль Mazak (Smooth Control)","Kontrola wysokiej precyzji konturu Mazak","High accuracy contour control","G61.1 ,K40"],
 ["G68.2","Наклонная плоскость обработки TWP (5 осей)","Pochylona płaszczyzna obróbki TWP (5 osi)","Tilted working plane (TWP 5-axis)","G68.2 X0 Y0 Z0 I45. J0 K0"],
 ["G69","Отмена наклонной плоскости TWP","Anulowanie płaszczyzny TWP","Cancel tilted working plane","G69"],
 ["G43.4","Управление вершиной инструмента RTCP (5 осей одновременных)","Prowadzenie końcówki narzędzia RTCP (5 osi)","Tool center point control (RTCP)","G43.4 H01"],
 ["G43.5","Ориентация инструмента вдоль вектора в 5 осях","Prowadzenie wektora narzędzia w 5 osiach","Tool vector direction control","G43.5 H01"],
 ["G54.2","Динамическое смещение относительно поворотного стола P1–P8","Dynamiczne przesunięcie bazy stołu obrotowego","Rotary table dynamic fixture offset","G54.2 P1"],
 ["G34","Нарезание резьбы резцом с переменным шагом","Gwintowanie nożem ze zmiennym skokiem","Variable pitch thread cutting","G34 Z-30.0 F1.5 K0.05"],
 ["M200","Переключение в токарный режим (Mazak Integrex)","Przełączenie na tryb toczenia (Integrex)","Select turning mode (Integrex)","M200"],
 ["M202","Переключение во фрезерный режим (C-ось / фрезерный шпиндель)","Przełączenie na tryb frezowania (oś C)","Select milling mode (Integrex)","M202"],
 ["M203","Вращение фрезерного шпинделя по часовой стрелке","Obroty wrzeciona frezarskiego w prawo","Milling spindle CW","M203 S4000"],
 ["M204","Вращение фрезерного шпинделя против часовой стрелки","Obroty wrzeciona frezarskiego w lewo","Milling spindle CCW","M204 S4000"],
 ["M205","Остановка фрезерного шпинделя","Zatrzymanie wrzeciona frezarskiego","Milling spindle stop","M205"],
 ["M210","Зажим гидравлического тормоза оси C","Zacisk hamulca osi C","C-axis brake clamp","M210"],
 ["M212","Разжим тормоза оси C для фрезерования в движении","Rozpięcie hamulca osi C","C-axis brake unclamp","M212"],
 ["M300","Синхронизация главного шпинделя и контршпинделя по скорости","Synchronizacja prędkości wrzeciona głównego i pomocniczego","Spindle speed synchronization","M300"],
 ["M302","Синхронизация шпинделей по фазе/углу (перехват детали)","Synchronizacja fazowa wrzecion (przechwyt detalu)","Spindle phase synchronization","M302"],
 ["M511","Измерение и привязка инструмента датчиком Tool Eye","Pomiar i korekcja narzędzia sondą Tool Eye","Tool Eye sensor measurement","M511"]
];

const OKUMACODES = [
 ["G15 H...","Выбор рабочей системы координат детали H1–H100","Wybór bazy współrzędnych detalu H1–H100","Work coordinate system selection H1–H100","G15 H01"],
 ["G140","Выбор верхнего револьверного суппорта A (токарн.)","Wybór górnego suportu rewolwerowego A","Select upper turret A","G140"],
 ["G141","Выбор нижнего револьверного суппорта B (токарн.)","Wybór dolnego suportu rewolwerowego B","Select lower turret B","G141"],
 ["G85","Цикл чистового растачивания/точения контура","Cykl wytaczania/toczenia wykańczającego","Boring / turning finishing cycle","G85 Z-30. F0.15"],
 ["G81","Продольный черновой цикл LAP (Okuma Lathe Auto Program)","Wzdłużny cykl zgrubny LAP (Okuma)","Longitudinal rough turning cycle LAP","G81 NLBL D3. F0.3 U0.2 W0.1"],
 ["G82","Торцевой черновой цикл точения LAP","Czołowy cykl zgrubny LAP (Okuma)","Transverse rough facing cycle LAP","G82 NLBL D3. F0.3 U0.2 W0.1"],
 ["G74","Торцевое глубокое сверление с выводом (токарн.)","Wiercenie czołowe z wycofaniem (toczenie)","Deep peck drilling cycle (lathe)","G74 X0 Z-40. D5. F0.15"],
 ["G73","Высокоскоростное сверление с ломкой стружки","Szybkie wiercenie z łamaniem wióra","High-speed chip break drilling","G73 X0 Z-25. D4. F0.18"],
 ["G31","Цикл прорезки поперечных канавок","Cykl rowkowania poprzecznego","Transverse grooving canned cycle","G31 X20. Z-15. F0.1"],
 ["G33","Нарезание резьбы резцом (фиксированный шаг)","Nacinanie gwintu ze stałym skokiem","Threading cycle (lathe)","G33 Z-20. F2.0"],
 ["G137","Контурная обработка на торце с осью C (Coordinate conversion)","Obróbka konturowa czoła z osią C","C-axis coordinate conversion","G137"],
 ["G136","Отмена контурной обработки с осью C","Anulowanie obróbki czoła z osią C","Cancel C-axis coordinate conversion","G136"],
 ["M140","Отвод инструмента в безопасную крайнюю позицию по Z","Bezpieczny odjazd narzędzia w krańcowe Z","Retract tool to safe Z limit","M140"],
 ["M147","Включение гидравлического зажима оси C","Zacisk hydrauliczny osi C","C-axis clamp on","M147"],
 ["M146","Разжим оси C","Rozpięcie osi C","C-axis unclamp","M146"],
 ["M130","Включение обдува зоны резания сжатым воздухом","Nadmuch sprężonego powietrza","Air blow on","M130"],
 ["M131","Выключение обдува воздухом","Wyłączenie nadmuchu powietrza","Air blow off","M131"],
 ["M08 / M09","Включение / выключение СОЖ","Włączenie / wyłączenie chłodziwa","Coolant on / off","M08"],
 ["V-переменные","Системные переменные Okuma: VTOFH, VZSH, VTOFD","Zmienne systemowe Okuma (korekcje, bazy)","Okuma OSP system variables","VZSHZ[1]=100.25"]
];

const CONTROLS = {
  iso: {k:"ctl_iso", sets:{G:GCODES, M:MCODES}},
  haas: {k:"ctl_haas", list:HAASCODES},
  siemens: {k:"ctl_siemens", list:SIEMENSCODES},
  heid: {k:"ctl_heid", list:HEIDENHAINCODES},
  mazak: {k:"ctl_mazak", list:MAZAKCODES},
  okuma: {k:"ctl_okuma", list:OKUMACODES}
};

/* ---------- ISO 286 Fits & Tolerances Data ---------- */
const ISO_BANDS = [3, 6, 10, 18, 30, 50, 80, 120, 180, 250, 315, 400, 500];
const ISO_IT = {
  5:  [4, 5, 6, 8, 9, 11, 13, 15, 18, 20, 23, 25, 27],
  6:  [6, 8, 9, 11, 13, 16, 19, 22, 25, 29, 32, 36, 40],
  7:  [10, 12, 15, 18, 21, 25, 30, 35, 40, 46, 52, 57, 63],
  8:  [14, 18, 22, 27, 33, 39, 46, 54, 63, 72, 81, 89, 97],
  9:  [25, 30, 36, 43, 52, 62, 74, 87, 100, 115, 130, 140, 155],
  10: [40, 48, 58, 70, 84, 100, 120, 140, 160, 185, 210, 230, 250],
  11: [60, 75, 90, 110, 130, 160, 190, 220, 250, 290, 320, 360, 400]
};
const ISO_DEV_FUND = {
  g: [-2, -4, -5, -6, -7, -9, -10, -12, -14, -15, -17, -18, -20],
  f: [-6, -10, -13, -16, -20, -25, -30, -36, -43, -50, -56, -62, -68],
  e: [-14, -20, -25, -32, -40, -50, -60, -72, -85, -100, -110, -125, -135],
  d: [-20, -30, -40, -50, -65, -80, -100, -120, -145, -170, -190, -210, -230],
  k: [0, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 4, 5],
  m: [2, 4, 6, 7, 8, 9, 11, 13, 15, 17, 20, 21, 23],
  n: [4, 8, 10, 12, 15, 17, 20, 23, 27, 31, 34, 37, 40],
  p: [6, 12, 15, 18, 22, 26, 32, 37, 43, 50, 56, 62, 68],
  s: [14, 19, 23, 28, 35, 43, 53, 59, 79, 98, 114, 133, 151]
};

function getIsoBand(d) {
  for (let i = 0; i < ISO_BANDS.length; i++) if (d <= ISO_BANDS[i]) return i;
  return ISO_BANDS.length - 1;
}

function calcIsoTol(d, gradeStr) {
  if (d < 1 || d > 500) return null;
  const b = getIsoBand(d);
  const isHole = /^[A-Z]/.test(gradeStr);
  const letter = gradeStr.replace(/[0-9]/g, "");
  const itNum = parseInt(gradeStr.replace(/[^0-9]/g, ""), 10) || 7;
  const it = (ISO_IT[itNum] && ISO_IT[itNum][b]) || (10 * b + 10);

  let upper = 0, lower = 0;
  if (isHole) {
    if (letter === "H") { lower = 0; upper = it; }
    else if (letter === "JS") { upper = Math.round(it / 2); lower = -upper; }
    else if (ISO_DEV_FUND[letter.toLowerCase()]) {
      const fund = ISO_DEV_FUND[letter.toLowerCase()][b];
      if (["G", "F", "E", "D"].includes(letter)) { lower = -fund; upper = lower + it; }
      else { upper = -fund; lower = upper - it; }
    }
  } else {
    const l = letter.toLowerCase();
    if (l === "h") { upper = 0; lower = -it; }
    else if (l === "js") { upper = Math.round(it / 2); lower = -upper; }
    else if (ISO_DEV_FUND[l]) {
      const fund = ISO_DEV_FUND[l][b];
      if (["g", "f", "e", "d"].includes(l)) { upper = fund; lower = upper - it; }
      else { lower = fund; upper = lower + it; }
    }
  }
  return {
    d, grade: gradeStr, it,
    es: upper, ei: lower,
    max: +(d + upper / 1000).toFixed(4),
    min: +(d + lower / 1000).toFixed(4)
  };
}

/* ---------- Inch & Pipe Threads Data ---------- */
const INCH_PIPE_THREADS = [
  // G / BSPP (ISO 228) - 55 deg cylindrical
  {cat:"G", name:'G 1/8"', dMm:9.728, dIn:0.383, tpi:28, pitch:0.907, drill:8.80, dMin:8.566, type:"cyl", ang:55},
  {cat:"G", name:'G 1/4"', dMm:13.157, dIn:0.518, tpi:19, pitch:1.337, drill:11.80, dMin:11.445, type:"cyl", ang:55},
  {cat:"G", name:'G 3/8"', dMm:16.662, dIn:0.656, tpi:19, pitch:1.337, drill:15.25, dMin:14.950, type:"cyl", ang:55},
  {cat:"G", name:'G 1/2"', dMm:20.955, dIn:0.825, tpi:14, pitch:1.814, drill:19.00, dMin:18.631, type:"cyl", ang:55},
  {cat:"G", name:'G 5/8"', dMm:22.911, dIn:0.902, tpi:14, pitch:1.814, drill:21.00, dMin:20.587, type:"cyl", ang:55},
  {cat:"G", name:'G 3/4"', dMm:26.441, dIn:1.041, tpi:14, pitch:1.814, drill:24.50, dMin:24.117, type:"cyl", ang:55},
  {cat:"G", name:'G 7/8"', dMm:30.201, dIn:1.189, tpi:14, pitch:1.814, drill:28.25, dMin:27.877, type:"cyl", ang:55},
  {cat:"G", name:'G 1"', dMm:33.249, dIn:1.309, tpi:11, pitch:2.309, drill:30.75, dMin:30.291, type:"cyl", ang:55},
  {cat:"G", name:'G 1 1/4"', dMm:41.910, dIn:1.650, tpi:11, pitch:2.309, drill:39.50, dMin:38.952, type:"cyl", ang:55},
  {cat:"G", name:'G 1 1/2"', dMm:47.803, dIn:1.882, tpi:11, pitch:2.309, drill:45.00, dMin:44.845, type:"cyl", ang:55},
  {cat:"G", name:'G 2"', dMm:59.614, dIn:2.347, tpi:11, pitch:2.309, drill:57.00, dMin:56.656, type:"cyl", ang:55},

  // NPT (ANSI/ASME B1.20.1) - 60 deg taper 1:16
  {cat:"NPT", name:'1/8"-27 NPT', dMm:10.242, dIn:0.403, tpi:27, pitch:0.941, drill:8.50, dMin:8.480, type:"taper", ang:60},
  {cat:"NPT", name:'1/4"-18 NPT', dMm:13.616, dIn:0.536, tpi:18, pitch:1.411, drill:11.10, dMin:11.110, type:"taper", ang:60},
  {cat:"NPT", name:'3/8"-18 NPT', dMm:17.055, dIn:0.671, tpi:18, pitch:1.411, drill:14.50, dMin:14.550, type:"taper", ang:60},
  {cat:"NPT", name:'1/2"-14 NPT', dMm:21.223, dIn:0.836, tpi:14, pitch:1.814, drill:17.90, dMin:17.930, type:"taper", ang:60},
  {cat:"NPT", name:'3/4"-14 NPT', dMm:26.568, dIn:1.046, tpi:14, pitch:1.814, drill:23.20, dMin:23.280, type:"taper", ang:60},
  {cat:"NPT", name:'1"-11.5 NPT', dMm:33.228, dIn:1.308, tpi:11.5, pitch:2.209, drill:29.00, dMin:29.280, type:"taper", ang:60},
  {cat:"NPT", name:'1 1/4"-11.5 NPT', dMm:42.164, dIn:1.660, tpi:11.5, pitch:2.209, drill:37.70, dMin:38.010, type:"taper", ang:60},
  {cat:"NPT", name:'1 1/2"-11.5 NPT', dMm:48.054, dIn:1.892, tpi:11.5, pitch:2.209, drill:44.00, dMin:44.110, type:"taper", ang:60},
  {cat:"NPT", name:'2"-11.5 NPT', dMm:60.092, dIn:2.366, tpi:11.5, pitch:2.209, drill:56.00, dMin:56.140, type:"taper", ang:60},

  // UNC (ANSI/ASME B1.1) - 60 deg coarse
  {cat:"UNC", name:'#4-40 UNC', dMm:2.845, dIn:0.112, tpi:40, pitch:0.635, drill:2.35, dMin:2.156, type:"cyl", ang:60},
  {cat:"UNC", name:'#6-32 UNC', dMm:3.505, dIn:0.138, tpi:32, pitch:0.794, drill:2.85, dMin:2.642, type:"cyl", ang:60},
  {cat:"UNC", name:'#8-32 UNC', dMm:4.166, dIn:0.164, tpi:32, pitch:0.794, drill:3.50, dMin:3.302, type:"cyl", ang:60},
  {cat:"UNC", name:'#10-24 UNC', dMm:4.826, dIn:0.190, tpi:24, pitch:1.058, drill:3.90, dMin:3.683, type:"cyl", ang:60},
  {cat:"UNC", name:'1/4"-20 UNC', dMm:6.350, dIn:0.250, tpi:20, pitch:1.270, drill:5.10, dMin:4.978, type:"cyl", ang:60},
  {cat:"UNC", name:'5/16"-18 UNC', dMm:7.938, dIn:0.312, tpi:18, pitch:1.411, drill:6.60, dMin:6.401, type:"cyl", ang:60},
  {cat:"UNC", name:'3/8"-16 UNC', dMm:9.525, dIn:0.375, tpi:16, pitch:1.588, drill:8.00, dMin:7.823, type:"cyl", ang:60},
  {cat:"UNC", name:'7/16"-14 UNC', dMm:11.112, dIn:0.438, tpi:14, pitch:1.814, drill:9.40, dMin:9.169, type:"cyl", ang:60},
  {cat:"UNC", name:'1/2"-13 UNC', dMm:12.700, dIn:0.500, tpi:13, pitch:1.954, drill:10.80, dMin:10.592, type:"cyl", ang:60},
  {cat:"UNC", name:'9/16"-12 UNC', dMm:14.288, dIn:0.562, tpi:12, pitch:2.117, drill:12.20, dMin:11.996, type:"cyl", ang:60},
  {cat:"UNC", name:'5/8"-11 UNC', dMm:15.875, dIn:0.625, tpi:11, pitch:2.309, drill:13.50, dMin:13.386, type:"cyl", ang:60},
  {cat:"UNC", name:'3/4"-10 UNC', dMm:19.050, dIn:0.750, tpi:10, pitch:2.540, drill:16.50, dMin:16.307, type:"cyl", ang:60},
  {cat:"UNC", name:'7/8"-9 UNC', dMm:22.225, dIn:0.875, tpi:9, pitch:2.822, drill:19.50, dMin:19.177, type:"cyl", ang:60},
  {cat:"UNC", name:'1"-8 UNC', dMm:25.400, dIn:1.000, tpi:8, pitch:3.175, drill:22.25, dMin:21.971, type:"cyl", ang:60},

  // UNF (ANSI/ASME B1.1) - 60 deg fine
  {cat:"UNF", name:'#10-32 UNF', dMm:4.826, dIn:0.190, tpi:32, pitch:0.794, drill:4.10, dMin:3.962, type:"cyl", ang:60},
  {cat:"UNF", name:'1/4"-28 UNF', dMm:6.350, dIn:0.250, tpi:28, pitch:0.907, drill:5.50, dMin:5.359, type:"cyl", ang:60},
  {cat:"UNF", name:'5/16"-24 UNF', dMm:7.938, dIn:0.312, tpi:24, pitch:1.058, drill:6.90, dMin:6.782, type:"cyl", ang:60},
  {cat:"UNF", name:'3/8"-24 UNF', dMm:9.525, dIn:0.375, tpi:24, pitch:1.058, drill:8.50, dMin:8.382, type:"cyl", ang:60},
  {cat:"UNF", name:'7/16"-20 UNF', dMm:11.112, dIn:0.438, tpi:20, pitch:1.270, drill:9.90, dMin:9.728, type:"cyl", ang:60},
  {cat:"UNF", name:'1/2"-20 UNF', dMm:12.700, dIn:0.500, tpi:20, pitch:1.270, drill:11.50, dMin:11.328, type:"cyl", ang:60},
  {cat:"UNF", name:'5/8"-18 UNF', dMm:15.875, dIn:0.625, tpi:18, pitch:1.411, drill:14.50, dMin:14.351, type:"cyl", ang:60},
  {cat:"UNF", name:'3/4"-16 UNF', dMm:19.050, dIn:0.750, tpi:16, pitch:1.588, drill:17.50, dMin:17.348, type:"cyl", ang:60},
  {cat:"UNF", name:'1"-12 UNF', dMm:25.400, dIn:1.000, tpi:12, pitch:2.117, drill:23.25, dMin:23.114, type:"cyl", ang:60}
];

/* Hardness conversion table (ASTM E140 / ISO 18265 non-austenitic steel): [HRC, HBW, HV, Rm_MPa] */
const HARDNESS_TABLE = [
  [20.0, 226, 238, 760],
  [22.0, 237, 248, 800],
  [24.0, 247, 260, 835],
  [26.0, 258, 272, 870],
  [28.0, 271, 285, 915],
  [30.0, 286, 302, 965],
  [32.0, 301, 318, 1020],
  [34.0, 319, 336, 1080],
  [36.0, 336, 354, 1140],
  [38.0, 353, 372, 1200],
  [40.0, 371, 392, 1260],
  [42.0, 390, 412, 1330],
  [44.0, 409, 434, 1400],
  [46.0, 430, 456, 1480],
  [48.0, 452, 480, 1570],
  [50.0, 477, 510, 1660],
  [52.0, 500, 538, 1760],
  [54.0, 528, 570, 1880],
  [56.0, 560, 608, 2010],
  [58.0, 595, 650, 2150],
  [60.0, 654, 697, 2280],
  [62.0, 705, 746, 2420],
  [64.0, 750, 800, 2580],
  [66.0, 800, 865, 2750],
  [68.0, 850, 940, 2950]
];

function convertHardness(val, scale) {
  const colIdx = { hrc: 0, hb: 1, hv: 2, rm: 3 }[(scale || "hrc").toLowerCase()] ?? 0;
  const t = HARDNESS_TABLE;
  const min = t[0][colIdx], max = t[t.length - 1][colIdx];
  const clamped = Math.max(min, Math.min(max, val));
  let i = 0;
  while (i < t.length - 2 && t[i + 1][colIdx] < clamped) i++;
  const [h0, hb0, hv0, rm0] = t[i];
  const [h1, hb1, hv1, rm1] = t[i + 1];
  const span = t[i + 1][colIdx] - t[i][colIdx];
  const frac = span === 0 ? 0 : (clamped - t[i][colIdx]) / span;
  const lerp = (a, b) => +(a + frac * (b - a)).toFixed(1);
  return {
    hrc: lerp(h0, h1),
    hb: Math.round(lerp(hb0, hb1)),
    hv: Math.round(lerp(hv0, hv1)),
    rm: Math.round(lerp(rm0, rm1))
  };
}

/* Linear thermal expansion coefficients (x10^-6 / °C) */
const THERMAL_MATS = [
  {k: "mat_steel_carbon", alpha: 11.5},
  {k: "mat_steel_tool", alpha: 12.0},
  {k: "mat_inox_304", alpha: 16.5},
  {k: "mat_alu_alloys", alpha: 23.4},
  {k: "mat_brass_cu", alpha: 18.0},
  {k: "mat_cast_iron", alpha: 10.5},
  {k: "mat_titanium", alpha: 8.6},
  {k: "mat_carbide_vhm", alpha: 5.0},
  {k: "mat_invar", alpha: 1.2}
];

/* Taylor tool life exponents m (vc * T^m = C) */
const TAYLOR_EXPONENTS = [
  {k: "tool_carbide", m: 0.25},
  {k: "tool_hss", m: 0.125},
  {k: "tool_cbn_ceramic", m: 0.40},
  {k: "tool_pcd", m: 0.33}
];