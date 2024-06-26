import About from "../components/about/about";
import Experience from "../components/experience/experience";
import Profile from "../components/profile/profile";

export default function Home() {
  return (
    <div>
      <Profile/>
      <About/>
      <Experience/>
    </div>
  );
}