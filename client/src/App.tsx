import BackgroundDesign from "./components/modules/BackgroundDesign";
import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import OurServices from "./components/sections/OurServices";
import ChooseUs from "./components/sections/ChooseUs";
import ClientSay from "./components/sections/ClientSay";
import Pricing from "./components/sections/Pricing";
import InTouch from "./components/sections/InTouch";
import Footer from "./components/sections/Footer";

function App() {
  return (
    <div>
      <div className="h-full bg-black overflow-x-hidden relative">
        <BackgroundDesign />
        <Header />
        <Hero />
        <OurServices />
        <ChooseUs />
        <ClientSay />
        <Pricing />
        <InTouch />
        <Footer />
      </div>
    </div>
  );
}

export default App;
