type Name = {
    readonly first: string;
    readonly last: string;
    moves: readonly string[]; // Moves could still be reassigned although the array itself would be readonly
};

const legend: Name = {
    first: 'Chuck',
    last: 'Norris',
    moves: ['punch', 'roundhouseKick']
};

// legend.first = 'Bob' - Cannot assign to 'first' because it is a read-only property.
// legend.moves.pop() - Property 'pop' does not exist on type 'readonly string[]'.
legend.moves = ['dance'];