 import "../food/Food.scss"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addToWishlist, getAllProducts } from "../../../assets/redux/features/food/foodSlice";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
const Food = () => {
    const {food} = useSelector(store => store.food)
    console.log(food);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getAllProducts())
    },[])

    const addToWishlistPage =(element)=>{
        dispatch(addToWishlist(element))
    }
 
  return (
    <div className="food-container">
        {
            food.map(item => (
                <div className="food-box" key={item._id}>
                    <img src={item.imgSrc} alt="" className="item-image"/>
                    <p className="item-title">{item.title}</p>
                    <p className="item-description">{item.description}</p>
                     <FavoriteBorder onClick={()=>{addToWishlistPage(item)}}></FavoriteBorder>
                </div>
            )) 
        }
    </div>
  )
}

export default Food