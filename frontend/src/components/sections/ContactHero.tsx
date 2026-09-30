import { Clock, MessageSquare, ShieldCheck } from "lucide-react";
import ContactForm from "../layout/ContactForm";

const benefits = [
  {
    icon: MessageSquare,
    title: "Quick response",
    description: "We usually reply within 24 hours.",
  },
  {
    icon: ShieldCheck,
    title: "No obligation",
    description: "Get advice and a proposal tailored to your needs.",
  },
  {
    icon: Clock,
    title: "Personalized approach",
    description: "We take the time to understand your business.",
  },
];

function ContactHero() {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 sm:py-20 lg:grid-cols-2 lg:py-24">
      <div className="text-center lg:text-left">
        {/* Eyebrow */}
        <p className="text-sm font-semibold tracking-widest text-blue-700 uppercase">
          Contact us
        </p>

        {/* Heading */}
        <h1 className="mt-4 text-4xl leading-tight font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
          Let's talk about <span className="text-blue-700">your project</span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 lg:mx-0">
          Have a question, a project idea, or just want to know more about our
          services? We'd love to hear from you. Tell us what you need and let's
          find the right solution together.
        </p>

        {/* Benefits */}
        <div className="mt-10 flex flex-col gap-6">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="flex items-center gap-4 text-left"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100">
                  <Icon size={22} className="text-blue-700" />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-950">
                    {benefit.title}
                  </h3>

                  <p className="text-sm text-slate-600">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ContactHero;
