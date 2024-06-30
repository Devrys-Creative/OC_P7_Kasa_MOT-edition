import { Link } from "react-router-dom";
import "../../assets/style/404.scss";

function Error404() {
    return (
        <main class='err404'>
            <h2 className="err404__title">404</h2>
            <h3 className="err404__subtitle">Oups ! La page que vous demandez n&apos;existe pas.</h3>
            <Link className="err404__link" to='/'>Retourner sur la page d&apos;accueil</Link>
        </main>
    );
}

export default Error404;