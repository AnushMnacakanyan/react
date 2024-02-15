import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Product } from "../type";
import { getCategoriesAPI, getProductByIdAPI, getProductsAPI, getProductsByCategoryIdAPI, getProductsByLimitIdAPI, sortProductsAPI, updateProductAPI } from "./productAPI";

const initialState: {
  products: Product[];
  product: Product;
  categories: string[];
} = {
  product: {} as Product,
  products: [],
  categories: [],
};


const productSlice= createSlice({
    name:"product",
    initialState,
    reducers:{},
    extraReducers:(build)=>{
        build.addCase(getProductsAPI.fulfilled,(state, action)=>{
            state.products=action.payload
        }).addCase(getProductByIdAPI.fulfilled,(state,action)=>{
            state.product=action.payload
        }).addCase(getProductsByLimitIdAPI.fulfilled,(state,action)=>{
            state.products=action.payload
        }).addCase(sortProductsAPI.fulfilled,(state,action)=>{
            console.log(action.payload);
            
            state.products=action.payload
        }).addCase(getCategoriesAPI.fulfilled,(state,action)=>{
            state.categories=action.payload
        }).addCase(getProductsByCategoryIdAPI.fulfilled,(state,action)=>{
            state.products=action.payload
        }).addCase(updateProductAPI.fulfilled,(state,action)=>{
            state.product=action.payload
        })
    }
})
export const selectProduct=(state:RootState)=>state.main
export default productSlice.reducer