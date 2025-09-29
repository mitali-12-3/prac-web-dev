//1. slice() method
var str = "Apple, Banana, Kiwi";
var res = str.slice(7, 13);//13 excluded
console.log(res)

var str = "Apple, Banana, Kiwi";
var res2 = str.slice(7);
console.log(res2)

//2. substring() can't take negative parameters
var str = "Apple, Banana, Kiwi";
var res3 = str.substring(7,13);
//omit second parameter then rest of the string will be sliced out
console.log(res3)

//3. substr() method
var str = "Apple, Banana, Kiwi";
var res4 = str.substr(7, 6);
console.log(res4)