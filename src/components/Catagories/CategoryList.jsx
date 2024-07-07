import categories from './categorylist.js';
import './Categories.css';
export default function CategoryList() {
    return ( 
        <>
            <ul>
                {categories.map((category, index) => (
                    <li key={index} className="category-item">
                        <img src={category.imageSrc} alt={category.title} />
                        <span>{category.title}</span>
                    </li>
                ))}
            </ul>
        </>
    )
}