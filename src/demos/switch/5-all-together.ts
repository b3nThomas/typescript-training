/***************************************************************************************************

Theme: "Splatoon TypeScript Turf War"

Challenge: You're developing a Splatoon-inspired game, and you want to create a system to
manage different types of ink weapons and their properties. 
Each ink weapon has a unique name, type, and ink color.
The ink types are "Regular," "Spread," and "Roller."

****************************************************************************************************

Your task is to implement a TypeScript system that uses discriminated unions and mapped types
to handle different ink weapons and their properties.
You'll create functions to check if a weapon is effective
against a specific ink color and to display weapon information.

Implement a function called isEffectiveAgainstColor that takes an InkWeapon
and an ink color as parameters and returns a boolean indicating whether the
weapon is effective against the specified ink color. Regular weapons are
effective against all colors, spread weapons are effective if their ink color matches,
and roller weapons are effective if their ink color is not the same as the specified color.

Implement a function called displayWeaponInfo that takes an InkWeapon as a parameter and
displays information about the weapon, including its name, type, and ink color.
For spread weapons, also display the spread range. For roller weapons, also display the roller size.

***************************************************************************************************/

type Weapon<T extends string> = {
    __type: T,
    name:string,
    inkColor: string,
}

// Define the ink weapon types and their properties
type RegularWeapon = Weapon<'Regular'>;

type SpreadWeapon = Weapon<'Spread'> & {
    spreadRange: number;
};

type RollerWeapon = Weapon<'Roller'> & {
    rollerSize: 'Small' | 'Medium' | 'Large';
};

// Define the discriminated union for ink weapons
type InkWeapon = RegularWeapon | SpreadWeapon | RollerWeapon;

// Sample ink weapons
const weapons: InkWeapon[] = [
    { __type: 'Regular', name: 'Splattershot', inkColor: 'Blue' },
    { __type: 'Spread', name: 'Splattershot Jr.', inkColor: 'Green', spreadRange: 3 },
    { __type: 'Roller', name: 'Splat Roller', inkColor: 'Pink', rollerSize: 'Medium' },
];


/**
 * Regular weapons are effective against all colors,
 * Spread weapons are effective if their ink color matches,
 * and Roller weapons are effective if their ink color is not the same as the specified color.
 */
const isEffectiveAgainstColor = (weapon: InkWeapon, inkColor: string): boolean => {
    switch (weapon.__type) {
        case 'Regular':
            return true;
        case 'Spread':
            return weapon.inkColor === inkColor;
        case 'Roller':
            return weapon.inkColor !== inkColor;
        default:
            throwForUnreachable(weapon)
    }
};

function throwForUnreachable(_: never): never {
    throw new Error('Unreachable code reached');
}

console.log(isEffectiveAgainstColor(weapons[0], 'Purple')); // true
console.log(isEffectiveAgainstColor(weapons[1], 'Green')); // true
console.log(isEffectiveAgainstColor(weapons[2], 'Yellow')); // true


const displayWeaponInfo = <T extends InkWeapon>(weapon: T): string => {
    switch (weapon.__type) {
        case 'Regular':
            return `${weapon.name} (Regular) - Ink Color: ${weapon.inkColor}`;
        case 'Spread':
            return `${weapon.name} (Spread) - Ink Color: ${weapon.inkColor} - Spread Range: ${weapon.spreadRange}`;
        case 'Roller':
            return `${weapon.name} (Roller) - Ink Color: ${weapon.inkColor} - Roller Size: ${weapon.rollerSize}`;
        default:
            return `Unsupported Weapon: ${weapon}`;
    }
};

console.log(displayWeaponInfo(weapons[0]));
// Output: Splattershot (Regular) - Ink Color: Blue

console.log(displayWeaponInfo(weapons[1]));
// Output: Splattershot Jr. (Spread) - Ink Color: Green - Spread Range: 3

console.log(displayWeaponInfo(weapons[2]));
// Output: Splat Roller (Roller) - Ink Color: Pink - Roller Size: Medium
