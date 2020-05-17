// Vehicle Reducer

const languageDefaultState = {
    value: 'nl',
    label: 'NL'
};


export default (state = languageDefaultState, action) => {
    switch (action.type) {
        case 'SET_LANGUAGE':
            return action.language;
        default:
            return state;
    }
};