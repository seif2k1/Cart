import React from 'react'
import CartItem from './CartItem'
import { useDispatch,useSelector } from 'react-redux'
import { setCloseCart,selectCartState } from '../createReducer/ProducSlice'

const AllContent = () => {
    const ifCartState = useSelector(selectCartState);
    const dispatch = useDispatch();
    const onCartToggle = ()=>{
        dispatch(setCloseCart({
            cartState:false
        }))
    }
  return (
    <> 
    <div >
    <div style={{backdropFilter:"blur(2px)"}} className={`${ifCartState? `opacity-100 `:`opacity-0 d-none overflow-hidden bg-info`} z-1 text-danger fixed-top top-0 bottom-0 start-0 end-0`}>
        {console.log(ifCartState)}
    </div>
    <div style={{backdropFilter:"contrast(0.4)"}} className={`${ifCartState? ``:`d-none overflow-hidden`}z-2 nav-link  position-absolute w-50 top-0 m-0 end-0  h-100`}>
        <CartItem onCartToggle={onCartToggle} />
    </div>
    </div>
  </>
)
}

export default AllContent
