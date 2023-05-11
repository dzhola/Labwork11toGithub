/* 1. Напишіть функцію invokeAfterDelay, яка повертає проміс, який викликає задану функцію із 
заданою затримкою. Продемонструйте її роботу, повертаючи проміс, що містить 
випадкове число від 0 до 10. Отриманий результат виведіть в консолі. */
function invokeAfterDelay(delay, func) 
{
  return new Promise((resolve) => 
  {
    setTimeout(() => 
    {
      resolve(func());
    }, delay);
  });
}

// Приклад використання
invokeAfterDelay(1000, () => Math.floor(Math.random() * 11)).then((result) =>
  console.log(`Випадкове число: ` + result)
);



/* 2. Створивши на базі попередньої функції функцію produceRandomAfterDelay Викличте 
функцію produceRandomAfterDelay двічі і надрукуйте суму, після того як будуть отримані 
обидва результати. */
function produceRandomAfterDelay(delay) 
{
  return invokeAfterDelay(delay, () => Math.floor(Math.random() * 11));
}

// Приклад використання
Promise.all([
  produceRandomAfterDelay(1000),
  produceRandomAfterDelay(2000),
]).then((results) => 
{
  const sum = results.reduce((acc, curr) => acc + curr);
  console.log(`Сума двох випадкових чисел: ` + sum);
});



/* 3. Напишіть функцію sleep, яка повертає проміс, який можна викликати так: await sleep(1000) */
function sleep(delay) 
{
  return new Promise((resolve) => setTimeout(resolve, delay));
}

// Приклад використання
async function myFunc() 
{
  console.log("start");
  await sleep(1000);
  console.log("end");
}
myFunc();



/* 4. Напишіть функцію getUser яка приймає id та повертає проміс який виконується через 1 секунду 
з обєктом користувача з полями імя, вік, місто, id. Підготуйте 4 обєкти користувача 
з id від 0 до 3 які повертатимуться функцією відповідно до id. Якщо незнайомий id 
отриманий – проміс має бути відхилений з помилкою ‘User not found’. */
const users = [
  { id: 0, name: "Martin", age: 25, city: "Kyiv" },
  { id: 1, name: "Jane", age: 30, city: "Lviv" },
  { id: 2, name: "Bob", age: 35, city: "Odessa" },
  { id: 3, name: "Alice", age: 40, city: "Dnipro" },
];

function getUser(id) 
{
  return new Promise((resolve, reject) => 
  {
    setTimeout(() => 
    {
      const user = users.find(u => u.id === id);
      if (user) 
      {
        resolve(user);
      } 
      else 
      {
        reject(new Error("User not found"));
      }
    }, 1000);
  });
}

// Приклад використання
getUser(2)
  .then((user) => console.log(user))
  .catch((error) => console.log(error));



/* 5. Напишіть функцію loadUsers яка приймає масив ідентифікаторів та повертає масив обєктів 
користувача використовуючи попередню функцію. Обробіть ситуацію коли один з промісів 
був відхилений. */
async function loadUsers(ids) 
{
  try 
  {
    const promises = ids.map((id) => getUser(id));
    const result = await Promise.all(promises);
    return result;
  } catch (error) {
    console.log(error);
  }
}

// Приклад використання
loadUsers([0, 2, 3]).then((users) => console.log(users));



/* 6. Напишіть функцію logCall яка приймає функцію коллбек – викликає її через одну секунду та 
пише в консоль поточний час. Зробіть щоб дана функція повертала проміс. Зробіть 4 
послідовних виклики даної функції використовуючи ланцюжок промісів */
function logCall(callback) 
{
  return new Promise((resolve) => 
  {
    setTimeout(() => 
    {
      const result = callback();
      console.log(new Date());
      resolve(result);
    }, 1000);
  });
}

// Приклад використання
logCall(() => "Hello")
  .then((result) => console.log(result))
  .then(() => logCall(() => "World"))
  .then((result) => console.log(result))
  .then(() => logCall(() => "!"))
  .then((result) => console.log(result))
  .then(() => logCall(() => "Goodbye"))
  .then((result) => console.log(result));



/* 7. Напишіть функцію яка showUsers яка симулює завантаження користувачів використовуючи
loadUsers. Перед викликом loadUsers дана функція має вивести в консоль ‘loading’ при при 
успішному чи неуспішному завершенні виведе ‘loading finished’. Використайте синтаксис 
async/await при виконанні даного завдання. */
async function showUsers(userIds) 
{
  try 
  {
    console.log("loading");
    const users = await loadUsers(userIds);
    console.log(users);
  } 
  catch (error) 
  {
    console.log(error.message);
  }
  console.log("loading finished");
} 

showUsers([0, 2]);