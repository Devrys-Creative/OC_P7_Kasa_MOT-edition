// Import React components
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Import style
import "../../assets/style/card.scss";

// Styled component  to adapt background image with prop data
const StyledArticle = styled.article<{$imgPath:string}>`
    background-image: url(${({ $imgPath }) => $imgPath });
    background-size: cover;
`;

// Component to display a card
const Card: React.FC<{
    id: string;
    title: string;
    imgPath: string;
}> = ({ id, title = "", imgPath ="" }) => {
    return (
        <Link to={`/location/${ id }`}>
        <StyledArticle className="card" $imgPath={ imgPath }>
            <h3 className="card__title"><span>{ title && title }</span></h3>
        </StyledArticle>
        </Link>
    );
}

export default Card;