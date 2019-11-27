/**
 # Задача 2

 Улучшите класс `Customers` добавив функцию генератор.

 **Обратите внимание**:

 1. Класс `Customers` после этого должен работать **идентично** предыдущей задаче.
 */

// Решение
class Customers {
    #customers = [];

    add(input){
        if(typeof input !== 'object'){
            throw new Error('Input param should be an object!')
        }
        if(!input.name === void 0){
            throw new Error('Property "name" is require in object!')
        }

        this.#customers.push(input);
    }

    *[Symbol.iterator](){
        const verifiedCustomers = this.#customers.filter(customer=>customer.verified);

        for (const customer of verifiedCustomers){
            yield customer;
        }
    }
}

// Пример использования
const customers = new Customers();
customers.add({name: 'Alex'});
customers.add({name: 'Victor'});
customers.add({name: 'Marcus'});
customers.add({name: 'Andrii', verified: true});
customers.add({name: 'Marco', verified: true});
customers.add({name: 'Oliver'});
customers.add({name: 'Lisa', verified: true});
customers.add({name: 'John'});
customers.add({name: 'Ivan', verified: true});

for (const customer of customers) {
    console.log(customer);
}

// В консоли будет
// { name: 'Andrii', verified: true }
// { name: 'Marco', verified: true }
// { name: 'Lisa', verified: true }
// { name: 'Ivan', verified: true }
