/*5. Напишіть простий модуль, який включає функції як повертають: випадкові цілі числа, масиви цілих випадкових чисел і випадкові текстові фрагменти. Використовуйте якнайбільше синтаксичних форм export.*/
export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomIntArray(length, min, max) {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(getRandomInt(min, max));
  }
  return arr;
}

export function getRandomTextFragment(text, length) {
  let fragment = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = getRandomInt(0, text.length - 1);
    fragment += text[randomIndex];
  }
  return fragment;
}