import { createAsyncThunk } from "@reduxjs/toolkit";
import { myAxios } from "../../app/store";
import { Product } from "../type";

export const getProductsAPI=createAsyncThunk(
    " get product",
    async()=>{
        const {data}=await myAxios.get("/products")
        return data
    }
)

export const getProductByIdAPI=createAsyncThunk(
    "get productById",
    async(id:number)=>{
        const {data}=await myAxios.get("/products/"+id)
        return data
    }
)

export const getProductsByLimitIdAPI=createAsyncThunk(
    "get productLimit",
    async(limit:number)=>{
        const {data}=await myAxios.get("/products?limit="+limit)
        return data
    }
)
// export const searchProductAPI = createAsyncThunk(
//     "search products",
//     async (text: string) => {
//       const { data } = await myAxios.get("products/search?q=" + text);
//       return data.products;
//     }
//   );

export enum SortPrice{
    DESC="DESC",
    ASC="ASC"
}

export const sortProductsAPI=createAsyncThunk(
    "sort product",
    async(text:SortPrice)=>{
        const {data}=await myAxios.get("/products?sort="+text)
        return data
    }
)
export const getCategoriesAPI=createAsyncThunk(
    "get categories",
    async()=>{
        const {data}=await myAxios.get("/products/categories")
        return data
    }
)

export const getProductsByCategoryIdAPI=createAsyncThunk(
    "get categoryById",
    async(text:string)=>{
        const {data}=await myAxios.get("/products/category/"+text)
        return data
    }
)
export const addProductAPI=createAsyncThunk(
    "add product",
    async(obj:Product)=>{
        const {data}=await myAxios.post("/products", obj)
        return data
    }
)

export const updateProductAPI=createAsyncThunk(
    "update product",
    async({id,obj}:{id:number,obj:Product})=>{
        const {data}=await myAxios.put("/products/"+id,obj)
        return data
    }
)


export const deleteProductAPI=createAsyncThunk(
    "delete product",
    async(id:number)=>{
        const {data}=await myAxios.delete("/products/"+id)
        return data
    }
)



