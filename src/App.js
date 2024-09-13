import React from "react";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Main from "./Components/Main";
import OverVeiw from "./Components/OverVeiw";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      {/* Navbar at the top */}
      <div className="relative w-screen">
        <Navbar />
      </div>

      {/* Main and About sections */}
      <div className="relative min-h-screen">
        {/* Main Component */}
        <Main />

        {/* About Component stacked over Main */}
        <div className="absolute top-0 left-0 w-full h-full z-10 flex justify-center items-center">
          <About />
        </div>
      </div>
      <div className="flex flex-col relative bg-orange-100 bg-opacity-80">
        <OverVeiw />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
