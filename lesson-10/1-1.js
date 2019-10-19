/**
 * Задача 1.
 *
 * Напишите имплементацию функции Function.prototype.bind().
 *
 * Наша собственная функция bind() должна задавать контекст выполнения целевой функции,
 * и возвращать новую, привязанную версию целевой функции.
 *
 * Функция bind() должна обладать следующими параметрами:
 * - Первый параметр — это функция, контекст выполнения которой мы хотим привязать;
 * - Второй параметр — это объект (не массив), в контексте которого нужно вызывать функцию из первого параметра;
 * - Третий и все остальные параметры — это аргументы для вызова функции из первого параметра.
 *
 * Генерировать ошибки если:
 * - Первый параметр не является типом function;
 * - Второй параметр не является типом object;
 * - Второй параметр является массивом.
 *
 * Условия:
 * - Использовать встроенную функцию Function.prototype.bind() запрещено.
 */

// Решение
// Это я с call поиграться решил, попробывать его в действии. Всегдя были с ним проблеммы.

const bind = function(fn, ctx) {
    const args = Array.prototype.slice.call(arguments,2);
    // const args = [].slice.call(arguments,2);
    // const args = Array.from(arguments).slice(2);

    if (typeof fn !== 'function') {
        throw new Error('First argument it not a function!');
    }

    if (typeof ctx !== 'object' || Array.isArray(ctx)) {
        throw new Error('Second argument is not an object!');
    }

    const fnBind = () => {
      return fn.call(ctx,...args);
    };

    return fnBind;
};

function getName(greeting, message) {
    return `${greeting} ${message} ${this.name}.`;
}

const user = {name: 'Walter', getName};
const oliver = {name: 'Oliver'};

const boundedGetName = bind(getName, oliver, 'Hello!', 'I am');

console.log(user.getName('Hello!', 'My name is')); // Hello! My name is Walter.
console.log(boundedGetName()); // Hello! I am Oliver.

exports.bind = bind;