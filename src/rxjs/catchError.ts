import { from, of } from 'rxjs';
import { catchError, concatMap, map, tap } from 'rxjs/operators';

const getPerson = (name: string) => {
    const networkIssue = Math.floor(Math.random() * 2);

    if (networkIssue) {
        throw new Error('Some network issue occurred');
    }

    return { name, id: 123 };
};

from(['Ben', 'Clare', 'Ferne', 'Beatrix'])
    .pipe(
        tap((name) => console.log(name)),
        concatMap((name) =>
            of(name).pipe(
                map(getPerson),
                catchError((_) => of({ name, id: null }))
            )
        ),
        tap((person) => console.log(person))
    )
    .subscribe();
