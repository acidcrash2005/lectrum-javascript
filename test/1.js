const obj = [
    {
        name: 'Name1'
    },
    {
        name: 'Name2'
    },
    {
        dd: 'sss'
    },
];

const validate = function(obj){
    return obj.name && typeof obj.name === 'string'
};

console.log(obj.every(validate));