import { Link } from 'react-router-dom';
import '../../assets/css/home-category-card.css';

function CategoryCard({title, image, link}) {
    return ( 
        <Link to={link} className='category-link'>
        <div className="category-card">
            <img src={image} alt="category" />
            <p>{title}</p>
        </div>
        </Link>
     );
}

export default CategoryCard;