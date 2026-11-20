import React from "react";
import Card from "./card";
import {
  GitHubButton,
  TwitterButton,
  LinkedInButton,
  DiscordButton,
} from "./socalButtons";
import data from "../data";

function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <h1 className="section-title">
        <span>My Portfolio</span>
      </h1>
      <div className="portfolio-main">
        {data.map((item, i) => (
          <Card
            key={item.link}
            index={i + 1}
            title={item.title}
            link={item.link}
            content={item.content}
          />
        ))}
      </div>
      <footer className="footer" id="contact">
        <p className="footer-title">Mission Passed</p>
        <p className="footer-sub">Respect + · Let's work together</p>
        <div className="action-button">
          <GitHubButton />
          <TwitterButton />
          <LinkedInButton />
          <DiscordButton />
        </div>
      </footer>
    </section>
  );
}

export default Portfolio;
