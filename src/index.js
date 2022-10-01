import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import sagaReducer from './reducer/dataReducer'
import { fetchVaccineListSaga } from './sagas/fetchVaccineListSaga';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const allReducer = combineReducers({
  sagadata: sagaReducer
})

const store = createStore(allReducer, applyMiddleware(sagaMiddleware))

// then run the saga
sagaMiddleware.run(fetchVaccineListSaga)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

