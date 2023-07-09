const FoodItem = (props) => {
    console.log(props.foodItem);
    ({name, price, category, ratings, itemAttribute, isVeg, inStock, imageId} = props.foodItem);
    return props.foodItem.type!=="ITEM" || props.foodItem.imageId===undefined ? null : (
        <>
        <div className="p-2 m-2 w-28">
            {(imageId?<img src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${imageId}`} alt={name} />:null)}
            <div className="foodItemDetails">
                <div className="foodItemName">
                    <h3>{name}</h3>
                    <p>Price: {price/100}</p>
                    <p>{category}</p>
                    <p>{ratings.aggregatedRating.rating} of {ratings.aggregatedRating.ratingCount} people</p>
                    <p>portion Size: {itemAttribute.portionSize}</p>
                    <p>{isVeg ? "Veg" : "Non-Veg"}</p>
                    <p>{inStock ? "In Stock" : "Out of Stock"}</p>
                </div>
            </div>
        </div>
        </>
    );
};

export default FoodItem;