import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <h2>Welcome to Chlora!</h2>
            <p>I'm excited to share my journey as a software engineering technology student. Throughout my studies, I've honed my skills in database management, full-stack development, and building web applications.</p>
            <h2>Mission Statement</h2>
            <p>To leverage my technical skills and passion for software development to create innovative solutions that enhance user experiences and drive positive outcomes.</p>
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