import { err, ok, Result } from 'neverthrow';
import { setTimeout } from 'timers/promises';

type DataResponse = { data: string };
type ErrorResponse = { message: string };

const callApi = async (): Promise<Result<DataResponse, ErrorResponse>> => {
    await setTimeout(2e3);
    const success = Math.round(Math.random());
    if (success) {
        return ok({ data: 'Some Data' });
    } else {
        return err({ message: 'Something went wrong' });
    }
};

(async () => {
    const data = await callApi();

    // Only runs when Result was ok
    data.map((data) => {
        console.log(data.data.toUpperCase());
    });

    // Only runs when Result was err
    data.mapErr((err) => {
        console.error(err.message.toUpperCase());
    });
})();
