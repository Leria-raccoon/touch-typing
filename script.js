// открытие и закрытие 
document.getElementById('MenuButtom').addEventListener('click', () => {
    menu.classList.toggle('open'); // Переключаем класс 'open'
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

// предотвращает запись цифр, работает на все окно
 document.addEventListener('keydown', (ev)=> {
if (ev.target.matches('#en') || ev.target.matches('#ru')){
if (/\d/.test(ev.key)){
    ev.preventDefault()
    alert('вы ввели цифру!');
    }
   }

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

 
 let i = 0
const words = 'apple banana orange grape cherry strawberry '; 
const wordsA = words.split('');  // Разбиваеn строку на символы

const wordContainer = document.getElementById('pole');
  wordContainer.textContent = words; // Устанавливаем текст элемента
 
 let cat = false;
 document.getElementById('pole').addEventListener('keydown',(ev) =>{
   if (ev.key === 'Backspace')  { 
   if (cat && i>0){
     console.log("ты удалила")
     i--;
   }
     return; // завершается выполнение функции 
 }
   if  ( wordsA[i] === ev.key ){ 
     console.log(wordsA[i])  
       console.log('правильно')
       cat = true;
  } else {
     console.log('неправильно');
      cat = false;
}
i++
});
 
/* const words = 'apple banana orange grape cherry strawberry '; 
const wordsA = words.split('');  // Разбиваеn строку на символы
const wordContainer = document.getElementById('pole');
  wordContainer.textContent = words; // Устанавливаем текст элемента

document.getElementById('pole').addEventListener('click', () => {
    Play()
})
 
function Play() {
   alert('получилось')
} */








