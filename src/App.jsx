import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Exploring from "./components/Exploring";
import Skills from "./components/Skills";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="max-w-[720px] mx-auto px-6">
      <Navbar />
      <Hero />
      <Projects />
      <Exploring />
      <Skills />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
