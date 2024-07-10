// Import React component
import PropTypes from "prop-types";

// Import Style
import "../../assets/style/host.scss";

// Component to display the host
function Host({ name = "", picture = "", className = "" }) {

    return (
        <div className={`host ${className}`}>
            <span className="host__name">{ name }</span>
            <img className="host__picture" src={ picture } alt={`photo de ${name}`} />
        </div>
    );
}

Host.propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    className: PropTypes.string
}

export default Host;
