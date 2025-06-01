const Menu = document.getElementById('MENU');
document.getElementById('MenuButtom').addEventListener('click', () =>{
 Menu.style.display = "block";
});

window.addEventListener('click', (ev) => {
    if (ev.target === Menu ){
    Menu.style.display = 'none';
    }
});

const MModal = document.getElementById('modal1');
document.getElementById('language').addEventListener('click', () => {
 MModal.style.display = "block";
});

window.addEventListener('click', (ev) => {
    if (ev.target === MModal ){
    MModal.style.display = 'none';
    }
});

const ABOUTSITE = document.getElementById('ABOUTSITE')
document.getElementById('AboutSite').addEventListener('click', () =>{
   ABOUTSITE.style.display = 'block';
   Menu.style.display = 'none'
})

document.getElementById('AboutSite2').addEventListener('click', () =>{
   ABOUTSITE.style.display = 'block';
   Menu.style.display = 'none'
})

window.addEventListener('click', (ev) => {
 if (ev.target === ABOUTSITE){
  ABOUTSITE.style.display= 'none'
 }
})

 document.getElementById('back').addEventListener('click', () => {
  PROVALE.style.display ='none'
  H1.style.width = '100vw';
 })

const easyWordsRU = [
  "в", "на", "с", "по", "за", "из", "от", "к", "у", "о", "до", "без", "про", "при", "под", "над", "перед", "после", "между", "через", "дом", "кот", "сад", "рот", "нос", "год", "сон", "зуб", "дым", "шар", "суп", "мяч", "лес", "мост", "лист", "стол", "пол", "код", "час", "мех", "ест", "пил", "спит", "шел", "брал", "дал", "жил", "бил", "мыл", "пел", "сел", "рвал", "лил", "пил", "жил", "был", "брал", "дал", "ждал", "спал", "тихий", "злой", "громкий", "новый", "старый", "белый", "черный", "добрый", "здоровый", "горячий", "холодный", "мокрый", "сухой", "глухой", "слепой", "вода", "земля", "огонь", "воздух", "камень", "песок", "глина", "железо", "золото", "серебро", "медь", "уголь", "соль", "сахар", "молоко", "птица", "рыба", "зверь", "конь", "волк", "лось", "заяц", "лось", "лось", "лось", "лось", "лось", "лось", "лось", "лось", "лось", "лось", "день", "ночь", "утро", "вечер", "зима", "весна", "лето", "осень", "месяц", "год", "час", "минута", "секунда", "неделя", "понедельник", "рука", "нога", "голова", "спина", "грудь", "шея", "палец", "волос", "глаз", "ухо", "нос", "рот", "зуб", "язык", "сердце", "печень", "стол", "стул", "кровать", "шкаф", "полка", "лампа", "окно", "дверь", "стена", "потолок", "пол", "крыша", "лестница", "забор", "ворота",  
  "книга", "лист", "бумага", "перо", "карандаш", "ручка", "тетрадь", "дневник", "журнал", "газета", "письмо", "конверт", "адрес", "почта", "дождь", "снег", "ветер", "град", "туман", "роса", "иней", "гроза", "молния", "гром", "радуга", "солнце", "луна", "звезда", "облако", "город", "село", "деревня", "улица", "дорога", "площадь", "парк", "сад", "река", "мост", "берег", "остров", "гора", "лес", "поле", "работа", "завод", "фабрика", "магазин", "рынок", "школа", "больница", "театр", "кино", "музей", "библиотека", "церковь", "храм", "суд", "друг", "враг", "брат", "сестра", "мать", "отец", "дед", "баба", "дядя", "тетя", "сын", "дочь", "муж", "жена", "сват", "цвет", "форма", "размер", "вес", "объем", "цена", "стоимость", "количество", "расстояние", "скорость", "сила", "давление", "температура", "время", "я", "ты", "он", "она", "оно", "мы", "вы", "они", "себя", "мой", "твой", "его", "ее", "наш", "ваш", "их", "свой", "кто", "что", "какой", "чей", "где", "куда", "откуда", "когда", "как", "почему", "зачем", "сколько", "который", "тот", "этот", "такой", "или", "и", "а", "но", "да", "нет", "не", "ни", "же", "бы", "ли", "раз", "ведь", "вот", "еще", "уже", "тоже", "очень", "почти", "совсем", "еле", "чуть", "едва", "вдруг", "сразу", "потом", "теперь", "здесь", "там", "тут", "везде", "нигде", "никогда", "можно", "нельзя", "нужно", "должен", "возможно", "надо", "хочу", "могу", "знаю", "вижу", "слышу", "чувствую", "думаю", "верю", "боюсь", "люблю", "иди", "стой", "беги", "прыгай", "лети", "плыви", "лежи", "сиди", "стой", "гляди", "слушай", "молчи", "кричи", "шепчи", "говори", "читай", "правый", "левый", "верхний", "нижний", "передний", "задний", "боковой", "центральный", "крайний", "средний", "внутренний", "наружный", "дальний", "ближний", "первый", "второй", "третий", "четвертый", "пятый", "шестой", "седьмой", "восьмой", "девятый", "десятый", "последний", "следующий", "предыдущий", "каждый", "любой", "свет", "тьма", "деньги", "богатство", "бедность", "счастье", "горе", "радость", "грусть", "страх", "гнев", "любовь", "ненависть", "добро", "зло", "правда", "ложь"
];

const normalWordsRU = [
  "вулкан", "парашют", "алгоритм", "восторг", "кристалл", "гармония", "цунами", "робот", "мечта", "гейзер", "радуга", "искра", "бриллиант", "лазер", "энергия", "комета", "вихрь", "орбита", "закат", "голограмма", "метеорит", "иллюзия","палитра", "эволюция", "фейерверк", "калейдоскоп", "квант", "ностальгия", "архипелаг", "трансформер", "самовар", "эхо", "фреска", "дирижабль", "атом", "мозаика", "витраж", "компас", "сфинкс", "осьминог", "лавина", "пазл", "граффити", "колибри", "пещера", "факел", "хрусталь", "цветение", "чертополох", "шалаш", "щебет", "от", "за", "при", "из", "к", "о", "через", "что", "так", "или", "да", "если", "вдоль","по", "для", "от", "за", "при", "в",
  "мираж", "магма",  "рация", "алхимия", "телескоп", "батискаф", "капля", "громоотвод", "айсберг", "коралл", "мерцание", "парусник", "электричество", "кенгуру", "маятник", "пеликан", "радар", "торнадо", "фламинго", "хамелеон", "циклон", "шахматы", "щепка", "энциклопедия", "юла", "якорь", "аметист", "броненосец", "вертолет", "глобус", "дротик", "жасмин", "зефир", "иней", "мозг", "кварц", "лабиринт", "метель",  "нефрит", "озон", "память", "рассвет", "светлячок", "талисман", "ураган",  "эгоист", "юнга", "ящерица", "азарт", "в", "на", "с", "по", "для","между", "над", "под", "вместо", "без", "как", "вокруг", "внутри", "после", "до", "в", "на","с", "к", "из", "на", "при", "за", "от", "в", "по", "с"
];

