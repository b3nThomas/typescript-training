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

const result = hasCheese('I love cheddar');

if (result.isErr()) {
    console.log(result.error);
} else {
    console.log(result.value);
}
