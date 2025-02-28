import { Toaster } from "react-hot-toast";
import Experience from "./components/Experience";
import About from "./sections/About";
import Clients from "./sections/Clients";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects";
import StarsCanvas from "./components/Stars";
import { Analytics } from "@vercel/analytics/react"

const App = () => {
  return (
    <main className="w-full">
      <div className="max-w-7xl mx-auto">
        <Navbar />
        <div className="relative z-0">
          <Hero />
          <StarsCanvas />
        </div>
          <About />
          <Experience />
          <Projects />
          <Clients />
        <div className="relative -z-10">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
      <Footer />
      <Toaster />
      <Analytics />
    </main>
  );
};

export default App;
