import React, { useState } from "react";
import Header from "./Header";

export default function Container() {
  const [currentPage, setCurrentPage] = useState("Home");

  return  (
    <Header />
  )
}
