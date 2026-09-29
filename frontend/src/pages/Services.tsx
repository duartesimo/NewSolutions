import ServicesHero from "../components/sections/ServicesHero";
import ServicesList from "../components/sections/ServicesList";
import OurProcess from "../components/sections/OurProcess";
import Testimonials from "../components/sections/Testimonials"
import FAQ from "../components/sections/FAQ";

function Services() {
	return (
    <>
      <ServicesHero />
      <ServicesList />
      <OurProcess />
      <Testimonials />;
      <FAQ />;
    </>
  );
}

export default Services;
