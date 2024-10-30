const tg = window.Telegram.WebApp;

document.getElementById("character").addEventListener("click", function() {
    tg.sendData('character'); // Отправка данных боту
    tg.MainButton.setText('Посмотреть персонажа');
    tg.MainButton.show();
});

document.getElementById("map").addEventListener("click", function() {
    tg.sendData('map');
    tg.MainButton.setText('Открыть карту');
    tg.MainButton.show();
});

document.getElementById("tasks").addEventListener("click", function() {
    tg.sendData('tasks');
    tg.MainButton.setText('Задания');
    tg.MainButton.show();
});

document.getElementById("friends").addEventListener("click", function() {
    tg.sendData('friends');
    tg.MainButton.setText('Друзья');
    tg.MainButton.show();
});
