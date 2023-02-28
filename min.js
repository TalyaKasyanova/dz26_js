// 1 - Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.

let a = 0.1;
let b = 0.2;
let sum1 = a + b;
console.log(sum1.toFixed(2));

// 2 - Виконай додавання рядка "1" і цифри 2(обидві операнди повинні бути в змінних),
// добийся математично правильної відповіді.

let num1 = "1";
let num2 = 2;
// let sum2 = +num1 + num2;  // перший варіант
// console.log(sum2);

let sum2 = Number(num1) + num2; // другий варіант
console.log(sum2);


// 3 - Користувач вказує обсяг флешки в Гб. 
// Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.


let flashSizeGb = prompt("Введіть обсяг флешки в Гб (число)");
let flashSizeMb = flashSizeGb * 1024;
let fileSize = 820;
let numFiles = Math.floor(flashSizeMb / fileSize);

console.log(`На флешку об'ємом ${flashSizeGb} Гб можна записати ${numFiles} файлів розміром 820 Мб.`);

alert(`На флешку об'ємом ${flashSizeGb} Гб можна записати ${numFiles} файлів розміром 820 Мб.`);