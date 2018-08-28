import {connect} from 'react-redux';

import FuncCounter from '../components/FuncCounter';

import * as actions from '../state/actions';

// store = store.getState()
// container shall call this func
// return data to FuncCounter comp as props
function mapStateToProps(state) {
    return {
        counter: state.counter
    }
}

// called by container
// return functions as props to FuncCounter comp as props
function mapDispatchToProps(dispatch) {
    return {
        increment: function(value) {
            let action = actions.increment(value)
            dispatch(action)
        },

        reset: function() {
            let action = actions.reset()
            dispatch(action)
        }
    }
}

// subscribe, unsusbcribe
// calls mapStateToProps on subscription
// calls mapDispatchToProps
const Container = connect(mapStateToProps, 
                            mapDispatchToProps) (FuncCounter)

export default Container;