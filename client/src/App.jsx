import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
// Footer Links
  // Resources
import Pricing from "./pages/resources/Pricing";
import FAQ from "./pages/resources/FAQ";
import Blog from "./pages/resources/Blog";
import Support from "./pages/resources/Support";
  // products
import WebsiteAudit from "./pages/products/WebsiteAudit";
import Shop from "./pages/products/Shop";
import Templates from "./pages/products/Templates";
import DisplayOS from "./pages/products/DisplayOS";

import ScrollToTop from "./components/ScrollToTop";
import ScrollToHash from "./components/ScrollToHash";
import UpdateHashOnScroll from "./components/UpdateHashOnScroll";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollToHash />
      <UpdateHashOnScroll />

      <div className="bg-black min-h-screen pt-32">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />

          {/* Footer Links - Resources */}
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/support" element={<Support />} />
          {/* Footer Links - Products */}
          <Route path="/website-audit" element={<WebsiteAudit />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/displayos" element={<DisplayOS />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;