const hardWordsRU = [
  "абстракция", "автономия", "агрессия", "акклиматизация", "аккомпанемент", "алгоритм", "аналогия", "антидот", "антифриз", "апостроф", "аристократия", "ассимиляция", "атмосфера", "аффект", "балансировка", "бюрократия", "вакцинация", "вальсировка", "взаимодействие", "взаимозависимость", "взаимопонимание", "взаимосвязь", "вдохновение", "взаимозаменяемость", "гипотеза", "глобализация", "гуманитаризм", "декларация", "декомпозиция", "демократия", "дискриминация", "дисфункция", "дистанция", "долгосрочный", "досуг", "доступность", "достаточность", "древесина", "заблуждение", "заимствование", "зависимость", "законодательство", "запрет", "заслуженность", "инновация", "интерпретация", "интеграция", "инфраструктура", "квалификация", "климатизация", "коллаборация", "комплексность", "концепция", "конфликт", "критерий", "критика", "критический", "лицензирование", "логистика", "манипуляция", "математика", "медитация", "модернизация", "модификация", "мультипликация", "наследие", "научность", "недостаточность", "недоразумение", "недостаток", "нормализация", "объективность", "обоснование", "объединение", "обсуждение", "оптимизация", "организация", "оригинальность", "парадигма", "параметр", "параллелепипед", "первоначальность", "планирование", "платформа", "познавательность", "познавательный", "практика", "приоритет", "принятие", "принцип", "продуктивность", "психология", "разнообразие", "разработка", "размышление", "реализация", "реакция", "реальность", "реформирование", "результативность", 
  "согласование", "система", "систематизация", "системность", "системный", "сложность", "сознание", "способность", "стратегия", "структура", "субъективность", "субъект", "технология", "трансформация", "управление", "упрощение", "успешность", "феномен", "философия", "функция", "функциональность", "эксперимент", "экспертиза", "экспрессия", "эксплуатация", "эксплорация", "юриспруденция", "абстрактный", "агрессивный", "активный", "алгоритмический", "анализ", "антисоциальный", "архаичный", "ассоциативный", "базовый", "бюрократический", "взаимозаменяемый", "взаимосвязанность", "взаимозависимый", "взаимопонимание", "взаимосвязанный", "вдохновляющий", "взаимодействующий", "глобальный", "гуманитарный", "декларативный", "демократический", "дисфункциональный", "долгосрочный", "заблуждающийся", "заимствованный", "зависимый", "законодательный", "заслуживающий", "инновационный", "информативный", "интернациональный", "критический", "модернизированный"
];

const easyWordsEN = [
  "apple", "ball", "cat", "dog", "egg", "fish", "goat", "hat", "ice", "jam", "kite", "leaf", "moon", "nest", "owl", "pen", "queen", "rose", "sun", "toy", "ant", "box", "car", "duck", "ear", "fan", "grape", "hand", "ink", "jet", "key", "lamp", "man", "nut", "orange", "pig", "quilt", "ring", "star", "tree", "umbrella", "van", "whale", "xray", "yarn", "zebra", "bat", "cup", "drum", "ear", "frog", "gate", "hill", "iron", "joke", "kite", "lamp", "moon", "nose", "pear", "quack", "road", "sock", "tent", "unit", "vase", "wind", "yolk", "zoo", "arch", "bark", "clap", "dive", "echo", "flame", "glow", "hike", "jump", "kick", "leap", "mop", "nod", "owl", "palm", "quiz", "race", "sink", "tide", "urge", "vow", "warp", "yell", "zoom", "axe", "breeze", "chill", "dawn", "ease", "frost", "gaze", "hush", "idle", "jolt", "keel", "lure", "mend", "nest", "ogle", "plum", "quill", "ride", "sway", "tuck", "urge", "vow", "wade", "yarn", "zest", "bowl", "cage",
  "dare", "ease", "fend", "gash", "hike", "inch", "jibe", "knot", "lump", "moth", "nook", "peep", "quiz", "rack", "slip", "tame", "urge", "veil", "warp", "yolk", "bake", "chop", "drip", "exit", "flee", "gaze", "heal", "ink", "jog", "kite", "loop", "mop", "nail", "oak", "plow", "quilt", "rush", "sail", "tide", "urge", "vibe", "whip", "yarn", "zip", "bark", "clog", "dare", "ease", "fawn", "glow", "hush", "idle", "jive", "kite", "lure", "mend", "nook", "ogle", "plum", "quill", "race", "sway", "tame", "urge", "vow", "warp", "yolk", "zest", "arch", "bark"
];

const normalWordsEN = [
  "quasar", "flamingo", "portal", "albatross", "geyser", "graffiti", "crystal", "tent", "armadillo", "hologram",  "tsunami", "origami", "porcupine", "telescope", "safari", "meteorite", "firework", "kangaroo", "laser",  "eclipse", "stainedglass", "canyon", "octopus", "hoverboard", "comet", "archeology", "parachute", "jellyfish",  "mosaic", "walkietalkie", "hummingbird", "vacuum", "funicular", "pelican", "avalanche","biology","droplet", "taiga", "navigator", "visa", "maze","cruise", "artifact", "relic", "hieroglyph", "silencer", "manuscript", "alphabet", "astronaut", "lake", "kaleidoscope", "shadow", "zodiac", "of", "in", "on", "at", "by", "for","through", "during", "before", "after", "above", "out", "from", "to", "as", "within", "except", "along","near", "after", "during", "before",
  "squid",  "robot", "waterfall", "saxophone", "drone", "eiffel", "paleontology", "kayak", "illusion", "volcano", "camping", "rainbow", "mountaineering", "microscope", "chameleon", "iceberg", "animation", "ecosystem", "narwhal", "compass", "blizzard", "koala", "evolution", "cablecar", "physics", "dew", "diving", "globe", "chemistry", "sunset", "transformer", "quartz", "ballet", "bubble", "savanna", "passport", "echo", "isotope", "coral", "easel", "paradox", "projector",  "suitcase", "sunfish", "map", "ornament", "expedition", "cave", "silhouette", "fresco", "sketch", "emerald", "puzzle", "galaxy", "with", "about", "against", "between", "among", "below", "under", "over", "across", "toward", "into", "like", "without", "despite", "until", "around", "besides", "alongside", "about", "against"
];

const hardWordsEN = [
  "abomination", "accelerate", "accessibility", "accompaniment", "acquaintance", "adventurous", "aesthetically", "aggressiveness", "allegiance", "ambitious", "anesthetize", "apprehension", "articulation", "assassination", "atmospheric", "authorization", "beneficiary", "brilliantly", "calculation", "characteristic", "collaboration", "communication", "complication", "concentration", "congratulation", "consequences", "consideration", "contribution", "conventional", "cooperation", "declaration", "dedication", "demonstration", "development", "deterioration", "determination", "disappointment", "discrimination", "distinction", "education", "embarrassment", "exaggeration", "exhilaration", "expectation", "explanation", "extraordinary", "fascination", "formidable", "friendliness", "fundamental", "generosity", "governmental", "graciousness", "imagination", "implementation", "individuality", "information", "inspiration", "intelligence", "introduction", "justification", "knowledgeable", "legislation", "manipulation", "mathematical", "metamorphosis", "motivation", "observation", "organization", "participation",
  "perseverance", "personification", "philosophical", "preparation", "procrastination", "professionalism", "progression", "protection", "qualification", "realization", "recommendation", "relationship", "representation", "responsibility", "satisfaction", "significance", "simplification", "speculation", "substantial", "sophisticated", "sustainability", "technological", "transformation", "understanding", "vulnerability", "abstruse", "adventitious", "allegorical", "apprehensive", "arbitrary", "camaraderie", "categorial", "circumference", "conscientious", "conspicuous", "contemplation", "debilitating", "differentiation", "discombobulated", "disparity", "effervescence", "efficiency", "exasperation", "exhilarating", "fellowship", "heterogeneous", "hypothetical", "imperturbable", "incomprehensible", "incongruous", "inconvenience", "interdisciplinary", "intermediary", "irrefutable", "juxtaposition", "metaphorical", "multidimensional", "nonchalant", "opportunistic", "overwhelming", "paradoxical", "perpendicular", "perspective", "preliminary", "proficient", "proliferation", "quintessential", "reconciliation", "revolutionary", "sophistication", "spontaneity", "synchronization", "unprecedented", "vicariously", "vulnerability", "zealousness", "abstruseness", "acclimatization", "adventurousness", "antagonistic", "artificiality", "characterization", "compartmentalization", "differentiation", "disillusionment", "disproportionate", "excommunication", "exclusivity", "extraordinariness", "generalization", "interrelationship", "misinterpretation", "neuroscientific", "overcompensation", "overgeneralization", "philosophical", "preoccupation", "rejuvenation", "revolutionizing", "uncontrollability"
];

