import '../../assets/css/hero.css';

function Hero() {
    return (
        <div className="Hero">
            <div className="Hero-content">
                <h1>Style Redefined</h1>
                <p>Explore our premium collection of men’s clothing. Elevate your wardrobe today.</p>
                <div className="Hero-buttons">
                    <button className="btn btn-primary">Shop Now</button>
                    <button className="btn btn-secondary">Learn More</button>
                </div>
            </div>
        </div>
    );
}

export default Hero;