function isPalindrome(num) {
    let str = num.toString();
    let reversed = str.split("").reverse().join("");
    return str === reversed;
}

// Example usage:
let number = 1241;
console.log(`${number} is Palindrome: ${isPalindrome(number)}`);
