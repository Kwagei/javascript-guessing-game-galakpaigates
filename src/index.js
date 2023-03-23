document.addEventListener('DOMContentLoaded', function() {

    var randomNumber = Math.floor(Math.random() * 100) + 1;

    var lives = 10

    const mainBody = document.getElementById('mainBody')

    const restartGame = document.getElementById('restartGame');

    const statsDiv = document.getElementById('statsDiv');

    statsDiv.addEventListener('click', () => {})

    statsDiv.textContent = `----- | -----`

    let numbers = []

    restartGame.addEventListener('click', function generateAppendNumbers() {
        new Audio("./sounds/click.mp3").play()

        randomNumber = Math.floor(Math.random() * 100) + 1;

        lives = 10

        statsDiv.innerText = `Lives = ${lives}`
        statsDiv.style.backgroundColor = "white"; statsDiv.style.color = "chocolate"; statsDiv.style.border = "none"

        mainBody.innerHTML = '';

        numbers.length = 0;

        appendNumbers()

        function appendNumbers() {

            numbers.splice(0, numbers.length)

            for (let i = 1; i <= 100; i++) {
                numbers.push(i);
            }
              
            for (let i = 100 - 1; i > 0; i--) {
                const currentNumber = Math.floor(Math.random() * (i + 1));
                [numbers[i], numbers[currentNumber]] = [numbers[currentNumber], numbers[i]];
            }

            mainBody.innerHTML = "";
    
            for (let i = 0; i < numbers.length; i++) {
                const numberButton = document.createElement('button');
        
                numberButton.textContent = numbers[i]
                
                mainBody.appendChild(numberButton)
            }
        }
    })

    mainBody.addEventListener('click', function checkClick(event) {

        // Targeting the Particular Element that was clicked on the Page and assigning a variable to it.
        const userChoice = event.target;

        if (userChoice.offsetWidth < 60) {
            new Audio("./sounds/click.mp3").play()
        }

        if (userChoice.offsetWidth > 60) {
            // Added Specificity to the type of element the user should click on. Only if is it one of the Divs created by the 'for' loop inside the randomCapitalsDiv
        }

        else if (userChoice.innerText == randomNumber) {
            const allButtons = mainBody.querySelectorAll('button');

            allButtons.forEach((button) => {
                button.style.backgroundColor = "crimson"; button.style.color = "white"; button.style.opacity = "0.5";
                button.disabled = true;
            })

            userChoice.style.backgroundColor = "limegreen"; userChoice.style.opacity = "1";

            statsDiv.innerText = "You Won!"
            statsDiv.style.backgroundColor = "limegreen"; statsDiv.style.border = "2px solid white"; statsDiv.style.color = "white";
        }

        else if (userChoice.innerText != randomNumber) {
            //Changing the User's Choice Background Color to Red because their choice is correct and adding only the tries because the User's Choice was not the correct answer but they attempted.
            userChoice.style.backgroundColor = "crimson"; userChoice.style.color = "white"; userChoice.style.cursor = "not-allowed";

            statsDiv.textContent = `Lives = ${lives-=1}`

            userChoice.disabled = true;

            if (lives < 1) {
                statsDiv.textContent = "GAME OVER!"
                
                statsDiv.style.backgroundColor = "white"; statsDiv.style.color = "crimson"; statsDiv.style.border = "2px solid crimson";

                const allButtons = mainBody.querySelectorAll('button')

                allButtons.forEach((button) => {
                    button.style.backgroundColor = "crimson"; button.style.color = "white"; button.style.opacity = "0.5"; button.style.cursor = "not-allowed";
                    button.disabled = true;

                    if (button.innerText == randomNumber) {
                        button.style.backgroundColor = "limegreen"; button.style.color = "white"; button.style.opacity = "1"; button.style.cursor = "pointer";
                    }
                })
            }
        }
    })
})