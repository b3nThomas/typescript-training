/**
 * predicate [noun - /ˈprɛdɪkət/]
 * something which is affirmed or denied concerning an argument of a proposition.
 */

type PowerType = 'Mechanical' | 'Manual';

type Vehicle<
    T extends {
        __powerType: PowerType;
    }
> = T;

type Car = Vehicle<{
    __powerType: 'Mechanical';
}>;

type Skateboard = Vehicle<{
    __powerType: 'Manual';
}>;
