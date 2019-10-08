/**
 * Задача 2.
 *
 * Вручную создать имплементацию функции `filter`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенный метод Array.prototype.filter использовать запрещено.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 *
 * Заметки:
 * - Второй аргумент встроенного метода filter (thisArg) имплементировать не нужно.
 */

const array = ['Доброе утро!', 'Добрый вечер!', 3, 512, '#', 'До свидания!'];

// Решение
const filter = function (array, callback) {
    if (!Array.isArray(array)) {
        throw Error('First argument is not an array!');
    }

    if (typeof callback !== 'function') {
        throw Error('Callback is not a function!');
    }

    let result = [];

    for (let i = 0; i < array.length; i++) {
        if(array[i] === void 0){
            continue;
        }

        if(callback(array[i], i, array)){
            result.push(array[i]);
        }
    }

    return result;
};

const filteredArray = filter(array, (element, index, arrayRef) => {
    // console.log(`${index}:`, element, arrayRef);

    return element === 'Добрый вечер!';
});

console.log(filteredArray); // ['Добрый вечер!']

exports.filter = filter;
