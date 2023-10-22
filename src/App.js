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
    <main id="home" className="text-white bg-gray-800">
      <Navbar />
      <Hero />
      <Work />
      <About />
      <Skills />
      <Projects />
      <hr className="opacity-30" />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
