/**
 * @file Navigation.js
 * @author Carl Nicolas Mendoza
 * @description Contains the links to every page of the webapp.
 * 
 * @returns {Navigation}
 */

import { Link } from 'react-router-dom';
import Header from './Header';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons/faAddressCard';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
import { faDiagramProject } from '@fortawesome/free-solid-svg-icons/faDiagramProject';
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar';

const Navigation = () => {
    return (
        <nav className="navbar">
            <Header />
            <ul className="navbar-nav">
                <li className="navbar-item">
                    <Link className="link-text" to="/">    
                        <FontAwesomeIcon icon={faHome} size="3x" />
                        <span>Home</span>
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link className="link-text" to="/aboutme">
                        <FontAwesomeIcon icon={faAddressCard} size="3x" />
                        <span>About Me</span>
                        </Link>
                </li>
                <li className="navbar-item">
                    <Link className="link-text" to="/contacts">
                        <FontAwesomeIcon icon={faPhone} size="3x" />
                        <span>Contacts</span>
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link className="link-text" to="/projects">
                        <FontAwesomeIcon icon={faDiagramProject} size="3x" />
                        <span>Projects</span>
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link className="link-text" to="/services">
                        <FontAwesomeIcon icon={faStar} size="3x" />
                        <span>Services</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;