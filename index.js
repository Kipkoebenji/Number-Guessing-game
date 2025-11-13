let max = 100
let min = 1
const answer = Math.floor(Math.random() * (max - min + 1)) + min

let attempts = 0
const maxAttempts = 10
let guess = window.prompt(`Guess a number between ${min} and ${max}. You have ${maxAttempts} attempts.`)    
attempts++

while (attempts < maxAttempts) {
    if (guess === null) {
        alert("Game cancelled.")
        break
    }
    
    guess = Number(guess)
    
    if (isNaN(guess) || guess < min || guess > max) {
        guess = window.prompt(`Invalid input. Please enter a number between ${min} and ${max}. You have ${maxAttempts - attempts} attempts left.`)
        continue
    }
    
    if (guess === answer) {
        alert(`Congratulations! You've guessed the correct number ${answer} in ${attempts} attempts.`)
        break
    } else if (guess < answer) {
        guess = window.prompt(`Too low! Try again. You have ${maxAttempts - attempts} attempts left.`)
    } else {
        guess = window.prompt(`Too high! Try again. You have ${maxAttempts - attempts} attempts left.`)
    }
    
    attempts++
}

if (attempts === maxAttempts && guess != answer) {
    alert(`Sorry, you've used all your attempts. The correct number was ${answer}.`)
}   