import '../../assets/css/Navbar.css';
import logo from '../Assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'; // Import the specific icon
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import { useCart } from "../../Context/CartContext";

function Navbar() {

    const [menu, setMenu] = useState("inactive");
    const location = useLocation();
    const currentLocation = location.pathname;

    const { cartItems } = useCart();

    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    return ( 
        <nav className='Navbar'>
            <Link to="/" className='Nav-link'>
            <div className="logo">
                <img src={logo} className='logo-img' alt="logo" />
                <p>Noir</p>
            </div>
            </Link>
            <ul className={`nav-menu ${menu === "active" ? "active" : ""}`}>
                <li><Link to="Casual-Wear" className='Nav-link'>Casual Wear</Link>{currentLocation == "/Casual-Wear" ? <hr /> : <></>}</li>
                <li><Link to="Formal-Wear" className='Nav-link'>Formal Wear</Link>{currentLocation == "/Formal-Wear" ? <hr /> : <></>}</li>
                <li><Link to="Sportswear" className='Nav-link'>Sportswear</Link>{currentLocation == "/Sportswear" ? <hr /> : <></>}</li>
                <li><Link to="Outerwear" className='Nav-link'>Outerwear</Link>{currentLocation == "/Outerwear" ? <hr /> : <></>}</li>
                <li><Link to="Accessories" className='Nav-link'>Accessories</Link>{currentLocation == "/Accessories" ? <hr /> : <></>}</li>
            </ul>
            <div className="nav-cart">
            <div className="hamburger" onClick={() => setMenu(menu == "inactive" ? "active" : "inactive")}>
                <div></div>
                <div></div>
                <div></div>
            </div>
                <Link to="/Login"><button>Login</button></Link>
                <Link to="/Cart" className='Nav-link'><FontAwesomeIcon icon={faShoppingCart} className='cart-icon' /></Link>
                <div className="nav-cart-count">{cartCount}</div>
            </div>
        </nav>
     );
}

export default Navbar;