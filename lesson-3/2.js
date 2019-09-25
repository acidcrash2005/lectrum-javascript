/**
 * Задача 2.
 *
 * Напишите функцию checkSpam(source, example)
 * Функция возвращает true, если строка source содержит подстроку spam. Иначе — false.
 *
 * Условия:
 * - Функция принимает два параметра;
 * - Функция содержит валидацию входных параметров на тип string.
 * - Функция должна быть нечувствительна к регистру:
 */

// Решение
function checkSpam(source, example) {
    const isSourceString = typeof source === 'string';
    const isExampleString = typeof example === 'string';
    const isEmpty = source === '' || example === '';

    if (isSourceString && isExampleString && !isEmpty) {
        const checkString = source.toLocaleLowerCase();
        const spamWord = example.toLocaleLowerCase();

        return checkString.includes(spamWord);
    }
}

checkSpam('pitterXXX@gmail.com', 'xxx'); // true
checkSpam('pitterxxx@gmail.com', 'XXX'); // true

exports.checkSpam = checkSpam;