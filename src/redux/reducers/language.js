// Vehicle Reducer
const url = window.location.pathname;
const lan = url === "/" || url === "/ginion/" || url === "/ginion" ? true : url.includes('/fr');
const languageDefaultState = {
    value: lan ? 'fr' : 'nl',
    label: lan ? 'FR' : 'NL'
};



export default (state = languageDefaultState, action) => {
    switch (action.type) {
        case 'SET_LANGUAGE':
            return action.language;
        default:
            return state;
    }
};