import resume from '../assets/resume.pdf'

export default function Resume() {
    return (
        <section className="columns is-centered">
        <div className="contact column is-half">
            <h1 className="title mt-2 has-text-centered has-text-white">Resume</h1>
            <a href={resume} target="_blank"><button className="button is-fullwidth mb-4">Download here!</button></a>
            <div className="content skills has-text-white">
                <h1 className="title has-text-centered has-text-white mt-2">Proficiencies</h1>
            <div className='columns is-centered'>
            <div className='column has-text-white'>
                <h1 className='has-text-white has-text-centered'>Front-End</h1>
            <ul>
                <li>HTML5</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Bulma</li>
                <li>Materialize</li>
                <li>React</li>  
            </ul>
            </div>
            <div className='column'>
            <h2 className='has-text-white has-text-centered'>Back-End</h2>
            <ul>
            <li>MySQL & NoSQL</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>GraphQL</li>
            <li>Git</li>
            </ul>
            </div>
            </div>
        </div>
        </div>
        </section>
    )
}