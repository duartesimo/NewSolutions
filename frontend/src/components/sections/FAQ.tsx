import { useState } from "react";
import { Plus } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";

const faqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines depend on the scope and complexity, but most websites can be completed within a few weeks.",
  },
  {
    question: "Do you offer ongoing support?",
    answer:
      "Yes. We provide maintenance, updates and support to keep your digital solutions running smoothly.",
  },
  {
    question: "Can you work with existing systems?",
    answer:
      "Absolutely. We can integrate with your current tools and improve existing workflows.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-2">
        {/* Header */}
        <SectionHeader
          eyebrow="Frequently asked questions"
          title="Got questions?"
          description="Here are some of the most common questions we get. If you need more
            information, feel free to get in touch."
        />

        {/* Questions */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="rounded-lg border border-slate-200"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between p-5 text-left"
              >
                <span className="font-medium text-slate-900">
                  {faq.question}
                </span>

                <Plus
                  size={20}
                  className={`transition ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <p className="px-5 pb-5 text-sm leading-6 text-slate-600">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
