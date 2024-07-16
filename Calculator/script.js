function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLastChar() {
    var display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function appendCharacter(char) {
    document.getElementById('display').value += char;
}

function calculate() {
    try {
        var result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function calculateFunction(func) {
    var value = parseFloat(document.getElementById('display').value);
    var result;

    switch (func) {
        case 'sqrt':
            result = Math.sqrt(value);
            break;
        case 'power':
            result = Math.pow(value, 2);
            break;
        case 'factorial':
            result = factorial(value);
            break;
        default:
            break;
    }

    document.getElementById('display').value = result;
}

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}