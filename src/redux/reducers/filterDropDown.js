// Vehicle Reducer

const filterDropDownDefaultState = {
    makes: []
};

export default (state = filterDropDownDefaultState, action) => {
    switch (action.type) {
        case 'SET_MAKES':
            return action.makes;
        default:
            return state;
    }
};