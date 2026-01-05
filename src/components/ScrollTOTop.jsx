import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"; // install react-icons if not installed
import "./ScrollToTop.css";
export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) setVisible(true);
      else setVisible(false);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    visible && (
      <button className="scrollToTopBtn" onClick={scrollToTop}>
        <FaArrowUp />
      </button>
    )
  );
}
