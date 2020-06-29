

const getData = (vehicles, tag) => {
    let items = [...vehicles].map(item => {
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



    return options;
}
export const getMakes = (vehicles) => getData(vehicles, 'make');

export const getModels = (vehicles) => getData(vehicles, 'model');

export const getMileage = (vehicles) => getData(vehicles, 'mileage');

export const getFuelTypes = (vehicles) => getData(vehicles, 'fuel_type');

export const getGears = (vehicles) => getData(vehicles, 'gears');

export const getFirstRegs = (vehicles) => getData(vehicles, 'first_reg');