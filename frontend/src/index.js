import React from 'react';
import ReactDOM from 'react-dom';
import RouteSwitch from './Pages/Global/Components/RouteSwitch';
import { BrowserRouter as Router } from 'react-router-dom';
import { configureStore} from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import toggleReducer from './features/toggleState';

const myStore = configureStore({
  reducer: {
    toggle: toggleReducer,
  }
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={myStore}>
      <Router>
        <RouteSwitch/>      
      </Router>
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);


