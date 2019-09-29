/**
 * Задача 1.
 *
 * Создайте объект `person` c одним свойством `salary`.
 * При чтении этого свойства должна возвращаться строка с текстом.
 * Если до конца месяца осталось больше чем 20 дней — возвращается строка `good salary`, а если нет — `bad salary`
 *
 * Условия:
 * - Свойство salary обязательно должно быть геттером.
 */

const person = {
    get salary (){
        const date = new Date();
        const daysInMonth = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
        const diffDays = daysInMonth - date.getDate();

        if (diffDays < 20){
            return 'bad salary'
        }

        return 'good salary';
    }
};

// Решение

person.salary; // good salary

exports.person = person;