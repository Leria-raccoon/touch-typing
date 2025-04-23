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
let D = 'RU'
let F = 100

document.addEventListener('DOMContentLoaded', ()=>{
  newGame(wordsRU, 100);
  addremoveClass (id100, OneHundred)
})

document.getElementById('button2').addEventListener('click',() =>{
  MModal.style.display = 'none';
  newGame(wordsRU, 100);
  language.textContent = 'russian';
  D = 'RU';
  F = 100
});

document.getElementById('button3').addEventListener('click',() =>{
  MModal.style.display = 'none';
  newGame(wordsEN, 100);
  language.textContent = 'english';
  D = 'EN';
  F = 100
});

  const Ten = document.getElementById('Ten')
  Ten.addEventListener('click',() =>{
  const words = D === 'RU' ? wordsRU : wordsEN;
  newGame(words, 10);
  F = 10
  addremoveClass (id10, Ten)
  
});

  const TwentyFive = document.getElementById('TwentyFive')
  TwentyFive.addEventListener('click',() =>{
  const words = D === 'RU' ? wordsRU : wordsEN;
  newGame(words, 25);
  F = 25
  Ten.classList.toggle('WordCount2');
  addremoveClass(id25, TwentyFive)
});

  const Fifty = document.getElementById('Fifty')
  Fifty.addEventListener('click',() =>{
  const words = D === 'RU' ? wordsRU : wordsEN;
  newGame(words, 50);
  F = 50
  addremoveClass (id50, Fifty)
});

  const SeventyFive = document.getElementById('SeventyFive')
  SeventyFive.addEventListener('click',() =>{
  const words = D === 'RU' ? wordsRU : wordsEN;
  newGame(words, 75);
  F = 75
  addremoveClass (id75, SeventyFive)
});

  const OneHundred= document.getElementById('OneHundred')
  OneHundred.addEventListener('click',() =>{
  const words = D === 'RU' ? wordsRU : wordsEN;
  newGame(words, 100);
  F = 100
  addremoveClass (id100, OneHundred)
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

// Форматирование слова для отображения (каждая буква в отдельном span)
function formatWord(word) {
  return `<div class="word"><span class="letter">${word.split('').join('</span><span class="letter">')}</span></div>`;
}

// запуск игры
function newGame(words, num) {
  // Функция для правильного перемешивания массива (Фишер-Йетс)
  function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }

  // Обновляем контейнер со словами
  function updateWordsContainer(wordsToShow) {
    const wordsContainer = document.getElementById('pole');
    wordsContainer.innerHTML = ''; // очистка контейнера
    wordsContainer.innerHTML = wordsToShow.map(formatWord).join('');
  }

  // Перемешиваем слова и выбираем нужное количество
  const shuffledWords = shuffleArray(words).slice(0, num);
  updateWordsContainer(shuffledWords);

  // Устанавливаем текущее слово и букву
  document.querySelector('.word').classList.add('current');
  document.querySelector('.letter').classList.add('current');

  const cursor = document.getElementById('cursor')
  cursor.style.display = 'block'
  
  pole.focus();
  updateCursorPosition();
} 


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

    cursor.style.top = `${target.getBoundingClientRect().top + 11}px`; 
    // расстояние от верхней границы видимоф области окна до верхней границы элемента +11 вниз 
    cursor.style.left = `${target.getBoundingClientRect()[nextLetter ? 'left':'right'] + window.scrollX}px`;
    // hotizontal
    
    // Автопрокрутка контейнера (если слово уходит за границы)
    if (targetRect.bottom > poleRect.bottom) { // Учитываем новый отступ
      const scrollAmount = targetRect.bottom - poleRect.bottom;
      pole.scrollTop += scrollAmount;
    } else if (targetRect.top < poleRect.top) {
      const scrollAmount = targetRect.top - poleRect.top;
      pole.scrollTop += scrollAmount - 10;
    }
  }
}

// Обновление курсора при нажатии клавиш
document.addEventListener('keydown', updateCursorPosition);

// Обновление курсора при изменении размера окна
window.addEventListener('resize', updateCursorPosition);

