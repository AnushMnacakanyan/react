import React from "react";
import { NavLink } from "react-router-dom";

export const Menu=React.memo(()=>{
    return(<div>
        <nav>
            <ul>
                <li><NavLink to={"/"}>home</NavLink></li>
                <li><NavLink to={"/add"}>addProduct</NavLink></li>
            </ul>
        </nav>
    </div>)
})