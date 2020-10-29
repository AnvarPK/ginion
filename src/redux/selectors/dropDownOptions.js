// import vehicles from "./vehicles";


const getData = (vehicles, tag, make) => {

    if (tag === "model") {
        vehicles = vehicles.filter(item => {
            return item['make'] === make
        })
    }

    let items = vehicles.map(item => {
        if (tag === "first_reg") return item[tag].split('-')[0];
        return item[tag];
    })

    if (tag === "gears") {

        items = [...items].map(item => {
            let it = item.replace(/\d+/g, '')

            it = it === "ROBOT" ? "AUTO" : it === "AUTO" ? "AUTO" : "MANUAL";
            return it;
        })
    }


    let filteredItems = items.filter(function (item, i, orig) {
        return orig.indexOf(item, i + 1) === -1;
    });

    if (tag === "first_reg" || tag === "model" || tag === "fuel_type") {
        filteredItems = filteredItems.sort();
    }


    const options = [...filteredItems].map(item => {
        return { value: item, label: item }
    })



    return options.sort((a, b) => a.value.toLowerCase() > b.value.toLowerCase() ? 1 : -1);
}


export const getMakes = (vehicles) => getData(vehicles, 'make');

export const getModels = (vehicles, make) => getData(vehicles, 'model', make);

export const getBodyType = (vehicles) => getData(vehicles, 'body_type');

export const getMileage = (vehicles) => getData(vehicles, 'mileage');

export const getFuelTypes = (vehicles) => getData(vehicles, 'fuel_type');

export const getGears = (vehicles) => getData(vehicles, 'gears');

export const getSellPrice = (vehicles) => getData(vehicles, 'sell_price');

export const getFirstRegs = (vehicles) => getData(vehicles, 'first_reg');