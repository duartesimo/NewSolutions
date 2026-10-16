import ServicesHero from "../components/sections/ServicesHero";
import ServicesList from "../components/sections/ServicesList";
import OurProcess from "../components/sections/OurProcess";
import OurWork from "../components/sections/OurWork";
import Testimonials from "../components/sections/Testimonials"
import FAQ from "../components/sections/FAQ";

function Services() {
	return (
    <>
      <ServicesHero />
      <ServicesList />
      <OurProcess />
      <OurWork />
      <Testimonials />;
      <FAQ />;
    </>
  );
}

export default Services;
