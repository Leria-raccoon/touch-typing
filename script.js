// открытие и закрытие 
document.getElementById('MenuButtom').addEventListener('click', () => {
    Menu.classList.toggle('open'); // Переключаем класс 'open'
    //если есть класс, то он удаляется, если нет, то добавляется
});

let MModal = document.getElementById('modal1');
document.getElementById('language').addEventListener('click', () => {
 MModal.style.display = "block";
});

window.addEventListener('click', (ev) => {
    if (ev.target === modal1 ){
    MModal.style.display = 'none';
    }
});

let Modal = document.getElementById('modal2');
document.getElementById('addWords').addEventListener("click", () => {
    MModal.style.display = 'none';
    Modal.style.display = "block";
});

document.getElementById("close").addEventListener("click", () => {
    Modal.style.display = "none";
}); 

window.addEventListener('click', (ev) =>{
 if (ev.target === modal2){
 Modal.style.display = 'none';
 }
});

// таблица
const element = [];

// Загружаем данные из localStorage при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    const tabble = localStorage.getItem('Table');
    if (tabble) {
        const parse = JSON.parse(tabble);
        parse.forEach(elem => element.push(elem));
        updateTable();
    }
});

document.getElementById('addWord').addEventListener('click', () => { 
    Fy()
 });

  document.addEventListener('keydown', (ev)=> {
    if(ev.target.matches('#en') || ev.target.matches('#ru')){
        if (ev.code === 'Enter'){
            ev.preventDefault();
            Fy();
        }
    } 
 });
 
  function Fy() {
    const TTable = document.getElementById('Table');
    const TTbody = TTable.querySelector('tbody');
    const pop = TTbody.querySelectorAll('tr');
    const firstInputs = pop[0].querySelectorAll('input');

    // Получаем значение из первой строки
    const key = firstInputs[0].value.trim();
    const value = firstInputs[1].value.trim();

    // Проверяем на непустоту + добавляем в массив 
    if (key && value) {
        element.unshift({ key, value });

        // Очищаем первую строку 
        const firstpop = pop[0];
        firstpop.innerHTML = `
            <td><input type="text" id='en' placeholder="введите слово"></td>
            <td><input type="text" id='ru' placeholder="введите перевод"></td>
        `;

        updateTable();
        save();
    } else {
        alert('Пожалуйста, заполните все строки ❤️');
    }
    };

// Обновление таблицы 
function updateTable() {
    const TTable = document.getElementById('Table');
    const TTbody = TTable.querySelector('tbody');

    // Очищаем все строки, кроме 0
    const pops = TTbody.querySelectorAll('tr');
    for (let i = 1; i < pops.length; i++) {
        pops[i].remove();
    }

    // Добавляем новые слова в таблицу
    element.forEach(elem => {
        const newPop = document.createElement('tr');
        newPop.innerHTML = `
            <td>${elem.key}</td>
            <td>${elem.value}</td>
        `;
        TTbody.appendChild(newPop);
    });
}

// Сохранение в LocalStorage
function save() {
    localStorage.setItem('Table', JSON.stringify(element));
}
 
document.getElementById('download').addEventListener('click', () => {
    const jsonBabe = {}; // пустой объект для хранения пар ключ-значение

    element.forEach(elem => {
        jsonBabe[elem.key] = elem.value; // добавляем непустые пары
    });

    const jsonString = JSON.stringify(jsonBabe, null, 2); // форматируем в JSON
    const BOB = new Blob([jsonString], { type: 'application/json' }); // создаем Blob
    const url = URL.createObjectURL(BOB); // создаем URL для Blob

    const a = document.createElement('a'); // создаем элемент <a>
    a.href = url; // устанавливаем ссылку на Blob
    a.download = 'data.json'; // устанавливаем имя файла для скачивания
    document.body.appendChild(a); // добавляем элемент на страницу (необязательно, но может помочь)
    a.click(); // имитируем клик для скачивания
    document.body.removeChild(a); // удаляем элемент после скачивания
    URL.revokeObjectURL(url); // освобождаем память
});

