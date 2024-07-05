import React, { useState } from "react";
import PropTypes from 'prop-types';

import "../../assets/style/Carousel.scss";
import arrowRight from "../../assets/images/carousel-arrow-right.svg";

function preloadImages(imgList) {
    for(let img of imgList) {
        let preloadedImg = new Image();
        preloadedImg.src = img;
    }
}

function Carousel({ picturesList, className}) {


    // preload img

    preloadImages(picturesList);

    const picturesKeyMax = picturesList.length - 1;
    const [pictureKey, setpictureKey ] = useState(0);
    function nextPicture() {
        pictureKey + 1 <= picturesKeyMax && pictureKey + 1 >= 0 ? setpictureKey(pictureKey + 1) : setpictureKey(0);
    }
    function previousPicture() {
        pictureKey - 1 >= 0 && pictureKey - 1 <= picturesKeyMax ? setpictureKey(pictureKey - 1) : setpictureKey(picturesKeyMax);
    }

    return (
        <div className={`carousel ${className}`}>
            <img className="carousel__photo" src={ picturesList[pictureKey] } alt="une photo de l'habitation" />
            { picturesList.length > 1 ? (
            <React.Fragment>
                <img className="carousel__arrow carousel__arrow--left" src={ arrowRight } alt="flèche à gauche" onClick={() => previousPicture()} />
                <img className="carousel__arrow carousel__arrow--right" src={ arrowRight } alt="flèche à gauche" onClick={() => nextPicture()} />
                <span className="carousel__photo-number">{`${pictureKey + 1} / ${picturesKeyMax + 1}`}</span>
            </React.Fragment>
            ) : (null) }
        </div>
    );
}


Carousel.propTypes = {
    picturesList: PropTypes.arrayOf(PropTypes.string).isRequired,
    className: PropTypes.string
};

Carousel.defaultProps = {
    picturesList: [''],
    className: ""
};

export default Carousel;