import categories from './categorylist.js';

export default function CategoryList() {
    return ( 
        <>
            <div className="category-list">
                <ul>
                    {categories.map((category, index) => (
                        <li key={index} className="category-item">
                            <img src={category.imageSrc} alt={category.title} />
                            <span>{category.title}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}