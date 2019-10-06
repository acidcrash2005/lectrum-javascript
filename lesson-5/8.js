/**
 * Задача 8.
 *
 * Создайте функцию `f`, которая принимает массив в качестве параметра.
 * Функция возвращает undefined, и последовательно выводит в консоль (с помощью console.log) элементы массива,
 * переданного в качестве аргумента.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не массив;
 * - Генерировать ошибку, если в качестве входного аргумента был передан пустой массив;
 * - Обязательно использовать рекурсию;
 * - Использовать циклы запрещено.
 *
 * Заметки:
 * - Возможно вам понадобится метод splice → https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
 */

// Решение
const f = function(numbers){
    if (!numbers.push) {
        throw new Error('Argument is not an array!')
    }

    if (numbers.length === 0) {
        throw new Error('Array must be not empty!')
    }

    console.log(numbers[0]);

    numbers.splice(0, 1);

    if(numbers.length){
        f(numbers);
    }

};


f([1,2,3]);
// 1
// 2
// 3

exports.f = f;