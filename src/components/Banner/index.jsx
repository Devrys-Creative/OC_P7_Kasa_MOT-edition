import "../../assets/style/Banner.scss";
import styled from "styled-components";

import PropTypes from 'prop-types';

const StyledTitle = styled.h2`
    background-color: rgba(0,0,0,${({$opacity}) => $opacity});

`;

function Banner({ title = [""], titleOpacity = "0.5", img = "", alt = "" }) {

    return (
        <div className="banner">
            <img className="banner__img" src={ img } alt={ alt } />
            <StyledTitle $opacity={titleOpacity} className="banner__title">
                {title.map((line, index) => <span key={`title-${index}`}>{ line }</span> )}
            </StyledTitle>
        </div>
    );

}


Banner.propTypes = {
    title: PropTypes.arrayOf(PropTypes.string).isRequired,
    titleOpacity: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

export default Banner;