
import { useDispatch,useSelector } from 'react-redux'
import "../../component/seif.css"
import { addProduct, Delete, EaraseCard, selectProduc } from '../createReducer/ProducSlice';


const Wallet = () => {
  const product = useSelector((state) => state.products);
  const dispatch = useDispatch();
  return (
    <>
    <h1>Welcome To Your List </h1>
      <div className=" text-info">
        {product.map((pro,index)=>{
          return(
            <h1 key={index}>{pro.name}
            {console.log(pro.product.name)}
            </h1> 
          )
        })}
      </div>
    </>
  )
}
export default Wallet;
{/*{product.map((Product) =>{

            return(
            <div key={Product.product.id} className="m-2 p-2 d-flex align-items-center rounded-5 w-100 border border-warning border-3" >
                <img src={Product.product.image} className="rounded-5" style={{width:"130px",height:"130px"}} alt={Product.product.name} />
                <h1 className='text-center text-secondary fs-2'style={{width:"160px"}}>{Product.product.name} </h1>
                <h3  className ="text-white fs-5 w-25 "style={{margin:"5px 20px",fontSize:"20px"}}>{Product.product.descreption}</h3>
                <h2 className='text-white'>{Product.product.price} $</h2>
                <section className="d-flex align-items-center justify-center">
                    <button className="btn btn-success mx-2 fs-5" onClick={()=>dispatch(addProduct(Product))}>+</button>
                    <span className=''>{Product.quantity}</span>
                    {console.log(Product.quantity)}
                    <button className="btn btn-info text-white fs-5 mx-2" onClick={()=>dispatch(EaraseCard(Product))}>-</button>
                    <button className="btn btn-danger  fs-5 mx-2" onClick={()=>dispatch(Delete(Product))}>Delete</button>
                </section>
            </div>)
        })} */}