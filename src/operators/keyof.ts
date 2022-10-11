/* - Example 1 ----------------------------------------- */
// Get object keys from a type

type Address = {
    houseNo: number;
    street: string;
    postcode: `${string} ${string}`;
}

type AddressKey = keyof Address;

const addressKey: AddressKey = "houseNo" // | "street" | "postcode";

/* - Example 2 ----------------------------------------- */
// Create Union type from object keys

const letter = {
    hasAddress: true,
    hasStamp: true,
    isSealed: false
}

type Letter = typeof letter;

type LetterKeys = keyof Letter; // "hasAddress" | "hasStamp" | "isSealed"

/* - Example 2 ----------------------------------------- */
// Type safe get / set on object

const getProp = <Obj, Key extends keyof Obj>(obj: Obj, key: Key) => obj[key];
const setProp = <Obj, Key extends keyof Obj>(obj: Obj, key: Key, value: Obj[Key]) => {
    obj[key] = value;
    return obj;
}

console.log('hasAddress:', getProp(letter, 'hasAddress')); //  | "hasStamp" | "isSealed"
