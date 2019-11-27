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
    #counter;
    #tables;

    constructor(){
        this.#id = '';
        this.#counter = 0;
        this.#tables =  new Map();
    }

    #idGenerator = () => {
        const id = String(new Date().getTime());

        this.#counter = this.#counter + 1;
        this.#id = `${id}${this.#counter}`;

        return this.#id;
    }

    #validate = (record, isRequire) => {
        if(isRequire){
            const validObject = ['name','country', 'age', 'salary'];

            validObject.forEach(key => {
                if (!Object.keys(record).includes(key)){
                    throw new Error(`Param "${key}" is required!`);
                }
            })
        }

        if(record.name && typeof record.name !== 'string'){
            throw new Error('Name is required and should be a string!');
        }

        if(record.country && typeof record.country !== 'string'){
            throw new Error('Country is required and should be a string!');
        }

        if(record.age && typeof record.age !== 'number'){
            throw new Error('Age is required and should be a number!');
        }

        if(record.salary && typeof record.salary !== 'number'){
            throw new Error('Salary is required and should be a number!');
        }
    }

    create(record){
        this.#validate(record, true);

        const id = this.#idGenerator();

        this.#tables.set(id, record);

        return String(id);
    }

    read(id) {
        if(!id){
            throw new Error('Request "id" should`t be empty!');
        }

        if(typeof id !== 'string'){
            throw new Error('Request "id" should be a "string"!');
        }

        const table = this.#tables.get(id);

        if(!table){
            return null;
        }

        return {id, ...this.#tables.get(id)};
    }

    readAll() {
        if(arguments.length !== 0){
            throw new Error(`readAll should be call without params, you pas ${[...arguments]}!`);
        }

        return [...this.#tables].map(item => {
            return {
                id: item[0],
                ...item[1]
            }
        });
    }

    update(id, data){
        if(!id){
            throw new Error('First param ("id", ...) is required!');
        }

        if(!data){
            throw new Error('Second param (..., "data") is required!');
        }

        if(typeof id !== 'string'){
            throw new Error('Request "id" should a "string"!');
        }

        const item = this.#tables.get(id);

        if(!item){
            throw new Error('Record don`t exist!');
        }

        this.#validate(data);

        this.#tables.set(id,{...item, ...data});

        return id;
    }

    delete(id){
        if(typeof id !== 'string'){
            throw new Error('Delete "id" should be a "string"!');
        }

        if(!this.#tables.has(id)){
            throw new Error(`Element "${id}" don\`t exist in DB`)
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

const id1 = db.create({
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


module.exports = DB