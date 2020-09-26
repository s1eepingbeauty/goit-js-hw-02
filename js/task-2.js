const calculateEngravingPrice = (message = "", pricePerWord = 0) => { 
// Write code in this line
    let arrayOfWords = message.split(' ');
    let totalPrice = arrayOfWords.length * pricePerWord;
    return totalPrice;
};
console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10)); // 80

console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20)); // 160

console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40)); // 240

console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20)); // 120

console.log(calculateEngravingPrice('Uno', 100)); // 100