import React from "react";
import proPic from '../assets/propic.png'
//photo spaced correctly, work on correct sizing
export default function AboutPanel() {
return (
    <article>
         <div className="columns">
        <section className="column has-text-centered has-text-white">
        <img className="propic is-rounded mt-4" src={proPic} alt="A photo of me!"></img>
        </section>
        <section className="desc column has-text-white has-text-centered mr-2">
        <h1 className="title has-text-white mt-6">About Me</h1>
            <p className="mb-5 mr-1">
                Hey! I'm Aubrey McKinney, welcome to my little slice of the internet! I'm a fullstack developer located in Philadelphia, PA. I love creating new things and bringing visions to life! Stick around and stay a while!
            </p>
            <p className="mb-5 mr-1">
                My life has been a journey, I grew up in boarding school on a farm in Lake Placid, NY. Where I fell in love with snowboarding, and being outdoors. Then I got a BA in Musical Theatre from Temple University and performed around the east coast. Following Covid I moved from the arts and fell in love with programming. Being able to design websites and make the user experience seemless is a huge passion point of mine. 
            </p>
            <p className="pr-3">
                Currently I'm enrolled in a Bootcamp at the University of Pennsylvania, working on a certificate in fullstack development. Throughout the many headaches it has brought I really love programming, and I look forward to the chance to turn your dreams, into reality. 
            </p>
        </section>
        </div>
    </article>
  );
}





