// this (common context) represents an object
// JavaScript runtime will take this context and pass it into a function as `this`
// Although it works with no type annotation, nothing is enforcing what `this` should be
// We can therefore define it as a compile time only parameter which is essentially invisible
// and not present in the outputted JavaScript files. (Note it **must** be the first param)

function double(this: { value: number }) {
    this.value = this.value * 2;
}

const invalid = {
    valoo: 10, // typo
    double,
};

// invalid.double()
/**
The 'this' context of type '{ valoo: number; double: (this: { value: number; }) => void; }'
is not assignable to method's 'this' of type '{ value: number; }'.
  Property 'value' is missing in type '{ valoo: number; double: (this: { value: number; }) => void; }'
  but required in type '{ value: number; }'
 */

const valid = {
    value: 5,
    double,
};

valid.double(); // Ok 
