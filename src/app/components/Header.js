import React from 'react';
import PropTypes from "prop-types";

import {NavLink} from 'react-router-dom';


// props => {appTitle: 'React App'}
export default function Header(props) {
    console.log('Header render');

    return (
        <div>
            <h2>{props.appTitle}</h2>

            <NavLink to="/" 
                    exact 
                    className="button"  
                    activeClassName="success" >
                    Home
            </NavLink>

          
            <NavLink to="/products" 
                      
                    className="button"  
                    activeClassName="success" >
                    Products
            </NavLink>
         

            <NavLink to="/cart" 
                      
                    className="button"  
                    activeClassName="success" >
                    Cart
            </NavLink>


            <NavLink to="/profile" 
                      
                    className="button"  
                    activeClassName="success" >
                    Profile
            </NavLink>


            <NavLink to="/counter"
                      className="button"  
                      activeClassName="success" >
                      Counter
              </NavLink>


            <NavLink to="/func"
                      className="button"  
                      activeClassName="success" >
                      Func`
              </NavLink>
            

            <hr />
        </div>
    );
}
  