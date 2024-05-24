 import "../services/Services.scss"
import dinner from "../../../assets/images/dinner.jpg"
import Food from "../food/Food"
const Services = () => {
  return (
    <div className="services-box">
        <div className="services-box-top">
            <img src={dinner} alt="" />
            <div className="title-box">
                <div className="line"></div>
                <h1>Our Services</h1>
                <div className="line"></div>
            </div>
        </div>
        <div className="food-box">
            <Food></Food>
        </div>
    </div>
  )
}

export default Services