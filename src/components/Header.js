import Logo from '../assets/SavourMouth.png';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';

const Title = () => (
    <Link to="/">
        <img 
        className="
        h-16"
        src={Logo} 
        alt="logo"
         />
    </Link>
)

const Header = () =>{
    const {user} = useContext(UserContext);
    const cartItems = useSelector(store => store.cart.items);
        return (
            <div className="flex justify-between px-10 shadow-md sticky top-0 bg-white">
                <Title />
                <div className="flex">
                    <ul className="flex space-x-5 items-center">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact Us</Link>
                        </li>
                        <li>
                            <Link to="/about">About Us</Link>
                        </li>
                        <li>
                            <p>{user.name}</p>
                        </li>
                        <li>
                            <Link to="/cart">
                            <span className="relative inline-flex">
                                <button type="button" className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md transition ease-in-out duration-150 ring-1">
                                Cart {cartItems.length}
                                </button>
                                <span className="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                                </span>
                            </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
}

export default Header;