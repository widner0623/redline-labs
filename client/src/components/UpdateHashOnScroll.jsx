import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const UpdateHashOnScroll = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/") return;

    const sectionIds = ["hero", "services", "about", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);

        if (visibleSection) {
          const id = visibleSection.target.id;
          const newUrl = id === "hero" ? "/" : `/#${id}`;

          window.history.replaceState(null, "", newUrl);
        }
      },
      {
        rootMargin: "-35% 0px -35% 0px",
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  return null;
};

export default UpdateHashOnScroll;