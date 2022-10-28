type IsArray<T> = T extends Array<unknown> ? 'array' : 'other';

type WithArray = IsArray<string[]>; // 'array'
type WithNotArray = IsArray<number>; // 'other'

type UnboxArray<T> = T extends Array<infer Member> ? Member : T;

type UnboxStringArray = UnboxArray<string[]>; // string
type UnboxNumberArray = UnboxArray<number[]>; // number

type UnboxNonArray = UnboxArray<boolean> // boolean


