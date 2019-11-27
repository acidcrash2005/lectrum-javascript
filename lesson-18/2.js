/*
# Задача 2

Улучшить класс `DB` из предыдущей задачи.

- Добавить метод `find`, который будет возвращать массив пользователей которые удовлетворяют условие переданное в качестве параметра
- Генерировать ошибку, если query не валидный
- Поля `name` и `country` ищут 100% совпадение
- Поля `age` и `salary` принимают объект в котором должны быть или 2 параметра `min` и `max` или хотя-бы один из них
- Возвращать пустой массив если не удалось найти пользователей которые удовлетворяют объект запроса
*/

const CRUD = require('./1');
const persons = require('./persons');

// Решение
class DB extends CRUD {

    #isMinMax= (props) => {
        const {query, key, item} = props;

        const min = query[key].min;
        const max = query[key].max;

        const result = [];

        if(max){
            result.push(item[key] <= max)
        }

        if(min){
            result.push(item[key] >= min)
        }

        return result;
    }

    #isEqual = (action) => {
        switch (action.type) {
            case 'object':{
                const {query, item, key} = action.payload;

                return this.#isMinMax({query, item, key})
            }

            default:{
                const {query, item, key} = action.payload;

                return [query[key] === item[key]];
            }
        }
    };

    find(query) {
        if(!Object.keys(query).length){
            throw new Error('Query should`t be an empty!');
        }

        const tables = this.readAll();

        const result = tables.filter(item => {

            const coincidences = [];

            for (const key in query){
                if(item[key]){

                    const isEqual =  this.#isEqual({
                        type: typeof query[key],
                        payload: {
                            query,
                            item,
                            key
                        }
                    });

                    coincidences.push(...isEqual);
                }
            }

            return coincidences.every(coincide => coincide);
        });

        return  result;
    }
}


// Проверка
const query = {
    country: "ua",
    // name: "Gena",
    age: {
        min: 21,
        // max: 25,
    },
    salary: {
        min: 300,
        max: 600
    }
};


const db = new DB();


const ids = [];

persons.forEach(item => {
    ids.push(db.create(item));
});

const customers = db.find(query); // массив пользователей

console.log(customers);