import { createAsyncThunk } from "@reduxjs/toolkit";
import { myAxtios } from "../../app/store";
import { Product } from "../type";

export const getProductsAPI=createAsyncThunk(
    " get product",
    async()=>{
        const {data}=await myAxtios.get("/products")
        return data
    }
)

export const getProductByIdAPI=createAsyncThunk(
    "get productById",
    async(id:number)=>{
        const {data}=await myAxtios.get("/products/"+id)
        return data
    }
)

export const getProductsByLimitIdAPI=createAsyncThunk(
    "get productLimit",
    async(limit:number)=>{
        const {data}=await myAxtios.get("/products?limit="+limit)
        return data
    }
)

export enum SortPrice{
    DESC="DESC",
    ASC="ASC"
}

export const sortProductsAPI=createAsyncThunk(
    "sort product",
    async(text:SortPrice)=>{
        const {data}=await myAxtios.get("/products?sort="+text)
        return data
    }
)
export const getCategoriesAPI=createAsyncThunk(
    "get categories",
    async()=>{
        const {data}=await myAxtios.get("/products/categories")
        return data
    }
)

export const getProductsByCategoryIdAPI=createAsyncThunk(
    "get categoryById",
    async(text:string)=>{
        const {data}=await myAxtios.get("/products/category/"+text)
        return data
    }
)
export const addProductAPI=createAsyncThunk(
    "add product",
    async(obj:Product)=>{
        const {data}=await myAxtios.post("/products", obj)
        return data
    }
)

export const updateProductAPI=createAsyncThunk(
    "update product",
    async({id,obj}:{id:number,obj:Product})=>{
        const {data}=await myAxtios.put("/products/"+id,obj)
        return data
    }
)


export const deleteProductAPI=createAsyncThunk(
    "delete product",
    async(id:number)=>{
        const {data}=await myAxtios.delete("/products/"+id)
        return data
    }
)



