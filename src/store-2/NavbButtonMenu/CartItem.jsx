import {useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {Clear} from "../createReducer/ProducSlice"
import CartCount from './CartCount'

const CartItem = ({onCartToggle}) => {
  const dispatch =useDispatch();
  const selecte = useSelector((state) => state.products.cartItem );
  const totalPrice = selecte.reduce((state,action) => {
      state += (action.price * action.quantity);
      return state;
  },0);
  return (
    <div>
        <button className="btn btn-dark text-white m-2" onClick={onCartToggle}>X</button>
        <h1 className="text-center text-white">Welcome To Your List </h1>
        <h3 className="text-center text-white">Total Price : {totalPrice.toFixed(2)} $</h3>
        <button className="btn btn-danger text-white m-2 text-center" onClick={()=> dispatch(Clear())}>Clear All</button>
        <CartCount />
    </div>
  )
}

export default CartItem