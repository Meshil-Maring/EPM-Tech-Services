const PrivacyPolicy = () => {
  return (
    <section className="relative px-6 py-20 bg-black text-white">
      {/* Background glow */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 via-blue-500/5 to-transparent blur-3xl" />

      <div className="relative max-w-5xl mx-auto space-y-14">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Privacy <span className="text-blue-500">Policy</span>
          </h1>
          <p className="text-white/70 max-w-3xl mx-auto text-lg">
            Your privacy matters to us. This policy explains how we collect,
            use, and protect your personal information.
          </p>
        </div>

        {/* Content Card */}
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 sm:p-10 space-y-8">
          {/* Intro */}
          <p className="text-white/70 leading-relaxed">
            This Privacy Policy outlines how{" "}
            <span className="text-white font-medium">EPM Tech Services</span>{" "}
            collects, uses, and safeguards your information when you visit our
            website or use our services. By accessing our services, you agree to
            the practices described in this policy.
          </p>

          {/* Sections */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                1. Information We Collect
              </h3>
              <p className="text-white/70 leading-relaxed">
                We may collect personal information such as your name, email
                address, phone number, and project-related details when you
                contact us or use our services.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                2. How We Use Your Information
              </h3>
              <ul className="list-disc list-inside text-white/70 space-y-2">
                <li>To provide and manage our services</li>
                <li>To communicate project updates and support</li>
                <li>To improve our website and offerings</li>
                <li>To comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                3. Data Protection & Security
              </h3>
              <p className="text-white/70 leading-relaxed">
                We implement appropriate technical and organizational measures
                to protect your personal data against unauthorized access, loss,
                or misuse. However, no system is completely secure.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                4. Sharing of Information
              </h3>
              <p className="text-white/70 leading-relaxed">
                We do not sell or rent your personal information. Data may be
                shared with trusted partners only when necessary to deliver
                services or comply with legal requirements.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                5. Cookies & Tracking Technologies
              </h3>
              <p className="text-white/70 leading-relaxed">
                Our website may use cookies and similar technologies to enhance
                user experience. Please refer to our Cookie Policy for detailed
                information.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">6. Your Rights</h3>
              <p className="text-white/70 leading-relaxed">
                You have the right to access, update, or request deletion of
                your personal data. You may also object to certain data
                processing activities where applicable.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                7. Changes to This Policy
              </h3>
              <p className="text-white/70 leading-relaxed">
                We may update this Privacy Policy periodically. Any changes will
                be posted on this page, and continued use of our services
                indicates acceptance of the updated policy.
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

export default PrivacyPolicy;
