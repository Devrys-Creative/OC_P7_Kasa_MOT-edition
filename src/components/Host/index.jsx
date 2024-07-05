import "../../assets/style/Host.scss";

function Host({ name, picture, className = "" }) {

    return (
        <div className={`host ${className}`}>
            <span className="host__name">{ name }</span>
            <img className="host__picture" src={ picture } alt={`photo de ${name}`} />
        </div>
    );
}

export default Host;
