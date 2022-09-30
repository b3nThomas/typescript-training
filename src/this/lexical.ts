// Stupid name to avoid conflicts with Person type in another file...

class PersonWithAge {
    private _age: number;
    constructor(age: number) {
        this._age = age;
    }
    // growOld() {
    //     // this = this of the parent object
    //     this._age++
    // }
    // Using an arrow function binds this to the
    // function when it is declared
    growOld = () => {
        this._age++;
    }
    age() {
        return this._age
    }
}

const person = new PersonWithAge(0);

// When assigning to a new function, this becomes undefined
// as the function no longer resides within an object
const growOld = person.growOld;
growOld();

console.log(person.age());
