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
      "радар", "фламинго", "иллюминатор", "альбатрос", "гейзер", "граффити", 
    "кристалл", "палатка", "броненосец", "голограмма", "цунами", "оригами",
    "дикобраз", "телескоп", "сафари", "метеорит", "фейерверк", "кенгуру",
    "лазер", "затмение", "витраж", "каньон", "осьминог", "гироскутер",
    "комета", "археология", "парашют", "медуза", "мозаика", "рация",
    "костер", "колибри", "вакуум", "фуникулер", "пеликан", "лавина",
    "биология", "каракатица", "робот", "водопад", "саксофон", "дрон",
    "эйфель", "палеонтология", "байдарка", "иллюзия", "вулкан", "кемпинг",
    "радуга", "альпинизм", "микроскоп", "хамелеон", "айсберг", "анимация",
    "экосистема", "нарвал", "компас", "метель", "коала", "эволюция",
    "канатка", "физика", "роса", "дайвинг", "глобус", "химия",
    "закат", "трансформер", "кварц", "балет", "пузырь", "саванна",
    "паспорт", "эхо", "изотоп", "капля", "тайга", "навигатор",
    "виза", "лабиринт", "коралл", "мольберт", "парадокс", "проектор",
    "круиз", "артефакт", "реликвия", "иероглиф", "чемодан", "солнечник",
    "карта", "орнамент", "глушитель", "манускрипт", "алфавит", "экспедиция",
    "пещера", "силуэт", "фреска", "космонавт", "озеро", "калейдоскоп",
    "тень", "этюд", "изумруд", "пазл", "галактика", "зодиак"
  ];

document.getElementById('button2').addEventListener('click',() =>{
  MModal.style.display = 'none';
  newGame(wordsRU);
});

const wordsEN = [          
  "apple", "banana", "orange", "grape", "kiwi", "mango", "peach", "pear", "plum", "cherry",
  "strawberry", "blueberry", "raspberry", "watermelon", "pineapple", "coconut", "lemon", "lime", "apricot", "fig",
  "date", "pomegranate", "blackberry", "tangerine", "cantaloupe", "honeydew", "papaya", "passionfruit", "dragonfruit", "jackfruit",
  "carrot", "potato", "tomato", "cucumber", "pepper", "onion", "garlic", "spinach", "broccoli", "cauliflower",
  "lettuce", "kale", "zucchini", "eggplant", "beet", "radish", "celery", "asparagus", "artichoke", "brussels sprouts",
  "chicken", "beef", "pork", "lamb", "fish", "shrimp", "crab", "lobster", "turkey", "duck",
  "egg", "cheese", "milk", "yogurt", "cream", "butter", "bread", "pasta", "rice", "quinoa",
  "oat", "barley", "corn", "flour", "sugar", "salt", "pepper", "spice", "herb", "vinegar",
  "oil", "sauce", "mustard", "ketchup", "mayonnaise", "honey", "jam", "jelly", "syrup", "chocolate",
  "cake", "cookie", "pie", "brownie", "pudding", "ice cream", "candy", "chocolate"
];

document.getElementById('button3').addEventListener('click',() =>{
  MModal.style.display = 'none';
  newGame(wordsEN);
});

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

function WordsContainer (words) {
  const wordsContainer = document.getElementById('pole');
  wordsContainer.innerHTML = '';// очистка контейнера
  wordsContainer.innerHTML = words.map(formatWord).join('');
}

// Инициализация новой игры
function newGame(words) {
  WordsContainer (words)
  
  // Устанавливаем текущее слово и букву
  document.querySelector('.word').classList.add('current');
  document.querySelector('.letter').classList.add('current');
  
  pole.focus();
  updateCursorPosition(); // Обновляем позицию курсора

  /* const cursor = document.getElementById('cursor')
  cursor.style.display = 'block' */
}

function updateCursorPosition() {
  const nextLetter = document.querySelector('.letter.current');
  const nextWord = document.querySelector('.word.current');
  const cursor = document.getElementById('cursor');

  if (nextLetter || nextWord) {
      const target = nextLetter || nextWord;
// метод getBoundingClientRect() получает размер и текущее расположение элемента 
      // Учитываем прокрутку страницы
      cursor.style.top = `${target.getBoundingClientRect().top + 10}px`;
      cursor.style.left = `${target.getBoundingClientRect()[nextLetter ? 'left':'right'] + window.scrollX}px`;// hotizontal
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

/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */
if (currentWord) {
  const container = document.getElementById('pole'); 
  const wordRect = currentWord.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();
  
  if (wordRect.bottom > containerRect.bottom) {
    const scrollAmount = wordRect.bottom - containerRect.bottom;
    container.scrollTop += scrollAmount + 10;
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







