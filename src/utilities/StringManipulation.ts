type upper = Uppercase<'upper'>; // 'UPPER'

type lower = Lowercase<'LOWER'>; // 'lower'

type capitalize = Capitalize<'ben'>; // 'Ben'

type uncapitalize = Uncapitalize<'Thomas'>; // 'thomas'

// Typical use case is for defining getter / setter functions

type Getter<T extends string> = `get${Capitalize<T>}`;
type Setter<T extends string> = `set${Capitalize<T>}`;

type Age = 'age';

type GetAge = Getter<Age> // getAge
type SetAge = Setter<Age> // setAge
