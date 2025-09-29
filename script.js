function fahrenheitToCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}

// Example usage:
console.log(fahrenheitToCelsius(100)); // Output: 37.78
console.log(celsiusToFahrenheit(37.78)); // Output: 100
