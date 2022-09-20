import { Animal } from './types';
import { animals } from './animals';

const handleAnimal = (animal: Animal) => {
    const { displayName } = animal;

    // Log how many legs if legCount in animal
    console.log(`${displayName} ${animal.canSwim ? 'can' : "can't"} swim`);

    // For Bird, log if it can fly or not

    // Assert and throw if we don't have info about teeth
};

animals.forEach(handleAnimal);

// function validateIsBird (animal: Animal): asserts animal is Extract<Animal, Bird> {
//     if (animal.__group !== 'Bird') {
//         throw new Error(`Soz, birds only! ${animal.displayName} is not allowed`);
//     }
// };
