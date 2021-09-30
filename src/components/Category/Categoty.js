import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import SeeCategory from "../SeeCategory/SeeCategory";

const Categoty = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
            .then((res) => res.json())
            .then((data) => setCategories(data.categories));
    }, []);

    return (
        <div className='container my-5'>
            <Row xs={1} md={2} lg={4} className="g-4">
                {categories.map((category) => (
                    <SeeCategory
                        key={category.idCategory}
                        category={category}
                    />
                ))}
            </Row>
        </div>
    );
};

export default Categoty;
