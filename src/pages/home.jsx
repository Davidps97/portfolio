import About from "../components/about/about";
import Experience from "../components/experience/experience";
import Formation from "../components/formation/formation";
import Profile from "../components/profile/profile";
import Skills from "../components/skills/skills";

export default function Home() {
  return (
    <div>
      <Profile/>
      <About/>
      <Experience/>
      <Formation/>
      <Skills/> 
    </div>
  );
}