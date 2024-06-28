import { Link } from "react-router-dom";
import logo from "/logo-kasa.svg";



function Header() {
    return(
        <header>
            <img src={ logo } alt="logo de Kasa" />
            <h1>Kasa</h1>
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/about">À propos</Link>
            </nav>

        </header>
    );
}

export default Header;