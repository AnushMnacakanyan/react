import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Menu } from "../component/Menu";
import { AddProduct } from "../pages/AddProduct";
import { MyError } from "../pages/MyError";
import { SeeProduct } from "../pages/SeeProduct";
import { ShowProduct } from "../pages/ShowProducts";

export const MyRouter=React.memo(()=>{
    return(<div>
        <BrowserRouter>
        <Menu/>
        <Routes>
            <Route path="/" element={<ShowProduct/>} />
            <Route path="/add" element={<AddProduct/>} />
            <Route path="/see/:id" element={<SeeProduct/>} />
            <Route path="*" element={<MyError/>} />

        </Routes>
        </BrowserRouter>
    </div>)
})