const MurkaQuotesRU = [
  ["Счастье", "=", "реальность", "-", "ожидания"], ["Плохое", "вытесняй", "хорошим", "-", "влей", "кефир", "в", "бочку", "дерьма"],["Лучше", "страдать", "на", "корабле,", "чем", "умереть", "в", "вакууме"], ["Интересный", "человек", "-", "это", "тот,", "кто", "интересуется.", "Где", "взять", "интерес", "к", "жизни?", "ИНТЕРЕСОВАТЬСЯ", "ЕЙ!!!"],
  ["Делай", "то,", "что", "нужно,", "а", "не", "то,", "что", "хочется"], ["Забудь", "о", "себе", "-", "делай", "для", "других"], ["Растворяй", "Я", "в", "коллективе", "-", "экипаж", "важнее", "индивидуализма"], ["Всегда", "говори", "да"], ["Будь", "предсказуемым"], ["Неискренних", "людей", "нет", "-", "есть", "невоспитанные"], ["Продавай", "себя", "правильно", "-", "внешний", "вид", "+", "содержание"],
  ["Деньги", "=", "свобода", "-", "пока", "их", "нет,", "нельзя", "говорить", "нет"], ["Не", "доверяй", "себе"], ["Будь", "готов", "к", "везению", "-", "шанс", "даётся", "подготовленным"], ["Учись", "через", "ассоциации", "и", "объяснения", "-", "если", "можешь", "научить", "другого,", "значит,", "понял", "сам"], ["Если", "ты", "никто,", "то", "тебя", "нельзя", "обидеть,", "ущемить,", "забыть", "или", "увидеть,", "потому", "что", "ты", "пустое", "место"]
];

const MurkaQuotesEN = [
  ["Happiness", "=", "reality", "-", "expectations"], ["Displace", "the", "bad", "with", "good", "-", "pour", "kefir", "into", "a", "barrel", "of", "shit"], ["Better", "to", "suffer", "on", "a", "ship", "than", "to", "die", "in", "a", "vacuum"], ["An", "interesting", "person", "is", "one", "who", "is", "interested.", "Where", "to", "find", "interest", "in", "life?", "BE", "INTERESTED", "IN", "IT!!!"],
  ["Do", "what", "needs", "to", "be", "done,", "not", "what", "you", "want", "to", "do"], ["Forget", "about", "yourself,", "do", "for", "others"], ["Dissolve", "your", "ego", "in", "the", "collective", "-", "the", "crew", "is", "more", "important", "than", "individualism"], ["Always", "say", "YES"], ["Be", "predictable"], ["There", "are", "no", "insincere", "people", "-", "only", "ill-mannered", "ones"], ["Sell", "yourself", "right", "-", "appearance", "+", "substance"],
  ["Fuck", "you", "money"], ["Don't", "trust", "yourself"], ["Be", "ready", "for", "luck", "-", "chance", "favors", "the", "prepared"], ["Learn", "through", "associations", "and", "explanations", "-", "if", "you", "can", "teach", "someone", "else,", "you've", "understood", "it", "yourself"], ["If", "you're", "nobody,", "then", "you", "can't", "be", "offended,", "oppressed,", "forgotten", "or", "seen,", "because", "you're", "an", "empty", "space"]
];

const language = document.getElementById('language')
let D = 'RU' // показывает какой именно сейчас массив слов рус или англ
let Dq = 'EN'
let X = 'easy' // показывает уровень 
let F = 10 // показывает количестово слов 
let P = 'ENGLISH' // раскладка
let T = 15 // время  
let O = 'words'// показывае втоит у тебя время или слова или цитаты
let FF = 100 // счетчик линии каждый раз начинается со 100%
let Y = 'nopunctuation' // пунктуация 
let W = 'noquotes'
let G = 'noresult'

const RUbutton2 = document.getElementById('button2');
const ENbutton3 = document.getElementById('button3');

document.addEventListener('DOMContentLoaded', ()=>{
document.querySelector('.progress-fill2').style.display = 'block'  
  InactivityTimer()
  TTIMERWORDS ()
  newGame(normalWordsEN, 10);  
  Observe();
  addClass(ENbutton3, 'navod')
  removeaddClass (id10, Ten);
  removeaddClass (nnormal, normal);
  addClass(choiceOfWords, 'navod')
  ENGLISH ('keyboard');
  language.textContent = 'english';
  D = 'EN';
  P = 'ENGLISH';
  X = 'normal'; 
  O = "words"
  FF = 100
});

document.getElementById('button2').addEventListener('click',() =>{
document.querySelector('.progress-fill2').style.width = '100%';
  removeaddClass (nnormal, normal);
  addClass(RUbutton2, 'navod')
  removeClass( ENbutton3, 'navod')
  language.textContent = 'russian';
  RUSSIAN ('keyboard');
  D = 'RU';
  Dq = 'RU'
  P = 'RUSSIAN';
  X = 'normal';
  FF = 100
  if( W === 'quotes'){
    QUOTE (MurkaQuotesRU)
  } else if (O === "words" && Y === 'punctuation') {
  newGamePunctu(normalWordsRU, 10);
  removeaddClass (id10, Ten);
  } else if (O === "words" && Y === 'nopunctuation') {
   newGame(normalWordsRU, 10)
   removeaddClass(id10, Ten)
  } else {
   TTIMER(T)
   whatLevel(200)
  }
  Observe();
});

