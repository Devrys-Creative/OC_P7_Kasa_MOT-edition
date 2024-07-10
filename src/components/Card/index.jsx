// Import React components
import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from 'prop-types';

// Import style
import "../../assets/style/card.scss";

// Styled component  to adapt background image with prop data
const StyledArticle = styled.article`
    background-image: url(${({ $imgPath }) => $imgPath });
    background-size: cover;
`;

// Component to display a card
function Card({ id, title = "", imgPath ="" }) {
    return (
        <Link to={`/location/${ id }`}>
        <StyledArticle className="card" $imgPath={ imgPath }>
            <h3 className="card__title"><span>{ title && title }</span></h3>
        </StyledArticle>
        </Link>
    );
}

Card.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    imgPath: PropTypes.string.isRequired
}

export default Card;