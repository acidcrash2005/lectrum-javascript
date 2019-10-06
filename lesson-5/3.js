/**
 * Задача 3.
 *
 * Создайте функцию `f`, которая отнимает от первого параметра второй и делит на третий.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве любого входного аргумента было предано не число.
 */

// Решение
const f = function (num1, num2, divider) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || typeof divider !== 'number') {
        throw new Error('One of argument is not a number!')
    }

    return (num1 - num2) / divider;
};

console.log(f(9, 3, 2)); // 3

exports.f = f;