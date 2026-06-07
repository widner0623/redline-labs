import { useEffect, useRef, useState } from "react";

function useScrollAnimation(options = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const checkVisibility = () => {
      const rect = element.getBoundingClientRect();

      if (rect.top < window.innerHeight * 0.85 && rect.bottom > 0) {
        setVisible(true);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.2,
        ...options,
      }
    );

    observer.observe(element);
    checkVisibility();

    window.addEventListener("scroll", checkVisibility);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", checkVisibility);
    };
  }, [options]);

  return { ref, visible };
}

export default useScrollAnimation;