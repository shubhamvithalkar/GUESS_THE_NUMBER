// Generate a random target number between 1 and 100
const targetNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
    // Get the user's input
    const userInput = document.getElementById('userInput').value;
    const guess = parseInt(userInput, 10);
    const feedback = document.getElementById('feedback');

    // Check if the input is a valid number
    if (isNaN(guess) || guess < 1 || guess > 100) {
        feedback.textContent = 'Please enter a valid number between 1 and 100.';
        feedback.style.color = 'red';
        return;
    }

    // Compare the guess to the target number and provide feedback
    if (guess < targetNumber) {
        feedback.textContent = 'Too low! Try again.';
        feedback.style.color = 'orange';
    } else if (guess > targetNumber) {
        feedback.textContent = 'Too high! Try again.';
        feedback.style.color = 'orange';
    } else {
        feedback.textContent = 'Congratulations! You guessed it right!';
        feedback.style.color = 'green';
    }
}
