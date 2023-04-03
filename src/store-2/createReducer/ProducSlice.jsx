import {toast} from 'react-hot-toast'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartState:false,
    cartItem:[],
}

console.log(initialState.cartState);

export const ProductSlice = createSlice({
    initialState,
    name:"ProSlice",
    reducers:{
        setOpenCart:(state,action)=>{
            state.cartState = action.payload.cartState;
        },
        setCloseCart:(state,action)=>{
            state.cartState = action.payload.cartState;
        }
        ,
        addProduct:(state,action)=>{
            const findProducts = state.cartItem.findIndex((product) => product.id === action.payload.id);
            if(findProducts >= 0){
                //findProducts.cartItem.quantity += 1;
            state.cartItem[findProducts].quantity += 1;
            toast.success(`Item Increased`);
            }
            else{
                const productsClone = {...action.payload, quantity:1}
                state.cartItem.push(productsClone);
                toast.success(`${action.payload.name} added to Cart`);
            }
        },
        EaraseCard:(state,action)=>{
            const findProducts = state.cartItem.findIndex((product) => product.id === action.payload.id);
            if(state.cartItem[findProducts].quantity > 1){
                //findProducts.cartItem.quantity += 1;
                state.cartItem[findProducts].quantity -= 1;
                toast.success(`${action.payload.name} remove one item from your Cart`);
            }
        },
        Delete:(state,action)=>{
            state.cartItem =  state.cartItem.filter((product => product.id !== action.payload.id));
            toast.success(`${action.payload.name} was Deleting from you  wallet`);
        },
        Clear:(state,action)=>{
            state.cartItem = [];
            toast.success(`Clear All Items Successful`);
        },
    }
})

export const {addProduct,EaraseCard,Delete,Clear,setOpenCart,setCloseCart} = ProductSlice.actions;

export const selectCartState = (state) => state.products.cartState ;
export const selectCartItem = (state) => state.products.cartItem ;

export default ProductSlice.reducer;