document.getElementById('button3').addEventListener('click',() =>{
document.querySelector('.progress-fill2').style.width = '100%';
  removeaddClass (nnormal, normal);
  addClass(ENbutton3, 'navod')
  removeClass( RUbutton2, 'navod')
  language.textContent = 'english';
  ENGLISH ('keyboard');
  D = 'EN';
  Dq = 'EN'
  P = 'ENGLISH';
  X = 'normal';
  FF = 100
  if (W = 'quotes'){
  QUOTE(MurkaQuotesEN)
  } else if (O === "words" &&  Y === 'punctuation') {
  newGamePunctu(normalWordsEN, 10);
  removeaddClass (id10, Ten);  
  } else if (O === "words" &&  Y === 'nopunctuation') {
  newGame(normalWordsEN, 10)
  removeaddClass(id10, Ten)
  } else {
    whatLevel(200)
  }
  Observe ();
});
  
  const easy = document.getElementById('easy');
  easy.addEventListener('click', () => {
  document.querySelector('.progress-fill2').style.width = '100%';
  const words = D === 'RU' ? easyWordsRU : easyWordsEN;
  X = 'easy';
  removeaddClass (eeasy, easy);
  FF = 100
  if ( O === "words") {
    howManyWords (words);
  } else {
    TTIMER(T)
    whatLevel(200)
  }
  })

  const normal = document.getElementById('normal');
  normal.addEventListener('click', () => {
  document.querySelector('.progress-fill2').style.width = '100%';
  const words = D === 'RU' ? normalWordsRU : normalWordsEN;
  X = 'normal';
  removeaddClass (nnormal, normal);
  FF = 100
  if ( O === "words") {
    howManyWords (words);
  } else {
    TTIMER(T)
    whatLevel(200)
  }
  })

  const hard = document.getElementById('hard');
  hard.addEventListener('click', () => {
  document.querySelector('.progress-fill2').style.width = '100%';
  const words = D === 'RU' ? hardWordsRU : hardWordsEN;
  X = 'hard';
  removeaddClass (hhard, hard);
  FF = 100
  if ( O === "words") {
    howManyWords (words);
  } else {
    TTIMER(T)
    whatLevel(200)
  }
  })

  const Ten = document.getElementById('Ten')
  Ten.addEventListener('click',() =>{
  document.querySelector('.progress-fill2').style.width = '100%';
  F = 10;
  whatLevel (F);
  removeaddClass (id10, Ten);
  FF = 100
  });

  const TwentyFive = document.getElementById('TwentyFive');
  TwentyFive.addEventListener('click',() =>{
  document.querySelector('.progress-fill2').style.width = '100%';
  F = 25;
  whatLevel (F);
  removeaddClass(id25, TwentyFive);
  FF = 100
  });

  const Fifty = document.getElementById('Fifty');
  Fifty.addEventListener('click',() =>{
  document.querySelector('.progress-fill2').style.width = '100%';
  F = 50;
  whatLevel (F);
  removeaddClass (id50, Fifty);
  FF = 100
  });

  const SeventyFive = document.getElementById('SeventyFive');
  SeventyFive.addEventListener('click',() =>{
  document.querySelector('.progress-fill2').style.width = '100%';
  F = 75;
  whatLevel (F);
  removeaddClass (id75, SeventyFive);
  FF = 100
  });

  const OneHundred = document.getElementById('OneHundred');
  OneHundred.addEventListener('click',() =>{
  document.querySelector('.progress-fill2').style.width = '100%';
  F = 100;
  whatLevel (F);
  removeaddClass (id100, OneHundred);
  FF = 100
  });

  const WordCountTime = document.getElementById('WordCountTime')
  const choiceOfWords = document.getElementById('choiceOfWords')
  const WordCountQuantity = document.getElementById('WordCountQuantity')
  const TiMe = document.getElementById('timer')
  
  TiMe.addEventListener('click', () =>{
  document.querySelector('.progress-fill2').style.display = 'none'
  document.querySelector('.progress-fill').style.display = 'block'
  document.querySelector('.progress-fill').style.width = '100%';
  WordCountTime.style.display = 'block'
  WordCountQuantity.style.display = 'none'
  Level.style.visibility = 'visible'
  cotaiterModal1.style.height ='300px'
  Punctuation.style.display = 'block'
  progressBar.style.display = 'block'
  language.textContent = 'english';
  addClass(ENbutton3, 'navod')
  removeClass( RUbutton2, 'navod')
  removeaddClass(TT45s, T45s);
  TTIMER(45)
  whatLevel (200)
  removeaddClass(Timer, TiMe)
  if ( Y === 'punctuation') {
  newGamePunctu(normalWordsEN, 200);
  } else if ( Y === 'nopunctuation') {
   newGame(normalWordsEN, 200)
  } 
  ENGLISH('keyboard')
  W = 'noquotes'
  O = "time"
  D = 'EN';
  SSTOP ()
  Observe();
  })

  choiceOfWords.addEventListener('click', () =>{  
  InactivityTimer()
  TTIMERWORDS ()
  document.querySelector('.progress-fill2').style.display = 'block'
  document.querySelector('.progress-fill2').style.width = '100%';
  document.querySelector('.progress-fill').style.display = 'none'
  WordCountTime.style.display = 'none' 
  WordCountQuantity.style.display = 'block'
  Level.style.visibility = 'visible'
  cotaiterModal1.style.height ='300px'
  Punctuation.style.display = 'block'
  progressBar.style.display = 'block'
  if ( Y === 'punctuation') {
  newGamePunctu(normalWordsEN, 10);
  } else if ( Y === 'nopunctuation') {
   newGame(normalWordsEN, 10)
  } 
  W = 'noquotes'
  addClass(ENbutton3, 'navod')
  removeClass(RUbutton2, 'navod')
  removeaddClass (id10, Ten);
  removeaddClass (nnormal, normal);
  ENGLISH ('keyboard');
  language.textContent = 'english';
  Observe();
  removeaddClass(ChoiceOfWordS, choiceOfWords)
  D = 'EN';
  P = 'ENGLISH';
  X = 'normal'; 
  O = "words"
  FF = 100
  STOP()
  
 })

  const T15s = document.getElementById('T15s')
  T15s.addEventListener('click', () =>{
   removeaddClass(TT15s, T15s);
   TTIMER(15)
   T = 15
   whatLevel (200)
  })

  const T30s = document.getElementById('T30s')
  T30s.addEventListener('click', () =>{
   removeaddClass(TT30s, T30s);
   TTIMER(30);
   T = 30
   whatLevel (200)
  })
   
  const T45s = document.getElementById('T45s')
  T45s.addEventListener('click', () =>{
   removeaddClass(TT45s, T45s);
   TTIMER(45);
   T = 45
   whatLevel (200)
  })
   
  const T1m = document.getElementById('T1m')
  T1m.addEventListener('click', () =>{
   removeaddClass(TT1m, T1m);
   TTIMER(60);
   T = 60
   whatLevel (200)
  })
  
  const T2m = document.getElementById('T2m')
  T2m.addEventListener('click', () =>{
  removeaddClass(TT2m, T2m);
  TTIMER(120);
  T = 120
  whatLevel (200)
  })

// Перемешивание слов 
 document.getElementById('Reboot').addEventListener('click', () =>{
  if ( O === "quote" && Dq === 'EN' ){
    QUOTE(MurkaQuotesEN)
  } else if ( O === "quote" && Dq === 'RU'){
    QUOTE(MurkaQuotesRU)
  } else if ( O === "words") {
    whatLevel (F)
  } else if (O ==="time") {
    whatLevel(200)
    TTIMER(T)
  }
  Observe();  
  document.querySelector('.progress-fill').style.width = '100%';
  document.querySelector('.progress-fill2').style.width = '100%';
  console.log(`количество слов ${F} tttttttt`)
 });

 // пунктуация 
  const Punctuation = document.getElementById('Punctuation')
  Punctuation.addEventListener('click', ()=> {
      
  if(Punctuation.classList.contains('navod')){
    Y = 'nopunctuation'
      removeClass(Punctuation, 'navod')
      if (O === 'words'){       
       whatLevel (F)
      } else if (O === 'time'){
      SSTOP () 
      TTIMER(T)
      whatLevel (200)
      
      }
  } else {
      Y = 'punctuation'
      addClass(Punctuation, 'navod')
      if (O === 'words'){       
       whatLevel (F)
      } else if (O === 'time'){
      SSTOP () 
      STOP()
      TTIMER(T)
      whatLevel (200)
      
     
      }
      
       
  }
  
})
  
  const Level = document.getElementById('Level')
  const cotaiterModal1 = document.getElementById('cotaiterModal1')
  const progressBar = document.querySelector('.progress-bar');
// цитаты
  const quote = document.getElementById('quote')
  quote.addEventListener('click', () =>{
  removeaddClass (Quote, quote)
  Level.style.visibility = 'hidden'
  cotaiterModal1.style.height ='260px'
  language.textContent = 'english';
  WordCountTime.style.display = 'none' 
  WordCountQuantity.style.display = 'none'
  Punctuation.style.display = 'none'
  progressBar.style.display = 'none'
  O = 'quote'
  Dq = 'EN'
  W = 'quotes'
  P = 'ENGLISH';
  QUOTE (MurkaQuotesEN)
  ENGLISH('keyboard')
  addClass(ENbutton3, 'navod')
  removeClass( RUbutton2, 'navod')
  STOP()
  TTIMERWORDS ()
  Observe();
  })

// определяет уровень сложности, С ПУНКТУАЦИЕЙ ИЛИ БЕЗ НЕЕ и язык массива, но нужно вставить количество слов
  function whatLevel (F){
   if (D === 'RU') {

    if (X === 'easy') {
      if (Y === 'punctuation'){
      newGamePunctu(easyWordsRU, F)
      } else {
      newGame(easyWordsRU, F)
      }

    } else if ( X === 'normal') {
      if ( Y === 'punctuation'){
      newGamePunctu(normalWordsRU, F)
      } else {
      newGame (normalWordsRU, F)
      }

    } else if ( X === 'hard') {
      if (Y === 'punctuation'){
        newGamePunctu(hardWordsRU, F)
      } else {
      newGame (hardWordsRU, F)
      }
    }
  }  
  if (D === 'EN') {

    if (X === 'easy') {
      if (Y === 'punctuation') {
      newGamePunctu (easyWordsEN, F)
      } else {
      newGame(easyWordsEN, F)
      }

   } else if ( X === 'normal') {
    if (Y === 'punctuation') {
    newGamePunctu (normalWordsEN, F)
    } else {
     newGame (normalWordsEN, F)
    }

   } else if ( X === 'hard') {
    if (Y === 'punctuation') {
      newGamePunctu (hardWordsEN, F)
    } else {
     newGame (hardWordsEN, F)
    }
   }
  }
  Observe();
}

