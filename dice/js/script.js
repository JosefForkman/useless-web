const main = document.querySelector('.continer');
const range = document.querySelector('input')
// setInterval( () => {
//     dice.dataset.side = randomNumber(1, 7);
// }, 500)

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
for (let i = 0; i < 8*20; i++) {
    const dice = new Dice();
    dices.push(dice);
    dice.draw(main)
}

console.table(dices);


range.addEventListener('input', e => {
    console.log(e)
})

