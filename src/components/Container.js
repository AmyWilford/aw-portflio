import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Container() {
  const [currentPage, setCurrentPage] = useState("Home");

  return (
    <>
      <Header />
      <Footer />
    </>
  );
}
