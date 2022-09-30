// Overloads are used to define specific inputs / outputs for a function.
// These are used at compile time only

/* - Example 1 ----------------------------------------- */

// Without these overloads, it would be possible to pass month with a timestamp even though it would be unused
function makeDate(timestamp: number): Date; // Individually, these are called function signatures
function makeDate(year: number, month: number, day: number): Date;

function makeDate(timestampOrYear: number, month?: number, day?: number): Date {
    if (month != null && day != null) {
        return new Date(timestampOrYear, month -1, day);
    } else {
        return new Date(timestampOrYear);
    }
}

const doomsday = makeDate(2000, 1, 1); // 1 Jan 2000
const epoch = makeDate(0); // 1 Jun 1970

// const notAllowed = makeDate(0, 1);
// No overload expects 2 arguments, but overloads do exist that expect either 1 or 3 arguments

/* - Example 2 ----------------------------------------- */

function reverse(str: string): string;
function reverse(strArr: string[]): string[];

function reverse(stringOrStringArray: string | string[]) {
    if (typeof stringOrStringArray === 'string') {
        return stringOrStringArray.split('').reverse().join();
    } else {
        return stringOrStringArray.slice().reverse()
    }
}

// Without function overloads, the return types of both constants below would be string | string[]
// TypeScripts inference engine can only assess the the potential outputs,
// without taking the conditional logic of the function into account.
const helloStr = reverse('hello'); // 'olleh'
const helloArr = reverse(['h', 'e', 'l', 'l', 'o']); // ['o', 'l', 'l', 'e', 'h']
