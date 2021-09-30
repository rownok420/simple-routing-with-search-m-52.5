import React from "react";
import { Card, Col } from "react-bootstrap";

const SeeCategory = (props) => {
    const { strCategory, strCategoryThumb } = props.category;
    
    return (
        <div>
            <Col>
                <Card style={{ height: "100%",border: 'none', boxShadow: '0px 3px 15px 0px rgba(0, 0, 0, 0.5)'}}>
                    <Card.Img variant="top" src={strCategoryThumb} />
                    <Card.Body>
                        <Card.Title>{strCategory}</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default SeeCategory;
