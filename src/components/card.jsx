import React from "react";
import { GitHubButton } from "./socalButtons";

function Card() {
  return (
    <div className="card">
      <img
        className="thumbnail"
        src="https://yt-portfolio-website3.vercel.app/assets/1.jpg"
      />
      <div className="card-head">
        <h1>Title</h1>
        <GitHubButton />
      </div>
      <div className="card-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo mollitia
        qui modi, doloremque reiciendis, officia labore, nihil consectetur
        repellendus omnis quaerat a! Voluptas quia vel blanditiis, deserunt
        dolor expedita est!
      </div>
    </div>
  );
}

export default Card;
