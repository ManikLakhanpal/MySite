import React from "react";
import Typed from "typed.js";
import { GitHubButton, TwitterButton } from "./socalButtons";

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
    <main>
      <div className="main-child">
        <img
          className="profilePicture"
          src="../../../public/images/Profile.jpg"
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
          <GitHubButton text="Github" />
          <TwitterButton text="Twitter" />
        </div>
      </div>
    </main>
  );
}

export default HomeMain;
