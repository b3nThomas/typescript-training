/***************************************************************************************************

Theme: "Mario Kart TypeScript Grand Prix"

Challenge: You're continuing to build the Mario Kart racing game in TypeScript.
Each racer has a unique name, vehicle type, and race record.
The vehicle types are "Kart," or "Bike."

****************************************************************************************************

Your task is to implement a TypeScript function called getPodiumFinishers that takes an array
of racers and a player group as inputs and returns the top three racers (podium finishers)
based on the specified player group and their race records.

***************************************************************************************************/

type RacerGroup = 'Beginner' | 'Intermediate' | 'Advanced';
type VehicleType = 'Kart' | 'Bike';

type Racer = {
    name: string;
    racerGroup: RacerGroup;
    vehicle: VehicleType;
    raceRecord: number; // Represents their race time in seconds (lower is better)
};

type PodiumFinishers = Racer[];

const racers: Racer[] = [
    { name: 'Yoshi', vehicle: 'Kart', raceRecord: 188, racerGroup: 'Advanced' },
    { name: 'Luigi', vehicle: 'Kart', raceRecord: 190, racerGroup: 'Advanced' },
    { name: 'Peach', vehicle: 'Kart', raceRecord: 195, racerGroup: 'Intermediate' },
    { name: 'Toad', vehicle: 'Bike', raceRecord: 195, racerGroup: 'Beginner' },
    { name: 'Donkey Kong', vehicle: 'Bike', raceRecord: 196, racerGroup: 'Beginner' },
    { name: 'Mario', vehicle: 'Kart', raceRecord: 200, racerGroup: 'Intermediate' },
    { name: 'Bowser', vehicle: 'Bike', raceRecord: 205, racerGroup: 'Beginner' },
];

const getPodiumFinishers = (
    racers: Racer[],
    vehicleType: VehicleType,
    racerGroup: RacerGroup
): PodiumFinishers => {
    const racersByGroup = racers.filter(
        (racer) => racer.vehicle === vehicleType && racer.racerGroup === racerGroup
    );

    racersByGroup.sort((a, b) => a.raceRecord - b.raceRecord);

    return racersByGroup.slice(0, 3);
};

const podiumKartsIntermediate = getPodiumFinishers(racers, 'Kart', 'Intermediate');
console.log(podiumKartsIntermediate); // [Object] logging is annoying...

const podiumBikesBeginner = getPodiumFinishers(racers, 'Bike', 'Beginner');
console.log(podiumBikesBeginner); // [Object] logging is annoying...
