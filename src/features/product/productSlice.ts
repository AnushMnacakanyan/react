import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Product } from "../type";
import { getCategoriesAPI, getProductByIdAPI, getProductsAPI, getProductsByCategoryIdAPI, getProductsByLimitIdAPI, sortProductsAPI, updateProductAPI } from "./productAPI";

const initialState: {
  products: Product[];
  product: Product;
  category: string[];
} = {
  product: {} as Product,
  products: [],
  category: [],
};


const productSlice= createSlice({
    name:"product",
    initialState,
    reducers:{  
    },
    extraReducers:(build)=>{
        build.addCase(getProductsAPI.fulfilled,(state, action)=>{
            state.products=action.payload
        }).addCase(getProductByIdAPI.fulfilled,(state,action)=>{
            state.products=action.payload
        }).addCase(getProductsByLimitIdAPI.fulfilled,(state,actions)=>{
            state.products=actions.payload
        }).addCase(sortProductsAPI.fulfilled,(state,actions)=>{
            state.products=actions.payload
        }).addCase(getCategoriesAPI.fulfilled,(state,actions)=>{
            state.category=actions.payload
        }).addCase(getProductsByCategoryIdAPI.fulfilled,(state,actions)=>{
            state.products=actions.payload
        }).addCase(updateProductAPI.fulfilled,(state,actions)=>{
            state.product=actions.payload
        })
    }
})
export const selectProduct=(state:RootState)=>state.main
export default productSlice.reducer