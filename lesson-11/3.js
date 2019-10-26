/**
 * Задача 3.
 *
 * Улучшите функцию createFibonacciGenerator() из предыдущего примера.
 *
 * Теперь вызов функции createFibonacciGenerator() должен возвращать объект, который содержит два метода:
 * - print — возвращает число из последовательности Фибоначчи;
 * - reset — обнуляет последовательность и ничего не возвращает.
 *
 * Условия:
 * - Задачу нужно решить с помощью замыкания.
 */

const debug = require('debug');
const debug1 = debug('debug1');

// Решение
const createFibonacciGenerator = () => {
    const defaultValue = [0, 1];

    return {
        count: 2,
        fibonacci: [...defaultValue],

        reset() {
            this.count = 2;
            this.fibonacci = [...defaultValue];
        },

        print() {
            const {fibonacci, count} = this;

            this.fibonacci[count] = fibonacci[count - 1] + fibonacci[count - 2];
            const result = fibonacci[count - 1];

            this.count += 1;

            return result
        }
    }
};

const generator1 = createFibonacciGenerator();

console.log(generator1.print()); // 1
console.log(generator1.print()); // 1
console.log(generator1.print()); // 2
console.log(generator1.print()); // 3
console.log(generator1.reset()); // undefined
console.log(generator1.print()); // 1
console.log(generator1.print()); // 1
console.log(generator1.print()); // 2

const generator2 = createFibonacciGenerator();

console.log(generator2.print()); // 1
console.log(generator2.print()); // 1
console.log(generator2.print()); // 2

exports.createFibonacciGenerator = createFibonacciGenerator;
