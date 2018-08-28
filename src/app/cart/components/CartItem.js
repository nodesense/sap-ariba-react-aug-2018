// CartItem.js
import React, {PureComponent} from "react";
import PropTypes from "prop-types";

// PureComponent
// PureComponent implements shouldComponentUpdate already
// it compare this.state with nextState
// it compare this.props with nextProps
export default class CartItem extends PureComponent {
    constructor(props) {
        super(props);

        //TODO: assing from props
        this.state = {
            qty: props.item.qty
        }
    }

    //TODO: Ref
    //TODO: componentWillMount
    //TODO: state from props, qty
   

    onQtyChange = (e) => {
        const value = e.target.value;

        this.setState({
            qty: parseInt(value) || 0
        })

    }

    componentDidMount() {
        // ref is a keyword
        // used to get REAL DOM Elements
        this.inputQty.focus();
    }
 
    render() {
        let {item} = this.props;

        console.log("CartItem Render ", item.id);

        return (
            <tr>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                     <input 
                            value={this.state.qty}
                            type="number"
                            onChange={this.onQtyChange}

                            ref= {  (elem) => this.inputQty = elem }
                     />
                </td>
                <td>{item.price * item.qty}</td>
                <td> 
                <button onClick={() => this.props.updateItem(item.id, this.state.qty) }>
                        Update
                </button>    
                <button onClick={() => this.props.removeItem(item.id) }>
                        Delete
                </button>
                </td>
            </tr>
        )
    }
} 


CartItem.defaultProps = {
    
}

CartItem.propTypes = {
    
}