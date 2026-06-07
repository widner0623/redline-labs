import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.replace("#", "");

    setTimeout(() => {
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        // Forces IntersectionObserver to re-check after clicking nav link
        setTimeout(() => {
          window.dispatchEvent(new Event("scroll"));
        }, 300);
      }
    }, 150);
  }, [location]);

  return null;
};

export default ScrollToHash;