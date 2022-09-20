type AnimalGroup = 'Bird' | 'Fish' | 'Mammal';

type AnimalBaseProps<T extends { __group: AnimalGroup; displayName: string; canSwim: boolean }> = T;

export type Bird = AnimalBaseProps<{
    /* Base props */
    __group: 'Bird';
    displayName: string;
    canSwim: boolean;
    /* Additional props */
    canFly: boolean;
}>;

export type Fish = AnimalBaseProps<{
    /* Base props */
    __group: 'Fish';
    displayName: string;
    canSwim: true;
}>;

export type Mammal = AnimalBaseProps<{
    /* Base props */
    __group: 'Mammal';
    displayName: string;
    canSwim: boolean;
    /* Additional props */
    legCount: number;
}>;

export type Animal = Bird | Fish | Mammal;
