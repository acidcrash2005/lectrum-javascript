/**
 * Задача 3.
 *
 * Создайте функцию truncate(string, maxLength).
 * Функция проверяет длину строки string.
 * Если она превосходит maxLength – заменяет конец string на ... таким образом, чтобы её длина стала равна maxLength.
 * Результатом функции должна быть (при необходимости) усечённая строка.
 *
 * Условия:
 * - Функция принимает два параметра;
 * - Функция содержит валидацию входных параметров;
 * - Первый параметр должен обладать типом string;
 * - Второй параметр должен обладать типом number.
 */

// Решение
function truncate(string, maxLength) {
    const isString = typeof string === 'string';
    const isNumber = typeof maxLength === 'number';

    if (isString && isNumber && string) {
        if (string.length > maxLength && maxLength !== 0) {
            const replacer = '...';
            const newLengthString = maxLength - replacer.length;
            const cutString = string.slice(0, newLengthString);

            return `${cutString}${replacer}`;
        }

        return string;
    }
}

truncate('Вот, что мне хотелось бы сказать на эту тему:', 21); // 'Вот, что мне хотел...'

exports.truncate = truncate;