import React from "react";
import Typed from "typed.js";
import { GitHubButton, TwitterButton, LinkedInButton, DiscordButton } from "./socalButtons";

function HomeMain() {
  const el = React.useRef();

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Full Stack Developer",
        "iOS Developer",
        "React Developer",
        "Cloud Engineer",
        "Gamer",
      ],
      typeSpeed: 100,
      backDelay: 1800,
      backSpeed: 25,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <section className="main" id="home">
      <div className="main-child">
        <div className="profile-frame">
          <img
            className="profilePicture"
            src="/images/Profile.jpeg"
            alt="Manik Lakhanpal"
          />
        </div>
      </div>
      <div className="main-child main-info">
        <div className="kicker">Now playing</div>
        <h1>Manik Lakhanpal</h1>
        <h2>
          A <span id="typed" ref={el}></span>{" "}
        </h2>
        <p>
          Hello, I'm Manik. I'm currently pursuing a Bachelor of Engineering in
          Computer Science. 🎓💻 Alongside my studies, I'm exploring various
          subjects 🌟, such as iOS development 📱 and the Japanese language 🗾.
          I'm passionate about expanding my knowledge and skills in these areas.
          📚✨
        </p>
        <div className="action-button">
          <GitHubButton  />
          <TwitterButton />
          <LinkedInButton />
          <DiscordButton />
        </div>
      </div>
    </section>
  );
}

export default HomeMain;
