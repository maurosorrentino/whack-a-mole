// defining elements of html
const buttonStart = document.getElementById("buttonStart");

const timeLeft = document.getElementById("timeLeft");

const grounds = document.querySelectorAll(".ground");

const score = document.getElementById("score");

// event in order to click on the button "start" and start the game (countdown, mole that appear and disappear 
// plus points on the score once you click on the mole!)
buttonStart.addEventListener("click", e => {

    function startGame() {

        // turning the time from a string to a number
        timeLeft.textContent = String(Number(timeLeft.textContent));

        // if statement in order to start the countdown
        if (timeLeft.textContent > 0) {

            timeLeft.textContent = String(Number(timeLeft.textContent) - 1);

        }

        // when time is up the countdown stops and the game is over
        else {

            clearInterval(intervalStartGame);
            alert(`Game Over. Your score is: ${score.textContent}. Refresh the page if you wanna play again`);
            exit(0);

        }

    };

    // set interval in order to process the function "startGame" every second
    const intervalStartGame = setInterval(startGame, 1000);

    // function that will give us a random mole
    function randomMole() {

        // getting a random index
        const randomIndex = Math.floor(Math.random() * grounds.length);

        // creating a mole (div)
        const divMole = document.createElement("div");
        
        // adding a class to the div(mole)
        divMole.classList.add("mole");

        // adding a function so that the score goes up when the div(mole) is clicked
        divMole.onclick = function scoreUp() {

            score.textContent = String(Number(score.textContent) + 1);

        };

        // random ground in order to append the div (mole)
        const randomGround = document.getElementById(`ground${randomIndex}`);

        // appending random div (mole)
        randomGround.appendChild(divMole);

        // getting random time (the time that the mole takes in order to disappear)
        const randomTime = Math.floor(Math.random() * 1000);

        // removing the mole
        setTimeout(() => {
            
            divMole.parentNode.removeChild(divMole);

        }, randomTime);

    };

    // set interval in order to process the function "randomMole" every second
    const intervalRandomMole = setInterval(randomMole, 1000);

});

// empty array that we will fill with the keys that are pressed
const keyPressed = [];

// defining cheating code that once is written the user can press any key on the keyboard in order to add 10 points to the score
const cheatingCode = "SCORE";

// event listener for cheating code
document.addEventListener("keypress", e => {

    // getting the keys pressed by the user with to upper case method so we converte any keys in upper case
    const key = String.fromCharCode(e.charCode).toUpperCase();

    // pushing keys that are pressed into the empty array created
    keyPressed.push(key);

    // if statement that adds 10 points when the user writes the word "score" on the keyboard
    if (keyPressed.join('').includes(cheatingCode)) {

        score.textContent = String(Number(score.textContent) + 10);

    };

});