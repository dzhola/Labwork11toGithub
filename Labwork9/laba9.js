/*1. Напишіть простий модуль логування, який підтримує логування повідомлень, для яких
рівень логування перевищує заданий поріг. Експортуйте функцію log, константи рівнів
логування та функцію завдання рівня логування.*/
const logger = require('./modules/logger.js');
const { LogLevel } = logger;

logger.setLogLevelThreshold(logger.LogLevel.warning); // Встановлення порогу рівня логування на warning

logger.log(LogLevel.info, 'This is a level message info'); // Не буде виведено, оскільки рівень логування info менше порогу
logger.log(LogLevel.warning, 'This is a level message warning'); // Виведено: [warning] Це повідомлення рівня warning
logger.log(LogLevel.error, 'This is a level message error'); // Виведено: [error] Це повідомлення рівня error



/*2. Повторіть попереднє завдання але тепер експортуйте весь класс по замовчуванню.*/
import Logger from './modules/logger.js';

Logger.setLogLevelThreshold(Logger.LogLevel.warning); // Встановлення порогу рівня логування на warning

Logger.log(Logger.LogLevel.info, 'This is a level message info'); // Не буде виведено, оскільки рівень логування info менше порогу
Logger.log(Logger.LogLevel.warning, 'This is a level message warning'); // Виведено: [warning] Це повідомлення рівня warning
Logger.log(Logger.LogLevel.error, 'This is a level message error'); // Виведено: [error] Це повідомлення рівня error




/*3. Знайдіть JavaScript-бібліотеку для шифрування (наприклад, https://github.com/brix/cryptojs). Напишіть програму, яка імпортує цю бібліотеку у вигляді ECMAScript і шифрує, а потім
дешифрує повідомлення.*/
import CryptoJS from 'crypto-js';

const message = 'Secret message';
const secretKey = 'my-secret-key';

// шифрування повідомлення
const encryptedMessage = CryptoJS.AES.encrypt(message, secretKey).toString();
console.log('Encrypted message:', encryptedMessage);

// дешифрування повідомлення
const bytes = CryptoJS.AES.decrypt(encryptedMessage, secretKey);
const decryptedMessage = bytes.toString(CryptoJS.enc.Utf8);
console.log('Decrypted message:', decryptedMessage);



/*4. Напишіть простий модуль шифрування, в якому використовується шифр Цезаря
(додавання константи до кожної кодової точки). Використайте модуль логування із
попередніх вправ, щоб протоколювати всі звернення до decrypt.*/
import Logger from './modules/logger.js';
import CaesarCipher  from './modules/caesarCipher.js';

// шифрування повідомлення
const encryptMessage = CaesarCipher.encrypt('Secret message', 5);
console.log('Encrypted message:', encryptMessage);

// дешифрування повідомлення
const decrypdMessage = CaesarCipher.decrypt(encryptMessage, 5);
console.log('Decrypted message:', decrypdMessage, '\n');

// протоколювання звернень до decrypt
Logger.setLogLevelThreshold(Logger.LogLevel.info); // Встановлення рівня логування
CaesarCipher.decrypt('Secret message', 5);



/*5. Напишіть простий модуль, який включає функції як повертають: випадкові цілі числа,
масиви цілих випадкових чисел і випадкові текстові фрагменти. Використовуйте
якнайбільше синтаксичних форм export.*/
import { getRandomInt, getRandomIntArray, getRandomTextFragment } from './modules/randomItems.js';

console.log('\n', getRandomInt(-10, 25));
console.log(getRandomIntArray(7, 15, 47));
console.log(getRandomTextFragment ("house", 5)); 
