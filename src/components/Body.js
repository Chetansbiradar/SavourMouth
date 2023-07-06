import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../config";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        getRestaurants();
    },[]);

    async function getRestaurants() {
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        const json = await response.json();
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }

    if(!allRestaurants) {
        return null;
    }

    return allRestaurants.length === 0 ? (<Shimmer/>) : (
        <div className="body">
            <div className="search-container">
                <input 
                type="text"
                placeholder="Search for restaurants"
                className="search-input"
                value={searchText}
                onChange={
                    (e) => {setSearchText(e.target.value)
                            const filteredRestaurantList = allRestaurants.filter((restaurant) => {
                                return restaurant.data.name.toLowerCase().includes(e.target.value.toLowerCase());
                            });
                            setFilteredRestaurants(filteredRestaurantList);
                    }
                }
                />
                <button className="search-btn" onClick={
                    () => {
                        const filteredRestaurantList = restaurantList.filter((restaurant) => {
                            return restaurant.data.name.toLowerCase().includes(searchText.toLowerCase());
                        });
                        setFilteredRestaurants(filteredRestaurantList);
                    }
                }>Search</button>
            </div>
            { filteredRestaurants.length === 0 ? <h1>No Results Found</h1> : 
            <div className="cards">
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