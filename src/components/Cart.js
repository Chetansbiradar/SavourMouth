import { useSelector } from 'react-redux';
import FoodItem from "./FoodItem";

const Cart = () =>{
    const cartItems = useSelector(store => store.cart.items);
    return (
        <div>
            <h1>Cart</h1>
           { cartItems.length === 0 &&
            <p>Looks sooooooooooooooo empty here... :(</p>}
            <div className="flex flex-wrap">
            {
                cartItems?.map((item) => {
                    return <FoodItem foodItem={item} key={item.id}/>
                })
            }
            </div>
        </div>
    )
}

export default Cart;