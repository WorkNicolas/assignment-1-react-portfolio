/**
 * @file Header.js
 * @author Carl Nicolas Mendoza
 * @id 301386435
 * @date 2024-09-28
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