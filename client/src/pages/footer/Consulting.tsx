const Consulting = () => {
  return (
    <section className="relative px-6 py-20 bg-black text-white">
      {/* Background glow */}
      <div className="absolute inset-0 bg-linear-to-br from-emerald-500/10 via-cyan-500/5 to-transparent blur-3xl" />

      <div className="relative max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Consulting <span className="text-blue-500">Services</span>
          </h1>
          <p className="text-white/70 max-w-3xl mx-auto text-lg">
            Strategic guidance to help you make the right technology decisions
            with confidence.
          </p>
        </div>

        {/* Intro */}
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">
              Expert Advice, Real Results
            </h2>
            <p className="text-white/70 leading-relaxed">
              Technology decisions can shape the future of your business. Our
              consulting services are designed to help you choose the right
              tools, strategies, and solutions—without unnecessary complexity.
            </p>
            <p className="text-white/70 leading-relaxed">
              We work closely with you to understand your goals, challenges, and
              vision, then provide clear and practical guidance that delivers
              long-term value.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 space-y-4">
            <h3 className="text-xl font-semibold">Our Consulting Services</h3>
            <ul className="space-y-2 text-white/70">
              <li>• Technology Strategy & Planning</li>
              <li>• System Architecture & Scalability</li>
              <li>• Product & MVP Consulting</li>
              <li>• Performance & Security Reviews</li>
              <li>• Digital Transformation Guidance</li>
            </ul>
          </div>
        </div>

        {/* How We Help */}
        <div className="rounded-3xl bg-linear-to-br from-white/10 to-white/5 border border-white/10 p-10">
          <h2 className="text-2xl font-semibold text-center mb-8">
            How Our Consulting Helps You
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              {
                title: "Clarity",
                desc: "Clear direction for your technology decisions",
              },
              {
                title: "Efficiency",
                desc: "Avoid costly mistakes and rework",
              },
              {
                title: "Scalability",
                desc: "Build systems that grow with your business",
              },
              {
                title: "Confidence",
                desc: "Make informed decisions backed by expertise",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white/5 border border-white/10 p-6"
              >
                <h4 className="font-semibold text-lg">{item.title}</h4>
                <p className="text-white/70 text-sm mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Our Consulting */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Business-first approach",
            "Actionable and practical advice",
            "Vendor-neutral recommendations",
            "Cost-effective solutions",
            "Ongoing guidance and support",
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
          <h2 className="text-3xl font-semibold">Let’s Plan Your Next Move</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Whether you’re launching a new product, scaling an existing system,
            or planning a digital transformation, our consulting services help
            you move forward with confidence.
          </p>
          <button className="px-8 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 transition font-medium">
            Book a Consultation
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Consulting;
