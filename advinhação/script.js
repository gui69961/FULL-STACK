let randomNumber = Math.floor(Math.random() * 100);

function checkGuess() {
    let userGuess = document.getElementById("guessInput").value;
    let feedback = document.getElementById("feedback");
    let inputField = document.getElementById("guessInput");

    if (userGuess == randomNumber) {
        feedback.textContent = "Parabéns! Você acertou!";
        inputField.style.setProperty("background-color", "green");
    } else if (userGuess < randomNumber) {
        feedback.textContent = "Tente um número maior.";
        inputField.style.setProperty("background-color", "red");
    } else {
        feedback.textContent = "Tente um número menor.";
        inputField.style.setProperty("background-color", "red");
    }
}
