import React from "react";
import { Link } from "react-router-dom";
import './Home.css'

const Home = () => {
    return (
        <div className="bg-img">
            <h1 className='heading'>Welcome to Hungry Shark Restaurant</h1>
            <Link to='/restautant'>
                <button className='home-button'>See all foods</button>
            </Link>
        </div>
    );
};

export default Home;
