let text = "Hello, World!";
console.log(text.length); // 13

let str = "JavaScript";
console.log(str.toUpperCase()); // "JAVASCRIPT"
console.log(str.toLowerCase()); // "javascript"

let txt = "Hello, World!";
console.log(txt.slice(0, 5)); // "Hello"
console.log(txt.slice(-6));  // "World!"

console.log(txt.substring(0, 5)); // "Hello" (Similar to slice but no negative values)

console.log(txt.substr(7, 5)); // "World"

let sentence = "I love JavaScript";
console.log(sentence.replace("JavaScript", "Python")); 
// "I love Python"

let newText = "I love JavaScript and JavaScript is fun";
console.log(newText.replace(/JavaScript/g, "Python"));  
// "I love Python and Python is fun"

let msg = "Hello JavaScript";
console.log(msg.includes("JavaScript")); // true

console.log(msg.startsWith("Hello"));  // true
console.log(msg.endsWith("Script"));   // false

let names = "John, Peter, Alice";
console.log(names.split(", "));  
// ["John", "Peter", "Alice"]

let arr = ["Apple", "Banana", "Cherry"];
console.log(arr.join(" - ")); 
// "Apple - Banana - Cherry"

let trimStr = "   Hello, World!   ";
console.log(trimStr.trim());        // "Hello, World!"
console.log(trimStr.trimStart());   // "Hello, World!   "
console.log(trimStr.trimEnd());     // "   Hello, World!"

let text2 = "JavaScript is amazing";
console.log(text2.indexOf("is")); // 11

console.log(text2.lastIndexOf("i")); // 16

console.log(text2.search(/is/)); // 11

let word = "Ha! ";
console.log(word.repeat(3)); // "Ha! Ha! Ha! "

let num = "5";
console.log(num.padStart(4, "0")); // "0005"
console.log(num.padEnd(4, "0"));   // "5000"

console.log("Hello".charAt(1)); // "e"

console.log("ABC".charCodeAt(0)); // 65 (Unicode of 'A')

console.log("Hello".at(-1)); // "o"

let name = "Mitali";
let age = 21;
console.log(`My name is ${name} and I am ${age} years old.`);

let text3 = "She said, \"JavaScript is awesome!\"";
console.log(text3);
