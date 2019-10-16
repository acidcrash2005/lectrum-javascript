/**
 * Задача 1.
 *
 * Создайте функцию shallowMerge.
 * Функция обладает двумя параметрами, каждый из которых должен быть обычным JavaScript объектом.
 * Функция возвращает новый объект, который в себе объединяет свойства обоих объектов.
 * Свойства необходимо копировать лишь на один уровень каждого их объектов.
 *
 * Из объектов и обеих аргументах копируются только собственные свойства, включая недоступные для перечисления.
 *
 * Условия:
 * - Встроенный метод Object.create() использовать запрещено;
 * - При копировании любого свойства необходимо обязательно сохранить его дескрипторы;
 * - Свойства с одинаковыми именами нужно перезаписывать — приоритетом обладает объект из второго параметра.
 */

const debug = require('debug');
const debugLog = debug('debug');
const debugLog1 = debug('debug1');
const debugLog2 = debug('debug2');

// Решение
const shallowMerge = function (user, userData) {

    const userKeys = Object.getOwnPropertyNames(user);
    const userDataKeys = Object.getOwnPropertyNames(userData);
    const keys = [...userKeys, ...userDataKeys];

    return keys.reduce((result,key)=>{
        const object = userData[key] ? userData : user;

        if (object) {
            const descriptors = Object.getOwnPropertyDescriptor(object, key);
            Object.defineProperty(result, key, descriptors);
        }

        return result;
    },{});
};

const user = {firstName: 'Marcus', lastName: 'Kronenberg'};
const userData = {job: 'developer', country: 'Germany', lastName: 'Schmidt'};

Object.defineProperty(user, 'firstName', {writable: false});
Object.defineProperty(userData, 'job', {configurable: false});

// Мои тесты на неперечесляемые
// Object.defineProperty(user, 'lastName', { enumerable: false });
// Object.defineProperty(userData, 'country', { enumerable: false });

const result = shallowMerge(user, userData);

console.log(result); // { firstName: 'Marcus', lastName: 'Schmidt', job: 'developer', country: 'Germany' }
console.log(Object.getOwnPropertyDescriptor(result, 'firstName').writable); // false
console.log(Object.getOwnPropertyDescriptor(result, 'job').configurable); // false

exports.shallowMerge = shallowMerge;