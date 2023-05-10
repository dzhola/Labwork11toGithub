/* 1. Створіть масив persons та додайте в нього 5 обєктів типу { name: ‘John’, age: 23, city: ‘Boston’}. 
Для масиву persons встановіть властивості groupName=’A’, teacher=’Joan Doe’, year=’2023’. 
З допомогою різних версій циклу for виведіть елементи масиву та властивості масиву */
let persons =
  [
    { name: 'John', age: 23, city: 'Boston' },
    { name: 'Alice', age: 27, city: 'New York' },
    { name: 'Bob', age: 19, city: 'Chicago' },
    { name: 'Sarah', age: 31, city: 'Los Angeles' },
    { name: 'Tom', age: 25, city: 'San Francisco' }
  ];

persons.groupName = 'A';
persons.teacher = 'Joan Doe';
persons.year = '2023';

// for 
for (let i = 0; i < persons.length; i++) 
{
  console.log(persons[i].name + ', ' + persons[i].age + ', ' + persons[i].city);
}
console.log(persons.groupName, persons.teacher, persons.year);

// for...of 
for (let person of persons) 
{
  console.log(person.name + ', ' + person.age + ', ' + person.city);
}
console.log(persons.groupName, persons.teacher, persons.year);

// forEach 
persons.forEach(function (person) 
{
  console.log(person.name + ', ' + person.age + ', ' + person.city);
});
console.log(persons.groupName, persons.teacher, persons.year);



/* 2. Створіть обєкт defaults призначений для збереження налаштувань програми який містить 
поля mode=test, debugLevel=error, logFolder=root. Створіть обєкт userSetting який містить 
поля mode=production, debugLevel=trace. Створіть функцію яка прийме як аргументи дані 
два обєкти та обєднає властивості цих двох обєктів в один обєкт надаючи пріоритет 
властивостям з обєкта userSetting. Запропонуєти як мінімум 3 способи для вирішення цієї задачі. */
let defaults = { mode: 'test', debugLevel: 'error', logFolder: 'root' };
let userSetting = { mode: 'production', debugLevel: 'trace' };

// Спосіб 1 - використання Object.assign()
function settings1(defaults, userSetting) 
{
  return Object.assign({}, defaults, userSetting);
}
let mergedSettings1 = settings1(defaults, userSetting);
console.log('\n1.Метод Object.assign()\n');
console.log(mergedSettings1);

// Спосіб 2 - використання оператора spread
function settings2(defaults, userSetting) 
{
  return { ...defaults, ...userSetting };
}
let mergedSettings2 = settings2(defaults, userSetting);
console.log('\n2.Оператор spread\n');
console.log(mergedSettings2);

// Спосіб 3 - власна функція з використанням циклу for...in
function mergeSettings(defaults, userSetting) 
{
  let result = {};
  for (let prop in defaults) {
    result[prop] = defaults[prop];
  }
  for (let prop in userSetting) {
    result[prop] = userSetting[prop];
  }
  return result;
}
let settings3 = mergeSettings(defaults, userSetting);
console.log('\n3.Цикл for...in\n');
console.log(settings3);



/* 3. Для обєкта person із завдання 1 додайте можливість отримати рік народження не додаючи
додаткової властивості до цього обєкта. Зробіть дане поле доступним тільки для читання */
let person = { name: 'John', age: 23, city: 'Boston' };

Object.defineProperty(person, 'yearOfBirth',
  {
    get: function () 
    {
      return new Date().getFullYear() - this.age;
    },
    enumerable: true,
    configurable: true
  });

console.log(person.yearOfBirth); // 2000
person.yearOfBirth = 1990; // не працює, оскільки властивість доступна тільки для читання



//4. Якими способами можна обєднати два масиви?
//Два масиви можна об'єднати за допомогою методу concat(), оператора spread (...) або методу push() для кожного елемента другого масиву.

//Використання методу push():
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

arr2.forEach((element) => 
{
  arr1.push(element);
});

console.log(arr1); // [1, 2, 3, 4, 5, 6]



/* 5. Напишіть алгоритм який перетворить масив persons у масив текстових фрагментів типу ’John from Boston born in 2000’ */
const textFragments = persons.map(person => `${person.name} from ${person.city} born in ${new Date().getFullYear() - person.age}`);
console.log(textFragments);



//6. Напишіть алгоритм який з масиву persons вибере людей старше 20 років.
const personsOver20 = persons.filter(person => person.age > 20);
console.log(personsOver20);



/* 7. З допомогою деструктуризації присвойте значення полів name, city із обєкта person у
окремі змінні. З допомогою деструктуризації присвойте перший елемен масиву persons у
окрему змінну. */
const { name, city } = person;
console.log(name, city);

const [firstPerson] = persons;
//const { name, city } = firstPerson;
console.log(name, city);



/* 8. Створіть функцію getUserData яка приймє аргументом імя користувача та повертає обєкт із
масиву persons. Якщо обєкт з таким іменем не знайдений функція має згенерувати обєкт
помилки new Error(‘Unable to find user’). Створіть функцію showUserInfo яка приймає
аргументом імя, виводить в консоль текст ‘Loading’, викликає функцію getUserData, якщо
користувач знайдений – виводить його поля в консоль і текст ‘Loading finished’, якщо
користувач не знайдений виведіть текст помилки та текст ‘Loading finished’. */
function getUserData(name) 
{
  const user = persons.find(person => person.name === name);
  if (!user) 
  {
    throw new Error('Unable to find user');
  }
  return user;
}

function showUserInfo(name) 
{
  console.log('Loading');
  try 
  {
    const user = getUserData(name);
    console.log(user.name, user.age, user.city);
  }
  catch (error) 
  {
    console.log(error.message);
  }
  finally 
  {
    console.log('Loading finished');
  }
}

console.log(showUserInfo("Bob"));



//9. Напишіть функцію яка перетворить текстовий фрагмент у масив букв.
function textToLetters(text) 
{
  return text.split('');
}
console.log(textToLetters('hello'));



//10. Створіть функцію яка відобразить букви слова у зворотньому порядку.
function reverseWord(word) 
{
  return word.split('').reverse().join('');
}
console.log(reverseWord('hello'));



//11. Напишіть функцію яка визначатиме чи передане імя файлу файл формату ‘.js’
function isJSFile(filename) 
{
  if (filename.endsWith('.js')) 
  {
    console.log(`File "${filename}" is a format file .js`);
    return true;
  } 
  else 
  {
    console.log(`File "${filename}" is not a format file .js`);
    return false;
  }
}

console.log(isJSFile('Laba4_script.js'));
console.log(isJSFile('Laba4.html'));



//12. Напишіть функцію яка перетворить речення на масив слів
function sentenceToWords(sentence) 
{
  return sentence.split(' ');
}

console.log(sentenceToWords('Це речення перетвориться у масив слів!!!'));



//13. Напишіть алгорим який замінеть певне слово у текстовому фрагмент
function replaceWordInSentence(sentence, wordToReplace, newWord) 
{
  let wordsArray = sentence.split(" ");

  for (let i = 0; i < wordsArray.length; i++) 
  {
    if (wordsArray[i] === wordToReplace) 
    {
      wordsArray[i] = newWord;
    }
  }
  return wordsArray.join(" ");
}

let sentence = "red book";
let wordToReplace = "red";
let newWord = "black";

let newSentence = replaceWordInSentence(sentence, wordToReplace, newWord);
console.log(newSentence); 