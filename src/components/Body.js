import RestaurantCard from "./RestaurantCard";
import { useState,useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { filterRestaurants } from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const Body = () => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const {user, setUser} = useContext(UserContext);

    useEffect(() => {
        getRestaurants();
    },[]);

    async function getRestaurants() {
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        const json = await response.json();
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }

    const isOnline = useOnline();
    
    if(!isOnline) {
        return <h1>You are offline</h1>
    }

    if(!allRestaurants) {
        return null;
    }

    return allRestaurants.length === 0 ? (<Shimmer/>) : (
        <div className="">
            <div className="p-5 flex space-x-5">
                <input 
                type="text"
                placeholder="Search for restaurants"
                className="search-input"
                value={searchText}
                onChange={
                    (e) => {
                        setSearchText(e.target.value)
                        const filteredRestaurantList = filterRestaurants(e.target.value, allRestaurants);
                        setFilteredRestaurants(filteredRestaurantList);
                    }
                }
                />
                <button className="bg-gray-500 rounded-full p-2" onClick={
                    () => {
                        const filteredRestaurantList = allRestaurants.filter((restaurant) => {
                            return restaurant.data.name.toLowerCase().includes(searchText.toLowerCase());
                        });
                        setFilteredRestaurants(filteredRestaurantList);
                    }
                }>Search</button>
                <input type="text" value={user.name} onChange={
                    (e) => {
                        setUser({...user, name: e.target.value})
                    }
                }/>
            </div>
            { filteredRestaurants.length === 0 ? <h1>No Results Found</h1> : 
            <div className="flex flex-wrap">
                {
                    filteredRestaurants.map((restaurant) => {
                            return <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>
                    })
                }
            </div>
            }
        </div>
    )
}

export default Body;