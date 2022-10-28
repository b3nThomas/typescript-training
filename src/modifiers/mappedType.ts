type GamesConsole = {
    readonly type: 'PlayStation' | 'Xbox',
    controllers: 1 | 2,
    gamesIncluded?: number
}

type MakeOptional<T> = {
    [P in keyof T]+?: T[P]
}

type OptionalConsole = MakeOptional<GamesConsole>;
// {
//     readonly type?: "PlayStation" | "Xbox" | undefined;
//     controllers?: 1 | 2 | undefined;
//     gamesIncluded?: number | undefined;
// }

type MakeRequired<T> = {
    [P in keyof T]-?: T[P]
}

type RequiredConsole = MakeRequired<GamesConsole>;
// {
//     readonly type: 'PlayStation' | 'Xbox';
//     controllers: 1 | 2;
//     gamesIncluded: number;
// }

type MakeWritable<T> = {
    -readonly [P in keyof T]: T[P]
}

type WritableConsole = MakeWritable<GamesConsole>;
// {
//     type: 'PlayStation' | 'Xbox';
//     controllers: 1 | 2;
//     gamesIncluded?: number | undefined;
// }

/* ----------------------------------------------------------------------------------------------------------------- */

type State = {
    name: string;
    age: number;
}

type Setters<State> = {
    [K in keyof State & string as `set${Capitalize<K>}`]: (value: State[K]) => void;
}

type Getters<State> = {
    [K in keyof State & string as `get${Capitalize<K>}`]: () => State[K];
}

type Store<State> = Setters<State> & Getters<State>;

type PersonState = {
    name: string;
    age: number;
}

type PersonStore = Store<PersonState>;

declare const personStore: PersonStore;

personStore.setName('Ben')
personStore.setName('Ben')
