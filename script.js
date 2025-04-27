// Helper Functions

function isValidNumber(num) {
    return Number.isInteger(num) && num >= 0;
}

function factorialIterative(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

function factorialRecursive(n) {
    if (n <= 1) return 1;
    return n * factorialRecursive(n - 1);
}

// Calculate Functions

function calculateIterative() {
    const input = document.getElementById("numberInput").value;
    const number = parseInt(input);
    const outputDiv = document.getElementById("output");
    const errorDiv = document.getElementById("error");
    
    if (!isValidNumber(number)) {
        errorDiv.innerText = "Please enter a valid positive integer.";
        outputDiv.innerText = "";
        return;
    }

    errorDiv.innerText = "";
    const result = factorialIterative(number);
    outputDiv.innerText = `Result (Iterative): ${result}`;
}

function calculateRecursive() {
    const input = document.getElementById("numberInput").value;
    const number = parseInt(input);
    const outputDiv = document.getElementById("output");
    const errorDiv = document.getElementById("error");

    if (!isValidNumber(number)) {
        errorDiv.innerText = "Please enter a valid positive integer.";
        outputDiv.innerText = "";
        return;
    }

    errorDiv.innerText = "";
    const result = factorialRecursive(number);
    outputDiv.innerText = `Result (Recursive): ${result}`;
}