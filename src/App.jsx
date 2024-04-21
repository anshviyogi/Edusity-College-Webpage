import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Programs/Programs";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Testimonals from "./Components/Testimonals/Testimonals";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title title={"What We Offer"} subTitle={"OUR PROGRAM"}/>
        <Programs />
        <About />

        <Title title={"Campus Photos"} subTitle={"Gallery"}/>
        <Campus />

        <Title title={"What Students Says"} subTitle={"TESTIMONALS"}/>
        <Testimonals />

        <Title title={"Get in Touch"} subTitle={"CONTACT US"}/>
        <Contact />

        <Footer />

      </div>
    </div>
  );
};

export default App;
