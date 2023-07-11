import { FOOD_CDN_URL } from "../config";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const FoodItem = (props) => {
    const dispatch = useDispatch();
    const handleAddItem = (item) => {
        dispatch(addItem(item));
    }
    const {name, price, category, ratings, itemAttribute, isVeg, inStock, imageId} = props.foodItem;
    return props.foodItem.type!=="ITEM" || props.foodItem.imageId===undefined ? null : (
        <>
        <div draggable="true" className="w-56 p-2 m-2 bg-white shadow-lg space-y-1.5 hover:rounded-2xl hover:border-[1px] hover:border-dashed hover:border-neutral-700 hover:scale-110 duration-500 delay-700 ease-in-out hover:shadow-2xl">
            <img src={FOOD_CDN_URL + imageId} className="m-auto h-36 rounded-lg hover:rounded-2xl hover:shadow-xl hover:scale-105 duration-500 delay-700 ease-in-out" alt={name} />
                    <h3>{name}</h3>
                    <p>Price: {price/100}</p>
                    <p>{category}</p>
                    <p>{ratings.aggregatedRating.rating} of {ratings.aggregatedRating.ratingCount} people</p>
                    <p>portion Size: {itemAttribute.portionSize}</p>
                    <p>{isVeg ? "Veg" : "Non-Veg"}</p>
                    <p>{inStock ? "In Stock" : <span className='italic from-neutral-600'>Out Of Stock</span>}</p>
                    <button className="p-2 mt-5 bg-green-400 rounded-md " onClick={
                        () => handleAddItem(props.foodItem)
                    }>Add Item</button>
        </div>
        </>
    );
};

export default FoodItem;