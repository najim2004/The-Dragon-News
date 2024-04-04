import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('/data/categories.json')
            .then(response => response.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <div className="">
                <h3 className="text-xl font-semibold mb-5">All Categories</h3>
                <ul className="categories text-[#9F9F9F] font-medium">
                    {categories.map(category => (
                        <li key={category.id}>
                            <NavLink className="w-full flex items-center pl-12 py-4" to={`/category/${category.id}`}>{category.name}</NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default LeftSideNav;