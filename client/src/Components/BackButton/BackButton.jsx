import React from "react";
import { Link } from "react-router-dom";
import "./BackButton.styles.css";

const BackButton = () => {
    return (
        <Link to="/videogames">
                <button className="atras">cerrar</button>
        </Link>
    );
};

export default BackButton;