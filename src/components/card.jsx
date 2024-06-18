import React from "react";
import { GitHubButton } from "./socalButtons";

function Card(props) {
  return (
    <div className="card">
      <img
        className="thumbnail"
        src="https://yt-portfolio-website3.vercel.app/assets/1.jpg"
      />
      <div className="card-head">
        <h1>{props.title}</h1>
        <GitHubButton/>
      </div>
      <div className="card-text">
        {props.text}
      </div>
    </div>
  );
}

export default Card;
