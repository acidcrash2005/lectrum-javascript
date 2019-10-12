/**
 * Задача 4.
 *
 * Вручную создать имплементацию функции `some`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенный метод Array.prototype.some использовать запрещено.
 * 
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 *
 * Заметки:
 * - Второй аргумент встроенного метода some (thisArg) имплементировать не нужно.
 */

const array = [1, 2, 'Добро пожаловать.', 4, 5, 6];

// Решение
const some = function (array, callback) {
    if (!Array.isArray(array)) {
        throw new Error('First argument is not an array!');
    }

    if (typeof callback !== 'function') {
        throw new Error('Callback is not a function!');
    }

    for (let i = 0; i < array.length; i++) {
        if(array[i] === void 0) {
            continue;
        }

        if(callback(array[i], i, array)){
            return true;
        }
    }

    return false;
};

const result = some(array, (element, index, arrayRef) => {
    console.log(`${index}:`, element, arrayRef);

    return typeof element === 'string';
});

console.log(result); // true

exports.some = some;
