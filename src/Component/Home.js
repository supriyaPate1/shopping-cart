import React from 'react'
import Footersec from '../Footersec'
import product from './Data'
import './home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Home() {
 return (
    <>   

        <h2 style={{marginTop:"30px"}}>Add items to the cart</h2>
          <div>
             { product.map((val)=>{
                return <div  style={{display:'inline-block', width:'30%'}} className="card" >
                <img className="card-img-top" id="image" src={val.image} alt="Card image cap"/>
                <div className="card-body">
                  <h5 className="card-title">${val.price}</h5>
                  <h5 className="card-title">{val.name}</h5>
                  <a href="#" className="btn btn-primary">Add-to-cart</a>
                </div>
               </div>            
               })
              }
              </div>            
        <Footersec/>
    </>
  
  )
}
