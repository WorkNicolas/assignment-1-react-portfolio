/**
 * @file Projects.js
 * @author Carl Nicolas Mendoza
 * @description Contains three projects of the webapp's author.
 * 
 * @returns {Header}
 */
import hotel from './assets/hotel.png';
import pinoyflix from './assets/pinoyflix.png';
import market from './assets/market-trainer.png';

const Projects = () => {
    return (
        <div>
            <h1>Projects</h1>
            <h2>Hotel Reservation System - <a href="https://github.com/jcmsj/hotel/blob/main/doc/Group4_ProjectProposal.pdf">GitHub Link</a></h2>
            <img src={hotel} alt="Hotel Reservation Ticket" width="50%" />
            <p><span className="bold">Role:</span> Room Creator</p>
            <p><span className="bold">Description:</span> I used Java Swing to create columns of rooms with images and buttons that can be infinitely created. To load images upon visit, threads are used.</p>
            <ul>
                <li>Developed a Java Swing application for managing hotel reservations, including room bookings, customer information, and payment processing</li>
                <li>Used MySQL and Java Database Connectivity, creating tables, unit tests, and sample data</li>
                <li>Addressed the use of SHA-256 encryption for user passphrase</li>
                <li>Programmed the ability to create and display infinite rooms using grid bag constraints which also leverages threads to load the images on startup</li>
            </ul>
            <h2>PinoyFlix - <a href="https://pinoyflix.onrender.com/">Website</a></h2>
            <img src={pinoyflix} alt="PinoyFlix Website" width="50%" />
            <p><span className="bold">Role:</span> Login Web Developer</p>
            <p><span className="bold">Description:</span> I used FontAwesome to create the login page.</p>
            <ul>
                <li>Developed a ReactJS web application that allows the user to store movies/TV shows in a watchlist</li>
                <li>Leveraged IMDB API to get a list of movies/TV shows</li>
            </ul>
            <h2>Market Trainer - <a href="https://www.youtube.com/watch?v=y59C4L3rEg0">YouTube Link</a></h2>
            <iframe width="50%" height="390px" src="https://www.youtube.com/embed/y59C4L3rEg0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <img src={market} alt="Market Trainer" width="50%" />
            <p><span className="bold">Role:</span> Developer</p>
            <p><span className="bold">Description:</span> I created everything except for the video, presentation, and external documentation.</p>
            <ul>
                <li>Developed a Java Swing application for a turn-based transaction system</li>
                <li>Programmed player inventory, bank, retail stores, and prices that fluctuate based on demand per region</li>
            </ul>
        </div>
    );
}

export default Projects;