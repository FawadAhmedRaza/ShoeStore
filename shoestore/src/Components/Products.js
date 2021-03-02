import reactDom from "react-dom"
import {useContext} from "react";
import {GlobalContext} from '../api'
import {link} from 'react-router'

export const Products=()=>{
const shoes=useContext(GlobalContext) 

return(
    
    <div className="p-3 d-flex  flex-wrap">
    {Object.entries(shoes).map(([ProductId,{name,img}])=>(
        
        <div id={ProductId} className="card shadow m-2" style={{width: "18rem"}}>
        <img className="card-img-top" src={img} alt={name}/>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>

          <a href="#" className="btn btn-primary">Details</a>
        </div>
        </div>
      
    ))
       
    }
    </div>
    )
}