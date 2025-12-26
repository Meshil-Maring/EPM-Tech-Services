const Careers = () => {
  return (
    <section className="relative px-6 py-20 bg-black text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 via-purple-500/5 to-transparent blur-3xl" />

      <div className="relative max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Careers at <span className="text-blue-500">EPM Tech Services</span>
          </h1>
          <p className="text-white/70 max-w-3xl mx-auto text-lg">
            Build meaningful products. Learn fast. Grow with a team that values
            quality, ownership, and innovation.
          </p>
        </div>

        {/* Why Join Us */}
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Why Work With Us</h2>
            <p className="text-white/70 leading-relaxed">
              At EPM Tech Services, we’re more than just a tech company. We’re a
              team of problem-solvers who care about building reliable,
              scalable, and impactful digital solutions.
            </p>
            <p className="text-white/70 leading-relaxed">
              Whether you’re a fresher or an experienced professional, we value
              curiosity, responsibility, and a strong desire to learn and
              improve.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 space-y-4">
            <h3 className="text-xl font-semibold">What We Look For</h3>
            <ul className="space-y-2 text-white/70">
              <li>• Passion for technology & problem-solving</li>
              <li>• Strong fundamentals & clean coding habits</li>
              <li>• Willingness to learn and adapt</li>
              <li>• Ownership mindset & accountability</li>
              <li>• Clear and honest communication</li>
            </ul>
          </div>
        </div>

        {/* Open Roles */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-center">Open Positions</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Frontend Developer",
                type: "React / TypeScript",
              },
              {
                title: "Backend Developer",
                type: "Node.js / APIs / Databases",
              },
              {
                title: "Full Stack Developer",
                type: "MERN / Scalable Systems",
              },
              {
                title: "UI/UX Designer",
                type: "Design Systems & Prototypes",
              },
              {
                title: "Intern / Trainee",
                type: "Freshers & Students",
              },
            ].map((role, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
              >
                <h4 className="font-semibold text-lg">{role.title}</h4>
                <p className="text-white/60 text-sm mt-2">{role.type}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Work Culture */}
        <div className="rounded-3xl bg-linear-to-br from-white/10 to-white/5 border border-white/10 p-10 text-center">
          <h2 className="text-2xl font-semibold mb-4">Our Work Culture</h2>
          <p className="text-white/70 max-w-3xl mx-auto leading-relaxed">
            We believe in clean work, realistic deadlines, continuous learning,
            and mutual respect. You’ll get the freedom to experiment, the
            responsibility to deliver, and the support to grow.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-4 gap-6">
          {[
            "Remote-friendly work",
            "Flexible working hours",
            "Learning & skill growth",
            "Supportive team culture",
          ].map((benefit, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white/5 border border-white/10 p-6 text-center"
            >
              <p className="font-medium">{benefit}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-semibold">Join Our Team</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            If you’re passionate about technology and want to work on meaningful
            projects, we’d love to hear from you.
          </p>
          <button className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-500 transition font-medium">
            Apply Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Careers;
