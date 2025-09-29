str = "Please visit Microsoft!";
var a = str.replace(/MICROSOFT/i, "WIPRO");
console.log(a)

str = "Please visit Microsoft and MICROSOFT!";
var b = str.replace(/Microsoft/g, "WIPRO");
console.log(b)


str = "Please visit Microsoft and MICROSOFT!";
var c = str.replace(/Microsoft/gi, "WIPRO");
console.log(c)