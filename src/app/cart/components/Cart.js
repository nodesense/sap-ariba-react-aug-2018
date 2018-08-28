// Cart.js

import React, {Component} from "react";
import PropTypes from "prop-types";

import CartList from "./CartList";
import CartSummary from "./CartSummary";

export default class Cart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [ 
            			{id: 1, name: 'P1', price: 100, qty: 10}
                   ],
                   
            //derived data
            amount: 0, // sum of all items price * qty
            count: 0, // sum of all items qty
            //dummy
            flag: true
        }
    }
    
    addItem = () => {
        let id = Math.ceil(Math.random() * 10000);
        let item = {
            id,
            name: `Product ${id}`,
            price: Math.ceil(Math.random() * 100),
            qty: 1
        }
 

        //TODO:
        // clone of state.items, add item at the end
        const items = [...this.state.items, item]
        this.setState({
            // es6 sugar items: items
            items
        })

        //will not work
        // this.state.items still refer old items
        // setState is async
        // this.recalculate(this.state.items) // NOT GOOD

        // items is having newly added item
        this.recalculate(items); 
 
    }
    
    // this to be called by CartItem delete
    // CartItem shall this method as callback
    removeItem = (id) => {
        //TODO
        console.log('remove item', id);
        // immutable
        // return new array, excluding the one to be removed
        const items = this.state
                      .items.filter(item => item.id != id)

        this.setState({
            items
        })
        this.recalculate(items)
    }

    updateItem = (id, qty) => {
        //TODO

        // optimization, if someone clicks update without qty change
        // no change in array, no change in object
        let item = this.state.items.find(item => item.id == id);
        if (item.qty == qty) {
            return;
        }

        // immutable array of items, return new array with item
        let items = this.state.items.map (item => {
            if (item.id == id && item.qty != qty) {
                // to update the item qty
                // immutable object item, update qty
                // return new object
                return {...item, qty}
                
            }
            // else, this item doesn't need update
            return item;
        })

        this.setState({items});
        this.recalculate(items);
    }

    empty = () => {
        //TODO

        const items = [];

        this.setState({
            items
        })

        this.recalculate(items);
    }

    //dummy
    refresh = () => {
        this.setState({
            flag: true
        })
    }

    // derived data from state
    recalculate(items) {
        let count = 0, 
            amount = 0;

        for (let item of items) {
            amount += item.price * item.qty;
            count += item.qty;
        }

        this.setState({
            amount,
            count
        })
    }

    //TODO:
    //componentWillMount
    componentWillMount() {
        this.recalculate(this.state.items)
    }
    
    
    render() {
        console.log("Cart render")
        return (
            <div> 
            <h2>Cart</h2>

            <button onClick={this.addItem}>
                Add Item
            </button>


            <button onClick={this.empty}>
                Empty
            </button>

            <button onClick={this.refresh}>
                Refresh
            </button>
            
            {/* passing removeItem function as props */}
            <CartList  items={this.state.items}  
                       removeItem={this.removeItem}
                       updateItem={this.updateItem}
                        
            />

            <CartSummary amount={this.state.amount}
                         count = {this.state.count}
            />

            </div>
        )
    }
} 


Cart.defaultProps = {
    
}

Cart.propTypes = {
    
}