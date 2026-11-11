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
 ["G00","Ускоренное перемещение","Szybki ruch jałowy","Rapid positioning","G00 X100 Y50"],
 ["G01","Линейная интерполяция (рабочая подача)","Interpolacja liniowa (posuw roboczy)","Linear interpolation (feed)","G01 X50 F200"],
 ["G02","Круговая интерполяция по часовой","Interpolacja kołowa w prawo","Circular interpolation CW","G02 X20 Y20 I10 J0"],
 ["G03","Круговая интерполяция против часовой","Interpolacja kołowa w lewo","Circular interpolation CCW","G03 X20 Y20 R10"],
 ["G04","Пауза (выдержка)","Postój (czas oczekiwania)","Dwell","G04 P1000"],
 ["G10","Установка данных (смещения)","Ustawianie danych (korekcje)","Programmable data input","G10 L2 P1 X0 Y0"],
 ["G17","Выбор плоскости XY","Wybór płaszczyzny XY","XY plane selection","G17"],
 ["G18","Выбор плоскости XZ","Wybór płaszczyzny XZ","XZ plane selection","G18"],
 ["G19","Выбор плоскости YZ","Wybór płaszczyzny YZ","YZ plane selection","G19"],
 ["G20","Размеры в дюймах","Wymiary w calach","Inch units","G20"],
 ["G21","Размеры в миллиметрах","Wymiary w milimetrach","Metric units","G21"],
 ["G28","Возврат в референтную точку","Powrót do punktu referencyjnego","Return to reference point","G91 G28 Z0"],
 ["G40","Отмена коррекции на радиус","Wyłączenie korekcji promienia","Cancel cutter compensation","G40"],
 ["G41","Коррекция на радиус слева","Korekcja promienia z lewej","Cutter compensation left","G41 D01 X10"],
 ["G42","Коррекция на радиус справа","Korekcja promienia z prawej","Cutter compensation right","G42 D01 X10"],
 ["G43","Коррекция длины инструмента (+)","Korekcja długości narzędzia (+)","Tool length compensation (+)","G43 H01 Z50"],
 ["G49","Отмена коррекции длины","Wyłączenie korekcji długości","Cancel tool length compensation","G49"],
 ["G50","Ограничение оборотов / сдвиг системы (токарн.)","Ograniczenie obrotów / przesunięcie układu (toczenie)","Max spindle speed / coordinate preset (lathe)","G50 S3000"],
 ["G54","Рабочая система координат 1 (G54–G59)","Układ współrzędnych roboczych 1 (G54–G59)","Work coordinate system 1 (G54–G59)","G54"],
 ["G70","Чистовой цикл (токарн., Fanuc)","Cykl wykańczający (toczenie, Fanuc)","Finishing cycle (lathe, Fanuc)","G70 P10 Q20"],
 ["G71","Черновой цикл продольного точения (Fanuc)","Cykl zgrubny toczenia wzdłużnego (Fanuc)","Roughing cycle, turning (Fanuc)","G71 U2 R1"],
 ["G73","Цикл сверления с ломкой стружки (высокоскоростной)","Cykl wiercenia z łamaniem wióra","High-speed peck drilling cycle","G73 Z-20 R2 Q3 F100"],
 ["G76","Цикл нарезания резьбы (токарн.)","Cykl gwintowania (toczenie)","Threading cycle (lathe)","G76 P020060 Q50 R20"],
 ["G80","Отмена постоянного цикла","Anulowanie cyklu stałego","Cancel canned cycle","G80"],
 ["G81","Цикл сверления","Cykl wiercenia","Drilling cycle","G81 Z-15 R2 F100"],
 ["G82","Сверление с выдержкой","Wiercenie z postojem","Drilling with dwell","G82 Z-10 R2 P500 F100"],
 ["G83","Цикл глубокого сверления (с выводом)","Cykl wiercenia głębokiego (z wycofaniem)","Peck drilling cycle","G83 Z-40 R2 Q5 F100"],
 ["G84","Цикл нарезания резьбы метчиком","Cykl gwintowania gwintownikiem","Tapping cycle","G84 Z-15 R5 F1.5"],
 ["G85","Растачивание (подача — подача)","Wytaczanie (posuw – posuw)","Boring cycle (feed in, feed out)","G85 Z-20 R2 F80"],
 ["G90","Абсолютное программирование","Programowanie absolutne","Absolute positioning","G90"],
 ["G91","Программирование в приращениях","Programowanie przyrostowe","Incremental positioning","G91"],
 ["G92","Установка/смещение системы координат","Ustawienie układu współrzędnych","Set coordinate system / offset","G92 X0 Y0"],
 ["G94","Подача в мм/мин","Posuw w mm/min","Feed per minute","G94"],
 ["G95","Подача в мм/об","Posuw w mm/obr","Feed per revolution","G95"],
 ["G96","Постоянная скорость резания","Stała prędkość skrawania","Constant surface speed","G96 S200"],
 ["G97","Постоянные обороты шпинделя","Stałe obroty wrzeciona","Constant spindle speed (RPM)","G97 S1500"],
 ["G98","Возврат на начальную плоскость в цикле","Powrót do płaszczyzny początkowej w cyklu","Return to initial level in cycle","G98"],
 ["G99","Возврат на плоскость R в цикле","Powrót do płaszczyzny R w cyklu","Return to R level in cycle","G99"]
];
const MCODES = [
 ["M00","Безусловный останов программы","Bezwarunkowy stop programu","Program stop","M00"],
 ["M01","Условный останов (Optional stop)","Warunkowy stop (Optional stop)","Optional stop","M01"],
 ["M02","Конец программы","Koniec programu","Program end","M02"],
 ["M03","Шпиндель по часовой стрелке","Wrzeciono w prawo","Spindle on clockwise","M03 S1500"],
 ["M04","Шпиндель против часовой стрелки","Wrzeciono w lewo","Spindle on counter-clockwise","M04 S1500"],
 ["M05","Остановка шпинделя","Zatrzymanie wrzeciona","Spindle stop","M05"],
 ["M06","Смена инструмента","Wymiana narzędzia","Tool change","T02 M06"],
 ["M07","Охлаждение туманом","Chłodzenie mgłą","Mist coolant on","M07"],
 ["M08","Включение СОЖ","Włączenie chłodziwa","Coolant on","M08"],
 ["M09","Выключение СОЖ","Wyłączenie chłodziwa","Coolant off","M09"],
 ["M10","Зажим (оси / приспособления)","Zacisk (osi / uchwytu)","Clamp","M10"],
 ["M11","Разжим","Rozpięcie","Unclamp","M11"],
 ["M19","Ориентация шпинделя","Orientacja wrzeciona","Spindle orientation","M19"],
 ["M30","Конец программы и возврат в начало","Koniec programu i powrót na początek","Program end and rewind","M30"],
 ["M48","Разрешить корректировку подачи/оборотов","Włączenie korekcji posuwu/obrotów","Enable feed/speed override","M48"],
 ["M49","Запретить корректировку подачи/оборотов","Wyłączenie korekcji posuwu/obrotów","Disable feed/speed override","M49"],
 ["M98","Вызов подпрограммы","Wywołanie podprogramu","Subprogram call","M98 P1000 L3"],
 ["M99","Конец подпрограммы / возврат","Koniec podprogramu / powrót","Subprogram end / return","M99"]
];

