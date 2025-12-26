const TermsAndService = () => {
  return (
    <section className="relative px-6 py-20 bg-black text-white">
      {/* Background glow */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 via-blue-500/5 to-transparent blur-3xl" />

      <div className="relative max-w-5xl mx-auto space-y-14">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Terms & <span className="text-blue-500">Service</span>
          </h1>
          <p className="text-white/70 max-w-3xl mx-auto text-lg">
            Please read these terms carefully before using our services.
          </p>
        </div>

        {/* Content Card */}
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 sm:p-10 space-y-8">
          {/* Intro */}
          <p className="text-white/70 leading-relaxed">
            These Terms & Services govern your use of services provided by
            <span className="text-white font-medium"> EPM Tech Services</span>.
            By accessing or using our services, you agree to comply with and be
            bound by these terms.
          </p>

          {/* Sections */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                1. Services Overview
              </h3>
              <p className="text-white/70 leading-relaxed">
                EPM Tech Services provides web development, software solutions,
                UX-UI design, consulting, documentation, and technical support
                services. The scope of work will be defined and agreed upon
                before project initiation.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                2. Client Responsibilities
              </h3>
              <p className="text-white/70 leading-relaxed">
                Clients agree to provide accurate information, required assets,
                and timely feedback to ensure smooth project execution. Delays
                caused by missing inputs may impact delivery timelines.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                3. Payments & Billing
              </h3>
              <p className="text-white/70 leading-relaxed">
                All payments must be made as agreed in the proposal or invoice.
                Late or incomplete payments may result in service suspension
                until dues are cleared.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                4. Intellectual Property
              </h3>
              <p className="text-white/70 leading-relaxed">
                Upon full payment, ownership of the final deliverables will be
                transferred to the client unless otherwise stated. EPM Tech
                Services reserves the right to showcase work for portfolio
                purposes.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                5. Support & Maintenance
              </h3>
              <p className="text-white/70 leading-relaxed">
                Support and maintenance services are provided based on the
                selected plan or agreement. Requests outside the agreed scope
                may incur additional charges.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                6. Limitation of Liability
              </h3>
              <p className="text-white/70 leading-relaxed">
                EPM Tech Services shall not be liable for indirect, incidental,
                or consequential damages arising from the use or inability to
                use our services.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">7. Termination</h3>
              <p className="text-white/70 leading-relaxed">
                Either party may terminate the service with written notice.
                Payments for completed work up to the termination date remain
                non-refundable.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                8. Changes to Terms
              </h3>
              <p className="text-white/70 leading-relaxed">
                We reserve the right to update these terms at any time.
                Continued use of our services implies acceptance of the revised
                terms.
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

export default TermsAndService;
