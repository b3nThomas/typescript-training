import { Animal } from './types';
import { animals } from './animals';

const handleAnimal = (animal: Animal) => {
    const { displayName } = animal;

    // Log if animal can swim or not
    console.log(`${displayName} ${animal.canSwim ? 'can' : "can't"} swim`);

    // Log how many legs if legCount `in` animal

    // If `is` Bird, log if it can fly or not

    // `assert` and throw if it's not a mammal
};

animals.forEach(handleAnimal);

// function isBird(animal: Animal): animal is Bird {
//     return animal.__group === 'Bird';
// }

// function assertMammal (animal: Animal): asserts animal is Extract<Animal, Mammal> {
//     if (animal.__group !== 'Mammal') {
//         throw new Error(`Soz, mammals only! ${animal.displayName} is not allowed`);
//     }
// };
