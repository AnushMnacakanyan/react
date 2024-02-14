import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectProduct } from "../../features/product/productSlice";

export const ShowProduct=React.memo(()=>{
    const dispatch=useAppDispatch()
    const {products}=useAppSelector(selectProduct)
    return(<div>
        <h3>ShowProduct</h3>
        {products.map(elm=>{
            return(<div>
                <div>
                    <h3>{elm.title}</h3>
                    <p>{elm.price}</p>
                    <h3>{elm.category}</h3>
                    <p>{elm.description}</p>
                    <p>{elm.rating.rate}</p>
                    <p>{elm.rating.count}</p>

                </div>

            </div>)
        })}
    </div>)
})