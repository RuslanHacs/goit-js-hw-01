'use strict';
//Оголошено функцію makeTransaction(quantity, pricePerDroid).
//Виклик makeTransaction(5, 3000) повертає "You ordered 5 droids worth 15000 credits!".
//Виклик makeTransaction(3, 1000) повертає "You ordered 3 droids worth 3000 credits!".
//Виклик makeTransaction(10, 500) повертає "You ordered 10 droids worth 5000 credits!".
//Виклик з будь-якими валідними аргументами повертає правильне значення.
//Результати всіх викликів виведено в консоль.
function makeTransaction(quantity, pricePerDroid) {
  const total = quantity * pricePerDroid;
  return `"You ordered ${quantity} droids worth ${total} credits!".`;
}
console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"
