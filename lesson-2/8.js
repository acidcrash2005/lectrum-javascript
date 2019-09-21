const array = [1, 2, 3, 4, 5, 6];

let i = 0;
do {
    const num1 = array[i] > 3 ? array[i] : 0;
    const num2 = array[i+1] > 3 ? array[i+1] : 0;

    if (num1 || num2){
        const sum = num1 + num2;
        console.log(sum);
    }

    i+=2;
} while (i < array.length);

