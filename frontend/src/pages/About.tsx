import AboutIntro from "../components/sections/AboutIntro";
import OurValues from "../components/sections/OurValues";
import OurJourney from "../components/sections/OurJourney";
import OurTeam from "../components/sections/OurTeam";
import OurImpact from "../components/sections/OurImpact";
import ContactCTA from "../components/sections/ContactCTA";

function About() {
  return (
    <div>
      <AboutIntro />
      <OurValues />
      <OurJourney />
      <OurTeam />
      <OurImpact />
      <ContactCTA />
    </div>
  );
}

export default About;
