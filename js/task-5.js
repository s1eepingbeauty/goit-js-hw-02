let cost;
let userCountry = prompt("В какую страну будет доставка?");

userCountry = userCountry.toLowerCase();
let a = (userCountry.charAt(0)).toUpperCase();
let deliveryCountry = userCountry.replace(userCountry.charAt(0), a);

switch (deliveryCountry){
    case 'Китай':
         cost = 100;
         alert (`Доставка в ${deliveryCountry} будет стоить ${cost} кредитов`);
         break;
    case 'Чили':
        cost = 250;
        alert (`Доставка в ${deliveryCountry} будет стоить ${cost} кредитов`);
        break;
    case 'Австралия':
        cost = 170;
        alert (`Доставка в ${deliveryCountry} будет стоить ${cost} кредитов`);
        break;
    case 'Индия':
        cost = 80;
        alert (`Доставка в ${deliveryCountry} будет стоить ${cost} кредитов`);
        break;
    case 'Ямайка':
        cost = 120;
        alert (`Доставка в ${deliveryCountry} будет стоить ${cost} кредитов`);
        break;
    default:
        alert("В вашей стране доставка не доступна");
}

