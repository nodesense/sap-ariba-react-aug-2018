import React from 'react';


//stateless component
// functional component
export default function FuncCounter(props) {
        console.log('counter render')
 
        return (
            <div>
                <h2>Counter</h2>
                <span>{props.counter}</span>

                <button onClick={() => props.increment(2)}>
                 +1
                </button>

                <button onClick={props.reset}>
                 Reset
                </button>
            </div>
        )
    }
