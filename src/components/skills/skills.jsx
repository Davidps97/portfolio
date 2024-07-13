import Css from "../../assets/css-svg";
import Html from "../../assets/html-svg";
import JavaScript from "../../assets/js-svg";
import Php from "../../assets/php-svg";
import React from "../../assets/react-svg";
import Sql from "../../assets/sql-svg";
import "./skills.css";

export default function Skills() {
  return (
    <div className="skills">
      <h1>Skills</h1>
      <div className="skills-container">
        <div data-text="PHP" className="glass">
          <Php />
        </div>
        <div data-text="React" className="glass">
          <React />
        </div>
        <div data-text="JavaScript" className="glass">
          <JavaScript />
        </div>
        <div data-text="HTML" className="glass">
          <Html />
        </div>
        <div data-text="CSS" className="glass">
          <Css />
        </div>
        <div data-text="SQL" className="glass">
          <Sql />
        </div>
      </div>
    </div>
  );
}