const wordsRU = [
  "вулкан", "парашют", "алгоритм", "восторг", "кристалл", "гармония", "цунами", "робот", "мечта", "гейзер", "радуга", "искра", "бриллиант", "лазер", "энергия", "комета", "вихрь", "орбита", "закат", "голограмма", "метеорит", "иллюзия", "палитра", "эволюция", "фейерверк", "калейдоскоп", "квант", "ностальгия", "архипелаг", "трансформер", "самовар", "эхо", "фреска", "дирижабль", "атом", "мозаика", "витраж", "компас", "сфинкс", "осьминог", "лавина", "пазл", "граффити", "колибри", "пещера", "мираж", "магма", "рация", "алхимия", "телескоп","батискаф", "капля", "громоотвод", "айсберг", "коралл", "мерцание", "парусник", "электричество", "кенгуру", "маятник", "пеликан", "радар", "торнадо", "фламинго", "хамелеон", "циклон", "шахматы", "щепка", "энциклопедия", "юла", "якорь", "аметист", "броненосец", "вертолет", "глобус", "дротик", "жасмин", "зефир", "иней", "йогурт", "кварц", "лабиринт", "метель", "нефрит", "озон", "память", "рассвет", "светлячок", "талисман", "ураган", "факел", "хрусталь", "цветение", "чертополох", "шалаш", "щебет", "эгоист", "юнга", "ящерица", "азарт",
  "блеск", "вибрация", "галактика", "долголетие", "жернова", "зодиак", "импульс", "каравелла", "ласточка", "метроном", "нимб", "океан", "палисадник", "рапсодия", "сатурн", "титаник", "улей", "феникс", "хаос", "цельсий", "чернила", "штурвал", "щелочь", "эпос", "юстиция", "ягуар", "аквамарин", "болид", "верность", "гравюра", "древо", "жажда", "зенит", "искусство", "листва", "магнит", "небоскреб", "оберег", "памятник", "район", "созвездие", "топаз", "устойчивость", "фактура", "хроника", "цветок", "чердак", "шарм", "щепотка", "эскиз", "юмор","ярость", "алмаз", "благодать", "вдохновение", "горизонт", "дыхание", "жемчуг", "заря", "изумруд", "караван", "лукоморье", "метафора", "нимфа", "огонь", "покровитель", "радушие", "самоцвет", "талант", "удача", "фантазия", "холст", "царство", "чародей", "шёпот", "щегол", "эльф", "юность", "ясень", "авантюра", "бесконечность", "волшебство", "грация", "доблесть", "жизнь", "звёзды", "источник", "кружево", "легенда", "магия", "нежность", "оптимизм", "прозрачность", "радость", "свобода", "творчество", "улыбка", "храбрость", "цвета", "чувство", "щедрость","энергия", "яркость", "абсолют", "благородство", "воля", "душа", "жар", "закат", "изобретение", "кокон", "любовь", "мелодия", "надежда", "оригами", "поколение", "рассвет", "сила", "тепло", "уют", "факел", "харизма", "цель", "чаша", "шедевр", "эволюция", "яблоко", "баланс", "вспышка", "гравитация", "добро", "жест", "знание", "истина", "кодекс", "луч", "молния", "наука", "образ", "порыв", "ритм", "свет", "тайна", "успех", "факт", "холод", "цифра", "чудо", "щель", "эра", "юла", "язык"
];
          
  const wordsEN = [
    "quasar", "flamingo", "portal", "albatross", "geyser", "graffiti", "crystal", "tent", "armadillo", "hologram", "tsunami", "origami", "porcupine", "telescope", "safari", "meteorite", "firework", "kangaroo", "laser", "eclipse", "stainedglass", "canyon", "octopus", "hoverboard", "comet", "archeology", "parachute", "jellyfish", "mosaic", "walkietalkie", "hummingbird", "vacuum", "funicular", "pelican", "avalanche", "biology", "squid", "robot", "waterfall", "saxophone", "drone", "eiffel", "paleontology", "kayak", "illusion", "volcano", "camping", "rainbow", "mountaineering", "microscope", "chameleon", "iceberg", "animation", "ecosystem", "narwhal", "compass", "blizzard", "koala", "evolution", "cablecar", "physics", "dew", "diving", "globe", "chemistry", "sunset", "transformer", "quartz", "ballet", "bubble", "savanna", "passport", "echo", "isotope", "droplet", "taiga", "navigator", "visa", "maze", "coral", "easel", "paradox", "projector", "cruise", "artifact", "relic", "hieroglyph", "suitcase", "sunfish", "map", "ornament", "silencer", "manuscript", "alphabet", "expedition", "cave", "silhouette", "fresco", "astronaut", "lake", "kaleidoscope", "shadow", "sketch", "emerald", "puzzle", "galaxy", "zodiac",
    "abstraction", "aggression", "alchemy", "analysis", "aristocracy", "aroma", "astronomy", "gratitude", "nobility", "blitz", "vigil", "throw", "inspiration", "empathy", "interaction", "grandeur", "loyalty", "merriment", "admiration", "universe", "hypothesis", "smoothness", "calm", "depth", "humanism", "taoism", "debate", "kindness", "achievement", "friendship", "spirituality", "care", "riddle", "completion", "delusion", "knowledge", "invention", "amazement", "intuition", "classic", "communication", "creativity", "culture", "leadership", "love", "magic", "peace", "wisdom", "hope", "science", "charm", "optimism", "paradigm", "transmission", "learning", "flow", "progress", "reflection", "joy", "reality", "freedom", "power", "compassion", "serenity", "happiness", "art", "tranquility", "success", "philosophy", "color", "emotion", "experiment", "youth", "absolute", "agent", "activity", "antidote", "argument", "atmosphere", "prosperity", "closest", "grace", "blessing", "era", "majestic", "faith", "connection", "inspiring", "rebirth", "enchantment", "recovery", "impression", "versatile", "genius", "profound", "nation", "humanity", "foresight", "actuality", "durability", "accessibility", "warmth", "amusing", "amusement", "mysterious", "merit", "change", "astonishing", "innovation", "integration", "picture", "catastrophe", "cool", "complex", "cosmos", "creativity", "line", "logic", "magnet", "modernization", "module", "award", "direction", "flaw", "unification", "lens", "discovery", "reflection", "parameter", "perspective", "planet", "potential", "excellence", "principle", "issue", "productivity", "diversity", "development", "reaction", "system", "consciousness", "state", "strategy", "destiny", "sphere", "creation", "technology", "transformation", "skill", "phenomenon", "function", "character", "integrity", "miracle", "ecology", "legal", "abstract", "adequate", "accent", "reasoned", "association", "grateful", "charity", "beneficial", "motivating"
];

