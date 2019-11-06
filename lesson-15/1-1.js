// Это просто для себя игрался
function DelayFn(fn) {
    this.fn = fn;
}

DelayFn.prototype.delay = function (time = 500) {
    let args = [];

    setTimeout(() => {
        this.fn(...args);
    }, time);

    return function () {
        args = [...arguments];
    }
};


let sayHello = function sayHello() {
    console.log('Hello!');
};

sayHello = new DelayFn(sayHello);

sayHello.delay(1000); /* Выведет "Hello!" через 1 секунду */


let sum = function sum(a, b) {
    console.log(a + b);
};

sum = new DelayFn(sum);

sum.delay(1000)(5, 2); /* Выведет 7 через 1 секунду. */


