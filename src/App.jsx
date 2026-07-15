import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Approach from "./components/Approach";
import Admissions from "./components/Admissions";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { IntroProvider } from "./lib/intro";

function App() {
  return (
    <IntroProvider>
      <div className="min-h-screen bg-cream">
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Header />
        <main id="main-content">
          <Hero />
          <About />
          <Approach />
          <Admissions />
          <Gallery />
          <Contact />
        </main>
        <Footer />
      </div>
    </IntroProvider>
  );
}

export default App;
