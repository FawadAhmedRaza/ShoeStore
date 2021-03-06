import {useParams} from 'react-router-dom'
import {useContext} from 'react'
import { GlobalContext } from '../api'

export const ProductDetails=()=>{

    const {id}=useParams()
    const shoes = useContext(GlobalContext)
    const shoe=shoes[id]
    const {Pid,name,img}=shoe
   return(
       <div>
       <h1>{name}</h1>
       <img src={img}/>
       </div>
   
   )
}