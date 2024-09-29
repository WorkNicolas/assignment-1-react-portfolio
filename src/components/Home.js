/**
 * @file Home.js
 * @author Carl Nicolas Mendoza
 * @description Contains the welcome message, mission statement, and site map.
 * 
 * @returns {Header}
 */

import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <h2>Welcome to Chlora!</h2>
            <p>I'm excited to share my journey as a software engineering technology student. Throughout my studies, I've honed my skills in database management, full-stack development, and building web applications.</p>
            <h2>Mission Statement</h2>
            <p>My mission is to leverage my technical skills and passion for software development to create innovative, user-centered solutions that enhance experiences and drive positive outcomes. Through continuous learning and a commitment to excellence, I strive to make a meaningful impact by delivering high-quality software that meets the evolving needs of users and fosters growth and success.</p>
            <h2>Sitemap</h2>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/aboutme">About Me</Link>
                </li>
                <li>
                    <Link to="/contacts">Contacts</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/services">Services</Link>
                </li>
            </ul>
        </div>
    )
}

export default Home;