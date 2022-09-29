// Only used when you know better than TS

const load = (): unknown => 'shrug';
const hello = load();

const trimmed = (hello as string).trim();
 