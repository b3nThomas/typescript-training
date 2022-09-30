/* - non-null assertion -------------------------------- */

type Point = {
    x: number;
    y: number;
};

let point: Point;
function init() {
    point = { x: 0, y: 0 };
}

init();

// We know that `point` has been initialized but TS doesn't
// Error: Variable 'point' is used before being assigned.
// ! can be used to perform a non-null assertion. (Compile time only, not runtime)
console.log('After init', point!.x, point!.y);
