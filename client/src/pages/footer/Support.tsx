import { Link } from "react-router-dom";

const Support = () => {
  return (
    <section className="relative px-6 py-20 bg-black text-white">
      {/* Background glow */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 via-blue-500/5 to-transparent blur-3xl" />

      <div className="relative max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Support <span className="text-blue-500">Services</span>
          </h1>
          <p className="text-white/70 max-w-3xl mx-auto text-lg">
            Reliable technical support to keep your systems running smoothly,
            securely, and without interruptions.
          </p>
        </div>

        {/* Intro */}
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">
              We’re Here When You Need Us
            </h2>
            <p className="text-white/70 leading-relaxed">
              Technology issues can slow down your business. Our support
              services ensure your applications, websites, and systems stay
              stable, updated, and protected at all times.
            </p>
            <p className="text-white/70 leading-relaxed">
              Whether it’s a quick fix, ongoing maintenance, or performance
              tuning, our team is ready to help you resolve issues fast and
              efficiently.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 space-y-4">
            <h3 className="text-xl font-semibold">What We Support</h3>
            <ul className="space-y-2 text-white/70">
              <li>• Website & Application Maintenance</li>
              <li>• Bug Fixes & Issue Resolution</li>
              <li>• Performance Monitoring & Optimization</li>
              <li>• Security Updates & Backups</li>
              <li>• Technical Assistance & Guidance</li>
            </ul>
          </div>
        </div>

        {/* Support Benefits */}
        <div className="rounded-3xl bg-linear-to-br from-white/10 to-white/5 border border-white/10 p-10">
          <h2 className="text-2xl font-semibold text-center mb-8">
            Why Our Support Matters
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              {
                title: "Fast Response",
                desc: "Quick action to minimize downtime",
              },
              {
                title: "Stability",
                desc: "Keep systems reliable and secure",
              },
              {
                title: "Performance",
                desc: "Continuous monitoring and improvement",
              },
              {
                title: "Peace of Mind",
                desc: "Focus on your business, we handle tech",
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

        {/* Support Model */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Proactive monitoring & maintenance",
            "Clear communication & updates",
            "Flexible support plans",
            "Cost-effective solutions",
            "Long-term technical partnership",
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
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-semibold">Get Reliable Support Today</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            From ongoing maintenance to urgent technical help, our support
            services ensure your technology always works when you need it.
          </p>
          <Link
            to={"https://wa.me/9863875081"}
            className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-500 transition font-medium"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Support;
