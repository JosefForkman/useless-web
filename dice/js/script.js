const dice = document.querySelector('.dice');
let count = 1;

// setInterval( () => {
//     dice.dataset.side = randomNumber(1, 7);
// }, 500)


dice.addEventListener('click', () => dice.dataset.side = randomNumber(1, 7))

function randomNumber(min, max) {
    return Math.floor(Math.random()  * (max - min) + min);
}
