function convertToFahrenheit() {
    const inputValue = document.getElementById('temperatureInput').value;
    const celsius = parseFloat(inputValue);

    if (isNaN(celsius)) {
        document.getElementById('result').innerText = 'Syötä kelvollinen lämpötila.';
        return;
    }

    if (celsius < -273.15) {
        document.getElementById('result').innerText = 'Lämpötila ei voi olla pienempi kuin -273,15 °C (absoluuttinen nollapiste).';
        return;
    }

    const fahrenheit = (celsius * 9/5) + 32;
    document.getElementById('result').innerText = celsius + ' °C = ' + fahrenheit.toFixed(2) + ' °F';
}

function convertToCelsius() {
    const inputValue = document.getElementById('temperatureInput').value;
    const fahrenheit = parseFloat(inputValue);

    if (isNaN(fahrenheit)) {
        document.getElementById('result').innerText = 'Syötä kelvollinen lämpötila.';
        return;
    }

    const celsius = (fahrenheit - 32) * 5/9;

    if (celsius < -273.15) {
        document.getElementById('result').innerText = 'Lämpötila ei voi olla pienempi kuin -273,15 °C (absoluuttinen nollapiste).';
        return;
    }

    document.getElementById('result').innerText = fahrenheit + ' °F = ' + celsius.toFixed(2) + ' °C';
}
