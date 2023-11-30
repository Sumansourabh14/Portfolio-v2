import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Work from "./components/Work";

function App() {
  return (
    <main id="home" className="text-black">
      <Navbar />
      <Hero />
      <Skills />
      <Work />
      <Projects />
      <About />
      <hr className="opacity-30" />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
