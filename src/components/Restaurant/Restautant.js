import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Meal from "../Meal/Meal";

const Restautant = () => {
    const [searchText, setSearchText] = useState([]);
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        )
            .then((res) => res.json())
            .then((data) => setMeals(data.meals));
    }, [searchText]);

    const handleSearchMeal = (event) => {
        const searchTextValue = event.target.value;
        console.log(searchTextValue);
        setSearchText(searchTextValue);
    };
    return (
        <div className="container">
            <div className="my-4">
                <input
                    className='w-75 p-2'
                    onChange={handleSearchMeal}
                    type="text"
                    placeholder="Search your desire food"
                />
            </div>
            <Row xs={1} md={2} lg={4} className="g-4">
                {
                    meals ? 
                    meals.map((meal) => (
                        <Meal key={meal.idMeal} meal={meal} />
                    ))
                    :
                    <div className='text-center'>
                        <h1>Sorry no item found</h1>
                    </div>
                    
                }
            </Row>
        </div>
    );
};

export default Restautant;
