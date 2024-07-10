// Import React components
import PropTypes from 'prop-types';

// Import Style
import "../../assets/style/tag.scss";

// Component to show tag
function Tag({ name = "" }) {
    return (<span className="tag">{ name }</span>);
}

Tag.propTypes = {
    name: PropTypes.string.isRequired
};

export default Tag;