/*
# Задача 1

Создать класс `DB` который будет имплементировать `CRUD` модель.
В качестве структуры данных использовать `Map`.

Метод `create`:
    - принимает объект и валидирует его, в случае невалидности объекта – генерирует ошибку.
    - возвращает `id` при создании пользователя генерирует уникальный `id`, который является ключом для объекта пользователя в структуре `Map`
Метод `read`:
    - принимает идентификатор пользователь
    - если такого пользователя нет возвращать `null`
    - если есть — возвращать объект пользователя с полем `id` внутри объекта.
    - если в метод `read` передать не строку, или не передать параметр вообще — генерировать ошибку.
Метод `readAll`:
    - возвращает массив пользователей
    - генерировать ошибку если в метод `readAll` передан параметр
Метод `update`:
    - обновляет пользователя
    - принимает 2 обязательных параметра
    - генерирует ошибку если передан несуществующий `id`
    - генерирует ошибку если передан `id` с типом не строка
    - генерирует ошибку если второй параметр не валидный
Метод `delete`:
    - удаляет пользователя
    - Генерировать ошибку если передан в метод `delete` несуществующий или невалидный `id`
*/

// Решение
class DB {
    #id;
    #tables;

    constructor(){
        this.#id = 0;
        this.#tables =  new Map();
    }

    #idGenerator = () => {
        this.#id = this.#id + 1;

        return this.#id;
    }

    create(record){
        const id = this.#idGenerator();

        this.#tables.set(id, record);

        return id;
    }

    read(id) {
        return this.#tables.get(id);
    }

    readAll() {
        return [...this.#tables].map(item => item[1]);
    }

    update(id, data){
        const item = this.#tables.get(id);
        this.#tables.set(id,{...item, ...data});

        return id;
    }

    delete(id){
        if(!this.#tables.has(id)){
            console.error(`Element id=${id} don\`t exist in DB`);

            return false;
        }

        this.#tables.delete(id);

        return true;
    }
}

// Проверка
const db = new DB();

const person = {
  name: "Pitter", // обязательное поле с типом string
  age: 21, // обязательное поле с типом number
  country: "ua", // обязательное поле с типом string
  salary: 500 // обязательное поле с типом number
};

const id = db.create(person);

const id1 =db.create({
    name: "Gena", // обязательное поле с типом string
    age: 35, // обязательное поле с типом number
    country: "ua", // обязательное поле с типом string
    salary: 2500 // обязательное поле с типом number
});

const customer = db.read(id);
const customer1 = db.read(id1);
const customers = db.readAll(); // массив пользователей
db.update(id, { age: 22 }); // id
db.delete(id); // true

console.log(db.readAll());
