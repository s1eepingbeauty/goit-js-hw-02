const pricePerDroid = 3000;
let credits = 23580;
let totalPrice;
let quantity;
let message;

do {
    quantity = Number(prompt("Сколько дроидов желаете приобрести?"));
    if (Number.isNaN(quantity) === true)
    {
        alert("Только целое число!");
    }
} while (Number.isNaN(quantity) === true)

if (quantity > 0) {

    totalPrice = pricePerDroid * quantity;

    if (totalPrice < credits) {
        credits -= totalPrice;
        message = `Вы купили ${quantity} дроидов, на счету осталось ${credits} кредитов.`;
    }
    else {
        message = "Недостаточно средств на счету!";
    }
}
else {
    message = "Отменено пользователем!";
}

alert (message);
