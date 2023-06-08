import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LeftBelow from '../LeftBelow/LeftBelow';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);
    const [hoveredCategory, setHoveredCategory] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error));
    }, []);

    const handleMouseEnter = categoryId => {
        setHoveredCategory(categoryId);
    };

    const handleMouseLeave = () => {
        setHoveredCategory(null);
    };

    return (
        <div>
            <h2>All Category</h2>
            <div className='ps-4'>
                {categories.map(category => (
                    <p key={category.id}>
                        <Link
                            to={`/category/${category.id}`}
                            className={`text-decoration-none text-secondary ${hoveredCategory === category.id ? 'bg-light' : ''
                                }`}
                            onMouseEnter={() => handleMouseEnter(category.id)}
                            onMouseLeave={handleMouseLeave}
                        >
                            {category.name}
                        </Link>
                    </p>
                ))}
            </div>
            <LeftBelow />
        </div>
    );
};

export default LeftNav;
