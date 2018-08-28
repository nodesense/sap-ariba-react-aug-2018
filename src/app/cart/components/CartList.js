// CartList.js

import React, {Component} from "react";
import PropTypes from "prop-types";

import CartItem from "./CartItem";

 //TODO: PureComponent

export default class CartList extends Component {
    constructor(props) {
        super(props);
    }
     
    //TODO: shouldComponentUpdate

    shouldComponentUpdate(nextProps, nextState) {
        console.log('CartList should component update');

        console.log("next Items ", nextProps.items);
        console.log("current prop items", this.props.items);
        
        console.log('nextProps.items != this.props.items', 
                nextProps.items != this.props.items)

        // return true if difference in items
        return nextProps.items != this.props.items;
    }
    
    render() {
        console.log("CartList Render");

        // deconstruct
        let {items, 
             removeItem,
             updateItem
        } = this.props;

        // let removeItem = this.props.removeItem;

        return (
            <div> 
            <h2>Cart List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Total</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/* TODO props items map with CartItem */ }

                    {
                        items.map (item => (
                            <CartItem item={item}
                                      key={item.id} 
                                      removeItem={removeItem}
                                      updateItem={updateItem}
                            />
                        ))
                    }

                </tbody>
            </table>
            </div>
        )
    }
} 

CartList.defaultProps = {
    
}

CartList.propTypes = {
    
}