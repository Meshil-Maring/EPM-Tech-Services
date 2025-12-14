import { forwardRef } from "react";
import Cart from "../modules/Cart";

const ChooseUs = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} className="pt-20 px-8">
      <h2 className="text-4xl font-bold text-center">
        Our{" "}
        <span
          style={{
            backgroundImage: "var(--gradient)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Services
        </span>
      </h2>
      <p className="text-center text-white/50">
        We offer comprehensive digital solutions to help your business thrive in
        the modern digital landscape.
      </p>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:gird-cols-4 grid-cols-1 gap-8 ">
        <Cart
          icon="globe"
          title="Web Development"
          description="Custom websites and web applications built with the latest technologies. Responsive, fast, and SEO-optimized."
        />

        <Cart
          icon="palette"
          title="UI/UX Design"
          description="Beautiful, user-centered designs that convert. From wireframes to high-fidelity prototypes and design systems."
        />

        <Cart
          icon="database"
          title="Full-Stack Development"
          description="Beautiful, user-centered designs that convert. From wireframes to high-fidelity prototypes and design systems."
        />

        <Cart
          icon="brain-circuit"
          title="AI assitant"
          description="Intelligent AI assistants that answer questions, automate workflows, and enhance user experience using state-of-the-art machine learning technologies."
        />
      </div>
    </div>
  );
});

export default ChooseUs;
