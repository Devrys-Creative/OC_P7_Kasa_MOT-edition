import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

// Import style
import logo from "/logo-kasa.svg";
import "../../assets/style/Header.scss";

const HiddenTitle = styled.h1`
    display: none;
`;

function Header() {

    const path = useLocation();
    console.log(path);

    return(

        <header className="header">
            <img className="header__logo" src={ logo } alt="logo de Kasa" />
            <HiddenTitle>Kasa</HiddenTitle>
            <nav className="header__menu">
                <Link className={`header__menu__link${ path.pathname === "/" ? " header__menu__link--selected" : "" }`} to="/">Accueil</Link>
                <Link className={`header__menu__link${ path.pathname === "/about" ? " header__menu__link--selected" : ""}`} to="/about">À propos</Link>
            </nav>

        </header>
    );
}

export default Header;