// определяет количество слов, но нужно вставить уровень сложности массива
 function howManyWords (words) {
  if (F === 10){
    const F = 10;
    if (Y === 'punctuation'){
      newGamePunctu(words, F)
    } else {
    newGame(words, F);
    }

  } else if ( F === 25){
    const F = 25;
    if(Y === 'punctuation'){
      newGamePunctu(words, F)
    } else {
    newGame (words, F);
    }

  } else if (F === 50){
    const F = 50;
    if(Y === 'punctuation'){
      newGamePunctu(words, F)
    } else {
    newGame (words, F);
    }

  } else if (F === 75){
    const F = 75;
    if(Y === 'punctuation'){
      newGamePunctu(words, F)
    } else {
    newGame (words, F);
    }

  } else if (F === 100){
    const F = 100;
    if(Y === 'punctuation'){
      newGamePunctu(words, F)
    } else {
    newGame (words, F);
    }
  }
  Observe();
 }

 const ChoiceOfWordS = ['timer','quote']
 const Timer = ['choiceOfWords', 'quote']
 const Quote = ['choiceOfWords', 'timer']

 // массивы с названиями идентификаторов
 const eeasy = ['normal', 'hard'];
 const nnormal = ['easy', 'hard'];
 const hhard = ['easy', 'normal']
 
 const id10 = ['TwentyFive','Fifty','SeventyFive','OneHundred'];
 const id25 = ['Ten','Fifty','SeventyFive','OneHundred'];
 const id50 = ['Ten','TwentyFive','SeventyFive','OneHundred'];
 const id75 = ['Ten','TwentyFive', 'Fifty','OneHundred'];
 const id100 = ['Ten','TwentyFive', 'SeventyFive','Fifty'];

 const TT15s = ['T30s', 'T45s', 'T1m', 'T2m'];
 const TT30s = ['T15s', 'T45s', 'T1m', 'T2m'];
 const TT45s = ['T30s', 'T15s', 'T1m', 'T2m'];
 const TT1m = ['T30s', 'T15s', 'T45s', 'T2m'];
 const TT2m = ['T30s', 'T15s', 'T45s', 'T1m'];

 function removeaddClass (ID, num) {
  // перебирает каждый элемент, ищет идентификатор, после того как находит, помещает в новый массивм
  const element = ID.map(i => document.getElementById(i));

  element.forEach(idishci => {
    if (idishci) {
      idishci.classList.remove('navod');
  }
});
  if (num){
  num.classList.add('navod');
 }
 }

// Добавить\ убрать класс
function addClass(el, name) {
  el.classList.add(name); 
}
function removeClass(el, name) {
  el.classList.remove(name); 
}

// Форматирование СЛОВА для отображения (каждая буква в отдельном span)
function formatWord(word) { 
  return `<div class="word"><span class="letter">${word.trim().split('').join('</span><span class="letter">')}</span></div>`;
  /*  word - строкa - одно слово 
Интерполяция — это процесс вставки значений переменных или результатов выражений в строку.${...}
удаляет отступы в начале и в конце 
.split('') - разбивает строку на массив БУКВ! - !без пробела 
.join объединяет все элементы обртно в строку и вставляет между ними 

  <div class="word">
  <span class="letter"> Р </span>
  <span class="letter"> р </span>
  <span class="letter"> Л </span>
  </div>
  */
}

// НАЧАЛО 
function newGame(words, num) {
  correctcheck = 0;
  incorrectcheck = 0;

  wrongLetters = [];
  // если перезагрузить или запустить игру через DOMContentLoaded, то обнуление не нужно
  // Функция для перемешивания массива (Фишер-Йетс)
  function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }

// Перемешиваем слова и добавляем определенное количество МАССИВ 
const shuffledWords = shuffleArray(words).slice(0, num);
// перемешанные слова добавляем в поле 
  updateWordsContainer(shuffledWords); 

  // Обновляем контейнер со словами
  function updateWordsContainer(wordsToShow) {
    const wordsContainer = document.getElementById('pole');
    wordsContainer.innerHTML = wordsToShow.map(formatWord).join('');
// если есть пробел, то перестает работать
  // разделяет с помощью пробела
// вызывается функция для каждого слова в МАССИВЕ - возвращает СЛОВО
  }

  // Устанавливаем текущее слово и букву
  document.querySelector('.word').classList.add('current');
  document.querySelector('.letter').classList.add('current');
 
  const cursor = document.getElementById('cursor')
  cursor.style.display = 'block'

  pole.focus();
  updateCursorPosition();
} 

function newGamePunctu(words, num) {
  const punctuation = [',', '', '.', '?', '!', '', '"', ';', ':'];
  correctcheck = 0;
  incorrectcheck = 0;

  wrongLetters = [];
  // если перезагрузить или запустить игру через DOMContentLoaded, то обнуление не нужно
  // Функция для перемешивания массива (Фишер-Йетс)
  
function shuffleArray(words) {
    const newArray = [...words];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }

  function addPunctuation(shuffledWords, punctuation) {
    const newArr = [...shuffledWords];
    for (let i = 0; i < newArr.length - 1; i++) {
      const k = Math.floor(Math.random() * 8);
            newArr[i] += punctuation[k];
      if (punctuation[k] === '.' || punctuation[k] === '?' || punctuation[k] === '!') {
        newArr[i + 1] = newArr[i + 1].charAt(0).toUpperCase() + newArr[i + 1].slice(1);
      } else if (punctuation[k] === '"') {
       newArr[i] = '"' + newArr[i];
      }

  }
  return newArr;
}

// Перемешиваем слова и добавляем определенное количество МАССИВ 
const shuffledWords = addPunctuation(shuffleArray(words).slice(0, num), punctuation);
// перемешанные слова добавляем в поле 
  updateWordsContainer(shuffledWords); 

  // Обновляем контейнер со словами
  function updateWordsContainer(wordsToShow) {
    const wordsContainer = document.getElementById('pole');
    wordsContainer.innerHTML = wordsToShow.map(formatWord).join('');
// если есть пробел, то перестает работать
  // разделяет с помощью пробела
// вызывается функция для каждого слова в МАССИВЕ - возвращает СЛОВО
  }
  // Устанавливаем текущее слово и букву
  document.querySelector('.word').classList.add('current');
  document.querySelector('.letter').classList.add('current');
 
  const cursor = document.getElementById('cursor')
  cursor.style.display = 'block'

  pole.focus();
  updateCursorPosition();
  
} 
// выводит цитаты 
function QUOTE (MurkaQuotes) {
  const number = Math.floor(Math.random()* MurkaQuotes.length)
  const co= MurkaQuotes[number] // выводит сам массив!!!!!!!!!
     
    const wordsContainer = document.getElementById('pole');
    wordsContainer.innerHTML = co.map(formatWord).join('');

    // Устанавливаем текущее слово и букву
  document.querySelector('.word').classList.add('current');
  document.querySelector('.letter').classList.add('current');
 
  const cursor = document.getElementById('cursor')
  cursor.style.display = 'block'

  pole.focus();
  updateCursorPosition();
  }

  


const modal3 = document.getElementById('modal3');

//обновление курсора 
function updateCursorPosition() {
  const nextLetter = document.querySelector('.letter.current');
  const nextWord = document.querySelector('.word.current');
  const cursor = document.getElementById('cursor');
  const pole = document.getElementById('pole');

  if (nextLetter || nextWord) {
    const target = nextLetter || nextWord;
    const targetRect = target.getBoundingClientRect();
    const poleRect = pole.getBoundingClientRect();

    cursor.style.top = `${targetRect.top + 16 + window.scrollY}px`; 
    // расстояние от верхней границы видимоф области окна до верхней границы элемента +11 вниз 
    cursor.style.left = `${targetRect [nextLetter ? 'left':'right'] + window.scrollX}px`;
    // hotizontal
    
    const space = document.getElementById('Space')
    if (nextWord && target === nextWord && nextWord.lastElementChild) {
      addClass (space, 'migaet');
    } 

// если это последняя буква в слове и нет следующего узла
    if (target === nextWord && !nextWord.nextElementSibling) {
      Result ()
    }
   
    /* проверяет на существование 
     target === nextWord - именно текущее СЛОВО - работаем со словом*/
    
    // Автопрокрутка контейнера (если слово уходит за границы)
    // там где находится буква или слово >где находится поле
// если юуква находится ниже чем нижний край поля, то
    if (targetRect.bottom > poleRect.bottom) { 
/* y координата нижнего края элемента - нижнего края видимой области контейнера 
нижний край буквы  120 - нижний край поля 100 - 20 разница  
на сколько он вылез за границу поля */
      const scrollAmount = targetRect.bottom - poleRect.bottom;
/*scrollTop - это свойство DOM-элемента, которое показывает/устанавливает
 количество пикселей, на которое прокручено содержимое элемента
 вниз от его верхнего края.  
 scrollAmount - увеличиваем значение еще на 20px*/       
      pole.scrollTop += scrollAmount;
    } else if (targetRect.top < poleRect.top) {
      const scrollAmount = targetRect.top - poleRect.top;
      pole.scrollTop += scrollAmount ;
    }
  }  
/* Браузер (Chrome, Firefox и др.) получает команду scrollTop
 → мгновенно перерисовывает страницу, сдвигая содержимое.
Это встроенная функция, как например background-color  */
}
 
