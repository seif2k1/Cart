import {useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { setOpenCart,ifCartState, selectCartState ,Clear,selectCartItem} from '../createReducer/ProducSlice'

import AllContent from '../NavbButtonMenu/AllContent';
const Navbar = () => {
  const ifCartState = useSelector(selectCartState);
  const ifCartItem = useSelector(selectCartItem);
  const dispatch = useDispatch();
  const onCartToggle = ()=>{
      dispatch(setOpenCart({
          cartState:true,
      }))
  };
  return (
    <>
      <div className="Menu align-items-center  d-flex px-5 text-info bg-dark">
        <div className="right-side">
          <h1>Home</h1>
        </div>
        <div className="left-side ms-auto ">
        <button type="button" className="btn btn-primary position-relative my-3" onClick={onCartToggle}>
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-cart-check-fill" viewBox="0 0 16 16">
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z"/>
</svg>
            {console.log(onCartToggle)}
            <span className={`${ifCartItem.length? `position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger  ${ifCartItem.length}` : ""}`}>
              {ifCartItem.length? ifCartItem.length : ""}
              <span className="visually-hidden"> Items In Your Wallet</span>
            </span>
          </button>
        {ifCartItem? <AllContent /> : "" }
        </div>
      </div>
      
    </>
  )
}

export default Navbar