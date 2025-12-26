const ResourceDocumentation = () => {
  return (
    <section className="relative px-6 py-20 bg-black text-white">
      {/* Background glow */}
      <div className="absolute inset-0 bg-linear-to-br from-indigo-500/10 via-sky-500/5 to-transparent blur-3xl" />

      <div className="relative max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Resource <span className="text-indigo-500">Documentation</span>
          </h1>
          <p className="text-white/70 max-w-3xl mx-auto text-lg">
            Clear, structured, and developer-friendly documentation to help you
            understand, use, and scale your product with confidence.
          </p>
        </div>

        {/* Intro */}
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">
              Documentation That Actually Helps
            </h2>
            <p className="text-white/70 leading-relaxed">
              Good documentation is as important as good code. It saves time,
              reduces confusion, and makes collaboration easier for teams.
            </p>
            <p className="text-white/70 leading-relaxed">
              At EPM Tech Services, we create clean and easy-to-follow
              documentation that helps developers, teams, and clients understand
              systems without guesswork.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 space-y-4">
            <h3 className="text-xl font-semibold">
              What Our Documentation Covers
            </h3>
            <ul className="space-y-2 text-white/70">
              <li>• Project & System Overview</li>
              <li>• API & Integration Guides</li>
              <li>• Setup & Deployment Instructions</li>
              <li>• Code Structure & Architecture</li>
              <li>• Maintenance & Usage Guidelines</li>
            </ul>
          </div>
        </div>

        {/* Benefits */}
        <div className="rounded-3xl bg-linear-to-br from-white/10 to-white/5 border border-white/10 p-10">
          <h2 className="text-2xl font-semibold text-center mb-8">
            Why Documentation Matters
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              {
                title: "Clarity",
                desc: "Understand systems quickly without confusion",
              },
              {
                title: "Consistency",
                desc: "Standardized knowledge across teams",
              },
              {
                title: "Scalability",
                desc: "Easy onboarding for new developers",
              },
              {
                title: "Reliability",
                desc: "Reduced dependency on verbal explanations",
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

        {/* Why Choose Our Docs */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Simple and easy-to-read language",
            "Developer-friendly structure",
            "Up-to-date technical references",
            "Clear examples and explanations",
            "Aligned with real project workflows",
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
            Build Once, Understand Forever
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Whether it’s internal resources, API references, or client handover
            documents, we make sure your documentation is clear, reliable, and
            future-ready.
          </p>
          <button className="px-8 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 transition font-medium">
            View Documentation
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default ResourceDocumentation;
