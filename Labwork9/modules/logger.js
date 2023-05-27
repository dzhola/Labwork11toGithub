/*1. Напишіть простий модуль логування, який підтримує логування повідомлень, для яких рівень логування перевищує заданий поріг. Експортуйте функцію log, константи рівнів логування та функцію завдання рівня логування.*/
const LogLevel = {
  info: 1,
  warning: 2,
  error: 3
};

let logLevel_threshold = LogLevel.info;

function setLogLevelThreshold(level) {
  logLevel_threshold = level;
}

function log(level, message) {
  if (level <= logLevel_threshold) {
    switch (level) {
      case LogLevel.info:
        console.log(`[info] ${message}`);
        break;
      case LogLevel.warning:
        console.warn(`[warning] ${message}`);
        break;
      case LogLevel.error:
        console.error(`[error] ${message}`);
        break;
      default:
        console.log(message);
        break;
    }
  }
}

// module.exports = {
//   LogLevel,
//   setLogLevelThreshold,
//   log,
// };



/*2. Повторіть попереднє завдання але тепер експортуйте весь класс по замовчуванню.*/
class Logger {
  static LogLevel = {
    info: 1,
    warning: 2,
    error: 3
  };

  static logLevel_threshold = Logger.LogLevel.info;

  static setLogLevelThreshold(level) {
    Logger.logLevel_threshold = level;
  }

  static log(level, message) {
    if (level <= Logger.logLevel_threshold) return;

    const timestamp = new Date().toISOString();
    console.log(`${timestamp} [${level}] [${message}]`)
  }
}

export default Logger;
// module.exports = { Logger }