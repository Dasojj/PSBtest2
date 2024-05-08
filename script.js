function append(char) {
    document.getElementById('display').value += char;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function backspace() {
    let display = document.getElementById('display');
    display.value = display.value.substring(0, display.value.length - 1);
}

function calculate() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (e) {
        document.getElementById('display').value = 'Ошибка';
    }
}

function copyResult() {
    navigator.clipboard.writeText(document.getElementById('display').value)
        .then(() => alert('Результат скопирован!'))
        .catch(() => alert('Ошибка копирования'));
}

document.addEventListener('keydown', function(event) {
    const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '(', ')', 'Backspace', 'Enter', 'Delete', '.'];
    if (allowedKeys.includes(event.key)) {
        if (event.key === 'Enter') {
            calculate();
        } else if (event.key === 'Backspace') {
            backspace();
        } else if (event.key === 'Delete') {
            clearDisplay();
        } else {
            append(event.key);
        }
    }
});
