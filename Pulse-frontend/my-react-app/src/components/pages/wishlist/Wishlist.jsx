import { useSelector } from "react-redux"
import axios from "axios"
import "../wishlist/Wishlist.scss"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
const Wishlist = () => {

  const wishlist = useSelector(store => store.food. wishlist)
  console.log(wishlist);
  const deleteProduct = async(id) => {
    try{
       await axios.delete(`http://localhost:5007/foods/${id}`)
      .then(
        res => {
          console.log(res);
         if(res.status===200){
           wishlist.filter(item => item._id !==id) 
         }
        }
      )
    }catch(err){
      console.log(err);
    }
  }
  return (
    <div className="wishlist-boxes">
     {
        wishlist.map(item => (
          <div className="wishlist-box" key={item._id}>
            <img src={item.imgSrc} alt="" className="wishlist-image" />
             <div className="wishlist-right">
               <p className="wishlist-title">{item.title}</p>
               <p className="wishlist-description">{item.description}</p>
               <DeleteOutlineIcon onClick={() => {deleteProduct(item._id)}}></DeleteOutlineIcon>
             </div>
          </div>
        ))
     }
    </div>
  )
}

export default Wishlist