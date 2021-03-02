import './App.css';
import {NavBar} from './Components/NavBar'
import {Slider} from './Components/Slider'
import {Footer} from './Components/Footer'
import {Routes, Route} from "react-router"
import {Products} from './Components/Products'
import { GlobalProvider } from './api'

function App() {
  return (
  
 <GlobalProvider>
    <NavBar></NavBar>
    <Slider></Slider>
    
<Products></Products>
    <Footer></Footer>
 </GlobalProvider>
    );
}

export default App;
