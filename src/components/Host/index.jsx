import "../../assets/style/Host.scss";

function Host({ name, picture }) {

    return (
        <div className="host">
            <span className="host__name">{ name }</span>
            <img className="host__picture" src={ picture } alt={`photo de ${name}`} />
        </div>
    );
}

export default Host;
