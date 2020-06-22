export default (vehicles, { make, model, mileage, fuel_type, gears, first_reg }) => {

    return vehicles.filter((vehicle) => {
        const vGears = vehicle.gears.replace(/\d+/g, '');
        const aGears = vGears === 'MANUAL' ? 'MANUAL' : 'AUTO';
        const makeDateMatch = typeof make !== 'string' || vehicle.make === make;
        const modelMatch = typeof model !== 'string' || vehicle.model === model;
        const modelMileage = typeof mileage !== 'number' || vehicle.mileage < mileage;
        const fuelMatch = typeof fuel_type !== 'string' || vehicle.fuel_type === fuel_type;
        const gearMatch = typeof gears !== 'string' || aGears === gears
        const firstRegMatch = typeof first_reg !== 'string' || vehicle.first_reg.split('-')[0] === first_reg;
        return makeDateMatch && modelMileage && modelMatch && fuelMatch && gearMatch && firstRegMatch;
        //
    });
    //     .sort((a, b) => {
    //     if (sortBy === 'date') {
    //         return a.createdAt < b.createdAt ? 1 : -1;
    //     } else if (sortBy === 'amount') {
    //         return a.amount < b.amount ? 1 : -1;
    //     }
    // });
};


export const getMostViewed = (vehicles) => {
    return vehicles.filter((v, i) => {
        return i < 4;
    });
}
