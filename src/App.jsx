import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import PullRequests from "./components/PullRequests";
import Writing from "./components/Writing";
import Exploring from "./components/Exploring";
import Skills from "./components/Skills";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="max-w-[720px] mx-auto px-6">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <PullRequests />
      <Writing />
      <Exploring />
      <Skills />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
