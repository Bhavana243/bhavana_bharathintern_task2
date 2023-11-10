function convertTemperature() {
    var celsiusInput = document.getElementById('celsius');
    var fahrenheitInput = document.getElementById('fahrenheit');
    var resultDiv = document.getElementById('result');

    var celsiusValue = parseFloat(celsiusInput.value);
    var fahrenheitValue = parseFloat(fahrenheitInput.value);

    if (!isNaN(celsiusValue)) {
        var fahrenheitResult = (celsiusValue * 9/5) + 32;
        resultDiv.innerHTML = celsiusValue + " Celsius is " + fahrenheitResult.toFixed(2) + " Fahrenheit.";
    } else if (!isNaN(fahrenheitValue)) {
        var celsiusResult = (fahrenheitValue - 32) * 5/9;
        resultDiv.innerHTML = fahrenheitValue + " Fahrenheit is " + celsiusResult.toFixed(2) + " Celsius.";
    } else {
        resultDiv.innerHTML = "Please enter a valid temperature.";
    }
}
