/**
 * @file Services.js
 * @author Carl Nicolas Mendoza
 * @id 301386435
 * @date 2024-09-28
 * @description Contains information about what services I can provide.
 * 
 * @returns {Services}
 */
import programming from './assets/programming.jpg';
import mobile from './assets/mobile-app.webp';
import db from './assets/database.png';
import vm from './assets/virtual-machines.jpg';
import cloud from './assets/cloud.png'
const Services = () => {
    return (
        <div>
            <h1>Services</h1>
            <h2>General Programming</h2>
            <figure>
                <img src={programming} alt="Picture of an IDE on a monitor" width="50%" />
                <figcaption>
                CC0 License. I don't need to give credits to the original author 🗿.
                </figcaption>
            </figure>
            <p>I offer programming solutions in Java, C#, JavaScript, Python, and SQL for various applications from data processing to automation.</p>

            <h2>Web Development</h2>
            <h2>Mobile Apps</h2>
            <figure>
                <img src={mobile} alt="A bunch of smartphones" width="50%" />
                <figcaption>
                Attribution-NonCommercial-NoDerivatives 4.0 International, picture owned by <a href="https://www.trustedreviews.com/best/best-smartphone-3431175">Trusted Reviews</a>.
                </figcaption>
            </figure>
            <p>Development of cross-platform mobile applications using React Native. I focus on delivering user-friendly and responsive apps.</p>
            <h2>Database Management</h2>
            <figure>
                <img src={db} alt="Database ERD" width="50%" />
                <figcaption>
                    CC By 2.0 Attribution 2.0 Generic, picture owned by <a href="https://www.flickr.com/photos/ejk/808461304">Eric</a>
                </figcaption>
            </figure>
            <p>Expertise in database design, SQL query optimization, and management of complex data systems. I can help you organize, manage, and query large data sets efficiently.</p>
            <h2>Linux Server</h2>
            <figure>
                <img src={vm} alt="Virtual Machines" width="50%" />
                <figcaption>
                    CC By 2.0 Attribution 2.0 Generic, picture owned by <a href="https://www.flickr.com/photos/hanulsieger/4529456880">Hanul</a>.
                </figcaption>
            </figure>
            <p>I offer services for setting up and managing Linux servers. I can assist in the creation of FTP server, web server, and other specialized configurations.</p>
            <h2>Cloud Infrastructure Deployment</h2>
            <figure>
                <img src={cloud} alt="How cloud works" width="50%" />
                <figcaption>
                    Attribution-Sharealike 3.0 Unported, picture owned by Sam Johnston, a contributer from Wikimedia Commons.
                </figcaption>
            </figure>
            <p>I can assist with cloud infrastructure deployment using popular cloud platforms such as Amazon Web Services and Google Cloud Platform.</p>
        </div>
    );
}

export default Services;