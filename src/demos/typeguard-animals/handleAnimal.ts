import { Animal, Bird, Mammal } from './types';
import { animals } from './animals';

const handleAnimal = (animal: Animal) => {
    const { displayName } = animal;

    // Log if animal can swim or not
    console.log(`${displayName} ${animal.canSwim ? 'can' : "can't"} swim`);

    // Log how many legs if legCount `in` animal
    if ('legCount' in animal) {
        console.log(`${displayName} has ${animal.legCount} legs`);
    }

    // If `is` Bird, log if it can fly or not
    if (isBird(animal)) {
        console.log(`${displayName} ${animal.canFly ? 'can' : "can't"} fly`);
    }
    // `assert` and throw if it's not a mammal
    assertMammal(animal);
};

animals.forEach(handleAnimal);

/**
 * Similar to `type casting`, we're essentially telling TS that we know
 * better when using this. If we make a typo or add another union member
 * with the same property, it could result in unexpected behaviour.
 */
function isBird(animal: Animal): animal is Bird { // <-------- Type Predicate
    return animal.__group === 'Bird';
}

function assertMammal (animal: Animal): asserts animal is Extract<Animal, Mammal> {
    if (animal.__group !== 'Mammal') {
        throw new Error(`Soz, mammals only! ${animal.displayName} is not allowed`);
    }
};
