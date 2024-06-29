import "../../assets/style/Banner.scss";
import styled from "styled-components";

const StyledTitle = styled.h2`
    background-color: rgba(0,0,0,${({$opacity}) => $opacity});

`;

function Banner({ title, titleOpacity, img, alt }) {

    return (
        <div className="banner">
            <img className="banner__img" src={ img } alt={ alt } />
            <StyledTitle $opacity={titleOpacity} className="banner__title">{ title }</StyledTitle>
        </div>
    );

}

export default Banner;