/* Control-specific references: [code, ru, pl, en, example] */
const HAASCODES = [
 ["G47","Гравировка текста и серийных номеров","Grawerowanie tekstu i numerów seryjnych","Text engraving / serial numbers","G47 P0 X10 Y10 I0.5 J0 R0.1 Z-0.2 F100 (TEXT)"],
 ["G65","Вызов макроса с аргументами","Wywołanie makra z argumentami","Macro subprogram call with arguments","G65 P9810 A1.0 B2.0"],
 ["G68","Поворот системы координат","Obrót układu współrzędnych","Coordinate rotation","G68 X0 Y0 R45"],
 ["G69","Отмена поворота","Anulowanie obrotu","Cancel rotation","G69"],
 ["G103","Ограничение просмотра кадров вперёд","Ograniczenie podglądu bloków","Limit block lookahead","G103 P1"],
 ["G107","Цилиндрическое отображение (фрезерование на цилиндре)","Mapowanie cylindryczne","Cylindrical mapping","G107 Y0 R25.4"],
 ["G154","Расширенные системы координат P1–P99","Rozszerzone układy współrzędnych P1–P99","Extended work offsets P1–P99","G154 P20"],
 ["G187","Настройка гладкости и точности (Smoothness)","Ustawienie gładkości i dokładności","Accuracy / smoothness control","G187 P2 E0.01"],
 ["M19","Ориентация шпинделя (P/R — угол)","Orientacja wrzeciona (P/R — kąt)","Orient spindle (P/R angle)","M19 R180"],
 ["M97","Вызов локальной подпрограммы по N","Wywołanie lokalnego podprogramu po N","Local subprogram call by N","M97 P100"],
 ["M109","Интерактивный ввод оператора","Interaktywne zapytanie do operatora","Interactive user input","M109 P500"],
 ["#3000","Аварийный сигнал из программы","Alarm z programu","Program-generated alarm","#3000 (CHECK PART)"],
 ["#3006","Сообщение оператору с остановом","Komunikat dla operatora ze stopem","Operator message with stop","#3006=1 (CHANGE JAWS)"],
 ["M130","Показать медиафайл/изображение на экране","Wyświetlenie pliku multimedialnego","Display media on screen","M130 (setup.png)"]
];
const SIEMENSCODES = [
 ["CYCLE81","Сверление, зенкование центровки","Wiercenie, nawiercanie","Drilling, centering","CYCLE81(100,0,2,-15)"],
 ["CYCLE82","Сверление с выдержкой на дне","Wiercenie z postojem na dnie","Drilling, counterboring (dwell)","CYCLE82(100,0,2,-15,,0.5)"],
 ["CYCLE83","Глубокое сверление","Wiercenie głębokie","Deep-hole drilling","CYCLE83(100,0,2,-40,,-10,,5,...)"],
 ["CYCLE84","Нарезание резьбы метчиком (жёсткое)","Gwintowanie sztywne","Rigid tapping","CYCLE84(100,0,2,-15,,0,3,,1.5)"],
 ["CYCLE85","Развёртывание","Rozwiercanie","Reaming","CYCLE85(100,0,2,-20,,0,200,400)"],
 ["CYCLE86","Растачивание с остановом шпинделя","Wytaczanie z zatrzymaniem wrzeciona","Boring with spindle stop","CYCLE86(100,0,2,-20,,0.5,3,0,0.5,0.5,0)"],
 ["MCALL","Модальный вызов цикла","Modalne wywołanie cyklu","Modal cycle call","MCALL CYCLE81(100,0,2,-15)"],
 ["HOLES1","Ряд отверстий на линии","Rząd otworów na prostej","Hole row on a line","HOLES1(0,0,0,10,5)"],
 ["HOLES2","Отверстия по окружности","Otwory na okręgu","Hole circle","HOLES2(0,0,40,0,45,8)"],
 ["POCKET3","Прямоугольный карман","Kieszeń prostokątna","Rectangular pocket","POCKET3(100,0,2,-10,40,30,...)"],
 ["CYCLE72","Фрезерование контура","Frezowanie konturu","Contour milling","CYCLE72(...)"],
 ["CYCLE832","Высокоскоростная обработка (допуски, сглаживание)","Obróbka HSC (tolerancje, wygładzanie)","High Speed Settings","CYCLE832(0.05,_FINISH)"],
 ["CYCLE800","Поворот плоскости обработки (5 осей)","Obrót płaszczyzny obróbki (5 osi)","Swivel plane / tilted plane","CYCLE800(1,\"TC1\",0,57,0,0,0,45,0,0,0,0,0,-1)"],
 ["CYCLE95","Токарный контурный цикл черновой/чистовой","Toczenie konturowe zgrubne/wykańczające","Turning stock removal cycle","CYCLE95(\"KONTUR\",2,0.2,0.1,...)"],
 ["CYCLE99","Нарезание резьбы (токарн.)","Gwintowanie (toczenie)","Thread cutting (lathe)","CYCLE99(0,0,-30,...)"],
 ["TRANS","Программируемое смещение нуля (абсолютное)","Programowane przesunięcie zera","Programmable zero offset","TRANS X10 Y20"],
 ["ATRANS","Аддитивное смещение нуля","Addytywne przesunięcie zera","Additive offset","ATRANS X5"],
 ["ROT","Поворот системы координат","Obrót układu współrzędnych","Rotation","ROT RPL=30"],
 ["MIRROR","Зеркальное отображение","Odbicie lustrzane","Mirror","MIRROR X0"],
 ["SCALE","Масштабирование","Skalowanie","Scale","SCALE X2 Y2"],
 ["G500","Отмена настраиваемых смещений","Anulowanie przesunięć ustawialnych","Cancel settable frame","G500"],
 ["G53","Подавление смещений в кадре (машинные координаты)","Wyłączenie przesunięć w bloku (współrz. maszyny)","Suppress offsets in block (machine coords)","G53 Z0"],
 ["G60 / G64 / G641","Точный останов / непрерывный режим / сглаживание углов","Dokładne zatrzymanie / ruch ciągły / zaokrąglanie","Exact stop / continuous path / path rounding","G641 ADIS=0.5"],
 ["G450 / G451","Обход углов по дуге / по пересечению","Naroża: łuk / przecięcie","Corners: circle / intersection","G450"],
 ["CHF / RND","Фаска / скругление угла в контуре","Fazowanie / zaokrąglenie narożnika","Chamfer / round corner","G1 X20 CHF=2"],
 ["TRAORI","Включение трансформации 5 осей (TCP)","Włączenie transformacji 5 osi (TCP)","5-axis transformation on (TCP)","TRAORI(1)"],
 ["TRAFOOF","Отключение трансформации","Wyłączenie transformacji","Transformation off","TRAFOOF"],
 ["DIAMON / DIAMOF","Программирование диаметром / радиусом (токарн.)","Programowanie średnicy / promienia (toczenie)","Diameter / radius programming (lathe)","DIAMON"],
 ["SPOS","Позиционирование шпинделя","Pozycjonowanie wrzeciona","Spindle positioning","SPOS=90"],
 ["LIMS","Ограничение оборотов при G96","Ograniczenie obrotów przy G96","Speed limit with G96","G96 S200 LIMS=3000"],
 ["STOPRE","Остановка предварительной обработки кадров","Zatrzymanie wyprzedzania bloków","Preprocessing stop","STOPRE"],
 ["MSG","Сообщение оператору","Komunikat dla operatora","Operator message","MSG(\"CHECK CLAMP\")"],
 ["GOTOF / GOTOB / LABEL","Переход вперёд / назад по метке","Skok do przodu / do tyłu do etykiety","Jump forward / backward to label","GOTOF END_LBL"],
 ["R-параметры / DEF","Переменные: R1=…, DEF REAL VAR1","Zmienne: R1=…, DEF REAL VAR1","Variables: R1=…, DEF REAL VAR1","R1=R1+5"],
 ["WHILE … ENDWHILE","Цикл с условием","Pętla warunkowa","Conditional loop","WHILE R1<10 … ENDWHILE"],
 ["IF … ELSE … ENDIF","Условие","Warunek","Conditional","IF R1>5 … ENDIF"],
 ["REPEAT … UNTIL","Повтор до условия","Powtarzaj do warunku","Repeat until","REPEAT … UNTIL R1>10"],
 ["TCARR","Выбор поворотного стола/головки (5 осей)","Wybór stołu/głowicy obrotowej (5 osi)","Toolcarrier selection (5-axis)","TCARR=1"]
];
const HEIDENHAINCODES = [
 ["BEGIN PGM / END PGM","Начало / конец программы","Początek / koniec programu","Program begin / end","0 BEGIN PGM TEST MM"],
 ["BLK FORM","Определение заготовки","Definicja półfabrykatu","Workpiece blank definition","BLK FORM 0.1 Z X0 Y0 Z-20"],
 ["TOOL CALL","Вызов инструмента (+ S, оси)","Wywołanie narzędzia (+ S, oś)","Tool call","TOOL CALL 5 Z S3000"],
 ["TOOL DEF","Предварительный выбор инструмента","Wstępny wybór narzędzia","Tool pre-selection","TOOL DEF 6"],
 ["L","Прямая (линейное перемещение)","Prosta (ruch liniowy)","Straight line","L X+50 Y+20 R0 F300 M3"],
 ["FMAX","Ускоренный ход","Posuw szybki","Rapid traverse","L Z+100 R0 FMAX"],
 ["CC / C","Центр окружности / дуга","Środek okręgu / łuk","Circle center / arc","CC X+0 Y+0  C X+20 DR+"],
 ["CR","Дуга по радиусу","Łuk wg promienia","Arc with radius","CR X+20 Y+10 R+10 DR-"],
 ["CT","Дуга с касательным переходом","Łuk styczny","Tangential arc","CT X+30 Y+0"],
 ["CP","Полярная окружность","Okrąg w biegunowych","Circular path polar","CP IPA+360 DR+"],
 ["RND / CHF","Скругление / фаска угла","Zaokrąglenie / fazowanie narożnika","Rounding / chamfer","RND R5   CHF 2"],
 ["APPR / DEP","Подход / отход от контура","Dojście do / odejście od konturu","Approach / depart contour","APPR LCT X+0 Y+10 R5 RL F250"],
 ["RL / RR / R0","Коррекция радиуса слева / справа / откл.","Korekcja promienia lewa / prawa / wył.","Radius compensation left / right / off","L X+20 RL"],
 ["CYCL DEF 200","Сверление","Wiercenie","Drilling","CYCL DEF 200 DRILLING"],
 ["CYCL DEF 201","Развёртывание","Rozwiercanie","Reaming","CYCL DEF 201 REAMING"],
 ["CYCL DEF 202","Растачивание","Wytaczanie","Boring","CYCL DEF 202 BORING"],
 ["CYCL DEF 203","Универсальное сверление","Wiercenie uniwersalne","Universal drilling","CYCL DEF 203 UNIVERSAL DRILLING"],
 ["CYCL DEF 205","Универсальное глубокое сверление","Uniwersalne wiercenie głębokie","Universal pecking","CYCL DEF 205 UNIVERSAL PECKING"],
 ["CYCL DEF 206 / 207","Резьба метчиком с компенсатором / жёстко","Gwintowanie z kompensacją / sztywne","Tapping with floating holder / rigid","CYCL DEF 207 RIGID TAPPING"],
 ["CYCL DEF 209","Нарезание резьбы с ломкой стружки","Gwintowanie z łamaniem wióra","Tapping with chip breaking","CYCL DEF 209 TAPPING W/ CHIP BRKG"],
 ["CYCL DEF 220 / 221","Образец отверстий: по окружности / по сетке","Wzór otworów: na okręgu / siatka","Pattern: polar / cartesian","CYCL DEF 221 CARTESIAN PATTERN"],
 ["CYCL DEF 232","Фрезерование плоскости","Frezowanie planowe","Face milling","CYCL DEF 232 FACE MILLING"],
 ["CYCL DEF 251","Прямоугольный карман (полная обработка)","Kieszeń prostokątna (pełna obróbka)","Rectangular pocket complete","CYCL DEF 251 RECTANGULAR POCKET"],
 ["CYCL DEF 252","Круглый карман","Kieszeń okrągła","Circular pocket","CYCL DEF 252 CIRCULAR POCKET"],
 ["CYCL DEF 253 / 254","Паз / круговой паз","Rowek / rowek kołowy","Slot / circular slot","CYCL DEF 253 SLOT MILLING"],
 ["CYCL DEF 256 / 257","Прямоугольный / круглый выступ","Czop prostokątny / okrągły","Rectangular / circular stud","CYCL DEF 257 CIRCULAR STUD"],
 ["CYCL DEF 7","Смещение нулевой точки","Przesunięcie punktu zerowego","Datum shift","CYCL DEF 7.0 DATUM SHIFT"],
 ["CYCL DEF 10 / 11 / 8","Поворот / масштаб / зеркало","Obrót / skalowanie / odbicie","Rotation / scaling / mirror image","CYCL DEF 10.0 ROTATION"],
 ["CYCL DEF 14 / 20–25","Контур и SL-циклы (карманы по контуру)","Kontur i cykle SL","Contour geometry and SL cycles","CYCL DEF 14.0 CONTOUR GEOMETRY"],
 ["CYCL CALL","Вызов цикла","Wywołanie cyklu","Cycle call","CYCL CALL M3"],
 ["PLANE SPATIAL / PLANE RESET","Наклон плоскости обработки / сброс","Nachylenie płaszczyzny obróbki / reset","Tilt working plane / reset","PLANE SPATIAL SPA+0 SPB+45 SPC+0 TURN MB MAX F5000"],
 ["TCH PROBE 4xx","Измерительные циклы щупа","Cykle pomiarowe sondy","Touch probe cycles","TCH PROBE 412 DATUM INSIDE CIRCLE"],
 ["M3 / M4 / M5","Шпиндель вправо / влево / стоп","Wrzeciono prawo / lewo / stop","Spindle cw / ccw / stop","L X+0 M3"],
 ["M8 / M9","СОЖ вкл / выкл","Chłodziwo wł. / wył.","Coolant on / off","L Z+2 M8"],
 ["M91 / M92","Координаты относительно нуля станка","Współrzędne względem zera maszyny","Machine-datum coordinates","L X+0 Y+0 R0 FMAX M91"],
 ["M126","Кратчайший путь вращения оси","Najkrótsza droga osi obrotowej","Shortest path rotary axes","M126"],
 ["M128 / M129","TCPM: удержание вершины инструмента вкл / выкл","TCPM: utrzymanie końcówki narzędzia wł. / wył.","TCPM tool-tip tracking on / off","M128 F1000"],
 ["M30","Конец программы","Koniec programu","End of program","M30"],
 ["Q-параметры / FN","Переменные: Q1=…, FN 0: Q1 = +5","Parametry Q: Q1=…, FN 0: Q1 = +5","Q parameters: Q1=…, FN 0: Q1 = +5","FN 0: Q1 = +5"],
 ["FN 9 / FN 10","Условный переход если равно / не равно","Skok warunkowy jeśli równe / różne","Conditional jump if equal / not equal","FN 9: IF +Q1 EQU +5 GOTO LBL 3"],
 ["LBL / CALL LBL","Метка / вызов подпрограммы или повтор","Etykieta / wywołanie podprogramu lub powtórzenie","Label / subprogram call or repeat","CALL LBL 10 REP 3"],
 ["STOP","Останов программы","Zatrzymanie programu","Program stop","STOP"]
];
const CONTROLS = {
  iso: {k:"ctl_iso", sets:{G:GCODES, M:MCODES}},
  haas: {k:"ctl_haas", list:HAASCODES},
  siemens: {k:"ctl_siemens", list:SIEMENSCODES},
  heid: {k:"ctl_heid", list:HEIDENHAINCODES}
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
