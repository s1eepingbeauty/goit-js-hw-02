const ADMIN_PASSWORD = 'pwd123';
let message;

let result = prompt('Введите пароль:');

if (result === null) {
    message = 'Отменено пользователем!';
}

else {  
    message = (result === ADMIN_PASSWORD) ? 'Добро пожаловать!' : 'Доступ запрещен, неверный пароль!';
}

alert (message);
