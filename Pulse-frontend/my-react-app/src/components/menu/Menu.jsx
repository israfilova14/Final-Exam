import "../menu/Menu.scss"
import dinner from "../../assets/images/dinner.jpg"
const Menu = () => {
  return (
    <div className="menu-box">
        <div className="background">
           <div className="background-top">
            <img src={dinner} alt="" className="menu-image" />
            <div className="title-box">
                <div className="line"></div>
                <h1>Our Menu</h1>
                <div className="line"></div>
            </div>
           </div>
           <div className="options-box">
            <p>Breakfast</p>
            <p>Brunch</p>
            <p>Lunch</p>
            <p>Dinner</p>
        </div>
        <div className="foods-box">
            <div className="foods-box-left">
                <div className="choose-food">
                    <p>Scrambled Eggs with ham</p>
                    <p>$9.00</p>
                </div>
                <div className="choose-food">
                    <p>Scrambled Eggs in Puff Pastry</p>
                    <p>$11.00</p>
                </div>
                <div className="choose-food">
                    <p>Eggs Benedict</p>
                    <p>$6.00</p>
                </div>
                <div className="choose-food">
                <p>Soft-Boiled Organic Egg</p>
                <p>$8.00</p>
                </div>
            </div>
              <div className="foods-box-right">
                    <div className="choose-food">
                            <p>Scrambled Eggs with ham</p>
                            <p>$9.00</p>
                        </div>
                        <div className="choose-food">
                            <p>Scrambled Eggs in Puff Pastry</p>
                            <p>$11.00</p>
                        </div>
                        <div className="choose-food">
                            <p>Eggs Benedict</p>
                            <p>$6.00</p>
                        </div>
                        <div className="choose-food">
                        <p>Soft-Boiled Organic Egg</p>
                        <p>$8.00</p>
                        </div>
                    </div>
               </div>
               <div className="btn">See more</div>
        </div>
   
    </div>
  )
}

export default Menu