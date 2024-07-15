// Import React component
import React from "react";

// Import Style
import "../../assets/style/footer.scss";
import logo from "../../assets/images/logo-kasa-white.svg";

// Component to display the app footer
function Footer() {
    return (
        <footer className="footer">
            <img className="footer__logo" src={ logo } alt="Logo de Kasa" />
            <p className="footer__copyright">&copy;2020 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;