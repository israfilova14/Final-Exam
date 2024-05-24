import { NavLink } from "react-router-dom"
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import "../header/Header.scss"
 const Header = () => {
   return (
     <div>
      <header>
          <div className="logo">
            <h1>Pulse <span>.</span></h1>
          </div>
          <div className="links">
            <nav>
              <ul>
                <li>
                  <NavLink to={"/"} style={({textDecoration: "none" , color: "black"})}>Home</NavLink>
                </li>
                <li>About us</li>
                <li>Restaurant </li>
                <li>News </li>
                <li>Contact</li>
                <li>
                <NavLink to={"/post"} style={({textDecoration: "none" , color: "black"})}>Post</NavLink>
                </li>
                <li>
                  <NavLink to={"/wishlist"} style={({textDecoration: "none" , color: "black"})}>Wishlist</NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className="reservations">
             <p className="reservations">Reservations</p>
             <LocalPhoneIcon></LocalPhoneIcon>
             <p> 652-345 3222 11</p>
          </div>
      </header>
     </div>
   )
 }
 
 export default Header