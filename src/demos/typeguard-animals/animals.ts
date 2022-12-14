import { Animal, Bird, Fish, Mammal } from './types';

export const albatross: Bird = {
    __group: 'Bird', // <------- Discriminated Union
    displayName: 'albatross',
    canFly: true,
    canSwim: false,
};

export const penguin: Bird = {
    __group: 'Bird',
    displayName: 'penguin',
    canFly: false,
    canSwim: true,
};

export const goldfish: Fish = {
    __group: 'Fish',
    displayName: 'goldfish',
    canSwim: true,
};

export const shark: Fish = {
    __group: 'Fish',
    displayName: 'shark',
    canSwim: true,
};

export const dolphin: Mammal = {
    __group: 'Mammal',
    displayName: 'dolphin',
    canSwim: true,
    legCount: 0,
};

export const tortoise: Mammal = {
    __group: 'Mammal',
    displayName: 'tortoise',
    canSwim: false,
    legCount: 4,
};

export const animals: ReadonlyArray<Animal> = [
    albatross,
    penguin,
    goldfish,
    shark,
    dolphin,
    tortoise,
];
