import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/dashboard';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import BirdieOpReducer from './reducers';

const store = createStore(
  BirdieOpReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <App />
    </div>
  </Provider>,
  document.getElementById('root')
);
