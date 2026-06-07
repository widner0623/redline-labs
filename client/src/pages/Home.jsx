import { Helmet } from "react-helmet-async";
import Hero from "../sections/Hero";
import Services from "../sections/Services";
import About from "../sections/About";
import Contact from "../sections/Contact";

const Home = () => {
    return (
        <>
        <Helmet>
            <title>
            Redline Systems Co. | Custom Websites & Technology Solutions
            </title>

            <meta
            name="description"
            content="Redline Systems Co builds high-performance websites, web applications, and technology solutions designed to help businesses grow."
            />
        </Helmet>


            <Hero />
            <Services />
            <About />
            <Contact />
        </>
    );
};

export default Home;