import React from "react";

function About() {
  return (
    <section className="about" id="about">
      <h1 className="section-title">
        <span>About me</span>
      </h1>
      <div className="about-main">
        <div className="about-content stat-panel">
          <div className="stat-panel-head">Character Profile</div>
          <p>
            Hey there! 👋 I’m Manik, a Full Stack Developer from India. 🇮🇳 🌟
            Currently, I’m diving into iOS development and enhancing my skills
            in frontend technologies. I’m in my second year of college and
            passionate about programming and exploring new technologies. 💡
            Feel free to contact me if you’d like to collaborate or check out
            my portfolio. Let’s create something amazing together! 🚀
          </p>
          <ul className="stats">
            <li>
              <span>Coding</span>
              <i style={{ "--v": "92%" }} />
            </li>
            <li>
              <span>iOS / SwiftUI</span>
              <i style={{ "--v": "78%" }} />
            </li>
            <li>
              <span>Frontend</span>
              <i style={{ "--v": "85%" }} />
            </li>
            <li>
              <span>Gaming</span>
              <i style={{ "--v": "100%" }} />
            </li>
          </ul>
        </div>
        <div className="about-profile">
          <div className="polaroid">
            <img
              className="aboutPicture"
              src="/images/Profile.jpeg"
              alt="Manik Lakhanpal"
            />
            <span>Manik — Leonida, after dark</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
