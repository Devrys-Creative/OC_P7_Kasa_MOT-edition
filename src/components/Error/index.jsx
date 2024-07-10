// Import React components
import PropTypes from "prop-types";

// Import Style
import "../../assets/style/error.scss";

// Component to display error in engine (for example API error)
function Error({reason = ""}) {
    return (
        <div className="error">
            <h2 className="error__title">:(</h2>
            <p className="error__text">Oh non, une erreur est survenue !
                { reason !== "" && ( <br /> ) } {reason}
                <br />Vous pouvez recharger la page...</p>
        </div>
    );
}

Error.propTypes = {
    reason: PropTypes.string
}

export default Error;