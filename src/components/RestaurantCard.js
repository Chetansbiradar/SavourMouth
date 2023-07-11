import { IMG_CDN_URL } from "../config";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
    const {name, cuisines, avgRating, cloudinaryImageId,id} = props;
    const {user} = useContext(UserContext);
    return( 
        <Link to={`/restaurant/${id}`}>
            <div className="w-56 p-2 m-2 bg-white shadow-lg space-y-1.5 hover:shadow-2xl hover:rounded-2xl hover:border-[1px] hover:border-dashed hover:border-neutral-700 hover:scale-125 duration-500 delay-700 ease-in-out" >
                <img src={IMG_CDN_URL+cloudinaryImageId} className="rounded-lg hover:hover:rounded-2xl hover:scale-105 duration-500 delay-700 ease-in-ou"/>
                <h2 className="line-clamp-1">{name}</h2>
                <p className="line-clamp-1">{cuisines?.join(", ")}</p>
                <h4>{avgRating} Stars</h4>
                <p>{user.name}</p>
                <p>{user.email}</p>
            </div>
        </Link>
    )
}

export default RestaurantCard;