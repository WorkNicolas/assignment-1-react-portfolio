/**
 * @file AboutMe.js
 * @author Carl Nicolas Mendoza
 * @description Contains information about the author of the webapp.
 * 
 * @returns {AboutMe}
 */
import headshot from './assets/headshot.png'

const AboutMe = () => {
    return (
        <div >
            <h1>About Me</h1>
            <h2>👋 Hi, I’m Carl Nicolas Mendoza</h2>
            <div id="floated">
                <img src={headshot} alt="Headshot of Carl Nicolas Mendoza" width="90%"/>
            </div>
            <p><span className="bold">Birthday:</span> May 28, 2003</p>
            <p>As a Software Engineering Technology Advanced Diploma student, I have honed my skills in database management, full-stack development, and debugging web applications through hands-on projects. Proficient in languages like C#, Java, Python, HTML/CSS, JavaScript, and frameworks like C#, Figma, and ReactJS, I am well-versed in Agile methodologies, user-centered design, and SDLC processes. Committed to security best practices, I have implemented SHA-256 encryption for password protection. Additionally, I am adept at using industry-standard tools such as Git, Visual Studio Code, Visual Studio 2022, IntelliJ, MS Visio, and MS Office.</p>
            <h3>Currently residing in Ontario, Canada</h3>
            <ul>
                <li>👨‍🎓 I'm currently studying Software Engineering.</li>
                <li>👀 I'm looking to collaborate to any projects using the skills that I have.</li>
                <li>📫 GMail: <a href="mailto:carl.nicolas.v.mendoza@gmail.com">Carl.Nicolas.V.Mendoza@gmail.com</a></li>
                <li>📄 Check out my <a href='https://drive.google.com/file/d/1IectKWs-gwPoL3C6GWiRmDY-vjWp45ZZ/view?usp=drive_link'>resume!</a></li>
            </ul>
            <h2>Skills</h2>
            <h3>⌨ Languages</h3>
            <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" >
            <img src="https://skillicons.dev/icons?i=html" alt="Hyper Text Markup Language" />
            </a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" >
            <img src="https://skillicons.dev/icons?i=css" alt="Cascading Style Sheets" />
            </a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" >
            <img src="https://skillicons.dev/icons?i=js" alt="JavaScript" />
            </a>
            <a href="https://en.wikipedia.org/wiki/C++" >
            <img src="https://skillicons.dev/icons?i=cpp" alt="C Plus Plus" />
            </a>
            <a href="https://learn.microsoft.com/en-us/dotnet/csharp/" >
            <img src="https://skillicons.dev/icons?i=cs" alt="C Sharp" />
            </a>
            <a href="https://www.java.com/en/" >
            <img src="https://skillicons.dev/icons?i=java" alt="Java" />
            </a>
            <a href="https://www.python.org/" >
            <img src="https://skillicons.dev/icons?i=py" alt="Python" />
            </a>
            <a href="https://www.markdownguide.org/" >
            <img src="https://skillicons.dev/icons?i=md" alt="Markdown" />
            </a>
            <h3>🛠️ Tools</h3>
            <a href="https://www.gnu.org/software/bash/" >
            <img src="https://skillicons.dev/icons?i=bash" alt="Bourne-Again Shell" />
            </a>
            <a href="https://learn.microsoft.com/en-us/powershell/scripting/overview?view=powershell-7.4" >
            <img src="https://skillicons.dev/icons?i=powershell" alt="Powershell" />
            </a>
            <a href="https://git-scm.com/" >
            <img src="https://skillicons.dev/icons?i=git" alt="Git" />
            </a>
            <a href="https://www.mysql.com/" >
            <img src="https://skillicons.dev/icons?i=mysql" alt="My SQL" />
            </a>
            <a href="https://www.mathworks.com/products/matlab.html" >
            <img src="https://skillicons.dev/icons?i=matlab" alt="MatLab" />
            </a>
            <a href="https://www.figma.com/" >
            <img src="https://skillicons.dev/icons?i=figma" alt="Figma" />
            </a>
            <a href="https://www.latex-project.org/" >
            <img src="https://skillicons.dev/icons?i=latex" alt="LaTex" />
            </a>
            <a href="https://www.notion.so/" >
            <img src="https://skillicons.dev/icons?i=notion" alt="Notion" />
            </a>
            <a href="https://obsidian.md/" >
            <img src="https://skillicons.dev/icons?i=obsidian" alt="Obsidian MD" />
            </a>
            <h3>🌐 Web Development</h3>
            <a href="https://nodejs.org/en" >
            <img src="https://skillicons.dev/icons?i=nodejs" alt="Node JS" />
            </a>
            <a href="https://react.dev/" >
            <img src="https://skillicons.dev/icons?i=react" alt="React JS" />
            </a>
            <h3>📟 IDE</h3>
            <a href="https://visualstudio.microsoft.com/downloads/" >
            <img src="https://skillicons.dev/icons?i=visualstudio" alt="Visual Studio 2022" />
            </a>
            <a href="https://code.visualstudio.com/Download" >
            <img src="https://skillicons.dev/icons?i=vscode" alt="Visual Studio Code" />
            </a>
            <a href="https://www.jetbrains.com/idea/" >
            <img src="https://skillicons.dev/icons?i=idea" alt="IntelliJ Idea" />
            </a>
            <h3>💽 Operating Systems</h3>
            <a href="https://www.microsoft.com/en-ca/software-download/windows11?msockid=3e39615b776d6dc60fed75cc76c76c60" >
            <img src="https://skillicons.dev/icons?i=windows" alt="Windows" />
            </a>
            <a href="https://www.linux.org/pages/download/" >
            <img src="https://skillicons.dev/icons?i=linux" alt="Linux" />
            </a>
        </div>
    )
}

export default AboutMe;