import Carusel from "../../carusel/Carusel"
import Services from "../services/Services"
import Testimonials from "../testimonials/Testimonials"
import Welcome from "../welcome/Welcome"

const Home = () => {
  return (
    <div className="home-box">
      <Carusel></Carusel>
      <Welcome></Welcome>
      <Testimonials></Testimonials>
      <Services></Services>
    </div>
  )
}

export default Home