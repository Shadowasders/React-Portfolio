import React from "react"
import Lordpic from '../assets/lordofthepies.png'
import ewtPic from '../assets/ENDWORLDTHIRST.png'
import weaPic from '../assets/WeatherDash.png'
import jatePic from '../assets/JATEphoto.png'
import Card from '../components/card'
export default function projectList(){
    const projs = [
        //use this template for the selected projects. Put them in cards?
        {
            name: "End World Thirst",
            desc: "A simple web application for finding breweries near you!",
            gitLink: "https://github.com/myrojoylee/end-world-thirst",
            webLink: "https://myrojoylee.github.io/end-world-thirst/",
            screenShot: ewtPic
        },
        {
            name: "Lord of the Pies",
            desc: "A full-stack social blog, where users can post recpies, and other can interact with them",
            gitLink: "https://github.com/myrojoylee/Lord-of-the-Pies",
            webLink: "https://lord-of-the-pies-f3c957a9b4a8.herokuapp.com/",
            screenShot: Lordpic,
        },
        {
            name: "Weather App",
            desc: "A functional weather application, used to see weather in a specified city",
            gitLink: "https://github.com/Shadowasders/Weather-App",
            webLink: "https://shadowasders.github.io/Weather-App/",
            screenShot: weaPic,
        },
        {
            name: "Jate",
            desc: "An AWE text editor, a downloadable app that allows one to take notes, and save them on loss of focus or refresh",
            gitLink: "https://github.com/Shadowasders/Text-editor",
            webLink: "https://floating-refuge-33497-e25e38aa42a3.herokuapp.com/",
            screenShot: jatePic,
        }
    ]
    return (
        <article>
        <section>
            <h2 className="title has-text-white has-text-centered">Selected Projects</h2>
            <div>
                {
                    projs.map((project  => <Card name = {project.name} desc = {project.desc} gitLink = {project.gitLink} webLink = {project.webLink} screenShot = {project.screenShot}/> ))
                }
            </div>
        </section>
        </article>
    )

}