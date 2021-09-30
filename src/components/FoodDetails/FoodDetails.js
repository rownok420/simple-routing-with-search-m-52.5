import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const FoodDetails = () => {
    const { mealId } = useParams();
    const [details, setDetails] = useState([]);

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
            .then((res) => res.json())
            .then((data) => setDetails(data.meals));
    }, [mealId]);

    return (
        <div>
            <h1>Details food: {details[0]?.idMeal}</h1>

            <Card style={{ height: "30%", width: "50%", margin:  "auto"}}>
                <Card.Img variant="top" src={details[0]?.strMealThumb} />
                <Card.Body>
                    <Card.Title>{details[0]?.strMeal}</Card.Title>
                    <Card.Text>
                        {details[0]?.strInstructions.slice(0, 200)}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-center d-flex flex-column flex-md-row justify-content-between">
                    <Link to={`/meal/`}>
                        <button className="btn btn-outline-success">
                            Learn more
                        </button>
                    </Link>
                    <Link to={`/meal/`}>
                        <button className="btn btn-outline-success">
                            Add to cart
                        </button>
                    </Link>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default FoodDetails;
