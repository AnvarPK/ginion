// Vehicle Reducer

const vehiclesReducerDefaultState = [];

export default (state = vehiclesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_VEHICLE':
            return [
                ...state,
                action.vehicle
            ];
        case 'SET_VEHICLES':
            return action.vehicles;
        default:
            return state;
    }
};