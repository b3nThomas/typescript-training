/* - double assertions --------------------------------- */

// ⚠️ USE WITH CAUTION! ⚠️

type Pants = { type: 'boxers' | 'briefs' };
type Shoe = { size: 's' | 'm' | 'l'; color: 'black' | 'white' };
type Shirt = { size: 's' | 'm' | 'l' };

let boxers: Pants = { type: 'boxers' };
let shoe: Shoe = { size: 'm', color: 'black' };
let shirt: Shirt = { size: 'm' };

// TypeScript is structural, it uses "duck typing":
// "If it walks like a duck and quacks like a ducks, it's a duck"
// Therefore we are able to assign objects whose properties are compatible,
// even if there are straggling properties left over

// Short contains all properties required by shoe so can be assigned
shirt = shoe;

// Shoe cannot be assigned to shirt
// shoe = shirt ❌
// Property 'color' is missing in type 'Shirt' but required in type 'Shoe'

// But as always we can tell TypeScript we know better if some types overlap
shoe = shirt as Shoe // TS trusts us

// If there is no overlap, TS doesn't trust us enough to allow it
// shoe = boxers as Shoe ❌
/**
 * Conversion of type 'Pants' to type 'Shoe' may be a mistake because neither type
 * sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.
  Type 'Pants' is missing the following properties from type 'Shoe': size, color
 */

// If we're doubly sure we know more than TS, double assertion can be used to bypass this
shoe = boxers as unknown as Shoe
