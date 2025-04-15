function* iterate(array) {
    for (let value of array) {
        yield value;
    }
}


const iteratetor = iterate(['a', 'b', 'c']);
console.log(iteratetor.next().value);
console.log(iteratetor.next().value);
console.log(iteratetor.next().value);

