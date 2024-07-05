import img from "/favicon.svg";
import "../../assets/style/Loading.scss";

function Loading() {
    return (
        <div className="loading">
            <img className="loading__img" src={img} alt="chargement en cours..." />
            <span className="loading__txt">Chargement...</span>
        </div>
    );
}

export default Loading;