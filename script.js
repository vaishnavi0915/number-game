let randomNum = Math.floor(Math.random() * 100) + 1;

    function checkGuess() {
      const guess = document.getElementById("guess").value;
      const result = document.getElementById("result");

      if (guess == randomNum) {
        result.textContent = "🎉 Correct! You guessed it!";
      } else if (guess > randomNum) {
        result.textContent = "📉 Too high! Try again.";
      } else {
        result.textContent = "📈 Too low! Try again.";
      }
    }