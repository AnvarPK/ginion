// Vehicle Reducer
const url = window.location.pathname;
console.log(url);
const lan = url === "/" ? true : url.includes('/nl');
const languageDefaultState = {
    value: lan ? 'nl' : 'fr',
    label: lan ? 'NL' : 'FR'
};



export default (state = languageDefaultState, action) => {
    switch (action.type) {
        case 'SET_LANGUAGE':
            return action.language;
        default:
            return state;
    }
};