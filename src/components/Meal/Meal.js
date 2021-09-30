import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Meal = (props) => {
    const {idMeal, strMeal, strMealThumb, strInstructions } = props.meal;
    return (
        <Col>
            <Card style={{ height: "100%", border: 'none', boxShadow: '0px 3px 15px 0px rgba(0, 0, 0, 0.3)' }}>
                <Card.Img variant="top" src={strMealThumb} />
                <Card.Body>
                    <Card.Title>{strMeal}</Card.Title>
                    <Card.Text>{strInstructions.slice(0, 150)}</Card.Text>
                </Card.Body>
                <Card.Footer className='text-center d-flex justify-content-between p-3'>
                    <Link to='/category'>
                        <button className='btn btn-outline-success'>See category</button>
                    </Link>
                    <Link to={`/meal/${idMeal}`}>
                        <button className='btn btn-outline-success'>See details</button>
                    </Link>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Meal;

// flex-column flex-md-row 