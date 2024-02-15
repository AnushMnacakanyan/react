import React from "react";
import { NavLink } from "react-router-dom";

export const Menu=React.memo(()=>{
    return(<div className="div1">
        <h2>PRODUCT</h2>
        <span></span>
        <nav>
            <ul>
                <li><NavLink to={"/"}>Home</NavLink></li>
                <li><NavLink to={"/add"}>AddProduct</NavLink></li>
            </ul>
        </nav>
    </div>)
})