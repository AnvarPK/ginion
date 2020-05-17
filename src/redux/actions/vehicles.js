// import { v4 as uuidv4 } from 'uuid';

export const addVehicle = (
    {
        id = '',
        version = '',
        model = '',
        make = '',
        type = '',
        fuel_type = '',
        gears = '',
        first_reg = '',
        sell_price = '',

        mileage = "",
        kw = "",
        hp = "",
        doors = "",
        co2 = "",
        euroNorm = "",
        equipment_options = [],

    } = {}
) => ({
    type: 'ADD_VEHICLE',
    vehicle: {
        id,
        version,
        model,
        make,
        type,
        fuel_type,
        gears,
        first_reg,
        sell_price,
        mileage,
        kw,
        hp,
        doors,
        co2,
        euroNorm,
        equipment_options
    }
});

export const setVehicles = (vehicles) => ({
    type: 'SET_VEHICLES',
    vehicles
});


export const startSetVehicles = () => {
    const url = `${process.env.PUBLIC_URL}/data.xml`;
    return (dispatch) => {

        return fetch(url)
            .then(response => {
                return response.text();
            })
            .then(data => {
                const vehicles = [];
                let parser = new DOMParser(),
                    xmlDoc = parser.parseFromString(data, 'text/xml'),
                    vehiclesData = xmlDoc.getElementsByTagName('vehicle');
                [...vehiclesData].map((item, i) => {
                    const [images] = [...item.getElementsByTagName('images')].map(img => {
                        const im = [...img.getElementsByTagName('image')].map((m, i) => m.innerHTML);
                        return im;
                    }),
                        [img] = images;

                    var equipment = item.getElementsByTagName('equipment_options')[0],
                        equipment_options = [...equipment.getElementsByTagName('option')].map((o, i) => o.innerHTML);

                    const vehicle = {
                        id: item.getElementsByTagName('internal_id')[0].innerHTML,
                        version: item.getElementsByTagName('version')[0].innerHTML,
                        model: item.getElementsByTagName('model')[0].innerHTML,
                        make: item.getElementsByTagName('make')[0].innerHTML,
                        type: item.getElementsByTagName('type')[0].innerHTML,
                        fuel_type: item.getElementsByTagName('fuel_type')[0].innerHTML,
                        gears: item.getElementsByTagName('gears')[0].innerHTML,
                        first_reg: item.getElementsByTagName('first_reg')[0].innerHTML,
                        sell_price: item.getElementsByTagName('sell_price')[0].innerHTML,
                        images,
                        img,
                        mileage: item.getElementsByTagName('mileage')[0].innerHTML,
                        kw: item.getElementsByTagName('kw')[0].innerHTML,
                        hp: item.getElementsByTagName('hp')[0].innerHTML,
                        doors: item.getElementsByTagName('doors')[0].innerHTML,
                        co2: item.getElementsByTagName('co2')[0].innerHTML,
                        euroNorm: item.getElementsByTagName('euroNorm')[0].innerHTML,
                        equipment_options


                    }
                    return vehicles.push(vehicle)
                });
                dispatch(setVehicles(vehicles));
                // dispatch(setMakes(vehicles));
            });
    };
};