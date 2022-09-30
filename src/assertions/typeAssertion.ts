/* - type assertion ------------------------------------ */

const load = (): unknown => 'shrug';
const hello = load();

const trimmed = (hello as string).trim();
