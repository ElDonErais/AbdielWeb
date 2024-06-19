function clearResult() {
    document.getElementById('result').value = '';
}

function appendNumber(number) {
    document.getElementById('result').value += number;
}

function calculate() {
    var result = eval(document.getElementById('result').value);
    document.getElementById('result').value = result;
}