import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FoodItem from "./FoodItem";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const { id } = useParams();
    const [restaurantMenu, setRestaurantMenu] = useState([]);
    useEffect(() => {
        fetchRestaurantMenu();
    }, []);
    async function fetchRestaurantMenu() {
        const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=${id}&submitAction=ENTER`);
        const data = await response.json();
        setRestaurantMenu(data.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    }

    if (!restaurantMenu) {
        return null;
    }

    return restaurantMenu.length === 0 ? (<Shimmer />) : (
        <>
        <div className="menu">
            {
                restaurantMenu?.map((item) => {
                    return item?.card?.card?.itemCards?.map((item) => {
                        return <FoodItem foodItem={item.card.info} key={item.card.info.id}/>
                    })
                })
            }
        </div>
        </>
    )
}

export default RestaurantMenu;