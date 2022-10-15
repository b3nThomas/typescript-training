import { ok, err, Result } from 'neverthrow';

type CheeseError = { message: 'Found no cheese' };

const hasCheese = (text: string): Result<string, CheeseError> => {
    const cheeses = ['cheddar', 'edam', 'brie'];

    if (cheeses.some((cheese) => text.includes(cheese))) {
        return ok(text);
    } else {
        return err({ message: 'Found no cheese'});
    }
}

const result1 = hasCheese('I love cheddar');

if (result1.isErr()) {
    console.log(result1.error); // eslint-disable-line
} else {
    console.log(result1.value); // eslint-disable-line
}
