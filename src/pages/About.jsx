import React from "react";
import proPic from '../assets/propic.png'
//update body length to 70vh like the rest?
export default function AboutPanel() {
return (
    <article>
         <div className="columns">
        <section className="column has-text-centered has-text-white">
        <img className="propic is-rounded mt-4" src={proPic} alt="A photo of me!"></img>
        </section>
        <section className="desc column has-text-white has-text-centered mr-2">
        <h1 className="title has-text-white mt-6 pb-1 about">About Me</h1>
            <p className="mb-5 mr-1 pr-6 pl-6 abttext">
                Hey! I'm Aubrey McKinney, welcome to my little slice of the internet! I'm a fullstack developer located in Philadelphia, PA. I love creating new things and bringing visions to life! Stick around and stay a while!
            </p>
            <p className="mb-5 mr-1 pr-6 pl-6 abttext">
                My life has been a journey, I grew up in boarding school on a farm in Lake Placid, NY. Where I fell in love with snowboarding and being outdoors. Then I got a BA in Musical Theatre from Temple University and performed around the east coast. Following Covid I moved from the arts and fell in love with Bartending, spending the last three years working in high volume bars and clubs around Philadelphia.
            </p>
            <p className="mb-5 pr-6 pl-6 abttext">
                While working, a coworker inspired me to start programming though his success in a bootcamp. I decided to take the plunge. I enrolled in the EDx bootcamp through the University of Pennsylvania, working on a certificate in fullstack development. Throughout the many headaches it has brought I found that my unique viewpoint in the arts gave me a leg up in designing applications and working in a collaborative enviroment. The process gave me a comprehensive understanding of Agile development, and functional understanding of the MERN stack, MVC, JavaScript, and working with, or creating an API. 
            </p>
            <p className="pr-6 pl-6 abttext">
                With my combined experience I believe I'd be a wonderful fit for any front end development situation! If you have any more questions, feel free to reach out through my contact form, or email me at <a href="mailto:aubreyasdersmckinney@gmail.com">Aubreyasdersmckinney@gmail.com!</a>
            </p>
        </section>
        </div>
    </article>
  );
}





