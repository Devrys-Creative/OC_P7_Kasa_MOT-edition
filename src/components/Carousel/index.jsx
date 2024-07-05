import { useState } from "react";

import "../../assets/style/Carousel.scss";
import arrowTop from "../../assets/images/arrow-top.svg";

function Carousel({ picturesList }) {

    const picturesKeyMax = picturesList.length - 1;
    const [pictureKey, setpictureKey ] = useState(0);
    function nextPicture() {
        pictureKey + 1 <= picturesKeyMax && pictureKey + 1 >= 0 ? setpictureKey(pictureKey + 1) : setpictureKey(0);
    }
    function previousPicture() {
        pictureKey - 1 >= 0 && pictureKey - 1 <= picturesKeyMax ? setpictureKey(pictureKey - 1) : setpictureKey(picturesKeyMax);
    }

    return (
        <div className="carousel">
            <img className="carousel__photo" src={ picturesList[pictureKey] } alt="une photo de l'habitation" />
            <img className="carousel__arrow carousel__arrow--left" src={ arrowTop } alt="flèche à gauche" onClick={() => previousPicture()} />
            <img className="carousel__arrow carousel__arrow--right" src={ arrowTop } alt="flèche à gauche" onClick={() => nextPicture()} />
            <span className="carousel__photo-number">{`${pictureKey + 1} / ${picturesKeyMax + 1}`}</span>
        </div>
    );
}

export default Carousel;