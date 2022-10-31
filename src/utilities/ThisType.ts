type MathFns = {
    double(): void;
    half(): void;
};

const math: MathFns & ThisType<{ value: number }> = {
    double() {
        this.value *= 2;
    },
    half() {
        this.value /= 2;
    },
};

const objX = {
    value: 2,
    ...math
}

objX.double()
console.log(objX);

objX.half()
console.log(objX);

/* ----------------------------------------------------------------------------------------------------------------- */
// Used by React and Vue for state management

type StateDescription<D, M> = {
    data: D;
    methods: M & ThisType<D & M>;
};

function createState<D, M>(desc: StateDescription<D, M>): D & M {
    return { ...desc.data, ...desc.methods };
}

let state = createState({
    data: { x: 0, y: 0 },
    methods: {
        moveBy(dx: number, dy: number) {
            this.x += dx;
            this.y += dy;
        }
    }
});

state.x = 10;
state.y = 5;
state.moveBy(5, 5)
console.log(state); // { x: 15, y: 10 }
