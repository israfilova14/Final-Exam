import Carusel from "../../carusel/Carusel"
import Footer from "../../layout/footer/Footer"
import Menu from "../../menu/Menu"
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
      <Menu></Menu>
      <Footer></Footer>
    </div>
  )
}

export default Home