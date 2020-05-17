import { createStore, applyMiddleware, combineReducers } from 'redux';
import vehiclesReducer from '../reducers/vehicles';
import filtersReducer from '../reducers/filters';
import languageReducer from '../reducers/language';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancers = composeWithDevTools(
    applyMiddleware(thunk)
);

export default () => {
    const store = createStore(
        combineReducers({
            vehicles: vehiclesReducer,
            filters: filtersReducer,
            language: languageReducer
        }),
        composeEnhancers
    );
    return store;
};