import React from 'react';

import store from '../store';
import * as actions from '../state/actions';

//stateless component
export default class Counter extends React.Component {
    componentDidMount() {
        console.log('counter componentDidMount')

        this.unsubscribeFn = store.subscribe( () => {
            console.log('SUBSCRIBE')
            //this.setState({})
            this.forceUpdate()
        })
    }

    componentWillUnmount() {
        console.log('counter componentWillUnmount')
        this.unsubscribeFn();
    }

    increment = () => {
        let action = actions.increment(5)
        console.log("DISPATCHING ", action)
        store.dispatch(action)
    }

    reset = () => {
        let action = actions.reset()
        console.log("DISPATCHING ", action)
        store.dispatch(action)
    }

    render() {
        console.log('counter render')

        const state = store.getState()

        return (
            <div>
                <h2>Counter</h2>
                <span>{state.counter}</span>

                <button onClick={this.increment}>
                 +1
                </button>

                <button onClick={this.reset}>
                 Reset
                </button>
            </div>
        )
    }
}