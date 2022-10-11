type LongSyntax = ReadonlyArray<number>;
type ShortSyntax = readonly number[]; // Preferred

/* - Arrays -------------------------------------------- */

// Without the readonly modifier, it would be possible to
// mutate the input array, see line 17.
// slice is used to clone the array before making modifications.
// spread could also be used. (Line 10)

function reverseSorted(input: readonly number[]): number[] {
    return input.slice().sort().reverse();
    // return [...input].sort().reverse();
}

const start1 = [1, 2, 3, 4, 5];
const result1 = [5, 4, 3, 2, 1];

console.log(result1); // [5, 4, 3, 2, 1]
// console.log(start1); //
console.log(start1); // Without readonly [5, 4, 3, 2, 1] ❌ - With readonly [1, 2, 3, 4, 5] ✅

/* - Tuples ------------------------------------------- */

// tuple is simply an array with a fixed length
// Without the readonly modifier, again we could undesirably mutate the input

type Coordinates = readonly [number, number];

function move(point: Coordinates, x: number, y: number): Coordinates {
    // point[0] += x; // Cannot assign to '0' because it is a read-only property
    // point[1] += y; // Cannot assign to '1' because it is a read-only property
    return [point[0] + x, point[1] + y];
}

const start2: Coordinates = [0, 0];
const moved = move(start2, 10, 10);

console.log(moved); // [10, 10]
console.log(start2); // Without readonly [10, 10] ❌ - With readonly [0, 0] ✅
