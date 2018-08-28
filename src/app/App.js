// first component
// virtual dom
import React from 'react'; 

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Profile from './components/Profile';
import Cart from './cart/components/Cart';
import NotFound from './components/NotFound';

import Counter from './components/Counter';

import FuncContainer from './containers/FuncCounterContainer';


import {BrowserRouter as Router, 
        Route, 
        Switch } from 'react-router-dom';

// App is React Class Component
export default class App extends React.Component {
    constructor() {
        super(); // ES6 MUST

        // react keyword
        // component data, should be stored inside state
        // initializing state
        // state is owned by component
        this.state = {
            appTitle : 'React App',
            year: 2018,
            headOffice: {city: 'BLR', state: 'KA'},
            counter: 0
        }
        // BAD IDEA, should use this.state
        //this.appTitle ='BAD'

        
    }
    //react keyword
    // to create virtual dom, return v.dom
    render() {
        return (
        <Router>
           <div >
               {/* JSX comments */}
               {/* component composition 
                    App is parent comp
                    Header and Footer are children
                */}
                {/* passing data to child component 
                    using properties aka 'props'
                */}
                <Header  appTitle={this.state.appTitle} />
                  <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/cart" component={Cart} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/counter" component={Counter} />
                    <Route path="/func" component={FuncContainer} />

                    
                    <Route path='*' component={NotFound} />
                  </Switch>
                    {/* <Cart />
                    
                    <Profile />
                    
                    <Home counter={this.state.counter} /> */}

                <Footer 
                        year = {this.state.year}
                        address = {this.state.headOffice}
                />
           </div>
        </Router>
        )
    }
}