const language = document.getElementById('language')
let D = 'RU' // показывает какой именно сейчас массив слов рус или англ
let F = 10 // показывает сколько слов попало в контейнер

document.addEventListener('DOMContentLoaded', ()=>{
  newGame(wordsEN, 10); 
  addremoveClass (id10, Ten)
  Observe()
  ENGLISH ()
  D = 'EN'
});

document.getElementById('button2').addEventListener('click',() =>{
  MModal.style.display = 'none';
  newGame(wordsRU, 100);
  addremoveClass (id100, OneHundred)
  language.textContent = 'russian';
  D = 'RU'; 
  F = 100;
  Observe()
  RUSSIAN ()
});

document.getElementById('button3').addEventListener('click',() =>{
  MModal.style.display = 'none';
  newGame(wordsEN, 100);
  addremoveClass (id100, OneHundred)
  language.textContent = 'english';
  D = 'EN'; // показывает какой именно сейчас массив слов рус или англ
  F = 100; // показывает сколько слов попало в контейнер
  Observe()
  ENGLISH()
});

  const Ten = document.getElementById('Ten')
  Ten.addEventListener('click',() =>{
  const words = D === 'RU' ? wordsRU : wordsEN;
  newGame(words, 10);
  F = 10; 
  addremoveClass (id10, Ten);
  Observe()//
});

  const TwentyFive = document.getElementById('TwentyFive')
  TwentyFive.addEventListener('click',() =>{
  const words = D === 'RU' ? wordsRU : wordsEN;
  newGame(words, 25);
  F = 25
  Ten.classList.toggle('WordCount2');
  addremoveClass(id25, TwentyFive)
  Observe()
});

  const Fifty = document.getElementById('Fifty')
  Fifty.addEventListener('click',() =>{
  const words = D === 'RU' ? wordsRU : wordsEN;
  newGame(words, 50);
  F = 50
  addremoveClass (id50, Fifty)
  Observe()
});

  const SeventyFive = document.getElementById('SeventyFive')
  SeventyFive.addEventListener('click',() =>{
  const words = D === 'RU' ? wordsRU : wordsEN;
  newGame(words, 75);
  F = 75
  addremoveClass (id75, SeventyFive)
  Observe()
});

  const OneHundred= document.getElementById('OneHundred')
  OneHundred.addEventListener('click',() =>{
  const words = D === 'RU' ? wordsRU : wordsEN;
  newGame(words, 100);
  F = 100
  addremoveClass (id100, OneHundred)
  Observe()
});

 document.getElementById('Reboot').addEventListener('click', () =>{
    const words = D === 'RU' ? wordsRU : wordsEN ;
    if (F === 10){
      const F = 10;
      newGame(words, F);

    } else if ( F === 25){
      const F = 25;
      newGame (words, F);

    } else if (F === 50){
      const F = 50;
      newGame (words, F);

    } else if (F === 75){
      const F = 75;
      newGame (words, F);

    } else if (F === 100){
      const F = 100;
      newGame (words, F);
    }
    Observe()
 });

 // массивы с названиями идентификаторов
 const id10 = ['TwentyFive','Fifty','SeventyFive','OneHundred']
 const id25 = ['Ten','Fifty','SeventyFive','OneHundred']
 const id50 = ['Ten','TwentyFive','SeventyFive','OneHundred']
 const id75 = ['Ten','TwentyFive', 'Fifty','OneHundred']
 const id100 = ['Ten','TwentyFive', 'SeventyFive','Fifty']

 function addremoveClass (ID, num) {
  // перебирает каждый элемент, ищет идентификатор, после того как находит, помещает в новый массивм
  const element = ID.map(i => document.getElementById(i));

  element.forEach(idishci => {
    if (idishci) {
      idishci.classList.remove('WordCount2');
  }
});
  if (num){
  num.classList.add('WordCount2');
 }
 }

