// Import React components
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

// Import Style
import "../../assets/style/rating.scss";
import redStar from "../../assets/images/star-red.svg";
import greyStar from "../../assets/images/star-grey.svg";

// Component to show a rate between 0 and 5, with stars
function Rating({ value = 0, className = "" }) {

    // State store stars list for a defined rate / 5
    // value > 5 => value=5 ; value < 0 => value=0
    const [stars, setStars] = useState<string[]>([]);
    useEffect(() => {
        let starsList:string[] = [];
        for(let i=0;i<5;i++) {
            const newStar:string = i <= value ? redStar : greyStar;
            starsList.push(newStar);
        }
        setStars(starsList);
    },[value]);

    return (
        <div className={`rating ${className}`}>
            { stars.map((star,index) => (
                <img key={`star-${index}`} className="rating__star" src={ star } alt={ index <= value ? "étoile pleine" : "étoile vide" } />
            ))}
        </div>
    );
}

export default Rating;