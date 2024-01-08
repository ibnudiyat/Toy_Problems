function calculateSpeed() {
    var speedInput = document.getElementById('speedInput');
    var speed = parseInt(speedInput.value);
    var points = 0;

    if (isNaN(speed) || speed < 0) {
        alert("Please enter a valid positive speed.");
        speedInput.value = '';
        return;
    }

    if (speed <= 70) {
        displayOutput('Ok');
    } else {
        points = Math.floor((speed - 70) / 5);

        if (points > 12) {
            displayOutput('License suspended', true);
        } else {
            displayOutput('Points: ' + points);
        }
    }
}

function displayOutput(message, suspended = false) {
    var outputContainer = document.getElementById('output-container');

    // Clear previous outputs after 3.5 seconds 
    outputContainer.innerHTML = '';

    var outputDiv = document.createElement('div');
    outputDiv.className = suspended ? 'suspended' : 'output';
    outputDiv.textContent = message;

    outputContainer.appendChild(outputDiv);

    setTimeout(clearInputs, 3000);
}

function clearInputs() {
    var speedInput = document.getElementById('speedInput');
    speedInput.value = '';
}
