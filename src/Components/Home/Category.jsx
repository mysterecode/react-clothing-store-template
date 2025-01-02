import CategoryCard from './CategoryCard';
import '../../assets/css/home-category.css';
import CasualWear from '../Assets/Casual-Wear.jpg'; 
import FormalWear from '../Assets/Formal-Wear.jpg';
import SportWear from '../Assets/Sportswear.jpg';
import Outerwear from '../Assets/Outerwear.jpg';
import Accessories from '../Assets/Accessories.jpg';

function Category() {
    
    const categories = [
    {
        title:'Casual Wear',
        image:CasualWear,
        link:'Casual-Wear'
    }, 
    {
        title:'Formal Wear', 
        image:FormalWear,
        link:'Formal-Wear'
    }, 
    {
        title:'Sportswear',
        image:SportWear,
        link:'Sportswear'
    },
    {
        title:'Outerwear',
        image:Outerwear,
        link:'Outerwear'
    }, 
    {
        title:'Accessories',
        image:Accessories,
        link:'Accessories'
    }]

    return ( 
        <div className="Category">
            <h2>Featured Categories</h2>
            <div className="category-container">
            {categories.map((e, index) => <CategoryCard key={index} title={e.title} image={e.image} link={e.link} />)}
            </div>
        </div>
     );
}

export default Category;