"use client"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
      <div className="bg-[#F3DDF5]">
        <Navbar/>
        <Hero/>
        <About/>
        <Projects/>
        <Skills/>
        <Contact/>
        <Footer/>
      </div>
    </>
  ); 
}
