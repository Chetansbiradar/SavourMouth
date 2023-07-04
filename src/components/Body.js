import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../config";
import { useState } from "react";

const Body = () => {
    const [searchText, setSearchText] = useState("");
    return(
        <>
            <div className="search-container">
                <input 
                type="text"
                placeholder="Search for restaurants"
                className="search-input"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                />
                <button className="search-btn">Search - {searchText}</button>
            </div>
            <div className="cards">
                {
                    restaurantList.map((restaurant) => {
                            return <RestaurantCard {...restaurant.data}/>
                    })
                }
            </div>
        </>
    )
}

export default Body;