import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectProduct } from "../../features/product/productSlice";
import { Link } from "react-router-dom";
import { getProductsAPI, getProductsByLimitIdAPI, sortProductsAPI } from "../../features/product/productAPI";

export const ShowProduct=React.memo(()=>{
    const dispatch=useAppDispatch()
    const {products}=useAppSelector(selectProduct)
    useEffect(()=>{
        dispatch(getProductsAPI())
    },[])
    
    return(<div>
        <h3>ShowProduct</h3>
        {/* <input type="number" onChange={(e:any)=>dispatch(getProductsByLimitIdAPI(e.target.value))} /> */}
        {products?.map(elm=>{
            return(<div>
                {/* <input type="text" /> */}
                <div>
                    <h3>{elm.title}</h3>
                    <p>{elm.price}</p>
                    <h3>{elm.category}</h3>
                    <p>{elm.description}</p>
                    <p>{elm.rating.rate}</p>
                    <p>{elm.rating.count}</p>
                    <Link to={"/see/"+elm.id}>See more</Link>
                </div>
                <div>
                    <img src={elm.image} alt="" />
                </div>
                <hr />
            </div>)
        })}
     
    </div>)
})