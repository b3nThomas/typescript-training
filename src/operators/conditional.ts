type isNumber<T> = T extends number ? 'number' : 'other';

type WithNumber = isNumber<number>;
type WithOther = isNumber<string>;
