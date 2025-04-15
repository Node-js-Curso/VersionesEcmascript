class User {}

class user {
  //method
  greet() {
    return "Hello World!";
  }
}

const gndx = new user();
console.log(gndx.greet()); // Hello World!

const bebeloper = new user();
console.log(bebeloper.greet()); // Hello World!

// constructor

class user {
  constructor() {
    console.log("New user created!");
  }
  greet() {
    return "Hello World!";
  }
}

const david = new user(); // New user created!

// this 

class user {
    constructor(name){
        this.name = name;
    }
    // method
    speak(){
        return `Hello`;
    }
    greet(){
        return `${this.speak()} ${this.name}`;
    }
}

const jeffer = new user("jeffer");
console.log(jeffer.greet()); // Hello jeffer


// setters and getters

class user {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  //method
  speak() {
    return "Hello";
  }
  greeting(){
    return `${this.speak()} ${this.name}`;
  }

  // getter
  get uAge() {
    return this.age;
  }
  // setter
  set uAge(n) {
    this.age = n;
  }
}

const userTest = new user("jeffer", 15);
console.log(userTest.uAge); // 15
console.log(userTest.uAge = 20); // 20

 

