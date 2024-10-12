import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Certifications from "./components/Certifications";
import HowItWorks from "./components/HowItWorks";
import Services from "./components/Services";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
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
        <Contact />
        <Certifications />
      </main>
      <Footer />
    </>
  );
}

export default App;
