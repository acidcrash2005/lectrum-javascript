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


    find(query) {
        const tables = this.readAll();

        const result = tables.filter(item => {

            const every = [];

            for (const key in query){
                if(query[key] && item[key]){
                    if (typeof query[key] === 'object'){
                        const min = query[key].min ;
                        const max = query[key].max ;

                        if(max){
                            every.push(item[key] <= max)
                        }
                        if(min){
                            every.push(item[key] >= min)
                        }
                    } else {
                        if(query[key] === item[key]){
                            every.push(true);
                        }else {
                            every.push(false);
                        }
                    }
                }
            }

            return every.every(item => item);
        });

        console.log(result)
    }
}


// Проверка
const query = {
    // country: "ua",
    // name: "Gena",
    age: {
        min: 10,
        max: 25,
    },
    // salary: {
    //     min: 300,
    //     max: 600
    // }
};


const db = new DB();

const ids = [];

persons.forEach(item => {
    ids.push(db.create(item));
});


const customers = db.find(query); // массив пользователей
