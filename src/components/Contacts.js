/**
 * @file Contacts.js
 * @author Carl Nicolas Mendoza
 * @description Contains the contact information of the author.
 * 
 * @returns {Header}
 */
const Contacts = () => {
    return (
        <div>
            <h1>Contacts</h1>
            <h2>Connect with me</h2>
            <a href="https://www.linkedin.com/in/worknicolas/" >
            <img src="https://skillicons.dev/icons?i=linkedin" alt="LinkedIn Profile Link" />
            </a>
            <a href="https://twitter.com/qcnvmendoza/" >
            <img src="https://skillicons.dev/icons?i=twitter" alt="Twitter Profile Link" />
            </a>
            <a href="https://github.com/WorkNicolas" >
            <img src="https://skillicons.dev/icons?i=github" alt="GitHub Profile Link" />
            </a>
            <a href="mailto:carl.nicolas.v.mendoza@gmail.com" >
            <img src="https://skillicons.dev/icons?i=gmail" alt="Mail to my GMail" />
            </a>
            <fieldset>
                <legend>Contact Form</legend>
                <div class="block">
                    <label for="name">Your Name:</label>
                    <input type="text" id="name" name="name" />
                </div>
                <div class="block">
                    <label for="phone">Your Phone Number:</label>
                    <input type="text" id="phone" name="phone" />
                </div>
                <div class="block">
                    <label for="email">Your Email:</label>
                    <input type="text" id="email" name="email" />
                </div>
                <div className="block">
                    <label for="message">Message:</label>
                    <textarea id="message" name="message" placeholder="Type a message to the author."></textarea>
                </div>
        </fieldset>
        <input type="submit" value="Submit" />
        <input type="reset" value="Reset"></input>
        </div>
    );
}

export default Contacts;