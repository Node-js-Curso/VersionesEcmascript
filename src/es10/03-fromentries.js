const entripes = new Map([["name", "John"], ["age", 30]]);

console.log(entripes);


console.log(Object.fromEntries(entripes)); // { name: 'John', age: 30 }
