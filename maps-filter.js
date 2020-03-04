const numbers = [3, 6, 7, 8, 9]

console.log(numbers.map(x => console.log(x))) // aita sabar sathei kaj kore
console.log("Filter method");

console.log(numbers.filter(x => console.log(x))) // aita condition niye kaj kore
console.log("reduce method");
console.log(numbers.reduce((x,y) => console.log(x,y)))