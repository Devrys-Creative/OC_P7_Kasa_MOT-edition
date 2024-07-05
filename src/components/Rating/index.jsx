import { useEffect, useState } from "react";

import "../../assets/style/Rating.scss";
import redStar from "../../assets/images/star-red.svg";
import greyStar from "../../assets/images/star-grey.svg";

// value : int
function Rating({ value }) {

    const [stars, setStars] = useState([]);
    useEffect(() => {
        let starsList = [];
        for(let i=0;i<5;i++) {
            starsList.push(i <= value ? redStar : greyStar);
        }
        setStars(starsList);
    },[value]);

    return (
        <div className="rating">
            { stars.map((star,index) => (
                <img key={`star-${index}`} className="rating__star" src={ star } alt={ index <= value ? "étoile pleine" : "étoile vide" } />
            ))}
        </div>
    );
}

export default Rating;