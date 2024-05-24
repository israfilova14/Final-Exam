import "../testimonials/Testimonials.scss"
import IcecreamIcon from '@mui/icons-material/Icecream';

 
const Testimonials = () => {
  return (
    <div className="testimonials-box">
        <div className="background">
           <div className="background-top">
             <IcecreamIcon></IcecreamIcon>
             <div className="title-box">
                <div className="line"></div>
                <h1>Testimonials</h1>
                <div className="line"></div>
             </div>
           </div>
           
                <div className="background-text">
                   <p className="lorem">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quam soluta fugit quis debitis ex.
                     Impedit cupiditate omnis reprehenderit nostrum ut provident odit accusantium perferendis maxime, reiciendis eos voluptates officia aliquid!</p>
                     <p className="author"><span>Ted Chapman</span>, Client</p>
                </div>
            
           
        </div>
    </div>

  )
}

export default Testimonials