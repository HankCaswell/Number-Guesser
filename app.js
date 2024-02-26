console.log("HELLO PAPA PLATOON!")
// Your function(s) should go here that will interact with the webpage or DOM
let randomNumber = Math.floor(Math.random()* 100) + 1; 
let btn = document.getElementById('submitbutton')



// const checkGuess = () => {
//     console.log('button clicked')
//     btn.addEventListener('click', (event) => {
//         event.preventDefault()
//         let playerGuess = parseInt(document.getElementById('userGuess').value);
//         if (playerGuess === randomNumber) {
//             document.getElementById('result').textContent = "Congratulations, you guessed correctly!";
//         } else if (playerGuess > randomNumber) {
//             document.getElementById('result').textContent = "Try a lower number";
//         } else {
//             document.getElementById('result').textContent = "Try a higher number";
//         }
//         addGuesses(playerGuess)
//     });
    
// };





// const addGuesses = (guess) => {
//     let guessContainer = document.getElementById('guessContainer')
//     let li = document.createElement('li')
//     li.innerText = `Guess : ${guess}`
//     guessContainer.appendChild(li)
// }

btn.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    let playerGuess = parseInt(document.getElementById('userGuess').value);
    if (playerGuess === randomNumber) {
        document.getElementById('result').textContent = "Congratulations, you guessed correctly!";
    } else if (playerGuess > randomNumber) {
        document.getElementById('result').textContent = "Try a lower number";
    } else {
        document.getElementById('result').textContent = "Try a higher number";
    }
    addGuesses(playerGuess); // Add guessed number to the list
});

const addGuesses = (guess) => {
    let guessContainer = document.getElementById('guessContainer');
    let li = document.createElement('li');
    li.innerText = `Guess : ${guess}`;
    guessContainer.appendChild(li);
};