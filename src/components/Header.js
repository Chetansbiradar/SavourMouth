const Title = () => (
        <img 
        className="logo"
        src="https://png.pngtree.com/png-clipart/20230319/original/pngtree-restaurant-logo-design-png-image_8995745.png" 
        alt="logo"
         />
)

const Header = () =>{
        return (
            <div className="header">
                <Title />
                <div className="nav-items">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Cart</li>
                    </ul>
                </div>
            </div>
        )
}

export default Header;