const anotherFunction = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve("Hello World");
    } else {
      reject("Bye World");
    }
  });
};

anotherFunction()
  .then((response) => console.log(response))
  .catch((err) => console.log(err))
  .finally(() => console.log("Finaly"));
