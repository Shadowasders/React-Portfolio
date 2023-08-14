//add download for resume?
//add sections for skills 
//???
//profit
//get help w/this
// import resume from '../assets/Development/resume.pdf'

export default function Resume() {
    return (
        <section className="columns is-centered">
        <div className="contact column is-half">
            <h1 className="title mt-2 has-text-centered has-text-white">Resume</h1>
            <a href="resume"><button className="button is-fullwidth mb-4">Download here!</button></a>
            <div className="content skills has-text-white">
                <h1 className="title has-text-centered has-text-white mt-2">Proficiencies</h1>
            <ul>
                <li>HTML5</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Bulma</li>
                <li>React</li>
                <li>MySQL & NoSQL</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>GraphQL</li>
                <li>Git</li>
            </ul>
        </div>
        </div>
        </section>
    )
}