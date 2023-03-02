import React from "react";
import { NavLink } from "react-router-dom";
import './Menu.css';
// import logo from '../src/img/logo.jpg';
const Menu = (props) => {
    return (
        <div>
            <ul class='navbar'>
                {/* <img src={logo} className="logo" alt=""/> */}
                <NavLink to='/veganlife' className="items"><li>Home</li></NavLink>
                <NavLink to='/Nutrition'className="items" ><li>Nutrition</li></NavLink>
                <NavLink to='/Recipes' className="items"><li>Recipes</li></NavLink>
            </ul>
        </div>
    );
};

export default Menu;