// Обработчик нажатия клавиш
  const pole = document.getElementById('pole')
  pole.addEventListener('keydown', ev => {
  const key = ev.key;
  const currentWord = document.querySelector('.word.current');
  const currentLetter = document.querySelector('.letter.current');
  const expected = currentLetter?.innerHTML || ' ';
 /* innerHTML- это одна буква, которая находится в span
 оператор опциональной цепочки  ?.. Этот оператор позволяет
 безопасно обращаться к свойствам объектов, 
 которые могут быть null или undefined, не вызывая ошибки 
 (он просто вернет undefined)
 1 проверяет на существование currentLetter (если не равен null\undefined)
 обращается к его свойству (innerHTML), а если = null\undefined, 
 то выводится ' '  */
  const isLetter = key.length === 1 && key !== ' '; 
  // проверяте что нажата одна буква и это не пробел
  const isSpace = key === ' '; 
  const isBackspace = key === 'Backspace'; // удалить
  const isFirstLetter = currentLetter === currentWord?.firstChild;
  /* .firstChild свойство объекта- доступ к первому дочернему элементу
  (или узлу)данного элемента в документе html) 
 -Может вернуть любой узел: Это может быть элемент, 
  текстовый узел(пробелы или перенос строк) или комментарий. 

firstElementChild: Если вы хотите получить только первый дочерний 
элемент (т.е. только элементы HTML, игнорируя текстовые узлы)*/

  // Обработка ввода буквы
  // если это одна буква и внимание направлено на нее
  if (isLetter && currentLetter) {
    addClass(currentLetter, key === expected ? 'correct' : 'incorrect');
    /* если эта буква находится в span(то есть правильная буква),
    а ввели неправильную букву, то присвоится другой класс*/
    removeClass(currentLetter, 'current');
    // удаляется то, что на нее направлено внимание
    /* function addClass(el, name) {
  el.classList.add(name); 
  name- это имя класса, который мы хотим добавить к элементу 
}*/

// добавляем класс к следующий букве
    if (currentLetter.nextSibling) {
      addClass(currentLetter.nextSibling, 'current');
    }
  }
  // Свойство .nextSibling- получение next node, 
  // относительно текущего узла (для объякта типа Node, возвращает следующий узел на том же уровне вложенности)

  // Обработка пробела (переход к следующему слову)
  // нажали пробел и переходим к новому слову 
  if (isSpace) {
    if (expected !== ' ' && currentWord) {
      // Помечаем все неправильные буквы в текущем слове
      [...currentWord.children].forEach(letter => { // [] преобразуют в массив 
        if (!letter.classList.contains('correct')) { 
          // если буква не помечена как правильная, то мы помечаем ее как правильная 
          addClass(letter, 'incorrect');
        }
      });
    } /* property children —для HTML-элементов ,
    возвращает коллекцию всех дочерних элементов (узлов) данного 
    элемента. Получить доступ к элементам, 
    которые находятся внутри указанного элемента, 
    не включая текстовые узлы или комментарии. 
    childNodes
    */

// курсор на СЛОВЕ и получает слудующий узел (проверяет на наличие слудующего узла)
    if (currentWord?.nextSibling) {
      removeClass(currentWord, 'current'); // удаляем класс
      addClass(currentWord.nextSibling, 'current');// добавляем класс
      // if the cursor is on the current LETTER
      if (currentLetter) removeClass(currentLetter, 'current');
      addClass(currentWord.nextSibling.firstChild, 'current');
    }
  }

  // processing (Обработка) backspace (возврат назад)
  if (isBackspace) {
    if (currentLetter && isFirstLetter && currentWord?.previousSibling) {
      // previousSibling- property, которое используется для получения previous node
// current letter \ current is first letter in a word \ is there a previous word 

      // return to previous WORD
      removeClass(currentWord, 'current'); // удаляет current у слова
      addClass(currentWord.previousSibling, 'current');//add к previous
      removeClass(currentLetter, 'current');// удаляет current у буквы 
      addClass(currentWord.previousSibling.lastChild, 'current');
      // lastCild- property returns the last node for the current node
      removeClass(currentWord.previousSibling.lastChild, 'incorrect');
      removeClass(currentWord.previousSibling.lastChild, 'correct');
      // remove both classes
    } else if (currentLetter && !isFirstLetter) { //

      // return to previous LETTER
      removeClass(currentLetter, 'current');// remove current letter class
      addClass(currentLetter.previousSibling, 'current');// add previous letter current
      removeClass(currentLetter.previousSibling, 'incorrect');//
      removeClass(currentLetter.previousSibling, 'correct');// remove both classes

    } else if (!currentLetter && currentWord?.lastChild) { 
      //если это не current letter and lastChild 
      // Возврат к последней букве текущего слова
      addClass(currentWord.lastChild, 'current'); 
      removeClass(currentWord.lastChild, 'incorrect');
      removeClass(currentWord.lastChild, 'correct'); 
    }
  }

    updateCursorPosition(); // Обновляем позицию курсора после изменений
  });

  
/* 
const play = document.getElementById('play')
  play.addEventListener('click',() => {
  pole.style.filter = 'blur(0px)';
  play.style.display = 'none'
});

 
 */







