import { useRef } from "react";

import BackgroundDesign from "../components/modules/BackgroundDesign";
import Header from "../components/sections/Header";
import Hero from "../components/sections/Hero";
import OurServices from "../components/sections/OurServices";
import ChooseUs from "../components/sections/ChooseUs";
import ClientSay from "../components/sections/ClientSay";
import Pricing from "../components/sections/Pricing";
import InTouch from "../components/sections/InTouch";
import Footer from "../components/sections/Footer";

const Home = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-black overflow-x-hidden relative">
      <BackgroundDesign />

      <Header
        onHome={() => scrollTo(homeRef)}
        onServices={() => scrollTo(servicesRef)}
        onPricing={() => scrollTo(pricingRef)}
        onContact={() => scrollTo(contactRef)}
      />

      <Hero ref={homeRef} />
      <OurServices ref={servicesRef} />
      <ChooseUs />
      <ClientSay />
      <Pricing ref={pricingRef} />
      <InTouch ref={contactRef} />
      <Footer />
    </div>
  );
};

export default Home;
