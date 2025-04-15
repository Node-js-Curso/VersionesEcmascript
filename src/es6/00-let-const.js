var lastName = 'David';

lastName = 'Jhon'; // Reassigning the variable
console.log(lastName); // John

let fruit = 'Apple';
fruit = 'Banana'; // Reassigning the variable
console.log(fruit); // Banana


const fruits = () => {
    if (true) {
        var fruit1 = 'Apple'; // Function scope
        let fruit2 = 'Banana'; // Block scope
        const fruit3 = 'Cherry'; // Block scope
    }
    console.log(fruit1); // Apple
    console.log(fruit2); // Banana
    console.log(fruit3); // Cherry
}

fruits(); // Apple, Banana, Cherry