function isLoginValid (login, min = 4, max = 16) {
    // Write code under this line
    if (login.length >= min && login.length <= max)
    {
        return true;
    }
    else {
        return false;
    }
  }
  
  function isLoginUnique  (allLogins, login) {
    'use strict';
    // Write code under this line
    let checkLogin = true;
    for (let i = 0; i < allLogins.length; i += 1) {
        if (allLogins[i].includes(login) === true) {
            checkLogin = false;
        }
    }
    return checkLogin;
  }
  
  function addLogin (allLogins, login) {
    'use strict';
    const SUCCESS = 'Логин успешно добавлен!';
    const REFUSAL = 'Такой логин уже используется!';
    const ERROR = 'Ошибка! Логин должен быть размером от 4 до 16 символов';
    let message;
    // Write code under this line    
    if (isLoginValid(login) === true && isLoginUnique(logins, login) === true) {      
        logins.push(login);
        message = SUCCESS;
    }
    else if (isLoginValid(login) === false) {
        message = ERROR;
    }
    else if (isLoginUnique(logins, login) === false)
    {
        message = REFUSAL;
    }
    return message;
  }
  
  const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
  
   console.log(addLogin(logins, 'Ajax'));
  // 'Логин успешно добавлен!'
  
   console.log(addLogin(logins, 'robotGoogles')); 
  // 'Такой логин уже используется!'
  
   console.log(addLogin(logins, 'Zod'));
  // 'Ошибка! Логин должен быть от 4 до 16 символов'
  
   console.log(addLogin(logins, 'jqueryisextremelyfast')); 
  // 'Ошибка! Логин должен быть от 4 до 16 символов' 