// Обновление курсора при нажатии клавиш
document.addEventListener('keydown', updateCursorPosition);

// Обновление курсора при изменении размера окна
window.addEventListener('resize', updateCursorPosition);
    let incorrectcheck = 0;
    let correctcheck = 0;
    
    let  wrongLetters = [];
// Обработчик нажатия клавиш
  const pole = document.getElementById('pole')
  pole.addEventListener('keydown', ev => {
  const key = ev.key; // зависит от раскладки 
  const currentWord = document.querySelector('.word.current');
  const currentLetter = document.querySelector('.letter.current');
  const expected = currentLetter?.innerHTML || ' ';
  const innerLetter = currentLetter?.innerHTML || ' ';
 /* пытается понять что именно находится в span
 innerHTML (получает содержимое элемента)- это одна буква, которая находится в span
 оператор опциональной цепочки  ?.. Этот оператор позволяет
 обращаться к свойствам объектов, 
 которые могут быть null или undefined, не вызывая ошибки 
 (он просто вернет undefined) 
 1 проверяет на существование currentLetter (если не равен null\undefined)
 обращается к его свойству (innerHTML), а если = null\undefined, 
 то выводится ' '  */
  const isLetter = key.length === 1 && key !== ' '; 
  // проверяте что нажата одна буква и это не пробел
  const isSpace = key === ' '; 
  const isBackspace = key === 'Backspace'; // удалить
  const isFirstLetter = currentLetter === currentWord?.firstElementChild;
  /* .firstChild свойство объекта- доступ к первому дочернему элементу
  (или узлу)данного элемента в документе html) 
 -Может вернуть любой узел: Это может быть элемент, 
  текстовый узел(пробелы или перенос строк) или комментарий. */
 
  // Запрет пробела на первой букве
  if (isSpace && isFirstLetter) {
    ev.preventDefault();
    return;
  }

  // если это одна буква и внимание направлено на нее
  if (isLetter && currentLetter) { 
    addClass(currentLetter, key === expected ? 'correct' : 'incorrect');
    removeClass(currentLetter, 'current');
    
     // Обновляем счетчики
     if (key === expected)  correctcheck++;
     else { incorrectcheck++; 
     
    }
// добавляем класс к следующий букве
    if (currentLetter.nextSibling) {
      addClass(currentLetter.nextSibling, 'current');
    }
  }
  // Свойство .nextSibling- получение next node (следующего узла), 
  // относительно текущего узла (для объякта типа Node, возвращает следующий узел на том же уровне вложенности)

  // Обработка пробела (переход к следующему слову)
  // НАЖАЛИ ПРОБЕЛ И ПЕРЕШЛИ К НОВОМУ СЛОВУ
  
  if (isSpace) {
    if ( O === 'words' && FF >= 0){
    const F1 = 100 / F
    FF-=F1 ; // Уменьшаем на 1 при каждом нажатии пробела
    document.querySelector('.progress-fill2').style.width = FF + '%';
    console.log(FF); 
    }
    if (expected !== ' ' && currentWord) {
// ожидаемое значение не является пробелом и это буква       
      // Помечаем все неправильные буквы в текущем слове
      [...currentWord.children].forEach(letter => { // [] преобразуют коллекциию узлов в массив 
        if (!letter.classList.contains('correct') && !letter.classList.contains('incorrect') ) { 
          //  если буква не имеет correct
          addClass(letter, 'incorrect');
          incorrectcheck ++;
        } 
      });
     
        } 
    
// если это последнее слово и ты нажал пробел 
  const words = document.querySelectorAll('.word')
     const isLastWord = currentWord === words[words.length - 1]
     if (isLastWord && isSpace ){
       console.log(wrongLetters) 
      Result ()
     }
    /* property children —для HTML-элементов ,
    возвращает коллекцию всех дочерних элементов (узлов) данного 
    элемента. Получить доступ к элементам,которые находятся внутри указанного элемента, 
    не включая текстовые узлы или комментарии. childNodes */
    
// ПЕРЕХОД К СЛЕДУЮЩЕМУ СЛОВУ 
//  существует ли следующее слово ? получает следующий узел (проверяет на наличие слудующего узла)
    if (currentWord?.nextElementSibling) {
      removeClass(currentWord, 'current'); // удаляем класс у текущего СЛОВА 
      addClass(currentWord.nextSibling, 'current');// добавляем класс следующей СЛОВУ
      // если существует текущая буква, то у нее удаляется класс и при...
      if (currentLetter) removeClass(currentLetter, 'current');/*  удаляем у буквы класс */
      addClass(currentWord.nextElementSibling.firstElementChild, 'current');   
/* add class к первой букве в слове  */
    } 
  }

  // processing (Обработка) backspace (возврат назад)
  if (isBackspace) {
    if (currentLetter && isFirstLetter && currentWord?.previousElementSibling) {
      // previousSibling- property, которое используется для получения previous node
// current letter \ current is first letter in a word \ is there a previous word 

      // return to previous WORD
      const prevWord = currentWord.previousElementSibling// предыдущее слово 
      const prevLastLetter = prevWord.lastElementChild // последняя буква в слове

      removeClass(currentWord, 'current'); // удаляет current у слова
      removeClass(currentLetter, 'current');// удаляет current у буквы 
      addClass(prevWord, 'current');//add к previous
      addClass(prevLastLetter, 'current');
      // lastCild- property returns the last node for the current node

      if (prevLastLetter.classList.contains('incorrect')) {   
      removeClass(prevLastLetter, 'incorrect')
      incorrectcheck--;
      }
      if (prevLastLetter.classList.contains('correct')){
      removeClass(prevLastLetter, 'correct');
      correctcheck--;
      }
        if ( O === 'words'){
    const F1 = 100 / F
    FF+=F1 ; // Уменьшаем на 1 при каждом нажатии пробела
    document.querySelector('.progress-fill2').style.width = FF + '%';
    console.log(FF); 
    }
      // remove both classes
    } else if (currentLetter && !isFirstLetter) { //

      const prevLetter = currentLetter.previousElementSibling

      // return to previous LETTER    Возврат к предыдущей букве 
      removeClass(currentLetter, 'current');// remove current letter class
      addClass(prevLetter, 'current');// add previous letter current

      if (prevLetter.classList.contains('incorrect')) { 
      removeClass(prevLetter, 'incorrect');
      incorrectcheck--;
      }

      if (prevLetter.classList.contains('correct')) { 
        removeClass(prevLetter, 'correct');// remove both classes
      correctcheck--;
      }
      
/*  
 может быть currentLetter = null
 то есть когда я напечатала слово, курсор стоит на последней букве, 
 -- нажимаю пробел и курсор стоит на первой букве, но слово еще пустое,
  после того как я напечатаю букву оно будет непустое   */
    } else if (!currentLetter && currentWord?.lastElementChild) { 
        //если это не current letter and lastChild 

      const wordLast = currentWord.lastChild

      // Возврат к последней букве текущего слова
      addClass(wordLast, 'current'); 

      if (wordLast.classList.contains('incorrect')){
      removeClass(wordLast, 'incorrect');
      incorrectcheck--;
      }

      if (wordLast.classList.contains('correct')){
      removeClass(currentWord.lastChild, 'correct'); 
      correctcheck--;
      }
                                                                                                          
    } 

  }
 
    updateCursorPosition(); // Обновляем позицию курсора после изменений

    R (key, expected, innerLetter)
  });

// массив наполняется буквами на которые вы должны были нажать, но нажали на другую неправильную букву
// записываются те буквы, к которым был присвоен класс incorrect 
 function R (key, expected, innerLetter) {
 if (key !== expected) {
    // Добавляем в массив ошибок
    if (!wrongLetters.includes(innerLetter)) {
       if ( innerLetter !== null ){
       wrongLetters.push(innerLetter);
       }
       }
    }
  }

