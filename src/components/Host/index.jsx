import "../../assets/style/Host.scss";
import PropTypes from "prop-types";

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
