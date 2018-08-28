import * as ActionTypes from './action-types';

export default function counterReducer(state = 0, action) {
    console.log('reducer ', state, action);

    switch(action.type) {
        case ActionTypes.INCREMENT:
            return state + action.payload.value

        case ActionTypes.RESET:
            return 0;

        default:
            return state;
    }
}