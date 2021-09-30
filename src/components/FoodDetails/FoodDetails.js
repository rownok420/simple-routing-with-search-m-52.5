import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FoodDetails = () => {
    const {mealId} = useParams();
    const [details, setDetails] = useState([])

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
            .then(res => res.json())
            .then(data => setDetails(data.meals))
    },[mealId])

    return (
        <div>
            <h1>Details food: {details[0]?.idMeal}</h1>
        </div>
    );
};

export default FoodDetails;