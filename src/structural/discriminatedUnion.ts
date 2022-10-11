/* - Example 1 ----------------------------------------- */

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

const skateboard: ManualVehicle = {
    __powerType: 'Manual',
    powerAction: 'kick'
};

type MechanicalVehicle = BaseVehicle<{
    __powerType: 'Mechanical';
    engineType: 'petrol' | 'diesel' | 'hybrid' | 'electric';
}>;

const ferrari: MechanicalVehicle = {
    __powerType:'Mechanical',
    engineType: 'petrol'
};

type Vehicle = MechanicalVehicle | ManualVehicle;

const handleVehicle = (vehicle: Vehicle) => {
    switch (vehicle.__powerType) {
        case 'Manual':
            console.log(`${vehicle.powerAction} to move power vehicle`);
            break;
        case 'Mechanical':
            console.log(`This vehicles engine is ${vehicle.engineType}`);
    }
};

handleVehicle(skateboard);


/* - Example 2 ----------------------------------------- */

type Cat = {
    __kind: 'cat';
    purrs: true;
};

type Dog = {
    __kind: 'dog';
    woofs: true;
};

type Snake = {
    __kind: 'snake';
    slithers: true;
}

type Pet = Cat | Dog | Snake;

function getName(pet: Pet) {
    switch (pet.__kind) {
        case 'cat':
            return 'Cat';
        case 'dog':
            return 'Dog';
    }
}
