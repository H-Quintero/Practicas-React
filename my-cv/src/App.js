import { useState } from "react";
import About from "./components/About/About";
import Education from "./components/Educaction/Education";
import Experience from "./components/Experience/Experience";
import Hero from "./components/Hero/Hero";
import More from "./components/More/More";
import { CV } from "./CV/CV";

import "./styles/main.scss";

const { hero, education, experience, languages, habilities, volunteer } = CV;

function App() {
  const [showEducation, setShowEducation] = useState(true);

  return (
    <div>
      <Hero hero={hero} />
      <About hero={hero} />
      <div className="button-container">
        <button onClick={() => setShowEducation(true)}>
          Education
        </button>
        <button onClick={() => setShowEducation(false)}>
          Experience
        </button>
      </div>
      <div className="title">
        {showEducation ? (
          <Education education={education} />
        ) : (
          <Experience experience={experience} />
        )}
      </div>
      <More
        languages={languages}
        habilities={habilities}
        volunteer={volunteer}
      />
    </div>
  );
}

export default App;
