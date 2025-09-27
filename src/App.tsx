import Navbar from "./components/Nav";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans bg-neutral-3">
      <Navbar/>
      <Hero />
      <Features/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default App;
