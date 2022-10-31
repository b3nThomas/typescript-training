import { fromPromise, Result } from 'neverthrow';
import { setTimeout } from 'timers/promises';

type DataResponse = { data: string };
type ErrorResponse = { message: string };

const thirdPartyHTTPClient = async () => {
    await setTimeout(1e3);
    const success = Math.round(Math.random());
    if (success) {
        return { data: 'Some Data' };
    } else {
        throw new Error('Some HTTP Client Error');
    }
};

const toHTTPError = (err: unknown): ErrorResponse => {
    console.log(err);

    return { message: 'Something went wrong but we handled it without try catch' };
};

const callApi = async (): Promise<Result<DataResponse, ErrorResponse>> => {
    return fromPromise(thirdPartyHTTPClient(), toHTTPError);
};

(async () => {
    const result = await callApi();

    result
        .map((data) => {
            console.log(data.data.toUpperCase());
        })
        .mapErr((err) => {
            console.error(err.message.toUpperCase());
        });

})();
