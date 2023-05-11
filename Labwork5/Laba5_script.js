/* 1. Створіть функцію average, яка знаходить середнє значення із довільного числа аргументів,
використайте spread … оператор. */
console.log('Завдання 1'); 
function average(...numbers) 
{
  const sum = numbers.reduce((acc, val) => acc + val, 0);
  return sum / numbers.length;
}

console.log(average(7, 22, -3, 2)); // 7
console.log(average(21, 15, 33)); // 23



//2. Створіть функцію values(f, low, high), яка повертає масив значень [f(low), f(low + 1), ..., f(high)].
console.log('Завдання 2');
function values(f, low, high) 
{
  const result = [];
  for (let i = low; i <= high; i++) 
  {
    result.push(f(i));
  }
  return result;
}

console.log(values(x => x * x, 7, 12)); // [49, 64, 81, 100, 121, 144]



/* 3. Своріть функцію callWithContext як приймає обєкт та функцію коллбек яка викликається з
контекстом пережаного обєкта. Викличте цю функцію з обєктом person з полями імя та вік
та функцією яка виведе в консоль ‘Today is ${date }! Happy birthday ${name}. */
console.log('Завдання 3');
function callWithContext(obj, callback) 
{
  callback.call(obj);
}

const person = { name: "Alex", age: 23 };

function sayHappyBirthday() 
{
  const today = new Date().toLocaleDateString();
  console.log(`Today is ${today}! Happy birthday ${this.name}.`);
}

callWithContext(person, sayHappyBirthday); // Today is 11.05.2023! Happy birthday Alex.



/* 4. Створіть функцію, яка повертає об’єкт з двома методами: increment і getValue. Метод
increment має збільшувати значення, яке зберігається в замиканні, а метод getValue має
повертати поточне значення. */
console.log('Завдання 4');
function createCounter() 
{
  let count = 0;
  return {
    increment() 
    {
      count++;
    },
    getValue() 
    {
      return count;
    }
  };
}

const counter = createCounter();

console.log(counter.getValue()); // 0

counter.increment();
counter.increment();
counter.increment();
console.log(counter.getValue()); // 3



/* 5. Створіть функцію getGreeting яка приймає імя та повертає текстовий фрагмент типу ‘Hello
name’. Зробіть щоб функція зберігала значення останнього виклику та якщо аикликана
знову з таким же аргументом – повертала кешовне значення. */
console.log('Завдання 5');
function getGreeting() 
{
  let lastCalledName = null;
  let cachedGreeting = null;
  
  return function(name) 
  {
    if (name === lastCalledName) 
    {
      console.log("Returning cached greeting for " + name + "...");
      return cachedGreeting;
    }
    console.log("Generating new greeting for " + name + "...");
    lastCalledName = name;
    cachedGreeting = "Hello " + name;
    return cachedGreeting;
  };
}

const greet = getGreeting();
console.log(greet("Max")); // Generating new greeting for Max... Hello Max
console.log(greet("Marcus")); // Generating new greeting for Marcus... Hello Marcus
console.log(greet("Mally")); // Returning cached greeting for Mally... Hello Mally




/* 6. Створіть функцію, яка приймає число як аргумент і повертає функцію, яка приймає інше
число як аргумент і повертає суму двох чисел. Перевірте функцію, викликавши її з різними
номерами. */
console.log('Завдання 6');
function acceptArg(x) 
{
  return function(y) 
  {
    return x + y;
  };
}

const add1 = acceptArg(7);
console.log(add1(-3)); // 4
console.log(add1(33)); // 40

const add2 = acceptArg(-4);
console.log(add2(17)); // 13
console.log(add2(-19)); // -23



/* 7. Створіть функцію, яка приймає масив текстових фрагментів як аргумент і повертає нову
функцію, яка приймає текстовий фрагмент як аргумент і повертає логічне значення, яке
вказує, чи існує текстовий фрагмент у вихідному масиві. */
console.log('Завдання 7');
function createContainsFunction(words) 
{
  return function(word) 
  {
    return words.includes(word);
  };
}

const fruits = ["apple", "banana", "orange", "grape"];
const containsFruit = createContainsFunction(fruits);

console.log(containsFruit("banana")); // true
console.log(containsFruit("pear")); // false



/* 8. Створіть функцію, яка приймає масив об’єктів як аргумент і повертає новий масив об’єктів,
де певна властивість написана з великої літери. Використовуйте стрілочну функцію. */
console.log('Завдання 8');
const objects = [
  { name: "herman", age: 27 },
  { name: "mary", age: 19 },
  { name: "kriss", age: 20 }
];

const capitalizedObjects = objects.map(obj => ({
  name: obj.name.charAt(0).toUpperCase() + obj.name.slice(1),
  age: obj.age
}));

console.log(capitalizedObjects);
// Результат:
// [
//   { name: "Herman", age: 27 },
//  { name: "Mary", age: 19 },
//  { name: "Kriss", age: 20 }
// ]



// 9. Напишіть приклад для демонстрації функцій call, apply, bind.
console.log('Завдання 9');
let person1 = 
{
  name: "Mark",
  age: 27,
  sayHello: function() 
  {
    console.log(`Hello, my name is ${this.name}`);
  }
};

person1.sayHello(); // Hello, my name is Mark

const anotherPerson = 
{
  name: "Mary",
  age: 5
};

person1.sayHello.call(anotherPerson); // Hello, my name is Mary

const numbers = [1, 2, 3, 4, 5];

const sum1 = Array.prototype.reduce.call(numbers, function(acc, curr) 
{
  return acc + curr;
}, 0);



/* 10. Створіть функцію яка приймає коллбек – викликає його з переданими аргументами та
виводить в консоль ім'я функції, аргументи та час коли функція викликана. */
console.log('Завдання 10');
function callbackLogger(callback, ...args) 
{
  const functionName = callback.name || 'anonymous';
  console.log(`Calling function ${functionName} with arguments: ${args} at ${new Date()}`);
  callback(...args);
}

// Приклад виклику
function addNumbers(a, b) 
{
  console.log(`The sum of ${a} and ${b} is ${a + b}`);
}

callbackLogger(addNumbers, 3, 5);



// 11. Створіть функцію яка кешує останній виклик на 10 секунд.
console.log('Завдання 11');
function cacheLastCall(func) 
{
  let lastArgs = null;
  let lastResult = null;
  let lastCalledAt = null;

  return function(...args) 
  {
    const now = Date.now();
    if (lastCalledAt && now - lastCalledAt < 10000) 
    {
      console.log('Using cached result');
      return lastResult;
    } 
    else 
    {
      console.log('Calculating new result');
      lastResult = func(...args);
      lastArgs = args;
      lastCalledAt = now;
      setTimeout(() => {
        lastArgs = null;
        lastResult = null;
        lastCalledAt = null;
      }, 10000);
      return lastResult;
    }
  };
}

// Приклад використання
function sum(a, b) 
{
  console.log('Calculating sum');
  return a + b;
}

const cachedSum = cacheLastCall(sum);
console.log(cachedSum(2, 3)); // Calculating new result, 5
console.log(cachedSum(2, 3)); // Using cached result, 5
setTimeout(() => console.log(cachedSum(2, 3)), 11000); // Calculating new result, 5