function newUser(name, age, country) {
    var name = name || 'Oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);
}

newUser(); // Oscar 32 MX
newUser('Ricardo', 23, 'CO'); // Ricardo 23 CO

function newAdmin(name = 'Oscar', age = 32, country = 'MX') {
    console.log(name, age, country);
}

newAdmin(); // Oscar 32 MX
newAdmin('Ricardo', 23, 'CO'); // Ricardo 23 CO