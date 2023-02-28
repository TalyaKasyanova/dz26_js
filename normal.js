// 1 - Користувач вводить суму грошей в гаманці і ціну однієї шоколадки.
//Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.


let wallet = prompt("Введіть суму грошей в гаманці у гривнях");
let price = prompt("Введіть ціну однієї шоколадки");

wallet = parseFloat(wallet);
price = parseFloat(price);

let numOfChocolates = Math.floor(wallet / price);
let change = wallet % price;

console.log("Ви можете купити " + numOfChocolates + " шоколадок і у вас залишиться " + change.toFixed(2) + " грн");

alert(`Ви можете купити ${numOfChocolates} шоколадок і у вас залишиться ${change.toFixed(2)} грн`);


// 2 - Запитай у користувача тризначне число і виведи його задом наперед.
// Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).

let number = prompt("Введіть тризначне число:");
let ones = number % 10;
let tens = Math.floor((number / 10) % 10);
let hundreds = Math.floor(number / 100);
let reversed = ones * 100 + tens * 10 + hundreds;

console.log("Введене число: " + number);
console.log("Число задом наперед: " + reversed);