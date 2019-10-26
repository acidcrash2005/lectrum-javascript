/**
 * Задача 1.
 *
 * Создайте функцию createNumberGenerator(),
 * которая вернёт ещё одну функцию,
 * каждый вызов которой будет генерировать и возвращать случайное число от 1 до 100 (включительно).
 *
 * Условия:
 * - Числа не должны повторяться;
 * - Задачу нужно решить с помощью замыкания.
 *
 * Генерировать ошибку если:
 * - Функция была вызвана, когда доступные для выведения числа закончились.
 *
 * Подсказка: в замыкании можно хранить массив с числами, которые уже были созданы функцией.
 */
const debug = require('debug');
const debug1 = debug('debug1');

// Решение
const createNumberGenerator = () => {
    let counter = 0;
    let numbers = [];

    const generator = () => {
        const random = Math.random() * 100;
        const number = Math.floor(random);

        if (!numbers.includes(number)){
            numbers = [number, ...numbers];
            return number;
        }

        return generator();
    };

    return () => {
        if (counter >= 100){

            debug1(numbers.sort((a,b)=>{
                if (a > b) return 1;
                if (a < b) return -1;
                return 0;
            }));

            throw new Error('There are no more numbers available!')
        }
        counter++;

        const result = generator();

        return result;
    }
};

const TOTAL_ITERATIONS = 105;
let invocations = 0;
const generateNumber = createNumberGenerator();

try {
    for (invocations; invocations < TOTAL_ITERATIONS; invocations++) {
        console.log(`Iteration: ${invocations}. Number: ${generateNumber()}`);
    }
} catch (error) {
    console.log(`${error.name}: ${error.message}`);
    console.log(`Function generated an error on ${invocations} invocation.`);
}

// Когда все числа выведутся:
// Error: There are no more numbers available.
// Function generated an error on 100 invocation.

exports.createNumberGenerator = createNumberGenerator;
