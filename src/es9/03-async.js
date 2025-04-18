async function* anotherGenertator() {
  yield await Promise.resolve(1);
  yield await Promise.resolve(2);
  yield await Promise.resolve(3);
}

const other = anotherGenertator();
other.next().then((response) => console.log(response.value));
other.next().then((response) => console.log(response.value));
other.next().then((response) => console.log(response.value));
console.log('Hello');

async function arrayOfNames(array) {
    for await (const value of array) {
        console.log(value);
    }
}

const names = arrayOfNames(['John', 'Jane', 'Doe']);

console.log('After');
