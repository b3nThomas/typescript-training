/* - const assertion ----------------------------------- */

// When applied to an object, TypeScript will:
// - change all primitive types to literal types
// - make all properties readonly
// - change all arrays to readonly tuples

const dave = {
    name: 'dave',
    role: 'drummer',
    skills: ['drumming', 'headbanging'],
} as const;

/**
 * Without as const:
    const dave: {
        name: string;
        role: string;
        skills: string[];
    }
 */

/**
 * With as const:
    const dave: {
        readonly name: "dave";
        readonly role: "drummer";
        readonly skills: readonly ["drumming", "headbanging"];
    }
 */

// It can also be used on a much more granular level
// It's advised to use as const in the most targeted ways possible when required,
// instead of blanket applying it unnecessarily:

function layout(settings: {
    align: 'left' | 'center' | 'right',
    padding: number
}) {
    console.log('Performing layout:', settings);
}

const settings = {
    // By default, object type properties using heir primitive values.
    // In this case 'string'. This would cause errors later:
    // Type 'string' is not assignable to type '"left" | "center" | "right"'
    // We can therefore convert align to a literal using a targeted `as const`
    align: 'left' as const,
    padding: 0
};

layout(settings);
