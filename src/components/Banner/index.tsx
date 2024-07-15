// import React components
import React from "react";
import styled from "styled-components";

// Import style
import "../../assets/style/banner.scss";

// Styled component to use prop for opacity
const StyledTitle = styled.h2<{ $opacity: string}>`
    background-color: rgba(0,0,0,${({$opacity}) => $opacity});
`;

// props types
interface bannerProps {
    title: string[];
    titleOpacity: string;
    img: string;
    alt: string;
}

// Component to display a banner
const Banner: React.FC<bannerProps> = ({ title = [""], titleOpacity = "0.5", img = "", alt = "" }) => {
    return (
        <div className="banner">
            <img className="banner__img" src={ img } alt={ alt } />
            <StyledTitle $opacity={titleOpacity} className="banner__title">
                {title.map((line, index) => <span key={`title-${index}`}>{ line }</span> )}
            </StyledTitle>
        </div>
    );

}

export default Banner;