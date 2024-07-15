// Import React component
import React from "react";

// Import Style
import "../../assets/style/host.scss";

// props type
interface HostProps {
    name:string;
    picture:string;
    className:string;
};

// Component to display the host
const Host:React.FC<HostProps> = ({ name = "", picture = "", className = "" }) => {

    return (
        <div className={`host ${className}`}>
            <span className="host__name">{ name }</span>
            <img className="host__picture" src={ picture } alt={`photo de ${name}`} />
        </div>
    );
}

export default Host;
