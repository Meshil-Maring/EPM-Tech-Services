import Cart from "../modules/Cart";

const ChooseUs = () => {
  return (
    <div className="mt-40 px-8">
      <h2 className="text-4xl font-bold text-center">
        Why{" "}
        <span
          style={{
            backgroundImage: "var(--gradient)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Choose us
        </span>
      </h2>
      <p className="text-center text-white/50">
        We combine technical expertise with creative thinking to deliver
        exceptional results.
      </p>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:gird-cols-4 grid-cols-1 gap-8 ">
        <Cart
          icon="zap"
          title="Fast"
          description="Lightning-fast load times and optimized performance for the best user experience"
        />

        <Cart
          icon="shield"
          title="Secure"
          description="Enterprise-grade security with best practices and regular security audits."
        />

        <Cart
          icon="monitor"
          title="Responsive"
          description="Perfect display on all devices from mobile phones to large desktop screens"
        />

        <Cart
          icon="trending-up"
          title="Scalable"
          description="Built to grow with your business, handling increased traffic and features."
        />
      </div>
    </div>
  );
};

export default ChooseUs;
