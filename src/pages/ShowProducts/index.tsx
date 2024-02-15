import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectProduct } from "../../features/product/productSlice";
import { Link } from "react-router-dom";
import { SortPrice, getProductsAPI, getProductsByLimitIdAPI, sortProductsAPI } from "../../features/product/productAPI";

export const ShowProduct=React.memo(()=>{
    const dispatch=useAppDispatch()
    const {products}=useAppSelector(selectProduct)
    useEffect(()=>{
        dispatch(getProductsAPI())
    },[])
    
    return(<div className="div2">
        <h3 className="h3">ShowProduct</h3>
        <input type="number" onChange={(e)=>dispatch(getProductsByLimitIdAPI(+e.target.value))} />
        <select onChange={(e:any)=>dispatch(sortProductsAPI(e.target.value))} >
            <option value="" hidden></option>
            <option value={SortPrice.DESC}>nvazman kargov</option>
            <option value={SortPrice.ASC}>achman kargov</option>
        </select>
        {/* <input type="number" onChange={(e:any)=>dispatch(getProductsByLimitIdAPI(e.target.value))} /> */}
        {products?.map(elm=>{
            return(<div className="div2-0">
                {/* <input type="text" /> */}
                <span className="sp1"></span>
                <div className="div2-1">
                    <h3>{elm.title}</h3>
                    <p>{elm.price}</p>
                    <h3>{elm.category}</h3>
                    <p>{elm.description}</p>
                    <p>{elm.rating.rate}</p>
                    <p>{elm.rating.count}</p>
                    <Link className="link" to={"/see/"+elm.id}>See more</Link>
                </div>
                <div className="div2-2">
                    <img src={elm.image} alt="" />
                </div>
                <span className="sp1"></span>
            </div>)
        })}
    </div>)
})