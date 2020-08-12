import React from 'react';
import { hydrate, render } from 'react-dom';
// import { render } from 'react-snapshot';

import { Provider } from 'react-redux'
import configureStore from './redux/store/configureStore';
import { startSetVehicles } from './redux/actions/vehicles';
import MainLoader from './components/main-loader';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';

const store = configureStore();

const Jsx = () => (
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)


const rootElement = document.getElementById("root");
render(<MainLoader />, rootElement);



store.dispatch(startSetVehicles()).then(() => {

  render(<Jsx />, rootElement);
})
// "homepage": "http://codeandhue.com/ginion",


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