const WPM = document.getElementById('WPM')
const CPM = document.getElementById('CPM')

function Result () {
   G = 'result'

   modal3.style.display = "block";
   const cModal3 = document.getElementById('cModal3');
   const result = Math.round(correctcheck / (correctcheck + incorrectcheck) *100 );
   cModal3.innerHTML = `${result}%`;
   console.log( correctcheck+'общее количество правильных слов')
     
   if (O === 'time' ){
   let CPMT = 0;
   if( T === 15 || T === 30 || T === 45 ){
   CPMT = Math.round((correctcheck / T) * 60) 
   } else if (T === 60) {
   CPMT = correctcheck
   } else if (T === 120){
   CPMT = Math.round( correctcheck  / 2 ) 
   } else if (correctcheck = 0) {
    CPMT = 0
   }
   let WPMT = 0;
   if (X === 'easy'){
   WPMT = Math.round(CPMT / 4)
   } else if (X === 'normal'){
   WPMT = Math.round(CPMT / 8)
   } else if ( X === 'hard'){
   WPMT = Math.round(CPMT / 12)
   } 

   CPM.innerHTML = CPMT + ' CPM'
   WPM.innerHTML = WPMT + ' WPM'
   console.log(CPMT +  '   ПОЛУЧИЛОСЬ CPMT')
   console.log(WPMT +  '   ПОЛУЧИЛОСЬ WPMT')
   

  }
   if ( O === 'words' || O === 'quote' ){
    let CPMW = 0;
    if (timeLef >= 5 ){
    CPMW = Math.round((correctcheck / timeLef) * 60)
    } else {
   CPM.innerHTML = 0 + ' CPM'
   WPM.innerHTML = 0 + ' WPM'
    }
    
    let WPMW = 0;
    if (X === 'easy'){
    WPMW = Math.round(CPMW / 4)
    } else if (X === 'normal'){
    WPMW = Math.round(CPMW / 8)
    } else if (X === 'hard'){
    WPMW = Math.round(CPMW / 12)
    }
    
    CPM.innerHTML = CPMW + '   CPM'
    WPM.innerHTML = WPMW + '   WPM'

   }



console.log(timeLef  +' Секунды таймера слов')



if (D === 'EN') ENGLISH ('ccModal3')
else if (D === "RU") RUSSIAN ('ccModal3')
  
const keyboardContainer = document.getElementById('ccModal3');

    wrongLetters.forEach(id => {
      if (id && id.trim() !== "" && /^[a-zA-Zа-яА-ЯёЁ]+$/.test(id)){
const keyEl = keyboardContainer.querySelector(`#${id}`);
    if (keyEl) {
      addClass(keyEl, 'nomigaet');
      } 
      }
    })
     document.querySelectorAll('#keyboard .key.migaet').forEach(key => {
    removeClass(key, 'migaet');
  });  
  
}

/* 
const play = document.getElementById('play')
  play.addEventListener('click',() => {
  pole.style.filter = 'blur(0px)';
  play.style.display = 'none'
});
 */

// клавиатура 
const logCurrentLetter = () => {
  // Удаляем класс со всех клавиш
  document.querySelectorAll('.key.migaet').forEach(key => {
    removeClass(key, 'migaet');
  });

  const currentLetter = document.querySelector('.letter.current');
  if (!currentLetter) return;// если нет, то выходим 

  const currentChar = currentLetter.textContent.trim().toLowerCase();// нижний регистр
  const keys = document.querySelectorAll('.key');

  // Ищем конкретную клавишу
  const foundKey = Array.from(keys).find(key => 
    key.id.toLowerCase() === currentChar);
/* key.id обращение к атрибуту элемента 
Array.from - из коллекции дом элементов - превращает в массив 
  .find() - метод массива - возвращает первый элемент, который */
  if (foundKey) {
    addClass(foundKey,'migaet');
  }
};
// был ли найден элемент или нет, если да, то
let observer = null; 
  // Наблюдатель за изменениями в DOM
  function Observe() {
     if (observer) {
    observer.disconnect();
  }
// создается новый обработчик
  observer = new MutationObserver((mutations) => {
/* передаете функуию обратного вызова, будет вызвана каждый раз,
 как происходит изменения в dom, эта функция получает массив mutations
  (в массиве есть объекты) */    
    mutations.forEach((mutation) => {
      if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
        logCurrentLetter();               // какой именно атрибут был изменен 
      }
    });
  });

  // Начинаем наблюдать за всеми буквами (запуск наблюдателя)
  const letters = document.querySelectorAll('.letter');
  letters.forEach((letter) => {
    observer.observe(letter, { attributes: true });
// каждая буква имеет класс letter - отслеживает добавление current
  }); // элемент за которым будем следить и тип изменения (если изменяется класс или стиль)
 /* После обновления DOM вы снова вызываете Observe (), 
 что создает новый экземпляр MutationObserver и начинает следить за новыми элементами. */

  // Выводим первую букву сразу
  logCurrentLetter();
}
setTimeout(Observe, 500)


















// timer
let timeL; //  хранит индефикатор таймера 
 function TIMER (number) {
 clearInterval(timeL);
 let timeLeft = number; 

  timeLeft = number; // сбрасывает в секундах

  document.querySelector('.progress-fill').style.width = '100%';

  timeL = setInterval(() => { // создает повторяющийся интервал, каждую секунду 
    timeLeft--;
   
    const predictable = (timeLeft / number )* 100;
    document.querySelector('.progress-fill').style.width = `${predictable}%`;
    console.log(timeLeft)
    if (timeLeft <= 0) {
      clearInterval(timeL);
      Result();
    }
  }, 1000);
  
 }

let timerCheckInterval; // хранит идентификатор основного таймера
  function TTIMER(number) {
  STOP()
  T = number;
  timerCheckInterval = setInterval(() => {// создает номер айди
  const firstLetter = document.querySelector('.word.current')?.firstElementChild;
  if (firstLetter && (firstLetter.classList.contains('correct') || firstLetter.classList.contains('incorrect'))) {
    TIMER(number);
    clearInterval(timerCheckInterval);// останавливает его работу
  }
}, 100);
 }

 function STOP (){
if (timerCheckInterval) {
        clearInterval(timerCheckInterval);// останавливает выполнение интервала 
    }
    
    // Останавливаем основной таймер, если он работает
    if (timeL) {
        clearInterval(timeL);
    }
    document.querySelector('.progress-fill').style.width = '100%';
 }







































// таймер слов 
 let timeLef = 0;
 let wordTimerID = null; //  хранит индефикатор таймера 
 let savedTimeLef = 0; // Для сохранения времени при паузе
 let isTimerPaused = false; // Флаг  НЕ паузы

 function TIMERWORDS (){
if(isTimerPaused) { // первый раз не срабатывает
  timeLef = savedTimeLef;// сохранется обновленное время 
  isTimerPaused = false;
} else {
  timeLef = 0;// если это первый запуск 
}

   if (wordTimerID !== null) {
  // если wordTimerID не нул, значит он уже был запущен, то есть индефикатор есть 
    clearInterval(wordTimerID);// останавливает предыдущий таймер 
  }

 wordTimerID = setInterval(() => { // создает повторяющийся интервал, каждую секунду 
    timeLef++;
    console.log(timeLef + "ТАЙМЕР СЛОВ")
    if (G === 'result') {
      clearInterval(wordTimerID);
    }
  }, 1000);
    console.log('Таймер слов запущен');
 }

let WordTimerID;
 function TTIMERWORDS (){
  isTimerPaused = false;
  timeLef = 0;
  savedTimeLef = 0;
  SSTOP()
  WordTimerID = setInterval(() => {// создает номер айди
  const firstLetter = document.querySelector('.word.current')?.firstElementChild;
  if (firstLetter && ( O === 'words' || O === "quote" ) && (firstLetter.classList.contains('correct') || firstLetter.classList.contains('incorrect'))) {
    TIMERWORDS();
    console.log(' МАССИВ С ЦИТАТАМИ - ДА')
    clearInterval(WordTimerID);// останавливает его работу
  }
}, 100);
 }


