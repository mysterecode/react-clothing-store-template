import { Link } from 'react-router-dom';
import '../../assets/css/hero.css';

function Hero() {
    return (
        <div className="Hero">
            <div className="Hero-content">
                <h1>Style Redefined</h1>
                <p>Explore our premium collection of men’s clothing. Elevate your wardrobe today.</p>
                <div className="Hero-buttons">
                    <Link to="/Casual-Wear"><button className="btn btn-primary">Shop Now</button></Link>
                    <Link to="/Casual-wear"><button className="btn btn-secondary">Learn More</button></Link>
                </div>
            </div>
        </div>
    );
}

export default Hero;
