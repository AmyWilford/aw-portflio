import React, { useState } from "react";
import Header from "./Header";
import Banner from "./Banner";
import About from "./About";
import ProjectList from "./ProjectList";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Container() {
  const [currentPage, setCurrentPage] = useState("Home");

  return (
    <>
      <Header />
      <Banner />
      <About />
      <Portfolio projects={ProjectList}/>
      <Contact />
      <Footer />
    </>
  );
}