// Добавить\ убавить класс
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

const modal3 = document.getElementById('modal3');

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!обновление курсора 
function updateCursorPosition() {
  const nextLetter = document.querySelector('.letter.current');
  const nextWord = document.querySelector('.word.current');
  const cursor = document.getElementById('cursor');
  const pole = document.getElementById('pole');

  if (nextLetter || nextWord) {
    const target = nextLetter || nextWord;
    const targetRect = target.getBoundingClientRect();
    const poleRect = pole.getBoundingClientRect();

    cursor.style.top = `${targetRect.top + 11 + window.scrollY}px`; 
    // расстояние от верхней границы видимоф области окна до верхней границы элемента +11 вниз 
    cursor.style.left = `${targetRect [nextLetter ? 'left':'right'] + window.scrollX}px`;
    // hotizontal
    
    const space = document.getElementById('Space')
    if (nextWord && target === nextWord && nextWord.lastElementChild) {
      addClass (space, 'migaet');
    } 
/* */
    if (target === nextWord && !nextWord.nextElementSibling) {
      modal3.style.display = "block";
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

    var incorrectcheck = 0;
    var correctcheck = 0;

// Обработчик нажатия клавиш
  const pole = document.getElementById('pole')
  pole.addEventListener('keydown', ev => {
  const key = ev.key; 
  const currentWord = document.querySelector('.word.current');
  const currentLetter = document.querySelector('.letter.current');
  const expected = currentLetter?.innerHTML || ' ';
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
  текстовый узел(пробелы или перенос строк) или комментарий. 

firstElementChild: Если вы хотите получить только первый дочерний 
элемент (т.е. только элементы HTML, игнорируя текстовые узлы)*/

  // Обработка ввода буквы
  // если это одна буква и внимание направлено на нее
  if (isLetter && currentLetter) { 
   
    /* нажатая буква === буква которая содержится в span */
    addClass(currentLetter, key === expected ? 'correct' : 'incorrect');

    /* если эта буква находится в span(то есть правильная буква),
    а ввели неправильную букву, то присвоится другой класс*/
    removeClass(currentLetter, 'current');
    // удаляется то, что на нее направлено внимание
    /* function addClass(el, name) {
  el.classList.add(name); 
  name- это имя класса, который мы хотим добавить к элементу 
}*/

     // Обновляем счетчики
     if (key === expected) {
      correctcheck++;
    } else {
      incorrectcheck++;
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
    
  const words = document.querySelectorAll('.word')
     const isLastWord = currentWord === words[words.length - 1]
     if (isLastWord){
      modal3.style.display = "block"     
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
  
    console.log (`✅ ${correctcheck}`)
    console.log(`❌ ${incorrectcheck}`)
    updateCursorPosition(); // Обновляем позицию курсора после изменений
  });

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

  // Наблюдатель за изменениями в DOM
  function Observe() {
  const observer = new MutationObserver((mutations) => {
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
setTimeout(Observe, 1000)

function ENGLISH () {
const keyboardContainer = document.getElementById('keyboard');
keyboardContainer.innerHTML = `
    <ul class="line">
      <li class="key" id="Q">Q</li>
      <li class="key" id="W">W</li>
      <li class="key" id="E">E</li>
      <li class="key" id="R">R</li>
      <li class="key" id="T">T</li>
      <li class="key" id="Y">Y</li>
      <li class="key" id="U">U</li>
      <li class="key" id="I">I</li>
      <li class="key" id="O">O</li>
      <li class="key" id="P">P</li>
    </ul>
    
    <ul class="line">
      <li class="key" id="A">A</li>
      <li class="key" id="S">S</li>
      <li class="key" id="D">D</li>
      <li class="key" id="F">F</li>
      <li class="key" id="G">G</li>
      <li class="key" id="H">H</li>
      <li class="key" id="J">J</li>
      <li class="key" id="K">K</li>
      <li class="key" id="L">L</li>
    </ul>
    
    <ul class="line">
      <li class="key" id="Z">Z</li>  
      <li class="key" id="X">X</li>  
      <li class="key" id="C">C</li>  
      <li class="key" id="V">V</li>  
      <li class="key" id="B">B</li>  
      <li class="key" id="N">N</li>  
      <li class="key" id="M">M</li>  
    </ul> 

    <ul class="line">
        <li class="key" id="Space" style="width: 200px;"></li>
    </ul>
`;
}

function RUSSIAN () {
  const keyboardContainer = document.getElementById('keyboard');
  keyboardContainer.innerHTML = `
   <ul class="line">
     <li class="key" id="Й">Й</li>
     <li class="key" id="Ц">Ц</li>
     <li class="key" id="У">У</li>
     <li class="key" id="К">К</li>
     <li class="key" id="Е">Е</li>
     <li class="key" id="Н">Н</li>
     <li class="key" id="Г">Г</li>
     <li class="key" id="Ш">Ш</li>
     <li class="key" id="Щ">Щ</li>
     <li class="key" id="З">З</li>
     <li class="key" id="Х">Х</li>
     <li class="key" id="Ъ">Ъ</li>
   </ul>

   <ul class="line">
     <li class="key" id="Ф">Ф</li>
     <li class="key" id="Ы">Ы</li>
     <li class="key" id="В">В</li>
     <li class="key" id="А">А</li>
     <li class="key" id="П">П</li>
     <li class="key" id="Р">Р</li>
     <li class="key" id="О">О</li>
     <li class="key" id="Л">Л</li>
     <li class="key" id="Д">Д</li>
     <li class="key" id="Ж">Ж</li>
     <li class="key" id="Э">Э</li>
   </ul>

   <ul class="line">
     <li class="key" id="Я">Я</li>
     <li class="key" id="Ч">Ч</li>
     <li class="key" id="С">С</li>
     <li class="key" id="М">М</li>
     <li class="key" id="И">И</li>
     <li class="key" id="Т">Т</li>
     <li class="key" id="Ь">Ь</li>
     <li class="key" id="Б">Б</li>
     <li class="key" id="Ю">Ю</li>
   </ul>     

   <ul class="line">
     <li class="key" id="Space" style="width: 270px;"></li>
  </ul>`
}

