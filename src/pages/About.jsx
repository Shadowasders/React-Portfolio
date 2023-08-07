import React from "react";
//import profile picture here
import proPic from '../assets/propic.jpg'

export default function About() {
    return( 
        <div>
        <section className="proheader">
            <h1>About</h1>
            <img className="propic" src={proPic} alt="A photo of me!"></img>
        </section>
        <section className="desc">
            <p>
                Hey, I'm Aubrey McKinney, welcome to my little slice of the internet! I'm a fullstack developer located in Philadelphia, PA. I love creating new things and bringing visions to life! Stick around and stay a while!
            </p>
            <p>
                My life has been a journey, I grew up in boarding school on a farm in Lake Placid, NY. Where I fell in love with snowboarding, and being outdoors. Then I got a BA in Musical Theatre from Temple University and performed around the east coast. Following Covid I moved from the arts and fell in love with programming. Being able to design websites and make the user experience seemless is a huge passion point of mine. 
            </p>
            <p>
                Currently I'm enrolled in a Bootcamp at the University of Pennsylvania, working on a certificate in fullstack development. Throughout the many headaches it has brought I really love programming, and I look forward to the chance to turn your dreams, into reality. 
            </p>
        </section>
        </div>
    )
}
