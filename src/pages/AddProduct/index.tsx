import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Product } from "../../features/type";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addProductAPI, getCategoriesAPI } from "../../features/product/productAPI";
import { useSelector } from "react-redux";
import { selectProduct } from "../../features/product/productSlice";

export const AddProduct=React.memo(()=>{
    const dispatch=useAppDispatch()
    const {categories}=useAppSelector(selectProduct)
    const {register,reset,handleSubmit,formState:{errors}}=useForm<Product>()
    useEffect(()=>{
     dispatch(getCategoriesAPI())   
    },[])
    const save=(data:Product)=>{
        dispatch(addProductAPI(data)).unwrap().then(console.log)
        reset()
    }
    return(<div>
        <h3>AddProduct</h3>
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder="title"{
                ...register("title",{
                    required:"enter title"
                })
            } />
            {errors.title && <p>{errors.title.message}</p>}
            <input type="number" placeholder="price"{
                ...register("price",{
                    required:"enter price"
                })
            } />
            {errors.price && <p>{errors.price.message}</p>}
            <input type="text" placeholder="description"{
                ...register("description",{
                    required:"enter description"
                })
            } />
            {errors.description && <p>{errors.description.message}</p>}
            <input type="text" placeholder="rating.count"{
                ...register("rating.count",{
                    required:"enter  rating.count"
                })
            } />
            {errors. rating && <p>{errors.rating.message}</p>}
            <input type="text" placeholder="ratinng.rate"{
                ...register("rating.rate",{
                    required:"enter  rating.rate"
                })
            } />
            {errors.rating && <p>{errors.rating.message}</p>}
            <select {...register("category")}>
                <option value="" hidden>category</option>
                {categories.map((elm,i)=>{
                    return(<option value={elm} key={i}>{elm}</option>)
                })}
            </select>
            <button>save</button>

        </form>
    </div>)
})