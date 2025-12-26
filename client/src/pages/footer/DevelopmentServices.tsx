const DevelopmentServices = () => {
  return (
    <section className="relative px-6 py-20 bg-black text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 via-purple-500/5 to-transparent blur-3xl" />

      <div className="relative max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Software <span className="text-blue-500">Development Services</span>
          </h1>
          <p className="text-white/70 max-w-3xl mx-auto text-lg">
            Custom-built software solutions designed to solve real business
            problems and scale as you grow.
          </p>
        </div>

        {/* Intro */}
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">What We Develop</h2>
            <p className="text-white/70 leading-relaxed">
              At EPM Tech Services, we build reliable and secure software
              tailored to your business needs.
            </p>
            <p className="text-white/70 leading-relaxed">
              From internal tools to customer-facing platforms, our focus is on
              performance, scalability, and long-term maintainability.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 space-y-4">
            <h3 className="text-xl font-semibold">
              Development Services We Offer
            </h3>
            <ul className="space-y-2 text-white/70">
              <li>• Custom Software Development</li>
              <li>• Web Applications & Dashboards</li>
              <li>• Backend & API Development</li>
              <li>• SaaS Product Development</li>
              <li>• System Integration & Automation</li>
            </ul>
          </div>
        </div>

        {/* Technologies */}
        <div className="rounded-3xl bg-linear-to-br from-white/10 to-white/5 border border-white/10 p-10">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Technologies We Use
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "React & TypeScript",
              "Node.js & Express",
              "REST & WebSocket APIs",
              "PostgreSQL & MongoDB",
              "Cloud & Deployment Tools",
              "Security Best Practices",
              "Performance Optimization",
              "Scalable Architecture",
            ].map((tech, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white/5 border border-white/10 p-4 text-center"
              >
                <p className="text-sm font-medium">{tech}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Development Process */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-center">
            Our Development Process
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Requirement Analysis",
                desc: "We understand your workflow and business needs",
              },
              {
                title: "Architecture & Planning",
                desc: "Design scalable and secure system structure",
              },
              {
                title: "Development & Testing",
                desc: "Clean code with continuous testing",
              },
              {
                title: "Deployment & Support",
                desc: "Smooth launch and long-term maintenance",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center"
              >
                <h4 className="font-semibold">{step.title}</h4>
                <p className="text-white/70 text-sm mt-2">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Custom-built for your business",
            "Scalable & future-ready solutions",
            "Secure and performance-focused",
            "Clear communication & transparency",
            "On-time delivery",
            "Long-term technical support",
          ].map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
            >
              <p className="font-medium">{item}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        {/* <div className="text-center space-y-6">
          <h2 className="text-3xl font-semibold">
            Let’s Build Your Software Solution
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Have an idea or need a custom system? We’ll help you turn it into a
            powerful and reliable product.
          </p>
          <button className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-500 transition font-medium">
            Talk to Us
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default DevelopmentServices;
