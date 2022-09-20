type AnimalGroup = 'Bird' | 'Fish' | 'Mammal';

type AnimalBaseProps<T extends { __group: AnimalGroup; canSwim: boolean; hasTeeth: boolean }> = T;

type Bird = AnimalBaseProps<{
    /* Base props */
    __group: 'Bird';
    canSwim: boolean;
    hasTeeth: false;
    /* Additional props */
    canFly: boolean; // Penguins can't
}>;

type Fish = AnimalBaseProps<{
    /* Base props */
    __group: 'Fish';
    canSwim: true;
    hasTeeth: boolean;
    /* Additional props */
    canBreathUnderwater: true;
}>;

type Mammal = AnimalBaseProps<{
    /* Base props */
    __group: 'Mammal';
    canSwim: boolean; // Tortoises can't
    hasTeeth: boolean;
    /* Additional props */
    canBreathUnderwater: false;
    legCount: number;
}>;

export type Animal = Bird | Fish | Mammal;
