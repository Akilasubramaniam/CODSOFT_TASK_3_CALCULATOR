const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

// Event listener for keyboard input
document.addEventListener('keypress', function(event) {
    const keyCode = event.keyCode;
    const keyValue = String.fromCharCode(keyCode);
    
    // Check if the pressed key is a number or a valid operator
    if (!isNaN(parseInt(keyValue)) || ['+', '-', '*', '/','='].includes(keyValue)) {
        appendToDisplay(keyValue);
    } 
    if (keyCode === 13) { // Enter key
        calculate();
    } else if (keyCode === 67 || keyCode === 99) { // C or c key
        clearDisplay();
    }
});
