import { useEffect, useState } from "react";
import { RESTAURANT_MENU_URL } from "../config";

const useRestaurant = (id) => {

    const [restaurantMenu, setRestaurantMenu] = useState([]);
    
    useEffect(() => {
        fetchRestaurantMenu();
    }, []);

    async function fetchRestaurantMenu() {
        console.log(RESTAURANT_MENU_URL+id);
        const response = await fetch(RESTAURANT_MENU_URL+id);
        const data = await response.json();
        console.log(data);
        setRestaurantMenu(data.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    }

    return restaurantMenu;

};
export default useRestaurant;