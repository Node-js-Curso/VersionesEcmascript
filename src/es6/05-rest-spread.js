//arrays destructuring

let fruits = ['apple', 'banana', 'orange', 'grape'];
let [firstFruit, secondFruit, ...restFruits] = fruits; // rest operator
console.log(firstFruit); // apple

//Objects destructuring

let user = {userName: 'John', age: 30, country: 'USA'};
let {userName, ...restUser} = user; // rest operator
console.log(userName); // John

// Spread operator

let person = {name: 'John', age: 30};
let country = 'USA';
let data = {...person, country}; // spread operator
console.log(data); // {name: 'John', age: 30, country: 'USA'}


//rest 
function sum(num,...value) {
    console.log(value);
    console.log(num + value[0]);
    return num + value[0];
}

sum(10, 20, 30, 40); // [20, 30, 40] 30