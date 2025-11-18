import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Features from "./components/Features";
import Video from "./components/Video";
import Reviews from "./components/Reviews";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />
      <Hero />
      <div id="benefits">
        <Benefits />
      </div>
      <div id="features">
        <Features />
      </div>
      <Video />
      <div id="reviews">
        <Reviews />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
