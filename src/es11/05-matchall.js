const regex = /\b(Apple+\b)/g;

const fruit = 'Apple, Banana, Apple, Orange, Apple, Grape';

for (const match of fruit.matchAll(regex)){
    console.log(match);
}