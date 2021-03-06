import reactDom from "react-dom"
import { useContext } from "react";
import { GlobalContext } from '../api'
import { Link } from 'react-router-dom'

export const Products = () => {
const shoes = useContext(GlobalContext)
  return (
    <div className="p-3 d-flex  flex-wrap justify-content-around">
      {Object.entries(shoes).map(([ProductId, { name, img }]) => (
        <Link to={`${ProductId}`}>
          <div id={ProductId} className="card shadow m-1" style={{ width: "18rem" }}>
            <img className="card-img-top" src={img} alt={name} />
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
             
            </div>
          </div>
        </Link>
      ))
      }
    </div>
  )
}