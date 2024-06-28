import "../../assets/style/Footer.scss";
import logo from "/logo-kasa-white.svg";

function Footer() {
    return (
        <footer className="footer">
            <img className="footer__logo" src={ logo } alt="Logo de Kasa" />
            <p className="footer__copyright">&copy;2020 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;