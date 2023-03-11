import { of } from 'rxjs';
import { delay, map, mergeMap, tap } from 'rxjs/operators';
import chalk from 'chalk';

/**
 * mergeMap is almost like a queue with a one in one out policy
 */

const source = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

source
    .pipe(
        mergeMap(
            (val) =>
                of(val).pipe(
                    delay(500),
                    map((num) => num * 4),
                    tap((val) => console.log(chalk.red(val)))
                ),
            2
        ),
        delay(1500),
        map((val) => val * 2),
        tap((val) => console.log(chalk.green(val)))
    )
    .subscribe();
