import {createStore, 
        combineReducers} from 'redux';

import counterReducer from './state/counterReducer';

const rootReducer = combineReducers({
    counter: counterReducer,
    // more reducers
})

const store = createStore(rootReducer)

// getState() ==> { counter: 0}
console.log("STATE ", store.getState())

export default store;