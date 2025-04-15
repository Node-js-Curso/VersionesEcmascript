const regext = /(\d{4})-(\d{2})-(\d{2})/;
const match = regext.exec("2023-10-01");
console.table(match);