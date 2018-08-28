import React from 'react';

import './index.css'

import ReactDOM from 'react-dom';
import App from './app/App';

import {Provider} from 'react-redux';
import store from './app/store';
// bootstrap react application into browser
// put the virual dom into real dom

//ReactDOM.render (Virtual DOM, Real DOM)

// Unidirectional data flow
// V.DOM elements ==> REAL DOM, not vice versa

// provider shall pass store to container

ReactDOM.render( <Provider store={store}>
                    <App />
            </Provider>, 
                document.getElementById('root'))