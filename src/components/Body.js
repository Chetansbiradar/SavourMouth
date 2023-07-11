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
        <div className="justify-center">
            <div className="p-5 flex space-x-5 justify-center">
                <div className="flex pl-2 border-2 rounded-full space-x-2">
                    <input 
                    type="text"
                    placeholder="Search for restaurants"
                    className="focus:outline-none"
                    value={searchText}
                    onChange={
                        (e) => {
                            setSearchText(e.target.value)
                            const filteredRestaurantList = filterRestaurants(e.target.value, allRestaurants);
                            setFilteredRestaurants(filteredRestaurantList);
                        }
                    }
                    />
                    <div className="flex border-b-0 border-l-2 border-r-2 items-center rounded-2xl pl-2">
                        <svg className="m-auto p-0.5" width="20" height="20"viewBox="0 0 20 20"><path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                        <button className="rounded-full p-1 pr-3 border-none" onClick={
                            () => {
                                const filteredRestaurantList = allRestaurants.filter((restaurant) => {
                                    return restaurant.data.name.toLowerCase().includes(searchText.toLowerCase());
                                });
                                setFilteredRestaurants(filteredRestaurantList);
                            }
                        }>Search</button>
                    </div>
                    <input type="text" className="focus:outline-none border-l-2 p-1 rounded-2xl" value={user.name} onChange={
                        (e) => {
                            setUser({...user, name: e.target.value})
                        }
                    }/>
                </div>
            </div>
            { filteredRestaurants.length === 0 ? <h1>No Results Found</h1> : 
            <div className="flex flex-wrap justify-center">
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