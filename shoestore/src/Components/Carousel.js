import { useContext } from 'react'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import { GlobalContext } from '../api'
import { Link } from 'react-router-dom'

const Carousel = () => {
    const shoes = useContext(GlobalContext)
    return (
        <div>
            <h1 className="text-center ">New Arrivals</h1>
            <OwlCarousel
                className="owl-theme"
                item="3"
                autoplay
                nav
                dots
            >
                {Object.entries(shoes).map(([ProductId, { name, img }]) => (

                    <Link to={`products/${ProductId}`}>
                    <div id={ProductId} className="card shadow m-1">
                      <img className="card-img-top" src={img} alt={name} />
                      <div className="card-body d-flex justify-content-center">
                        <h5 className="text-center card-title">{name}</h5>
                       
                      </div>
                    </div>
                  </Link>
                ))
                }
            </OwlCarousel>
        </div>
    )
}

export default Carousel;