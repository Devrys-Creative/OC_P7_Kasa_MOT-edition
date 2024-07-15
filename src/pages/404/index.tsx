// Import React Components
import React from "react";
import { Link } from "react-router-dom";

// Import Style
import "../../assets/style/404.scss";

// Page 404 displayed when a route is not fount
function Error404() {
    return (
        <main className='err404'>
            <h2 className="err404__title">404</h2>
            <h3 className="err404__subtitle">Oups ! La page que vous demandez n&apos;existe pas.</h3>
            <Link className="err404__link" to='/'>Retourner sur la page d&apos;accueil</Link>
        </main>
    );
}

export default Error404;