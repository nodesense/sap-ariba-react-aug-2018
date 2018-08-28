import React from 'react';

// class component

// states, event

export default class Home extends React.Component {
    constructor(props) {
        super(props); //good practice

        // initializing child state from parent props
        this.state = {
            counter: this.props.counter || 0
        }
        console.log("Home cons props", this.props)
    } 

    // ES.NEXT  for solving 'this' in context
    increment = () => {
        console.log('increment called');
        //BAD part.Mutating data
        this.state.counter ++;

        // react keyword, forceUpdate defined in Component
        // trigger react to call render method
        // BAD, calls render
        this.forceUpdate();
    }

    decrement = () => {
        // react keyword, setState defined in component
        //GOOD. Immutable
        // setState takes nextState
        // batch update the nextState
        // merge nextState with current state later*
        // setState is async
        // trigger react to call render after merge state
        // it calls shouldComponentUpdate method
        console.log("before ", this.state.counter);
        this.setState({
            counter: this.state.counter - 1
        })
        console.log("after ", this.state.counter);
    }

    // diff between forceUpdate and setState
    // lifecycle method
    //react keyworld
    // decide whether render to be called or not.
    shouldComponentUpdate(nextProps, nextState) {
        console.log('Home shouldComponent Update');
        console.log('Home current state', this.state)
        console.log('Home next state', nextState);

        return nextState.counter % 2 == 0;

        //return true; // calls render
        //return false; //doesn't call render
    }

    componentDidMount() {
        console.log('Home did mount')
    }

    componentWillUnmount() {
        console.log('Component will unmount')
    }

    // create and return v.dom
    // v.dom is stateless, no data binding
    // cannot mutate v.dom
    render() {
        console.log("Home render ", this.state.counter)
        return (
            <div>
                <h2>Home</h2>
                {/* this.props is  react keyword */}
                {/* <p>Counter: {this.props.counter}</p> */}

                <span>Counter </span>
                <span>{this.state.counter}</span>
                <br />
                <button onClick={this.increment}>
                    +1
                </button>

                <button onClick={this.decrement}>
                    -1
                </button>
            </div>
        )
    }
}