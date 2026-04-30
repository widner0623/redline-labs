import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import About from "./sections/About";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="bg-black min-h-screen pt-32">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;