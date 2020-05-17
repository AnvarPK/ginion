export default (vehicles, { make, model, fuel_type, gears, first_reg }) => {

    return vehicles.filter((vehicle) => {
        const makeDateMatch = typeof make !== 'string' || vehicle.make === make;
        const modelMatch = typeof model !== 'string' || vehicle.model === model;
        const fuelMatch = typeof fuel_type !== 'string' || vehicle.fuel_type === fuel_type;
        const gearMatch = typeof gears !== 'string' || vehicle.gears === gears
        const firstRegMatch = typeof first_reg !== 'string' || vehicle.first_reg.split('-')[0] === first_reg;
        return makeDateMatch && modelMatch && fuelMatch && gearMatch && firstRegMatch;
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
