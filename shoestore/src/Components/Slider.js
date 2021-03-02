import Slider1 from '../Images/banner-2.jpg'
import Slider2 from '../Images/Slider1.jpg'
import Slider3 from '../Images/5ka73z.jpg'
export const Slider=()=>{
return(
    <>
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src={Slider1} alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={Slider2} alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={Slider3} alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
    </>
)
}