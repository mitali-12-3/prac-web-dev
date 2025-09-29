let regex = /hello/;
let result = regex.exec("hello world");

console.log(result);

let regex2 = /(\d{4})-(\d{2})-(\d{2})/;
let result2 = regex2.exec("Date: 2024-03-17");

console.log(result2);


let regex3 = /hello/;
console.log(regex3.test("hello world"));  // true
console.log(regex3.test("hi there"));     // false

let regex4 = /hello/i;
console.log(regex4.toString());  // "/hello/i"
console.log(typeof regex4)
