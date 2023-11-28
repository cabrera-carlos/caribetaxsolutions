import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <main>
        <Hero>
          <Navigation />
        </Hero>
        <Contact />
      </main>
    </>
  );
}

export default App;
