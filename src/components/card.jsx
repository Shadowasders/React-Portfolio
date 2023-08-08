import React from "react";
export default function Card(props) {
    return (
    <div className="card">
        <div className="card-image">
            <figure className="image is-3by3">
                <img src={props.screenShot} alt=""/>
            </figure>
        </div>
        <div className="card-content">
        <div className="media">
            <div className="media-left">
                <div className="media-content">
                    <p className="title is-4">{props.name}</p>
                </div>
            </div>
        </div>
        </div>
        <div className="content">{props.desc}
        <br />
        <a href={props.gitLink}>github</a><a href={props.webLink}>deployed</a>
        </div>
    </div>
    )
}