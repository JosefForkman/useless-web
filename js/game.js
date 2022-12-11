const main = document.querySelector('.continer');
const range = document.querySelector('input');
const numberToFind = document.querySelector('p strong');

/* lode in the default value of dices */
let dices = []
for (let i = 0; i < range.value; i++) {
    // Add new dice to DOM
    addDice(0, numberToFind)
}

/* Add event handler */
let lastNumberInRange = range.value
range.addEventListener('input', () => {
    let rangeValue = range.value

    // Set the last index
    lastNumberInRange = dices.length;

    // check if last index i gether or equal then curet index
    if (lastNumberInRange >= rangeValue) {

        // Remove more dice if needed
        for(let i = main.children.length - rangeValue; i > 0; i--) {
            main.removeChild(main.lastChild);
            dices.pop();
        }
    } else {

        // Add new dice to DOM
        addDice()
    }
})

range.addEventListener('click', () => {
    for (let i = main.children.length; i > 0; i--) {
        main.removeChild(main.lastChild);
        dices.pop();
    }

    /* Add new dice to DOM */
    for (let i = 0; i < range.value; i++) {
        addDice()
    }
})


function addDice(numberToFind, sideToFind) {
    const dice = new Dice(numberToFind, sideToFind);
    dices.push(dice);
    dice.draw(main);
}

/* Game loop on 4s */
setInterval(() => {
    /* Generate new number to find */
    let randomNumber = Math.floor(Math.random() * (6-1) + 1);
    numberToFind.textContent = randomNumber;

    /* Generate a array with numbers */
    let newDices = new Array(parseInt(range.value)).fill(randomNumber);

    /* Map over "newDices" and replace with Dice class object */
    newDices = newDices.map( num => {
        return new Dice(num, randomNumber)
    })

    /* Clean the main container */
    for (let i = main.children.length; i > 0; i--) {
        main.removeChild(main.lastChild);
        dices.pop();
    }

    /* Add dices to the main container */
    /* Make 50% chans to even get the right dice */
    if (Math.round(Math.random())) {
        newDices.forEach(dice => {
            dices.push(dice);
            dice.draw(main);
        })
    } else {
        newDices.forEach(() => addDice(0, randomNumber))
    }
}, 4000)
