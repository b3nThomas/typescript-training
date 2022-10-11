// Generic constraints (extends)
// Used to validate that a generic conforms to a particular shape so that
// those properties can be used inside the function body

type NameFields = { firstName: string, lastName: string };

function addFullName<T extends NameFields>(obj: T): T & { fullName: string } {
    return {
        ...obj,
        fullName: `${obj.firstName} ${obj.lastName}`
    }
}

const john = addFullName({
    email: 'john@example.com',
    firstName: 'John',
    lastName: 'Doe'
});

console.log(john.email); // john@example.com
console.log(john.fullName); // John Doe
