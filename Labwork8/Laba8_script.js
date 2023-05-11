/*1. Реалізуйте клас Person з полями для імені, прізвища, статі та сімейного становища. 
Реалізуйте метод toLocaleString для форматування імені, наприклад, 'Ms. Smith', 'Frau 
Smith', 'Mme Smith'. Дізнайтесь, які форми ввічливості прийняті у різних мовах, 
і реалізуйти такі варіанти як Ms. або Mrs./Miss. */
class Person 
{
  constructor(firstName, lastName, gender, maritalStatus) 
  {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.maritalStatus = maritalStatus;
  }

  toLocaleString(locale) 
  {
    const formats = 
    {
      en: { // English
        male: 'Mr. {lastName}',
        female: this.maritalStatus === 'married' ? 'Mrs. {lastName}' : 'Ms. {lastName}'
      },
      de: { // German
        male: 'Herr {lastName}',
        female: this.maritalStatus === 'married' ? 'Frau {lastName}' : 'Fräulein {lastName}'
      },
      fr: { // French
        male: 'M. {lastName}',
        female: this.maritalStatus === 'married' ? 'Mme {lastName}' : 'Mlle {lastName}'
      },
      th: { // Thai
        male: '{lastName} นาย',
        female: this.maritalStatus === 'married' ? '{lastName} นาง' : '{lastName} นางสาว'
      }
    };

    const format = formats[locale] || formats.en;
    const name = this.gender === 'male' ? format.male : format.female;
    return name.replace('{lastName}', this.lastName);
  }
}

const person = new Person('John', 'Smith', 'male', 'married');
console.log(person.toLocaleString('en')); // Mr. Smith
console.log(person.toLocaleString('de')); // Herr Smith
console.log(person.toLocaleString('fr')); // M. Smith
console.log(person.toLocaleString('th')); // Smith นาย (using Thai characters)



/* 2. Руалізуйте програму яка приймає число та друкує його у трьох версіях - англійських, 
арабських та тайських цифр. */
function formatNumber(number) 
{
  const formats = 
  {
    en: 'English: ' + number.toLocaleString('en-US'),
    ar: 'Arabic: ' + number.toLocaleString('ar-EG', { useGrouping: false }),
    th: 'Thai: ' + number.toLocaleString('th-TH-u-nu-thai', { useGrouping: false })
  };

  let result = '';
  for (const locale in formats) 
  {
    result += formats[locale] + '\n';
  }
  return result;
}

console.log(formatNumber(1234567.89));



/* 3. Напишіть програму для демонстрації стилів форматування дати та часу у Франції, Китаї, 
Єгипті та Таїланді (з використанням тайських цифр). */
const date = new Date();

// Франція
console.log(`Франція: ` + date.toLocaleDateString('fr-FR'));

// Китай
console.log(`Китай: ` + date.toLocaleDateString('zh-CN'));

// Єгипет
console.log(`Єгипет: ` + date.toLocaleDateString('ar-EG'));

// Таїланд
console.log(`Таїланд: ` + date.toLocaleDateString('th-TH-u-nu-thai'));


const time = new Date();

// Франція
console.log(`Франція:` + time.toLocaleTimeString('fr-FR'));

// Китай
console.log(`Китай:` + time.toLocaleTimeString('zh-CN'));

// Єгипет
console.log(`Єгипет: ` + time.toLocaleTimeString('ar-EG'));

// Таїланд
console.log(`Таїланд: ` + time.toLocaleTimeString('th-TH-u-nu-thai'));



/* 4. Напишіть функцію порівняння двох текстових фрагментів відповідно до локалі. 
Вона повинна працювати в режимах ігнорування та врахування регістру. */
function compareStrings(string1, string2, locale, ignoreCase) 
{
  if (ignoreCase) 
  {
    string1 = string1.toLocaleLowerCase(locale);
    string2 = string2.toLocaleLowerCase(locale);
  }
  return string1.localeCompare(string2, locale);
}


