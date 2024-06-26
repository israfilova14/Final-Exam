 import "../footer/Footer.scss"
const Footer = () => {
  return (
    <div className="footer-box">
      <div className="background-top"></div>
      <div className="background">
        <div className="form-box">
           <div className="title-box">
            <div className="line"></div>
             <h2>Contact us</h2>
             <div className="line"></div>
           </div>
           <div className="inputs-box">
            <input type="text" placeholder="Name" />
            <input type="text"placeholder="Email" />
           </div>
           <div className="text-box">
            <textarea name="" id=""></textarea>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Footer