import { useState } from "react";

const faqs = [
  {
    question: "What services does EPM Tech Services provide?",
    answer:
      "We provide web development, custom software development, business solutions, maintenance & support, and IT consulting services tailored to your business needs.",
  },
  {
    question: "Do you build custom solutions or use templates?",
    answer:
      "We focus on custom-built solutions. Every project is designed and developed based on your specific requirements, goals, and future scalability.",
  },
  {
    question: "How long does a project usually take?",
    answer:
      "Project timelines depend on the scope and complexity. A simple website may take 1–2 weeks, while larger web or software applications may take several weeks.",
  },
  {
    question: "Do you provide support after project delivery?",
    answer:
      "Yes. We offer ongoing maintenance, updates, bug fixes, and performance optimization after the project is delivered.",
  },
  {
    question: "Is my project secure?",
    answer:
      "Security is a top priority. We follow best practices for secure coding, data protection, and performance optimization.",
  },
  {
    question: "Can you upgrade or fix an existing website or software?",
    answer:
      "Absolutely. We can improve, redesign, optimize, or fix existing websites and applications, even if they were built by another team.",
  },
  {
    question: "How do you charge for your services?",
    answer:
      "Pricing depends on project scope, features, and timeline. We offer transparent pricing with no hidden costs.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply contact us with your idea or requirement. We’ll discuss your goals and suggest the best solution.",
  },
];

const ServiceFAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative px-6 py-20 bg-black text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 via-purple-500/5 to-transparent blur-3xl" />

      <div className="relative max-w-4xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-semibold">
            Service <span className="text-blue-500">FAQs</span>
          </h2>
          <p className="text-white/70">
            Common questions about our services, process, and support.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <span className="font-medium">{faq.question}</span>
                <span className="text-blue-400">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 text-white/70 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        {/* <div className="text-center pt-6 space-y-4">
          <p className="text-white/70">
            Still have questions? We’re happy to help.
          </p>
          <button className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-500 transition font-medium">
            Contact Us
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default ServiceFAQs;
