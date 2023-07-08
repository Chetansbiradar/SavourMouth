import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FoodItem from "./FoodItem";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
    const { id } = useParams();
    const restaurantMenu = useRestaurant(id);

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