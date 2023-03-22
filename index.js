document.addEventListener('DOMContentLoaded', function() {
    var lives = 7

    const mainBody = document.getElementById('mainBody')

    const restartGame = document.getElementById('restartGame');

    const statsDiv = document.getElementById('statsDiv');

    statsDiv.textContent = `Lives = ${lives}`

    let numbers = []

    restartGame.addEventListener('click', function generateAppendNumbers() {

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
                const numberDiv = document.createElement('div');
        
                numberDiv.textContent = numbers[i]
                
                mainBody.appendChild(numberDiv)
            }
        }
    })
})