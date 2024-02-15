import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { deleteProductAPI, getProductByIdAPI, getProductsAPI, updateProductAPI } from "../../features/product/productAPI";
import { selectProduct } from "../../features/product/productSlice";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Product } from "../../features/type";

export const SeeProduct = React.memo(() => {
    const { register, handleSubmit } = useForm<Product>()
    const dispatch = useAppDispatch()
    const { product, categories } = useAppSelector(selectProduct)
    console.log(product);

    const { id } = useParams()
    useEffect(() => {
        if (id) {
            dispatch(getProductByIdAPI(+id))
        }
    }, [id])
    const save = (data: Product) => {
        if (id) {
            dispatch(updateProductAPI({ id: +id, obj: data }))
        }
    }
    return (<div className="div3">
        <h3 className="h3">SeeProduct</h3>
        <div className="div3-0">
            <span className="sp1"></span>
            <div  className="div3-1">
                <h4>{product.title}</h4>
                <p>{product.price}</p>
                <h4>{product.category}</h4>
                <p>{product.description}</p>
                <p>{product.rating.count}</p>
                <p>{product.rating.rate}</p>
                <button className="btn1" onClick={() => dispatch(deleteProductAPI(product.id)).unwrap().then( ()=> dispatch(getProductsAPI()))} >delete</button>
            </div>
            <div >
            <img src={product.image} alt="" />
            </div>
            <span className="sp1"></span>
        </div>
        <div className="div3-3"> 
            <form onSubmit={handleSubmit(save)}>
                <input type="text" {...register("title")} placeholder="title" />
                <input type="number" {...register("price")} placeholder="price" />
                <input type="text" {...register("description")} placeholder="description" />
                <input type="number" {...register("rating.count")} placeholder="rating.conut" />
                <input type="number" {...register("rating.rate")} placeholder="rating.rate" />
                <input type="text" {...register("image")} placeholder="image" />
                <select {...register("category")}>{categories.map((elm, i) => { return (<option value={elm} key={i}>{elm}</option>) })}</select>
                <button>update</button>

            </form>
        </div>

    </div>)
})