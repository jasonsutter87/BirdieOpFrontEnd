import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/dashboard';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import BirdieOpReducer from './reducers';
import { loadState, saveState} from './localStorage'
const persistedState = loadState();

const store = createStore(
  BirdieOpReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  saveState(store.getState())
})

ReactDOM.render(
  <Provider store={store}>
    <div>
      <App />
    </div>
  </Provider>,
  document.getElementById('root')
);
