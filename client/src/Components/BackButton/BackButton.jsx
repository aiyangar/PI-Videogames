import React from "react";
import { Link } from "react-router-dom";
import "./BackButton.styles.css";

const BackButton = () => {
    return (
        <Link to="/videogames">
                <button className="atras">atrás</button>
        </Link>
    );
};

export default BackButton;