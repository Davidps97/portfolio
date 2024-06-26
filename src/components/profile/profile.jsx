import Github from "../../assets/github";
import Linkedin from "../../assets/linkedin";
import Location from "../../assets/location";
import "./profile.css";

export default function Profile() {
  return (
    <header>
      <div className="profile-container">
        <div className="profile-name">
          <p>David Pérez Santana</p>
        </div>
        <div className="profile-description">
          <p>
            Full Stack Developer experienced in PHP, JavaScript, React.js and
            Next.js
          </p>
        </div>
        <div className="profile-location">
          <div>
            <Location />
          </div>
          <p>Las Palmas de Gran Canaria, Spain</p>
        </div>
        <div className="profile-social-media">
          <div className="profile-social-media-github">
            <a href="https://github.com/DavidPS97" target="_blank"><Github /></a>
          </div>
          <div>
           <a href="https://www.linkedin.com/in/DavidPS97/" target="_blank"><Linkedin /></a>
          </div>
        </div>
      </div>
    </header>
  );
}
