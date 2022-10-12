import { err, ok, Result } from 'neverthrow';

type CheeseError = { message: 'Found some cheese' };

const errWhenCheeseFound = (text: string): Result<string, CheeseError> => {
    throw new Error();
    return text.includes('cheese') ? err({ message: 'Found some cheese' }) : ok(text);
};
