import { of } from 'rxjs';
import { delay, map, concatMap, tap } from 'rxjs/operators';
import chalk from 'chalk';

/**
 * concatMap is almost like a queue with a one in one out policy
 */

const source = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

source
    .pipe(
        concatMap((val) =>
            of(val).pipe(
                delay(500),
                map((num) => num * 2),
                tap((val) => console.log(chalk.red(val)))
            )
        ),
        delay(2e3),
        map((val) => val * 2),
        tap((val) => console.log(chalk.green(val)))
    )
    .subscribe();
