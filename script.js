let currentTotal = '';

function displayCalculation() {
    document.querySelector('.calculation').innerText = currentTotal;
}
    
function calculateResult() {
    document.querySelector('.calculation').innerText = eval(currentTotal);
    currentTotal = eval(currentTotal);
} 