// полностью сбразывается 
 function SSTOP (){
    if (wordTimerID) {
    clearInterval(wordTimerID);
    wordTimerID = null; // Важно обнулять ID
  }
  if (WordTimerID) {
    clearInterval(WordTimerID);
    WordTimerID = null;
  }
   console.log('таймер слов выключен')
 }



// слушает клавиши, ФУНКЦИЯ ВЫЗЫВАЕТСЯ ПРИ КАЖДОМ НАЖАТИИ - запускается сама
document.addEventListener('keydown', handleKeyPress);


function handleKeyPress(e) {
  setTimeout (() => {
  if (e.key.length === 1) {
    InactivityTimer(); // Сбрасываем таймер при любом нажатии

  // запускаем, потому что он существует 
    if (isTimerPaused) {
      if (O === 'words'){
      TIMERWORDS()
      }
    }
  }
 }, 1000) 
}

// Таймер бездействия
let typingTimer;

function InactivityTimer() {
  clearTimeout(typingTimer); 
  typingTimer = setTimeout(() => { // запускается новый таймер 
    console.log("Пользователь не печатал 5 секунд!");

// если таймер был запущен    
  if(wordTimerID) {
    savedTimeLef = timeLef;
    clearInterval(wordTimerID);
    wordTimerID = null;// не останавливаем предыдущий таймер
    isTimerPaused = true; // 
    }
  }, 5000);
}  









function ENGLISH (keyboardLayout) {
const keyboardContainer = document.getElementById(keyboardLayout);
keyboardContainer.innerHTML = `
    <ul class="line">
      <li class="key" id="q">q</li>
      <li class="key" id="w">w</li>
      <li class="key" id="e">e</li>
      <li class="key" id="r">r</li>
      <li class="key" id="t">t</li>
      <li class="key" id="y">y</li>
      <li class="key" id="u">u</li>
      <li class="key" id="i">i</li>
      <li class="key" id="o">o</li>
      <li class="key" id="p">p</li>
    </ul>
    
    <ul class="line">
      <li class="key" id="a">a</li>
      <li class="key" id="s">s</li>
      <li class="key" id="d">d</li>
      <li class="key" id="f">f</li>
      <li class="key" id="g">g</li>
      <li class="key" id="h">h</li>
      <li class="key" id="j">j</li>
      <li class="key" id="k">k</li>
      <li class="key" id="l">l</li>
    </ul>
    
    <ul class="line">
      <li class="key" id="z">z</li>  
      <li class="key" id="x">x</li>  
      <li class="key" id="c">c</li>  
      <li class="key" id="v">v</li>  
      <li class="key" id="b">b</li>  
      <li class="key" id="n">n</li>  
      <li class="key" id="m">m</li>  
    </ul> 

    <ul class="line">
        <li class="key" id="Space" style="width: 200px;"></li>
    </ul>
`;
}

function RUSSIAN (keyboardLayout) {
  const keyboardContainer = document.getElementById(keyboardLayout);
  keyboardContainer.innerHTML = `
   <ul class="line">
     <li class="key" id="й">й</li>
     <li class="key" id="ц">ц</li>
     <li class="key" id="у">у</li>
     <li class="key" id="к">к</li>
     <li class="key" id="е">е</li>
     <li class="key" id="н">н</li>
     <li class="key" id="г">г</li>
     <li class="key" id="ш">ш</li>
     <li class="key" id="щ">щ</li>
     <li class="key" id="з">з</li>
     <li class="key" id="х">х</li>
     <li class="key" id="ъ">ъ</li>
   </ul>

   <ul class="line">
     <li class="key" id="ф">ф</li>
     <li class="key" id="ы">ы</li>
     <li class="key" id="в">в</li>
     <li class="key" id="а">а</li>
     <li class="key" id="п">п</li>
     <li class="key" id="р">р</li>
     <li class="key" id="о">о</li>
     <li class="key" id="л">л</li>
     <li class="key" id="д">д</li>
     <li class="key" id="ж">ж</li>
     <li class="key" id="э">э</li>
   </ul>

   <ul class="line">
     <li class="key" id="я">я</li>
     <li class="key" id="ч">ч</li>
     <li class="key" id="с">с</li>
     <li class="key" id="м">м</li>
     <li class="key" id="и">и</li>
     <li class="key" id="т">т</li>
     <li class="key" id="ь">ь</li>
     <li class="key" id="б">б</li>
     <li class="key" id="ю">ю</li>
   </ul>     

   <ul class="line">
     <li class="key" id="Space" style="width: 270px;"></li>
  </ul>`
}

 const BACKGROUND = document.getElementById('BACKGROUND')

 const Background = document.getElementById('Background');
 Background.addEventListener('click', () =>{
 Menu.style.display = 'none'
 BACKGROUND.style.display = 'block'
 })

 const Background2 = document.getElementById('Background2');
 Background2.addEventListener('click', () =>{
 Menu.style.display = 'none'
 BACKGROUND.style.display = 'block'
 })
   
  window.addEventListener('click', (ev) =>{
    if (ev.target === BACKGROUND) {
    BACKGROUND.style.display = 'none'
  }
  })
  
  const H1 = document.getElementById('H1');
  const english = document.getElementById('english')
  const russian = document.getElementById('russian')

  const PROVALE = document.getElementById('PROVALE')
  const Profile = document.getElementById('Profile')
  Profile.addEventListener('click', () =>{
  PROVALE.style.display = 'block'
  Menu.style.display = 'none'
  H1.style.width = '98vw';
  addClass(english, 'OOO')
  })
   
  const Profile2 = document.getElementById('Profile2')
  Profile2.addEventListener('click', () =>{
  PROVALE.style.display = 'block'
  Menu.style.display = 'none'
  H1.style.width = '98vw';
  addClass(english, 'OOO')
  })

  russian.addEventListener('click', () => {
  addClass(russian, 'OOO')
  removeClass(english, 'OOO')
  })

  english.addEventListener('click', () => {
  addClass(english, 'OOO')
  removeClass (russian, 'OOO')
  })

    document.getElementById('Studies').addEventListener('click', () =>{
    window.open('trenazher.html', '_blank');
 })

 const nextGame = document.getElementById('nextGame')
  nextGame.addEventListener('click', () =>{
  modal3.style.display = 'none'
  Level.style.visibility = 'visible'
  document.querySelector('.progress-fill2').style.display = 'block'
  document.querySelector('.progress-fill2').style.width = '100%';
  document.querySelector('.progress-fill').style.display = 'none'
  cotaiterModal1.style.height ='300px'
  removeClass(Punctuation, 'navod')
  STOP()
  InactivityTimer()
  TTIMERWORDS ()
  newGame(normalWordsEN, 10);  
  Observe();
  WordCountTime.style.display = 'none' 
  WordCountQuantity.style.display = 'block'
  Punctuation.style.display = 'block'
  progressBar.style.display = 'block'
  removeaddClass(ChoiceOfWordS, choiceOfWords)
  removeClass(RUbutton2, 'navod')
  addClass(ENbutton3, 'navod')
  removeaddClass (id10, Ten);
  removeaddClass (nnormal, normal);
  addClass(choiceOfWords, 'navod')
  ENGLISH ('keyboard');
  language.textContent = 'english';
  Y === 'nopunctuation'
  D = 'EN';
  P = 'ENGLISH';
  X = 'normal'; 
  O = "words"
  FF = 100
  W = 'noquotes'
 })

const WordCount2 = document.getElementById('WordCount2')
const root = document.documentElement;

 document.getElementById('Lima').addEventListener('click', () =>{
    
    // Меняем CSS-переменные
    root.style.setProperty('--secondary-color', 'rgb(143, 168, 1)');
    root.style.setProperty('--text-color', 'rgb(123, 78, 133)');
    root.style.setProperty('--navod-color', 'rgb(84, 65, 92)');
    WordCount2.style.color = '#18181a';
/* 
        --secondary-color: rgb(137 148 161);
    --text-color: rgb(105 109 129);
    --navod-color: rgb(78 91 115); */

 })

 document.getElementById('Zhaniya').addEventListener('click', () =>{

 })

 document.getElementById('lera').addEventListener('click', () => {

 })

 document.getElementById('murka').addEventListener('click', () => {
  
 })