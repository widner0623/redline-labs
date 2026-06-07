import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import SmallTownBloomsImage from "../assets/smalltownblooms.png";
import ProfessionalServicesImage from "../assets/professionalservices.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const statusStyles = {
  Live: "bg-green-950/90 text-green-300 border-green-400/60 shadow-[0_0_20px_rgba(34,197,94,0.45)]",
  Sample: "bg-blue-950/90 text-blue-300 border-blue-400/60 shadow-[0_0_20px_rgba(59,130,246,0.45)]",
  Maintenance:
    "bg-yellow-950/90 text-yellow-300 border-yellow-400/60 shadow-[0_0_20px_rgba(234,179,8,0.45)]",
  "In Development":
    "bg-purple-950/90 text-purple-300 border-purple-400/60 shadow-[0_0_20px_rgba(168,85,247,0.45)]",
};

const projects = [
  {
    title: "Double A Insurance Agency",
    category: "Insurance Website",
    status: "Live",
    description:
      "A modern insurance agency website designed to build trust, generate leads, and provide a seamless experience across desktop and mobile devices.",
    image: "https://doubleainsuranceagency.com/preview.png",
    liveUrl: "https://doubleainsuranceagency.com",
    codeUrl: "https://github.com/widner0623/double-a-insurance-website",
    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Vercel",
      "Render",
    ],
  },
  {
    title: "Main Street Barbershop",
    category: "Barbershop Website",
    status: "Live",
    description:
      "A modern barbershop website built to showcase services, streamline customer engagement, and provide a professional online presence.",
    image: "https://main-street-barbershop-zeta.vercel.app/preview.png",
    liveUrl: "https://main-street-barbershop-zeta.vercel.app",
    codeUrl: "https://github.com/widner0623/main-street-barbershop",
    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Digital Signage",
      "Responsive Design",
    ],
  },
  {
    title: "Small Town Blooms",
    category: "Flower Shop Website",
    status: "Sample",
    description:
      "A concept website created to demonstrate how a local florist can showcase arrangements, weddings, events, and future online ordering capabilities.",
    image: SmallTownBloomsImage,
    liveUrl: "https://smalltownblooms.vercel.app",
    codeUrl: "https://github.com/widner0623/smalltownblooms",
    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Responsive Design",
      "E-Commerce Ready",
    ],
  },
  {
    title: "Professional Services",
    category: "Moving & Junk Removal Website",
    status: "Sample",
    description:
      "A service-focused website concept built to help moving and junk removal companies generate leads, showcase services, and increase customer conversions.",
    image: ProfessionalServicesImage,
    liveUrl: "https://professional-services-seven.vercel.app/",
    codeUrl: "https://github.com/widner0623/professional-services",
    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Lead Generation",
      "Responsive Design",
    ],
  },
];

const Projects = () => {
  return (
    <>
      <Helmet>
        <title>Projects | Redline Systems Co.</title>
        <meta
          name="description"
          content="Explore websites, applications, and technology projects built by Redline Systems Co."
        />
      </Helmet>

      <main className="min-h-screen bg-black px-6 py-24 text-white">
        <section className="mx-auto max-w-7xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mb-16 text-center"
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-red-500">
              Our Work
            </p>

            <h1 className="text-4xl font-bold md:text-6xl">
              Projects Built to Help Businesses Grow
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
              A look at websites and systems created by Redline Systems Co.,
              designed with performance, clean visuals, and real business use in
              mind.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.10 }}
            className="grid gap-8 md:grid-cols-2"
          >
            {projects.map((project) => (
              <motion.article
                variants={fadeUp}
                whileHover={{ y: -8 }}
                key={project.title}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-[#080808] shadow-[0_0_50px_rgba(220,38,38,0.08)] transition hover:border-red-600/50 hover:shadow-[0_0_70px_rgba(220,38,38,0.18)]"
              >
                <div className="relative h-64 overflow-hidden bg-[#111]">
                  <img
                    src={project.image}
                    alt={project.title}
                    onError={(e) => {
                      e.currentTarget.src = "/project-fallback.png";
                    }}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                  <span
                    className={`absolute right-4 top-4 z-20 rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-widest backdrop-blur-md ${
                      statusStyles[project.status]
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <div className="p-7">
                  <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-red-500">
                    {project.category}
                  </p>

                  <h2 className="text-2xl font-bold">{project.title}</h2>

                  <p className="mt-4 leading-7 text-gray-400">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded bg-red-600 px-5 py-3 font-semibold text-white transition hover:bg-red-700"
                    >
                      View Website <FiExternalLink />
                    </a>

                    {project.codeUrl !== "#" && (
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded border border-white/15 px-5 py-3 font-semibold text-white transition hover:border-red-600 hover:text-red-500"
                      >
                        View Code <FiGithub />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>
      </main>
    </>
  );
};

export default Projects;