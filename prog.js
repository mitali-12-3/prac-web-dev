let text = "Hello, World!";
console.log(text.length);

let str = "JavaScript";
console.log(str.toUpperCase()); 
console.log(str.toLowerCase());

let txt = "Hello, World!";
console.log(txt.slice(0, 5));
console.log(txt.slice(-6));

console.log(txt.substring(0, 5));

console.log(txt.substr(7, 5));

let sentence = "I love sleep";
console.log(sentence.replace("sleep", "food")); 

let newText = "I love Maths and Maths is a subject";
console.log(newText.replace(/Maths/g, "English"));  


let msg = "Its true, you are dumb";
console.log(msg.includes("dumb"));

console.log(msg.startsWith("Its"));
console.log(msg.endsWith("umb")); 

let names = "Mitali, Ishita, Kashish";
console.log(names.split(", "));  


let arr = ["Mit", "Ish", "Ksh"];
console.log(arr.join(" - ")); 

console.log("Hello".charAt(1)); 

console.log("ABC".charCodeAt(0)); 

console.log("Hello".at(-1)); 

let text2 = "JavaScript is amazing";
console.log(text2.indexOf("is")); // 11

console.log(text2.lastIndexOf("i")); // 16

console.log(text2.search(/is/)); // 11