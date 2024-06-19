import React from "react";
import { GitHubButton } from "./socalButtons";
import Card from "./card";
import data from "../data";

function Portfolio() {
  return (
    <div className="portfolio">
      <h1>My Portfolio</h1>
      <div className="portfolio-main">
        {
          data.map((item) => {
            return <Card key={item.id} title={item.title} link={item.link} content={item.content}/>
          })
        }
      </div>
    </div>
  );
}

export default Portfolio;
