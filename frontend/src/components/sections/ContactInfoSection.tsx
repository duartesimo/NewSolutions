import { Clock3, Mail, MapPin, Phone } from "lucide-react";


const contactDetails = [
  {
    icon: Mail,
    title: "Email",
    line1: "hello@newsolutions.com",
    line2: "",
  },
  {
    icon: Phone,
    title: "Phone",
    line1: "+1 (555) 123-4567",
    line2: "",
  },
  {
    icon: MapPin,
    title: "Location",
    line1: "Valencia, Spain",
    line2: "Remote work available",
  },
  {
    icon: Clock3,
    title: "Business hours",
    line1: "Monday - Friday",
    line2: "9:00 - 18:00",
  },
];

function ContactInfoSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 lg:grid-cols-2">
        {/* Left side */}
        <div className="rounded-2xl bg-slate-50 p-6 sm:p-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-950">
            Get in touch
          </h2>

          <p className="mt-3 text-base leading-7 text-slate-600">
            You can also reach us directly through the following channels.
          </p>

          <div className="mt-8 flex flex-col gap-5">
            {contactDetails.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100">
                    <Icon size={22} className="text-blue-700" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-950">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm text-slate-700">{item.line1}</p>

                    {item.line2 && (
                      <p className="text-sm text-slate-500">{item.line2}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right side */}
        <div className="relative overflow-hidden rounded-2xl">
          

          <div className="absolute right-4 bottom-4 rounded-2xl bg-white p-4 shadow-lg sm:right-6 sm:bottom-6">
            <h3 className="font-semibold text-slate-950">Valencia, Spain</h3>
            <p className="mt-1 max-w-xs text-sm leading-6 text-slate-600">
              We work with clients locally and remotely across different
              locations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactInfoSection;
