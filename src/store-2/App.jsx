
import { useDispatch,useSelector } from 'react-redux'
import { addProduct } from './createReducer/ProducSlice'
import Navbar  from './navbar/Navbar'
import { Products } from './products/Products'

export const App = () => {
    const dispatch = useDispatch();
  return (
    <>
        <Navbar />
        <div className="d-flex flex-wrap justify-content-evenly bg-dark position-relative  ">
        {Products.map((product)=>{
            return(
            <div key={product.id} className="m-2 p-2 rounded-5 d-flex flex-wrap justify-content-evenly align-items-center flex-column border border-warning border-3" style={{width:"350px"}}>
                <img src={product.image} className="rounded-5" style={{width:"100%",height:"200px"}} alt={product.name} />
                <hr className='' style={{height:"2px",background:"black"}}/>
                <h1 className='text-center text-secondary'>{product.name} </h1>
                <h3  className ="text-white"style={{margin:"5px 12px",fontSize:"20px"}}>{product.descreption}</h3>
                <h2 className='text-white'>{product.price} $</h2>
                <button className='btn btn-success' onClick={()=>dispatch(addProduct(product))}>ADD CARD</button>
            </div>)
        })}
        </div>
    </>
  )
}
export default App;
