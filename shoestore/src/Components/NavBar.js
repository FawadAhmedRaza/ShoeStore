import 'bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle'
import logo from '../Images/logo.png'

export const NavBar=()=>{
    return(
<>
<nav class=" shadow navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#"><img src={logo} width="150"/></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="#">Men <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="#">Women</a>
      <a class="nav-item nav-link" href="#">Kids</a>
    </div>
  </div>
</nav>
</>)
}