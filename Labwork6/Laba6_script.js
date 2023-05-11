/* 1. Створіть клас для автомобіля з такими властивостями, як марка, модель і рік випуску.
Потім створіть екземпляр автомобіля та встановіть його властивості. Виконайте дане
завдання:
         • З використанням функції конструктора
         • З використанням синтаксису класс */
console.log('Завдання 1');
// використання конструктора
function Car1(brand, model, year) 
{
  this.brand = brand;
  this.model = model;
  this.year = year;
}

let car1 = new Car1("Toyota", "Camry", 2020);
console.log('Output using the constructor function:', car1); // { brand: 'Toyota', model: 'Camry', year: 2020 }

// використання синтаксису класу
class Car2 
{
  constructor(brand, model, year) 
  {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
}

let car2 = new Car2("Honda", "Civic", 2018);
console.log('Output using the class syntax', car2); // { brand: 'Honda', model: 'Civic', year: 2018 }



//2. Створіть два екземпляри даного класу користуючись методом Object.create()
console.log('Завдання 2');
let carPrototype = 
{
  brand: "",
  model: "",
  year: 0,
  setBrand: function (brand)
  {
  	this.brand = brand;
  },
  setModel: function (model)
  {
  	this.model = model;
  },
  setYear: function (year)
  {
  	this.year = year;
  },
  getInformation: function()
  {
  	return `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`;
  },
};

// Створення двох екземплярів за допомогою методу Object.create()
let car3 = Object.create(carPrototype);
car3.setBrand = "Lamborghini";
car3.setModel = "Huracan";
car3.setYear = 2022;

let car4 = Object.create(carPrototype);
car4.setBrand = "Maserati";
car4.setModel = "Ghibli ";
car4.setYear = 2023;

console.log(car3.getInformation()); // { Brand: 'Lamborghini', Model: 'Huracan', Year: 2022 }
console.log(car4.getInformation()); // { Brand: 'Maserati', Model: 'Ghibli', Year: 2023 }



/* 3. Створіть класс персона який містить поля імя, прізвище, рік народження. Створіть даний
клас не використовуючи class синтаксис. Додайте в даний клас методи які виводитимуть
вік та повне імя особи. */
console.log('Завдання 3');
function Person(firstName, lastName, birthYear) 
{
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthYear = birthYear;

  this.getAge = function () 
  {
    const today = new Date();
    const year = today.getFullYear();
    return year - this.birthYear;
  };

  this.getFullName = function () 
  {
    return `${this.firstName} ${this.lastName}`;
  };
}

const person1 = new Person("Martin", "Anderson", 2002);
console.log(person1.getAge()); // 21
console.log(person1.getFullName()); // Martin Anderson



/* 4. Створіть субкласс класу персона який міститиме поле посада та перевизначає метод
виведення повного імені додаючи туди посаду особи. */
console.log('Завдання 4');
function Employee(firstName, lastName, birthYear, position) 
{
  Person.call(this, firstName, lastName, birthYear);
  this.position = position;

  this.getFullName = function () 
  {
    return `${this.firstName} ${this.lastName}, ${this.position}`;
  };
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

const employee1 = new Employee("Angelina", "Jolie", 1975, "actor");
console.log(employee1.getFullName()); // Angelina Jolie, Аctor



/* 5. Напишіть метод який приймає два обєкти та визначає чи вони обєкти одног класу та
виводить в консоль фразу з іменами класів обєктів */
console.log('Завдання 5');
function checkObjectClass(obj1, obj2) 
{
  if (obj1.constructor === obj2.constructor) {
    console.log(`Objects belong to the same class: ${obj1.constructor.name}`);
  } 
  else 
  {
    console.log(`Objects belong to different classes: ${obj1.constructor.name}, ${obj2.constructor.name}`);
  }
}

class Person1 
{
  constructor(firstName, lastName, birthYear) 
  {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
  }
}

class Employee1 extends Person1 
{
  constructor(firstName, lastName, birthYear, position) 
  {
    super(firstName, lastName, birthYear);
    this.position = position;
  }
}

let person1_1 = new Person1("Taras", "Shevchenko", 1814);
let person1_2 = new Person1("Ivan", "Franko", 1856);
let employee1_1 = new Employee1("Johnny ", "Depp ", 1963, "actor");
let employee1_2 = new Employee1("Brad", "Pitt", 1963, "actor");

checkObjectClass(person1_1, person1_2); // Objects belong to the same class: Person1
checkObjectClass(employee1_1, employee1_2); // Objects belong to the same class: Employee1
checkObjectClass(person1_1, employee1_1); // Objects belong to different classes: Person1, Employee1



/* 6. Створіть метод який приймає екземпляр класу Person та перетворює його у екземпляр
ObservedPerson. Екземпляр ObservedPerson має вести себе аналогічно до класу Person та
при виклику його методів буде виводити в консоль кількість викликів */
console.log('Завдання 6');
class Person6
{
  constructor(firstName, lastName, birthYear) 
  {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
  }

  getFullName() 
  {
    return `${this.firstName} ${this.lastName}`;
  }

  getAge() 
  {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  }
}

class ObservedPerson extends Person6 
{
  constructor(firstName, lastName, birthYear) 
  {
    super(firstName, lastName, birthYear);
    this.callCount = 0;
  }

  getFullName() 
  {
    this.callCount++;
    console.log(`getFullName() has been called ${this.callCount} times`);
    return super.getFullName();
  }

  getAge() 
  {
    this.callCount++;
    console.log(`getAge() has been called ${this.callCount} times`);
    return super.getAge();
  }
}

function convertToObservedPerson(person) 
{
  return new ObservedPerson(person.firstName, person.lastName, person.birthYear);
}

const person = new Person6('Ben', 'Jordan', 1997);
const observedPerson = convertToObservedPerson(person);

console.log(observedPerson.getFullName()); // "getFullName() has been called 1 times", "Ben JordanJordan"
console.log(observedPerson.getAge()); // "getAge() has been called 1 times", 26
console.log(observedPerson.getFullName()); // "getFullName() has been called 2 times", "Ben Jordan"



/* 7. Створіть абстрактний клас під назвою Shape, який визначає методи для обчислення площі
та периметра. Змусьте дочірні класи імплементувати ці методи. */
console.log('Завдання 7');
class Shape 
{
  constructor() 
  {
    if (this.constructor === Shape) 
    {
      throw new Error('Abstract class cannot be instantiated.');
    }
  }

  getArea() 
  {
    throw new Error('Method getArea() must be implemented.');
  }

  getPerimeter() 
  {
    throw new Error('Method getPerimeter() must be implemented.');
  }
}

class Circle extends Shape 
{
  constructor(radius) 
  {
    super();
    this.radius = radius;
  }

  getArea() 
  {
    return Math.PI * this.radius ** 2;
  }

  getPerimeter() 
  {
    return 2 * Math.PI * this.radius;
  }
}

class Rectangle extends Shape 
{
  constructor(width, height) 
  {
    super();
    this.width = width;
    this.height = height;
  }

  getArea() 
  {
    return this.width * this.height;
  }

  getPerimeter() 
  {
    return 2 * (this.width + this.height);
  }
}

let circle = new Circle(72);
console.log(`Area circle: ${circle.getArea()}`);
console.log(`Perimeter circle: ${circle.getPerimeter()}`);
let rectangle = new Rectangle(15,33);
console.log(`Area rectangle:${rectangle.getArea()}`);
console.log(`Perimeter rectangle:${rectangle.getPerimeter()}`);



/* 8. Створіть масив фігур, що включає екземпляри кожного класу фігур. Перегляньте масив і
викличте методи площі та периметра для кожної фігури. */
console.log('Завдання 8');
// Оголошуємо клас фігури
class Shape8 
{
  calculateArea() {}
  calculatePerimeter() {}
}

// Оголошуємо клас квадрата
class Square8 extends Shape8 
{
  constructor(sideLength) 
  {
    super();
    this.sideLength = sideLength;
  }

  calculateArea() 
  {
    return this.sideLength ** 2;
  }

  calculatePerimeter() 
  {
    return this.sideLength * 4;
  }
}

// Оголошуємо клас кола
class Circle8 extends Shape8 
{
  constructor(radius) 
  {
    super();
    this.radius = radius;
  }

  calculateArea() 
  {
    return Math.PI * (this.radius ** 2);
  }

  calculatePerimeter() 
  {
    return 2 * Math.PI * this.radius;
  }
}

// Створюємо екземпляри класів фігур
const square8 = new Square8(5);
const circle8 = new Circle8(3);

// Створюємо масив фігур
const shapes8 = [square8, circle8];

// Для кожної фігури викликаємо методи площі та периметра
shapes8.forEach(shape => 
{
  console.log(`Area: ${shape.calculateArea()}`);
  console.log(`Perimeter: ${shape.calculatePerimeter()}`);
});

