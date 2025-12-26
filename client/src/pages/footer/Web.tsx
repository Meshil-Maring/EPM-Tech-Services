const WebServices = () => {
  return (
    <section className="relative px-6 py-20 bg-black text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 via-purple-500/5 to-transparent blur-3xl" />

      <div className="relative max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Web <span className="text-blue-500">Development Services</span>
          </h1>
          <p className="text-white/70 max-w-3xl mx-auto text-lg">
            High-performance, secure, and scalable websites built to grow your
            business and convert visitors into customers.
          </p>
        </div>

        {/* Intro */}
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">What We Build</h2>
            <p className="text-white/70 leading-relaxed">
              At EPM Tech Services, we design and develop modern websites that
              are fast, responsive, and easy to manage.
            </p>
            <p className="text-white/70 leading-relaxed">
              Whether you need a business website, landing page, or a complex
              web platform, we focus on clean code, smooth user experience, and
              long-term scalability.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 space-y-4">
            <h3 className="text-xl font-semibold">Web Solutions We Offer</h3>
            <ul className="space-y-2 text-white/70">
              <li>• Business & Corporate Websites</li>
              <li>• Landing Pages & Marketing Sites</li>
              <li>• Portfolio & Personal Websites</li>
              <li>• Web Dashboards & Admin Panels</li>
              <li>• E-commerce Websites</li>
            </ul>
          </div>
        </div>

        {/* Our Approach */}
        <div className="rounded-3xl bg-linear-to-br from-white/10 to-white/5 border border-white/10 p-10">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Our Web Development Approach
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Planning",
                desc: "We understand your business goals and target users",
              },
              {
                title: "Design",
                desc: "Clean, modern UI with smooth user experience",
              },
              {
                title: "Development",
                desc: "Fast, secure, and scalable code",
              },
              {
                title: "Launch & Support",
                desc: "Testing, deployment, and long-term support",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white/5 border border-white/10 p-6 text-center"
              >
                <h4 className="font-semibold text-lg">{step.title}</h4>
                <p className="text-white/70 text-sm mt-2">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Mobile-first & responsive design",
            "SEO-friendly & fast loading",
            "Secure and clean code",
            "Easy to maintain & scalable",
            "Transparent pricing",
            "Reliable post-launch support",
          ].map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
            >
              <p className="font-medium">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebServices;
