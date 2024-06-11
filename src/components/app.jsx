import React from "react";
import NavigationBar from "./navigationBar";
import Typed from "typed.js";

function App() {
  const el = React.useRef("#typed");

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Full Stack Developer", "iOS Developer", "React Developer", "Cloud Engineer"],
      typeSpeed: 50,
      backDelay: 1,
      backSpeed: 50,
      loop: true
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <NavigationBar />
      <main>
        <img
          className="profilePicture"
          src="../../../public/images/Profile.jpg"
        />
        <h1>Manik Lakhanpal</h1>
        <h2 ref={el}></h2>
      </main>
    </div>
  );
}

export default App;
