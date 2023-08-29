/***************************************************************************************************

Theme: "Animal Crossing: TypeScript Village"

Challenge: You're creating a TypeScript application to manage Animal Crossing villagers.
Each villager has a unique name, personality type, and species.
The valid personality types are "Lazy," "Jock," and "Normal"

****************************************************************************************************

Your challenge is to implement the filterVillagers function using generics to ensure that
the provided personality type is one of the valid types ("Lazy," "Jock," or "Normal").
The function should then filter the villagers based on the specified personality
type and return an array of matching villagers.

***************************************************************************************************/

type Villager = {
    name: string;
    personality: string;
};

type ValidPersonality = 'Lazy' | 'Jock' | 'Normal';

const villagers: Villager[] = [
    { name: 'Muffy', personality: 'Normal' },
    { name: 'Bob', personality: 'Lazy' },
    { name: 'Biskit', personality: 'Lazy' },
    { name: 'Roald', personality: 'Jock' },
    { name: 'Eloise', personality: 'Snooty' },
    { name: 'Tom Nook', personality: 'Loan Shark' },
];

const filterVillagers = <T extends ValidPersonality>(
    villagers: Villager[],
    personalityType: T
): Villager[] => villagers.filter((villager) => villager.personality === personalityType);

const lazyVillagers = filterVillagers(villagers, 'Lazy');
console.log(lazyVillagers);
const jockVillagers = filterVillagers(villagers, 'Jock');
console.log(jockVillagers);
const normalVillagers = filterVillagers(villagers, 'Normal');
console.log(normalVillagers);
// const snootyVillagers = filterVillagers(villagers, 'Snooty');
// console.log(snootyVillagers);
// const loanSharkVillagers = filterVillagers(villagers, 'Loan Shark');
// console.log(loanSharkVillagers);
