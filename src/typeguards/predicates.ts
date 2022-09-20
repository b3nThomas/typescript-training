/**
 * predicate [noun - /ˈprɛdɪkət/]
 * something which is affirmed or denied concerning an argument of a proposition.
 */

type PowerType = 'Mechanical' | 'Manual';

type BaseVehicle<
    T extends {
        __powerType: PowerType;
    }
> = T;

type ManualVehicle = BaseVehicle<{
    __powerType: 'Manual';
    powerAction: 'pedal' | 'row' | 'kick' | 'glide';
}>;

// const skateboard: ManualVehicle = {
//     __powerType: 'Manual',
//     powerAction: 'kick'
// };

type MechanicalVehical = BaseVehicle<{
    __powerType: 'Mechanical';
    engineType: 'petrol' | 'diesel' | 'hybrid' | 'electric';
}>;

// const ferrari: MechanicalVehical = {
//     __powerType:'Mechanical',
//     engineType: 'petrol'
// };

type Vehicle = MechanicalVehical | ManualVehicle;

const vehicleHandler = (vehicle: Vehicle) => {
    switch (vehicle.__powerType) {
        case 'Manual':
            console.log(`${vehicle.powerAction} to move this vehicle`);
            break;
        case 'Mechanical':
            console.log(`This vehicles engine is ${vehicle.engineType}`);
    }
};

// vehicleHandler(ferrari);
