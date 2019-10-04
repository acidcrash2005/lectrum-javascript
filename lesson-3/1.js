/**
 * Задача 1.
 *
 * Напишите функцию upperCaseFirst(string).
 * Функция преобразовывает первый символ переданной строки в заглавный и возвращает новую строку.
 *
 * Условия:
 * - Функция принимает один параметр;
 * - Функция содержит валидацию входного параметра на тип string.
 */

// Решение
function upperCaseFirst(string) {
    const isString = typeof string === 'string';

    if (isString && string) {
        const startString = string.slice(0, 1);
        const restString = string.slice(1);
        const upperStartString = startString.toUpperCase();

        return `${upperStartString}${restString}`;
    }
}

upperCaseFirst('pitter'); // Pitter
upperCaseFirst(''); // ''

exports.upperCaseFirst = upperCaseFirst;