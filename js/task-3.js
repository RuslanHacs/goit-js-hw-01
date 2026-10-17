'use strict';
//Оголошено функцію getElementWidth(content, padding, border).
//Виклик getElementWidth(50, 8, 4) повертає число 74.
//Виклик getElementWidth(60, 12, 8.5) повертає число 101.
//Виклик getElementWidth(200, 0, 0) повертає число 200.
//Функція повертає число, а не рядок.
//Виклик з будь-якими валідними аргументами повертає правильне  значення.
function getElementWidth(content, padding, border) {
  const width = content + padding * 2 + border * 2;
  return width;
}
console.log(getElementWidth(50, 8, 4)); // 74
console.log(getElementWidth(60, 12, 8.5)); // 101
console.log(getElementWidth(200, 0, 0)); // 200
