import Faq from "./Faq";
import Hero from "./Hero";
import About from "./About";
import KeyFeatures from "./KeyFeatures";
import Services from "./Services";
import TeamMeet from "./TeamMeet";

const HomePage = () => {
  return (
    <>
      {/* Hero  section  */}
      <Hero />
      {/* About  section  */}
      <About />
      {/* Key Features section   */}
      <KeyFeatures />
      {/* Our service section   */}
      <Services />
      {/* Meet the team section    */}
      <TeamMeet />
      {/* faq  */}
      <Faq />
      {/* faq  */}
    </>
  );
};

export default HomePage;
