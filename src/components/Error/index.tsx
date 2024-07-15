// Import React components
import React from "react";

// Import Style
import "../../assets/style/error.scss";

// Component to display error in engine (for example API error)
const Error:React.FC<{
    reason?:string;
}> = ({reason = ""}) => {
    return (
        <div className="error">
            <h2 className="error__title">:(</h2>
            <p className="error__text">Oh non, une erreur est survenue !
                { reason !== "" && ( <br /> ) } {reason}
                <br />Vous pouvez recharger la page...</p>
        </div>
    );
}

export default Error;