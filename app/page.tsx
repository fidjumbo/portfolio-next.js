import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import ScrollToTop from "./components/ScrollToTop";
import Skills from "./components/Skills";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
      <div className="w-4/5 mx-auto border-t-2 border-blue-500 my-6"></div>
      <ScrollToTop/>
    </>
  );
}
