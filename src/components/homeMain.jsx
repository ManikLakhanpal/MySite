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
    <section className="main">
      <div className="main-child">
        <img
          className="profilePicture"
          src="https://media.licdn.com/dms/image/D5603AQEWl0XJIItw8g/profile-displayphoto-shrink_400_400/0/1710506597763?e=1723680000&v=beta&t=SYNtrJfZ4ZChKztxDaM6pckwsgcXQHtmA6MCtbPonPc"
        />
      </div>
      <div className="main-child main-info">
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
