const UXUIDesign = () => {
  return (
    <section className="relative px-6 py-20 bg-black text-white">
      {/* Background glow */}
      <div className="absolute inset-0 bg-linear-to-br from-pink-500/10 via-purple-500/5 to-transparent blur-3xl" />

      <div className="relative max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            UX-UI <span className="text-blue-500">Design</span>
          </h1>
          <p className="text-white/70 max-w-3xl mx-auto text-lg">
            Designing experiences that feel intuitive, engaging, and visually
            powerful.
          </p>
        </div>

        {/* Intro */}
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Design That Users Love</h2>
            <p className="text-white/70 leading-relaxed">
              Great design is not just about looks — it’s about how users feel
              when they interact with your product.
            </p>
            <p className="text-white/70 leading-relaxed">
              At EPM Tech Services, we craft user-centric UX-UI designs that are
              simple, modern, and focused on usability. Every screen is designed
              with clarity, accessibility, and business goals in mind.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 space-y-4">
            <h3 className="text-xl font-semibold">Our UX-UI Services</h3>
            <ul className="space-y-2 text-white/70">
              <li>• User Research & Wireframing</li>
              <li>• UI Design & Visual Systems</li>
              <li>• Mobile & Web App Design</li>
              <li>• Prototyping & Interaction Design</li>
              <li>• Usability Testing & Improvements</li>
            </ul>
          </div>
        </div>

        {/* Process */}
        <div className="rounded-3xl bg-linear-to-br from-white/10 to-white/5 border border-white/10 p-10">
          <h2 className="text-2xl font-semibold text-center mb-8">
            Our Design Process
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              {
                title: "Understand",
                desc: "We analyze users, goals, and problems",
              },
              {
                title: "Design",
                desc: "Clean wireframes and beautiful interfaces",
              },
              {
                title: "Prototype",
                desc: "Interactive designs for real feedback",
              },
              {
                title: "Refine",
                desc: "Test, improve, and perfect the experience",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white/5 border border-white/10 p-6"
              >
                <h4 className="font-semibold text-lg">{step.title}</h4>
                <p className="text-white/70 text-sm mt-2">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why UX matters */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Better user engagement",
            "Higher conversion rates",
            "Improved usability",
            "Stronger brand identity",
            "Consistent design systems",
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
            Let’s Design Something Exceptional
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Whether it’s a website, mobile app, or full product experience, we
            design interfaces that users enjoy and businesses trust.
          </p>
          <button className="px-8 py-3 rounded-full bg-pink-600 hover:bg-pink-500 transition font-medium">
            Start Your Design
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default UXUIDesign;
