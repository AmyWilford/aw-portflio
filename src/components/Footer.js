import React, { useState, useEffect } from "react";
import "./styles/Footer.css";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const targetElement = document.getElementById("contact");
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const elementTopOffset = targetElement.offsetTop;
      const windowHeight = window.innerHeight;
      const scrollBottom = scrollTop + windowHeight;

      setIsVisible(scrollBottom < elementTopOffset);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`slide-div ${isVisible ? "visible" : "hidden"}`}>
      <div className="footer pe-4 ps-4 fw-bold"><a href="#contact">let's work together</a></div>
    </div>
  );
}
