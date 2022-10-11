/* - assertion functions ------------------------------- */

// User defined type guards are preferred over these, however assertion
// functions can be very useful in unit tests

type Person = {
    name: string;
    dob?: Date;
};

function loadPerson(): Person | null {
    const networkIssue = Math.floor(Math.random() * 2);
    return networkIssue ? null : { name: 'Chuck' };
}

// General assert function
function assert(condition: unknown, message: string): asserts condition {
    if (!condition) throw new Error(message);
}

// Type specific assertion
function assertDate(value: unknown): asserts value is Date {
    if (value instanceof Date) return;
    else throw new TypeError('value is not Date');
}

// instanceof Person <---- Check this out

const maybePerson = loadPerson();

assert(maybePerson !== null, 'Could not load person');
console.log('Name:', maybePerson.name);
// Without the assert, the following compiler error would be thrown:
// Object is possibly 'null'

assertDate(maybePerson.dob);
console.log('Date:', maybePerson.dob.toISOString());
// Without assertDate, the error would be:
// Object is possibly 'undefined'
