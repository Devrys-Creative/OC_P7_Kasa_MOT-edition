// Import React components
import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

// Import Style
import logo from "../../assets/images/logo-kasa.svg";
import "../../assets/style/header.scss";

// Styled component to hide H1 (used for SEO)
const HiddenTitle = styled.h1`
    display: none;
`;

// Component to show the app header with menu links
function Header() {

    // get current relative path
    // to change menu link when page is active
    const path = useLocation();

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