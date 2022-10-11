/* - definite assignment assertion --------------------- */

let dice!: number;
function rollDice() {
    dice = Math.floor(Math.random() * 6) + 1;
}

rollDice(); // Assigns `dice`

console.log('Current dice value', dice);
// Without the assertion on line 31 (!), we'd see the following error:
// Variable 'dice' is used before being assigned.ts(2454)
