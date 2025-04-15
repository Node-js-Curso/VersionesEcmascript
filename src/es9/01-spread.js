const user = {name: 'John', age: 30, country: 'USA'};

const {name, ...values} = user

console.log(name); // John
console.log(values); // { age: 30, country: 'USA' }