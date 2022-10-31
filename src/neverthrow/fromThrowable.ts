import { Result } from 'neverthrow';

type ParseError = { message: string };

const toParseError = (err: unknown): ParseError => {
    console.log(err);

    return { message: 'Parse Error' };
};

const safeJsonParse = Result.fromThrowable(JSON.parse, toParseError);

// the function can now be used safely, if the function throws, the result will be an Err
const res = safeJsonParse('[]');

if (res.isErr()) {
    console.log('It failed');
    process.exit(1);
} else {
    console.log('It passed');
}
