const CookiePolicy = () => {
  return (
    <section className="relative px-6 py-20 bg-black text-white">
      {/* Background glow */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 via-blue-500/5 to-transparent blur-3xl" />

      <div className="relative max-w-5xl mx-auto space-y-14">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Cookie <span className="text-blue-500">Policy</span>
          </h1>
          <p className="text-white/70 max-w-3xl mx-auto text-lg">
            This policy explains how we use cookies to improve your experience.
          </p>
        </div>

        {/* Content Card */}
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 sm:p-10 space-y-8">
          {/* Intro */}
          <p className="text-white/70 leading-relaxed">
            This Cookie Policy describes how{" "}
            <span className="text-white font-medium">EPM Tech Services</span>{" "}
            uses cookies and similar technologies when you visit our website. By
            continuing to browse or use our services, you agree to our use of
            cookies as described below.
          </p>

          {/* Sections */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                1. What Are Cookies?
              </h3>
              <p className="text-white/70 leading-relaxed">
                Cookies are small text files stored on your device when you
                visit a website. They help websites remember user preferences,
                improve functionality, and enhance overall user experience.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                2. How We Use Cookies
              </h3>
              <p className="text-white/70 leading-relaxed">
                We use cookies to ensure proper website functionality, analyze
                traffic, improve performance, and understand how users interact
                with our content.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                3. Types of Cookies We Use
              </h3>
              <ul className="list-disc list-inside text-white/70 space-y-2">
                <li>
                  <span className="text-white/80 font-medium">
                    Essential Cookies
                  </span>{" "}
                  – Required for basic website functionality.
                </li>
                <li>
                  <span className="text-white/80 font-medium">
                    Performance Cookies
                  </span>{" "}
                  – Help us understand site usage and improve performance.
                </li>
                <li>
                  <span className="text-white/80 font-medium">
                    Functional Cookies
                  </span>{" "}
                  – Remember user preferences and settings.
                </li>
                <li>
                  <span className="text-white/80 font-medium">
                    Analytics Cookies
                  </span>{" "}
                  – Provide insights into user behavior and traffic patterns.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                4. Managing Cookies
              </h3>
              <p className="text-white/70 leading-relaxed">
                You can control or disable cookies through your browser
                settings. Please note that disabling certain cookies may affect
                website functionality and user experience.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                5. Third-Party Cookies
              </h3>
              <p className="text-white/70 leading-relaxed">
                Some cookies may be placed by third-party services such as
                analytics or embedded content providers. We do not control these
                cookies and recommend reviewing their respective policies.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                6. Changes to This Policy
              </h3>
              <p className="text-white/70 leading-relaxed">
                We may update this Cookie Policy from time to time to reflect
                changes in technology or legal requirements. Continued use of
                our website indicates acceptance of the updated policy.
              </p>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <div className="text-center text-white/60 text-sm">
          Last updated: <span className="text-white/80">December 2025</span>
        </div>
      </div>
    </section>
  );
};

export default CookiePolicy;
