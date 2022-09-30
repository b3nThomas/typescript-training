import { Result } from 'neverthrow';

const mrThrow = (reason: string) => {
    throw new Error(`Mr Throw not happy. ${reason}`);
}

const doIt = Result.fromThrowable(mrThrow, (err) => {
    console.log(err);
    return {
        status: 404,
        code: 'Whatevz'
    }
})

const result = doIt('Cus ran out of KFC');

const mappedError = result.mapErr((err) => ({
    outcome: err.status === 404 ? 'Failed' : 'Error'
}));

console.log(mappedError.isErr());
