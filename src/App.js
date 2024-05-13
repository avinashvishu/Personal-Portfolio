import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Services from "./components/Services/Services";
import Qualifications from "./components/Qualifications/Qualifications";
import Testimonials from "./components/Testomonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollUp from "./components/ScrollUp/ScrollUp";
import Work from "./components/Work/Work";

function App() {
  return (
    <>
      <Header />
      <main className="main ">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualifications />
        <Work />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
