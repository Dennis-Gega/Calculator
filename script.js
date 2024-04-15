let currentTotal = '';

function displayCalculation() {
    document.querySelector('.calculation').innerText = currentTotal;
}

function calculateResult() {
    document.querySelector('.calculation').innerText = eval(currentTotal);
    currentTotal = eval(currentTotal);
}

function appendToTotal(value) {
    // If currentTotal contains a result, clear it before appending the new value
    if (typeof currentTotal === 'number') {
        currentTotal = '';
    }
    currentTotal += value;
    displayCalculation();
}

function clearTotal() {
    currentTotal = '';
    displayCalculation();
}