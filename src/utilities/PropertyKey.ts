let example: PropertyKey;

example = 'string';
example = 123;
example = Symbol('cheese');
// example = {} - Type '{}' is not assignable to type 'PropertyKey'.ts(2322)

// type PropertyKey = string | number | symbol

type MyObj = Record<PropertyKey, number>;

const obj: MyObj = {
    one: 1,
    2: 2,
    [Symbol(3)]: 3,
    ['four']: 4,
};
