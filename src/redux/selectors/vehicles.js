export default (vehicles, { make, model, body_type, mileage, fuel_type, gears, sell_price, first_reg }) => {

    return vehicles.filter((vehicle) => {
        const vGears = vehicle.gears.replace(/\d+/g, '');
        const aGears = vGears === 'MANUAL' ? 'MANUAL' : 'AUTO';
        const makeDateMatch = typeof make !== 'string' || vehicle.make === make;
        const modelMatch = typeof model !== 'string' || vehicle.model === model;
        const bodyTypeMatch = typeof body_type !== 'string' || vehicle.body_type === body_type;
        const modelMileage = typeof mileage !== 'number' || vehicle.mileage < mileage;
        const sellPriceMatch = typeof sell_price !== 'number' || vehicle.sell_price < sell_price;
        const fuelMatch = typeof fuel_type !== 'string' || vehicle.fuel_type === fuel_type;
        const gearMatch = typeof gears !== 'string' || aGears === gears;
        const firstRegMatch = typeof first_reg !== 'string' || vehicle.first_reg.split('-')[0] === first_reg;
        return makeDateMatch && modelMileage && modelMatch && sellPriceMatch && bodyTypeMatch && fuelMatch && gearMatch && firstRegMatch;
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
