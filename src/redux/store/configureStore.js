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
    // Grab the state from a global variable injected into the server-generated HTML
    const preloadedState = window.__PRELOADED_STATE__

    // Allow the passed state to be garbage-collected
    delete window.__PRELOADED_STATE__

    const store = createStore(
        combineReducers({
            vehicles: vehiclesReducer,
            filters: filtersReducer,
            language: languageReducer
        }),
        preloadedState,
        composeEnhancers
    );
    window.snapSaveState = () => ({
        __PRELOADED_STATE__: store.getState()
    });

    return store;
};


