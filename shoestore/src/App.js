import './App.css';
import {NavBar} from './Components/NavBar'
import {Slider} from './Components/Slider'
import {Footer} from './Components/Footer'
import {Products} from './Components/Products'
import{ProductDetails} from './Components/ProductDetails'
import Carousel from './Components/Carousel'
import { GlobalProvider } from './api'
import {Routes,Route,BrowserRouter as Router} from 'react-router-dom'
import About from './Components/About'

function App() {
  return (
     <>
   <Router>
   
   <GlobalProvider>
    <NavBar></NavBar>
   
    <Routes>
      <Route  path='/' element={<Slider/>}/>
      <Route exact path='products' element={<Products/>}/>
      <Route exact path='/products/:id' element={<ProductDetails/>}/>
      <Route exact path='/about' element={<About/>}/>

      
   </Routes>
 <Carousel/>
    <Footer></Footer>
 </GlobalProvider>

 </Router>
 </>
    );
}

export default App;
