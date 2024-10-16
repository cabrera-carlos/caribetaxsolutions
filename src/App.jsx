import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Certifications from "./components/Certifications";
import HowItWorks from "./components/HowItWorks";
import Services from "./components/Services";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Reviews from "./components/Reviews";
function App() {
  return (
    <>
      <main>
        <Hero>
          <Navigation />
        </Hero>
        <Services />
        <HowItWorks />
        <Features />
        <Reviews />
        <Contact />
        <Certifications />
      </main>
      <Footer />
    </>
  );
}

export default App;
