//1. Виведіть число згенероване випадковим чином.
let randomNumber = Math.floor(Math.random() * 333) + 3;
console.log(randomNumber);


//2. Створити змінні базових типів, виведіть їх на екран.

//змінна типу number
let exempleNumber = 450;
console.log(exempleNumber); 

//змінна типу BigInt 
let bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt); 

//змінна типу string
let exempleString1 = "оголошення в подвійних лапках";
let exempleString2 = 'оголошення в одинарних лапках';
console.log(exempleString); 

//змінна типу boolean 
let boolean = true;
console.log(boolean); 

//змінна типу null 
let empty = null;
console.log(empty); 

//змінна типу undefined
let value;
console.log(value); 


/* 3. Збережіть суму двох чисел і збережіть її у третю змінну, 
виведіть її на екран. */
let num1 = 17;
let num2 = 23;
let sum = num1 + num2;

console.log(sum);


/* 4. Створіть файл script.js. (створено файл Laba3_script.js) 
Підключіть його в нижню частину файлу index.html 
(створено файл Laba3.html). створіть три 
діалогових вікна з alert(), prompt(), confirm(). */
alert("Це повідомлення з'явиться у вікні");

let name = prompt("Як вас звати?");
console.log("Привіт, " + name + "!");

let answer = confirm("Ви впевнені, що хочете продовжити?");
console.log(answer);


//5. Запитайте у користувача його вік. Виведіть фразу “Ваш вік ____”
let age = prompt("Скільки вам років?");
console.log("Ваш вік " + age);


/* 6. Ввести кількість купленого товару, 
ціну за одиницю. Виведіть суму покупки. */
let count = prompt("Скільки товару ви купили?");
let price = prompt("Яка ціна за одиницю товару?");
let total = count * price;

console.log("Загальна сума покупки: " + total);


//7. Введіть число – визначте чи воно від’ємне.
let number = prompt("Введіть число:");
if (number < 0) 
{
  console.log("Це від'ємне число");
}
if (number == 0) 
{
	console.log("Це нуль");
} 
else 
{
  console.log("Це додатнє число");
}


//8. Введіть номер дня тижня, виведіть його назву.
let dayOfWeek = prompt('Введіть номер дня тижня (1-7):');
switch (dayOfWeek) 
{
  case '1':
    alert('Понеділок');
    break;
  case '2':
    alert('Вівторок');
    break;
  case '3':
    alert('Середа');
    break;
  case '4':
    alert('Четвер');
    break;
  case '5':
    alert("П'ятниця");
    break;
  case '6':
    alert('Субота');
    break;
  case '7':
    alert('Неділя');
    break;
  default:
    alert('Некоректно введене число!');
}


//9. Виведіть таблицю множення числа 6.
for (let i = 1; i <= 10; i++) 
{
  let result = 6 * i;
  console.log(`6 x ${i} = ${result}`);
}


/* 10. Задайте одномірний масив n=5. Виведіть квадрат 
третього числа, суму першого і останнього
елемента суму квадратів від’ємних елементів. */
let n = 5;
let arr = [1, -2, 3, 4, 5];
let thirdElementSquare = arr[2] ** 2;
let sumFirstAndLast = arr[0] + arr[n-1];
let negativeSquaresSum = 0;
for (let i = 0; i < n; i++) 
{
  if (arr[i] < 0) 
  {
    negativeSquaresSum += arr[i] ** 2;
  }
}
console.log(`Квадрат третього числа: ${thirdElementSquare}`);
console.log(`Сума першого і останнього елемента: ${sumFirstAndLast}`);
console.log(`Сума квадратів від'ємних елементів: ${negativeSquaresSum}`);


/* 11. Створіть об’єкт машина. Поля: ім’я власника, 
назва моделі, об’єм двигуна. Створіть масив з кількома 
об’єктами, виведіть машину з мінімальним об’ємом двигуна. */
let car1 = {
  owner: 'Олександр',
  model: 'Honda',
  engine: 1.8
};

let car2 = {
  owner: 'Катерина',
  model: 'Toyota',
  engine: 2.0
};

let car3 = {
  owner: 'Арсен',
  model: 'Ford',
  engine: 1.6
};

let cars = [car1, car2, car3];
let minEngineCar = cars[0];
for (let i = 1; i < cars.length; i++) 
{
  if (cars[i].engine < minEngineCar.engine) 
  {
    minEngineCar = cars[i];
  }
}
console.log(`Машина з мінімальним об'ємом двигуна: ${minEngineCar.owner}'s ${minEngineCar.model}`);


//12. Введіть 4 числа, Знайти max{min(a, b), min(c, d)
let a = prompt('Введіть перше число:');
let b = prompt('Введіть друге число:');
let c = prompt('Введіть третє число:');
let d = prompt('Введіть четверте число:');
let min1 = Math.min(a, b);
let min2 = Math.min(c, d);
let max = Math.max(min1, min2);
alert(`max{min(${a}, ${b}), min(${c}, ${d})} = ${max}`);


/* 13. Задайте слово, виведіть його довжину та 
запишіть його в зворотному порядку*/
let word = prompt("Введіть слово:");
let length = word.length;
console.log("Довжина слова: " + length);
let reversedWord = word.split("").reverse().join("");

console.log("Слово у зворотньомі порядку: " + reversedWord);