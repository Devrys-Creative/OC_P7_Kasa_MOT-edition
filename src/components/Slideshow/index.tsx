// Import React components
import React, { useState } from "react";
import PropTypes from 'prop-types';

// Import Style
import "../../assets/style/slideshow.scss";
import arrowRight from "../../assets/images/slideshow-arrow-right.svg";

// Function used to preload slideshow images (less or no delay when first slide to each one)
function preloadImages(imgList) {
    for(let img of imgList) {
        let preloadedImg = new Image();
        preloadedImg.src = img;
    }
}

// Component to show a slideshow with arrow and image counter
const Slideshow:React.FC<{
    picturesList: string[];
    className:string;
}> = ({ picturesList = [""], className = ""}) => {

    // preload img list
    preloadImages(picturesList);

    // State to store current pictures key
    const picturesKeyMax:number = picturesList.length - 1;
    const [pictureKey, setpictureKey ] = useState<number>(0);
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

export default Slideshow;