import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { EaraseCard, addProduct, selectCartItem,Delete } from '../createReducer/ProducSlice';

const CartCount = () => {
  const selecte = useSelector((state) => state.products.cartItem );
  const dispatch = useDispatch();
  return (
    <div>
      {selecte.map((pro)=>{
        return(
          <div key={pro.id}><table className="table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col" >Quantity</th>
              <th scope="col">Details</th>
            </tr>
          </thead>
          <tbody >
            <tr >
              <th scope="row">{pro.id}</th>
              <td><img className='d-flex align-items-center justify-center ' style={{height:"80px",width:"90px"}}   src={pro.image} alt={pro.name} /></td>
              <td><h3 className='d-flex fw-bold lh-1 align-items-center justify-center ' style={{height:"80px"}} >{pro.price} $</h3></td>
              <td ><div  className='d-flex align-items-center justify-evenly ' style={{height:"80px"}}>
                <div className='mx-auto  fw-bold fs-2 rounded-circle bg-primary text-white' style={{width:"50px",height:"50px",display:"flex",alignItems:"center",justifyContent:"center"}}>{pro.quantity}</div>
                <div className='d-flex juctify-evenly flex-column py-auto'>
                  <button className="btn btn-primary my-2" onClick={()=> dispatch(addProduct(pro))}>Add</button>
                  <button className="btn btn-danger my-2" onClick={()=>dispatch(EaraseCard(pro))}>Remove</button>
                </div>
                </div></td>
              <td >
                <div style={{height:"80px"}} className='d-flex  align-items-center justify-center '>
                <button className="btn btn-danger text-white " onClick={()=> dispatch(Delete(pro))}>Delete </button></div>
              </td>
            </tr>
          </tbody>
        </table>
          </div>
        )
      })}
    </div>
  )
}

export default CartCount