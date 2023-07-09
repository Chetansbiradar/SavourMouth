import { IMG_CDN_URL } from "../config";
import { Link } from "react-router-dom";

const RestaurantCard = (props) => {
    const {name, cuisines, avgRating, cloudinaryImageId,id} = props;
    return( 
        <Link to={`/restaurant/${id}`}>
            <div className="w-56 p-2 m-2 shadow-lg" >
                <img src={IMG_CDN_URL+cloudinaryImageId}/>
                <h2 className="nowrap">{name}</h2>
                <p className="nowrap">{cuisines?.join(", ")}</p>
                <h4>{avgRating} Stars</h4>
            </div>
        </Link>
    )
}

export default RestaurantCard;