const string1 = "Apple";
const string2 = "Banana";
const locale = "en-US";
const ignoreCase = false;

const result = compareStrings(string1, string2, locale, ignoreCase);

if (result < 0) 
{
  console.log(`${string1} is less than ${string2}`);
} 
else if (result > 0) 
{
  console.log(`${string1} is greater than ${string2}`);
} 
else 
{
  console.log(`${string1} is equal to ${string2}`);
}



/*5. Розглянемо шаблон '{0} has {1} messages'.Його французька версія повинна мати вигляд 'Il y 
a {1} messages pour {0}'. При форматуванні повідомлення аргументи передаються у 
фіксованому порядку, що не залежить від мови. Напишіть функцію messageFormat, яка 
приймає шаблонний рядок та змінну кількість аргументів. Придумайте механізм який 
виставлятиме аргументи в шаблон відповідно до локалі. */
function messageFormat(template, locale, ...args) 
{
  const locales = 
  {
    fr: 'Il y a {1} messages pour {0}',
    en: '{0} has {1} messages',
    ua: '{0} має {1} повідомлень'
  };

  const strFormat = locales[locale] || locales["en"];

  return strFormat.replace(/{(\d+)}/g, function (match, number) 
  {
    return typeof args[number] != 'undefined'
      ? args[number]
      : match;
  });
}

console.log(messageFormat('{0} has {1} messages', 'fr', 'Pierre', 7)); // Il y a 7 messages pour Pierre
console.log(messageFormat('{0} has {1} messages', 'de', 'Jurgen', 1)); // Jurgen has 1 messages
console.log(messageFormat('{0} has {1} messages', 'ua', 'Женя', 5)); // Женя має 5 повідомлень





/* 6. Запропонуйте клас для відображення розмірів аркуша паперу, що залежить від локалі, з 
використанням бажаної одиниці вимірювання та розміру за умовчанням для даної локалі. 
У всіх країнах, окрім США та Канади, розміри аркушів паперу визначаються стандартом ISO 216. 
Лише три країни ще не перейшли офіційно на метричну систему: Ліберія, М'янма 
(Бірма) та США. */
class PaperSize 
{
  constructor(locale, unit = 'mm') 
  {
    this.locale = locale;
    this.unit = unit;

    // ISO 216 standard paper sizes in mm
    this.metricSizes = 
    {
      'A0': [841, 1189],
      'A1': [594, 841],
      'A2': [420, 594],
      'A3': [297, 420],
      'A4': [210, 297],
      'A5': [148, 210],
      'A6': [105, 148],
      'A7': [74, 105],
      'A8': [52, 74],
      'A9': [37, 52],
      'A10': [26, 37]
    };
    // US standard paper sizes in inches
    this.imperialSizes = 
    {
      'Letter': [8.5, 11],
      'Legal': [8.5, 14],
      'Tabloid': [11, 17]
    };
  }

  isMetric() 
  {
    // Check if the locale uses the metric system
    const metricCountries = ['AU', 'CA', 'CN', 'CZ', 'DK', 'FI', 'FR', 'DE', 'HU', 'IS', 'IT', 'JP', 'MX', 'NL', 'NZ', 'NO', 'PL', 'PT', 'SK', 'ES', 'SE', 'CH', 'TR', 'GB'];
    const [language, country] = this.locale.split('-');
    return metricCountries.includes(country);
  }

  getSize(sizeName) 
  {
    const size = this.isMetric() ? this.metricSizes[sizeName] : this.imperialSizes[sizeName];
    if (this.unit === 'mm') 
    {
      return size;
    } 
    else 
    {
      return size.map(dim => dim / 25.4);
    }
  }

  getDefaultSize() 
  {
    if (this.isMetric()) 
    {
      return 'A4';
    } 
    else 
    {
      return 'Letter';
    }
  }
}

const paperSize = new PaperSize('en-US');
console.log(paperSize.getSize('Letter')); // [8.5, 11]
console.log(paperSize.getDefaultSize()); // Letter
console.log(paperSize.isMetric()); // false