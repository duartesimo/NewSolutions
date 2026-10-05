import aboutHeroImage from "../../assets/about-hero.webp";
import storyImage from "../../assets/story-image.webp";

function AboutIntro() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* About Hero */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text */}
          <div className="text-center lg:text-left">
            <p className="text-sm font-semibold tracking-widest text-blue-700 uppercase">
              About us
            </p>

            <h1 className="mt-4 text-4xl leading-tight font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Building digital solutions for a{" "}
              <span className="text-blue-700">brighter future</span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 lg:mx-0">
              We are a team of passionate professionals helping businesses turn
              ideas into modern, scalable and impactful digital solutions.
            </p>
          </div>

          {/* Image */}
          <div>
            <img
              src={aboutHeroImage}
              alt="Modern workspace with laptop"
              className="block w-full rounded-3xl object-cover"
            />
          </div>
        </div>


      </div>
    </section>
  );
}

export default AboutIntro;
