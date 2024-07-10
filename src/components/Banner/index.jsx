// import React components
import styled from "styled-components";
import PropTypes from 'prop-types';

// Import style
import "../../assets/style/banner.scss";

// Styled component to use prop for opacity
const StyledTitle = styled.h2`
    background-color: rgba(0,0,0,${({$opacity}) => $opacity});

`;

// Component to display a banner
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