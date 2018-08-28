// action creators, helper functions create action

import * as ActionTypes from './action-types';

export function increment(value) {
    return {
        type: ActionTypes.INCREMENT,
        payload: {
            value
        }
    }
}

export function reset() {
    return {
        type: ActionTypes.RESET
    }
}