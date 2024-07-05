import PropTypes from 'prop-types';

import "../../assets/style/Tag.scss";


function Tag({ name }) {
    return (<span className="tag">{ name }</span>);
}

Tag.propTypes = {
    name: PropTypes.string.isRequired
};
Tag.defaultProps = {
    name: ""
};

export default Tag;