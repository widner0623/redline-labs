import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const pageSections = {
  "/": ["hero", "services", "about", "contact"],
  "/pricing": ["packages", "audit-form"],
  "/website-audit": ["audit-form"],
  "/templates": ["templates"],
};

const UpdateHashOnScroll = () => {
  const location = useLocation();

  useEffect(() => {
    const sectionIds = pageSections[location.pathname];

    if (!sectionIds || sectionIds.length === 0) {
      return;
    }

    const handleScroll = () => {
      let activeId = null;

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;

        const rect = section.getBoundingClientRect();

        const isInView =
          rect.top <= window.innerHeight * 0.5 &&
          rect.bottom >= window.innerHeight * 0.5;

        if (isInView) {
          activeId = id;
        }
      });

      if (activeId) {
        const newUrl =
          location.pathname === "/" && activeId === "hero"
            ? "/"
            : `${location.pathname}#${activeId}`;

        window.history.replaceState(null, "", newUrl);
      } else {
        window.history.replaceState(null, "", location.pathname);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [location.pathname]);

  return null;
};

export default UpdateHashOnScroll;