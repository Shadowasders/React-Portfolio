import React from "react";
//fix spacing issues in cards check bulma card for info? fuck with image porportions, get links to stay at bottom of card, why doesn't it look like bulmna code...
export default function Card(props) {
    return (
    <div className="card">
        <div className="card-image">
            <figure className="image is-2by1">
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
        <div className="card-content">
        <div className="content">{props.desc}
        </div>
        <br />
        </div>
        <footer className="card-footer">
            <a className='subtitle is-link' href={props.gitLink}>Github</a>
            <a className="subtitle is-link"  href={props.webLink}>Livesite</a>
        </footer>
    </div>
    )
}