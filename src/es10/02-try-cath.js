try {
    hello();
}catch (error) {
    console.log("Error: ", error.message);
}

try {
    anotherFuction();
}catch {
    console.log("Esto es un error");
}