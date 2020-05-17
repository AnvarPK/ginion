import React from 'react';
import ReactDOM from 'react-dom';

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

ReactDOM.render(<MainLoader />, document.getElementById('root'));

store.dispatch(startSetVehicles()).then(() => {
  ReactDOM.render(
    <Jsx />
    ,
    document.getElementById('root')
  );
})



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
