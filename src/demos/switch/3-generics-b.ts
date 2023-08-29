/***************************************************************************************************

Theme: "Pokémon TypeScript Adventure - Generics"

Challenge: You are building a Pokédex to manage Pokémon data.
Each Pokémon has a unique name, type, and level.
The Pokémon can belong to one of the three types: "Fire", "Water", or "Grass".

****************************************************************************************************

Your task is to implement a TypeScript function called getStrongestPokemon that
takes an array of Pokémon as input and a generic type parameter representing the desired Pokémon type.
The function should return the strongest Pokémon of that specific type.

***************************************************************************************************/

// import { deepLog } from './_lib';

type Pokemon = {
    name: string;
    type: string;
    level: number;
};

const pokemon: Pokemon[] = [
    { name: 'Arcanine', type: 'Fire', level: 70 },
    { name: 'Venusaur', type: 'Grass', level: 60 },
    { name: 'Blastoise', type: 'Water', level: 58 },
    { name: 'Charizard', type: 'Fire', level: 55 },
    { name: 'Squirtle', type: 'Water', level: 20 },
    // { name: 'Diglet', type: 'Ground', level: 14 },
    // { name: 'Diglet', type: 'Ground', level: 15 },
];

const getStrongestPokemon = <T extends 'Fire' | 'Water' | 'Grass'>(
    pokemon: Pokemon[],
    elementType: T
): Pokemon | undefined => {
    const filteredPokemon = pokemon.filter((pokemon) => pokemon.type === elementType);
    if (filteredPokemon.length === 0) {
        return undefined; // No Pokémon of the specified type found
    }

    return filteredPokemon.reduce((strongest, current) =>
        current.level > strongest.level ? current : strongest
    );
};

const strongestFirePokemon = getStrongestPokemon(pokemon, 'Fire');
console.log(strongestFirePokemon);

// const strongestWaterPokemon = getStrongestPokemon(pokemon, 'Water');
// deepLog(strongestWaterPokemon);

// const strongestGrassPokemon = getStrongestPokemon(pokemon, 'Grass');
// deepLog(strongestGrassPokemon);
