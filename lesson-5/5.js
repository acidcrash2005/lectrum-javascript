/**
 * Задача 5.
 *
 * Создайте функцию `isPositive`, которая принимает число качестве аргумента.
 * Функция возвращает булевое значение.
 * Если число, переданное в аргументе положительное — возвращается true.
 * Если число, переданное в аргументе отрицательное — возвращается false.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 */

// Решение
const isPositive = function(num){
    if (typeof num !== 'number') {
        throw new Error('Argument is not a number!')
    }

    return num > 0;
};

isPositive(-3); // false
isPositive(3); // true

exports.isPositive = isPositive;