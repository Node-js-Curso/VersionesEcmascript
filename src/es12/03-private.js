class user {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  //method
  #speak() {
    return "Hello";
  }
  greeting() {
    return `${this.#speak()} ${this.name}`;
  }

  // getter
  get #uAge() {
    return this.age;
  }
  // setter
  set #uAge(n) {
    this.age = n;
  }
}

const userTest = new user("jeffer", 15);
console.log(userTest.uAge); // 15
console.log((userTest.uAge = 20)); // 20
