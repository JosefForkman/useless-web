const main = document.querySelector('.continer');
const range = document.querySelector('input');
const numberToFind = document.querySelector('p strong')


class Dice {
    constructor (side = this.randomNumber(1, 7)) {
        this.sida = side;
        this.element;

        this.init();
    }

    /* Create dice element */
    init() {
        const dice = document.createElement('div');
        dice.classList.add('dice');
        dice.dataset.side = this.sida;

        /* Events */
        dice.addEventListener('click', () => dice.dataset.side = this.randomNumber(1, 7))

        for (let i = 0; i < 6; i++) {
            const dot = document.createElement('span');

            dice.appendChild(dot);
        }

        this.element = dice;
        window.addEventListener('keyup', () => dice.dataset.side = this.randomNumber(1, 7))
    }

    /* Draw dice element to canvas */
    draw(container) {
        container.appendChild(this.element)
    }

    randomNumber(min, max) {
        return Math.floor(Math.random()  * (max - min) + min);
    }
}

/* Create dice of Dice class */
let dices = []
for (let i = 0; i < range.value; i++) {
    const dice = new Dice();
    dices.push(dice);
    dice.draw(main)
}

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
        const dice = new Dice();
        dices.push(dice);
        dice.draw(main)
    }
})
