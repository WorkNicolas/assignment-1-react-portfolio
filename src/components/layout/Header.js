/**
 * @file Header.js
 * @author Carl Nicolas Mendoza
 * @description Contains the logo and company name of the webapp.
 * 
 * @returns {Header}
 */
import logo from '../../logo.png';

const Header = () => {
    return (
        <header>
            <span className="link-text">
                <img src={logo} height="64px" alt="Chlora logo"/>
                <span className="h1">Chlora</span>
            </span>
        </header>
    );
}

export default Header;