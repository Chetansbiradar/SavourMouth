import Logo from '../assets/SavourMouth.png';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../utils/UserContext';

const Title = () => (
    <Link to="/">
        <img 
        className="
        h-24 p-2"
        src={Logo} 
        alt="logo"
         />
    </Link>
)

const Header = () =>{
    const {user} = useContext(UserContext);
        return (
            <div className="flex justify-between px-10 shadow-md mb-2">
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
                        {/* <li>
                            <Link to="/restaurant">Restaurants</Link>
                        </li> */}
                    </ul>
                </div>
            </div>
        )
}

export default Header;