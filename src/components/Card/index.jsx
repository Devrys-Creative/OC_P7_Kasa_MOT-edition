import { Link } from "react-router-dom";
import "../../assets/style/Card.scss";

import styled from "styled-components";

const StyledArticle = styled.article`
    background-image: url(${({ $imgPath }) => $imgPath });
    background-size: cover;
`;

function Card({ id, title, imgPath }) {
    
    return (
        <Link to={`/location/${ id }`}>
        <StyledArticle className="card" $imgPath={ imgPath }>
            <h3 className="card__title"><span>{ title }</span></h3>
        </StyledArticle>
        </Link>
    );
}

export default Card;