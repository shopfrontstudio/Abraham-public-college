import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Approach from "./components/Approach";
import HomeFeeling from "./components/HomeFeeling";
import Admissions from "./components/Admissions";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <div className="bg-grain" aria-hidden="true" />
      <Header />
      <main>
        <Hero />
        <About />
        <Approach />
        <HomeFeeling />
        <Admissions />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
