import Logo from '../assets/SavourMouth.png';
import { Link } from 'react-router-dom';

const Title = () => (
    <Link to="/">
        <img 
        className="logo"
        src={Logo} 
        alt="logo"
         />
    </Link>
)

const Header = () =>{
        return (
            <div className="header">
                <Title />
                <div className="nav-items">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact Us</Link>
                        </li>
                        <li>
                            <Link to="/about">About Us</Link>
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