let Modal = document.getElementById('modal');
document.getElementById('addWords').addEventListener("click", () => {
    Modal.style.display = "block";
});
document.getElementById("close").addEventListener("click", () => {
    Modal.style.display = "none";
});

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

// Click + получаем первую строку
document.getElementById('addWord').addEventListener('click', () => {
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
            <td><input type="text" placeholder="введите слово"></td>
            <td><input type="text" placeholder="введите перевод"></td>
        `;

        updateTable();
        save();
    } else {
        alert('Пожалуйста, заполните все строки ❤️');
    }
});

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

