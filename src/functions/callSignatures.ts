// Types can be used to define a functions call signatures

type Add = {
    (a: number, b: number): number;
    (a: number, b: number, c: number, d: number): number;
    // Additional properties can also be added!
    debugName: string;
};

const add: Add = (a: number, b: number, c?: number, d?: number) => {
    return a + b + (c ?? 0) * (d ?? 0);
};

// If debugName is not set:
// Property 'debugName' is missing in type
add.debugName = 'Addition function';

add(1, 2); // Ok
add(1, 2, 3, 4); // Ok

// add(1, 2, 3); - Not ok:
// No overload expects 3 arguments, but overloads do exist that expect either 2 or 4 arguments.
