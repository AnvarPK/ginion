// Filters Reducer

const filtersReducerDefaultState = {
    make: undefined,
    model: undefined,
    body_type: undefined,
    mileage: undefined,
    fuel_type: undefined,
    gears: undefined,
    first_reg: undefined,
    sell_price: undefined
};

export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_MAKE':
            return {
                ...state,
                make: action.make
            };
        case 'SET_MODEL':
            return {
                ...state,
                model: action.model
            };
        case 'SET_BODY_TYPE':
            return {
                ...state,
                body_type: action.body_type
            };
        case 'SET_MILEAGE':
            return {
                ...state,
                mileage: action.mileage
            };
        case 'SET_FUEL_TYPE':
            return {
                ...state,
                fuel_type: action.fuel_type
            };
        case 'SET_GEARS':
            return {
                ...state,
                gears: action.gears
            };
        case 'SET_SELL_PRICE':
            return {
                ...state,
                sell_price: action.sell_price
            };
            return {
                ...state,
                first_reg: action.first_reg
            };
        case 'SET_FILTER_EMPTY':
            return filtersReducerDefaultState;
        default:
            return state;
    }
};

// case 'SORT_BY_AMOUNT':
        //     return {
        //         ...state,
        //         sortBy: 'amount'
        //     };
        // case 'SORT_BY_DATE':
        //     return {
        //         ...state,
        //         sortBy: 'date'
        //     };