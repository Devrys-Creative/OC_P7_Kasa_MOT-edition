import { Link } from "react-router-dom";
import "../../assets/style/Home.scss";
import homeLandscape from "../../assets/images/home-landscape.jpg";

function Home() {
    return(
        <main className="home">
            <div className="home__title-wrap">
                <img className="home__title-wrap__img" src={ homeLandscape } alt="paysage de falaise de bord de mer" />
                <h2 className="home__title-wrap__title">Chez vous, partout et ailleurs</h2>
            </div>
            <div className="home__location-wrapper">
                <Link to="/location/3">
                <article className="home__location-wrapper__card">
                    <h3 className="home__location-wrapper__card__title"><span>Titre de la location</span></h3>
                </article>
                </Link>
                <Link to="/location/3">
                <article className="home__location-wrapper__card">
                    <h3 className="home__location-wrapper__card__title"><span>Titre de la location</span></h3>
                </article>
                </Link>
                <Link to="/location/3">
                <article className="home__location-wrapper__card">
                    <h3 className="home__location-wrapper__card__title"><span>Titre de la location</span></h3>
                </article>
                </Link>
                <Link to="/location/3">
                <article className="home__location-wrapper__card">
                    <h3 className="home__location-wrapper__card__title"><span>Titre de la location</span></h3>
                </article>
                </Link>
            </div>
        </main>
    );
}

export default Home;