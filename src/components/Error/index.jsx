import PropTypes from "prop-types";

import "../../assets/style/Error.scss";

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