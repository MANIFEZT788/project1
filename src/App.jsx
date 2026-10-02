import './App.css';
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;