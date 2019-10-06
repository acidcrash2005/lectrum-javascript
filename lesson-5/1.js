/**
 * Задача 1.
 *
 * Создайте функцию `f`, которая возвращает куб числа, переданного в качестве аргумента.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве аргумента был передан не числовой тип.
 */

// Решение
const f = function(num){
    if(typeof num !== 'number' ){
        throw new Error('argument is not a number!');
    }

    return Math.pow(num, 3);
};

console.log(f(2)); // 8

exports.f = f;