const arr = [1, 2, 3, 4, 5, 6];
const revers = [];

for (let i = 0; i < arr.length; i++){
    let arrayKey = arr.length-1;
    revers[i] = arr[arrayKey-i];
}

console.log(revers);

// [6,5,4,3,2,1]