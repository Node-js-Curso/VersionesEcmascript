const promis1 = new Promise((resolve, reject) => reject("Reject"));

const promis2 = new Promise((resolve, reject) => resolve("Resolve"));

const promis3 = new Promise((resolve, reject) => resolve("Resolve 2"));

Promise.allSettled([promis1, promis2, promis3]).then((res) => console.log(res));
