const array = [1, 2, 3, 4];

let i = 0;
do {
    const sum = array[i] + (array[i+1] || 0);

    console.log(sum);

    i+=2;
} while (i < array.length);

