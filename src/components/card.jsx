import React from "react";
import { GitHubButton } from "./socalButtons";

function Card(props) {
  return (
    <div className="card">
      <div className={`thumbnail sky-${props.index % 3}`} aria-hidden="true">
        <span className="mission-no">Mission {String(props.index).padStart(2, "0")}</span>
      </div>
      <div className="card-head">
        <h1>{props.title}</h1>
        <GitHubButton link={props.link} />
      </div>
      <div
        className="card-text"
        dangerouslySetInnerHTML={{ __html: props.content }}
      ></div>
    </div>
  );
}

export default Card;
