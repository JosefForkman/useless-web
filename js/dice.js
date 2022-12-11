class Dice {
    constructor (sideExcluded, sideToFind) {
        this.sideExcluded = sideExcluded;
        this.sida = this.randomNumber(1, 6, this.sideExcluded);
        this.sideToFind = sideToFind
        this.element;

        this.init();
    }

    /* Create dice element */
    init() {
        const dice = document.createElement('div');
        dice.classList.add('dice');
        dice.dataset.side = this.sida;


        /* Events */
        dice.addEventListener('click', () => {
            if (this.sida == this.sideToFind) {
                this.element.classList.add('active')
            }
        })

        for (let i = 0; i < 6; i++) {
            const dot = document.createElement('span');

            dice.appendChild(dot);
        }

        this.element = dice;
        this.element.ariaLabel = `Tärning sida ${this.sida}`;
    }

    /* Draw dice element to canvas */
    draw(container) {
        container.appendChild(this.element)
    }


    randomNumber(min, max, excluded) {
        let n = Math.floor(Math.random() * (max-min) + min);
        if (n >= excluded) n++;

        return n;
    }
}
