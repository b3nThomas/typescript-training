type PersonDictionary = {
    [username: string]: { displayName: string; email: string } | undefined;
    // public: boolean - Not ok. When using an index signature pattern, value must remain consistent
};

const persons: PersonDictionary = {
    chuck: { displayName: 'Chuck Norris', email: 'kick@roundhouse.com' },
};

// Without the undefined union on line 2, we are prone to runtime errors here.
// The following line would not throw error:
// persons['missing'].email;

// With the union, TypeScript throws the following compile time error:
// Object is possibly 'undefined'

// Optional chaining or some other checks would need t be used for type safety
persons.chuck?.displayName;
