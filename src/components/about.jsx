import React from "react";

function About() {
  return (
    <section className="about">
      <h1>About me</h1>
      <div className="about-main">
        <div className="about-content">
          Hey there! 👋 I’m Manik, a Full Stack Developer from India. 🇮🇳 🌟
          Currently, I’m diving into iOS development and enhancing my skills in
          frontend technologies. I’m in my second year of college and passionate
          about programming and exploring new technologies. 💡 Feel free to
          contact me if you’d like to collaborate or check out my portfolio.
          Let’s create something amazing together! 🚀
        </div>
        <div className="about-profile">
          <img
            className="profilePicture"
            src="https://media.licdn.com/dms/image/D5603AQEWl0XJIItw8g/profile-displayphoto-shrink_400_400/0/1710506597763?e=1723680000&v=beta&t=SYNtrJfZ4ZChKztxDaM6pckwsgcXQHtmA6MCtbPonPc"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
