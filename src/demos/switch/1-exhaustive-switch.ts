/***************************************************************************************************

Theme: "Super Mario Party"

Challenge: You're building a mini-game selection feature for a Super Mario Party game.
The game offers various mini-games, and you need to use an exhaustive switch statement
in TypeScript to select a mini-game based on the player's current level.

****************************************************************************************************

The player's level is represented as an integer, and you have four levels to consider: 1, 2, 3, and 4.

Here's the breakdown of the mini-game selection for each level:

Level 1: "Goomba Stomp" - A simple game where the player has to jump on Goombas to squash them.
Level 2: "Koopa Shell Race" - The player needs to race against Koopa Troopas, avoiding obstacles to reach the finish line.
Level 3: "Bob-omb Blast" - In this game, the player has to throw Bob-ombs at moving targets and earn points.
Level 4: "Boss Battle" - A challenging boss fight against Bowser, where the player has to dodge attacks and deliver powerful hits.

Your task is to create a TypeScript function called selectMiniGame that takes the
player's level (a number) as input and returns the corresponding mini-game name as a string.

***************************************************************************************************/

// type PlayerLevel = 1 | 2 | 3 | 4 | 5;

// const selectMiniGame = (level: PlayerLevel) => {
//     switch (level) {
//         case 1:
//             return 'Goomba Stomp';
//         case 2:
//             return 'Koopa Shell Race';
//         case 3:
//             return 'Bob-omb Blast';
//         case 4:
//             return 'Boss Battle';
//         case 5:
//             return '';
//         default:
//             unreachableLevel(level);
//     }
// };

function unreachableLevel(_: never) {
    throw new Error('Unreachable level reached');
}

enum PlayerLevel {
    One = 1,
    Two = 2,
    Three = 3,
    Four = 4,
    Five = 5
}

const selectMiniGameEnum = (level: PlayerLevel) => {
    switch (level) {
        case PlayerLevel.One:
            return 'Goomba Stomp';
        case PlayerLevel.Two:
            return 'Koopa Shell Race';
        case PlayerLevel.Three:
            return 'Bob-omb Blast';
        case PlayerLevel.Four:
            return 'Boss Battle';
        default:
            unreachableLevel(level);
    }
};

/**
 * Why use enums?
 * Enums are just one useful way to organize code in TypeScript.
 * With enums, you can create constants that you can easily relate to, making constants more legible.
 * Enums also allow developers the freedom to create memory-efficient custom constants.
 */
