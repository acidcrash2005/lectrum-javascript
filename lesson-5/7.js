/**
 * Задача 7.
 *
 * Создайте функцию `getDivisors`, которая принимает число в качестве аргумента.
 * Функция возвращает массив его делителей (чисел, на которое делится данное число начиная от 1 и заканчивая самим собой).
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 * - Генерировать ошибку, если в качестве входного аргумента был передано число меньшее, чем 1.
 */

// Решение
const getDivisors = function(num){
    if (typeof num !== 'number') {
        throw new Error('Argument is not a number!')
    }

    if (num < 1) {
        throw new Error('Argument must be n > 1 or n = 1!')
    }

    const dividers = [];

    for (let i = 1; i <= num; i++) {
        if(num % i === 0){
            dividers.push(i);
        }
    }

    return dividers;
};

getDivisors(12); // [1, 2, 3, 4, 6, 12]

exports.getDivisors = getDivisors;