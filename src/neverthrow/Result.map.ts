import { err, ok, Result } from 'neverthrow';
import { setTimeout } from 'timers/promises';

type DataResponse = { data: string };
type ErrorResponse = { message: string };

const callApi = async (): Promise<Result<DataResponse, ErrorResponse>> => {
    await setTimeout(1e3);
    const success = Math.round(Math.random());
    if (success) {
        return ok({ data: 'Some Data' });
    } else {
        return err({ message: 'Something went wrong' });
    }
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
