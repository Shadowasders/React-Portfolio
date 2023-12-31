import React from "react"
import Lordpic from '../assets/lordofthepies.png'
import ewtPic from '../assets/ENDWORLDTHIRST.png'
import weaPic from '../assets/WeatherDash.png'
import jatePic from '../assets/JATEphoto.png'
import hivePic from '../assets/hive.png'
import Card from '../components/card'
import { useState } from "react"
const projs = [
    {
        name: "End World Thirst",
        desc: "A simple web application for finding and saving breweries. Technology used: HTML, CSS, JavaScript & API's",
        gitLink: "https://github.com/myrojoylee/end-world-thirst",
        webLink: "https://myrojoylee.github.io/end-world-thirst/",
        screenShot: ewtPic
    },
    {
        name: "Lord of the Pies",
        desc: "A full-stack social blog, where users can post recpies, and other can interact with them. Technology used: HTML, CSS, Handlebars, MySQL, MVC, JavaScript",
        gitLink: "https://github.com/myrojoylee/Lord-of-the-Pies",
        webLink: "https://lord-of-the-pies-f3c957a9b4a8.herokuapp.com/",
        screenShot: Lordpic,
    },
    {
        name: "Hive",
        desc: "A MERN stack videogame review application. Where users can create profiles, search games, save them, and write reviews. Technology used: MERN, GraphQl",
        gitLink:"https://github.com/blickenderfer/hive",
        webLink: "https://hive1-03d1291901c2.herokuapp.com/",
        screenShot: hivePic
    },
    {
        name: "Weather App",
        desc: "A functional weather application, used to see weather in a specified city, as well as a five day future broadcast. Technology used: HTML, CSS, JavaScript, API's",
        gitLink: "https://github.com/Shadowasders/Weather-App",
        webLink: "https://shadowasders.github.io/Weather-App/",
        screenShot: weaPic,
    },
    {
        name: "Jate",
        desc: "An AWE text editor, a downloadable app that allows one to take notes, and save them on loss of focus or refresh. Technology used: AWE, Webpack, Javascript.",
        gitLink: "https://github.com/Shadowasders/Text-editor",
        webLink: "https://floating-refuge-33497-e25e38aa42a3.herokuapp.com/",
        screenShot: jatePic,
    }
]
const count = 3
export default function projectList() {
    const [offset, setOffset] = useState(0);
    const projsToRender = projs.slice(offset, offset + count)

    const handleNextPage = () => {
        setOffset((prev) => (prev + count >= projs.length ? 0 : prev + count));
    };
    const handlePrevPage = () => {
        setOffset((prev) =>
            prev - count < 0
                ? projs.length -
                (projs.length % count === 0 ? count : projs.length % count)
                : prev - count
        );
    };
    return (
        <article>
            <section>
                <h2 className="title has-text-white has-text-centered mt-6">Selected Projects</h2>
                <button onClick={handleNextPage} className="button is-fullwidth abttext mt-3">Forward</button>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr',
                    padding: '8em 2em',
                    gap: '1em',
                }}>
                    {
                        projsToRender.map((project => <Card name={project.name} desc={project.desc} gitLink={project.gitLink} webLink={project.webLink} screenShot={project.screenShot} />))
                    }
                </div>
                <button onClick={handlePrevPage} className="button is-fullwidth abttext mb-3">Back</button>
            </section>
        </article>
    )

}