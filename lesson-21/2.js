/*
# Задача 2

Создайте функцию `getCustomers` которая умеет объединять 2 массива с объектами.

Операция объединения происходит по ключу `id` и только для объектов у которых установлен флаг `verified: true`.

**Обратите внимание**:

1. Функция `getCustomers` должна возвращать промис;
2. Использование `async & await` **запрещено**;
3. Использование посторонних библиотек **запрещено**;
4. В том случае если в массиве `countries` отсутствует необходимый `id` промис **должен** реджектится с текстом `We don't have information about country for this customer: ${customer.name}`;
5. Склеивание происходит **только** для объектов с флагом `verified: true`.
*/

// Решение
const getCustomers = (customers, countries) => new Promise((resolve, reject)=>{
    const validCustomers = customers.filter(customer => customer.verified);

    const newCustomers = validCustomers.map(customer => {
        const country = countries.find(country => country.id === customer.id);

        if(!country){
            reject(`We don't have information about country for this customer: ${customer.name}`)
        }

        return {
            ...customer,
            ...country
        }
    });

    resolve(newCustomers);
});

// Пример использования

const customers = [
    {
        id: 'A1',
        name: 'Oliver',
        verified: true
    },
    {
        id: 'A2',
        name: 'alex'
    },
    {
        id: 'A3',
        name: 'Gena',
        verified: true
    }
];

const countries = [
    {
        id: 'A1',
        country: 'usa'
    },
    {
        id: 'A2',
        country: 'poland'
    },
    {
        id: 'A3',
        country: 'ukraine'
    }
];

getCustomers(customers, countries)
    .then((customers) => console.log(customers))
    .catch(error => console.log(error))
