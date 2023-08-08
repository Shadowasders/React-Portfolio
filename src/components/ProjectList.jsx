import React from "react"
import Lordpic from '../assets/lordofthepies.JPG'
import ewtPic from '../assets/ENDWORLDTHIRST.png'
import weaPic from '../assets/WeatherDash.JPG'
import jatePic from '../assets/JATEphoto.JPG'
import Card from './card'
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
            //Heroku down, when it works get the webLink
            webLink: "https://floating-refuge-33497-e25e38aa42a3.herokuapp.com/",
            screenShot: jatePic,
        }
    ]
//figure out how to use map to create projects? Or use a for loop to create cards for each project? 

    return (
        <section>
            <h2>Selected Projects</h2>
            <div>
                {
                    projs.map((project  => <Card name = {project.name} desc = {project.desc} gitLink = {project.gitLink} webLink = {project.webLink} screenShot = {project.screenShot}/> ))
                }
            </div>
        </section>
    )

}