import 'bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle'
import logo from '../Images/logo.png'
import {Link} from 'react-router-dom'

export const NavBar=()=>{
    return(
<>
<nav className=" shadow navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand"><img src={logo} width="100"/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
    <Link className="nav-item nav-link active" to={'/'}>Home <span className="sr-only"></span></Link>
      <Link className="nav-item nav-link active" to={'products'}>Products <span className="sr-only"></span></Link>
      <Link className="nav-item nav-link active" to={'about'}>About US <span className="sr-only"></span></Link>
     

     
    </div>
  </div>
</nav>
</>)
}