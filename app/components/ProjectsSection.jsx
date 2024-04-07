"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Chicacode's NextJS Portfolio Website",
    description: "Chicacode's 2024 Portfolio",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/chicacode/chicacode-portfolio",
    previewUrl: "https://github.com/chicacode",
  },
  {
    id: 2,
    title: "Teddies VS Monster Web App Website",
    description: "E-commerce Application",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/chicacode/teddies-vs-monsters-frontend",
    previewUrl: "https://teddies-vs-monsters-frontend.vercel.app/",
  },
  {
    id: 3,
    title: "Calculate Mortgage Application",
    description: "Project 3 description",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/chicacode/mortgage-calculator",
    previewUrl: "https://mortgage-calculator-bay.vercel.app/",
  },
  {
    id: 4,
    title: "Weather App Application",
    description: "React app developed with Vite and TailwindCss",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/chicacode/chicacode-weather-app",
    previewUrl: "https://unrivaled-entremet-73c270.netlify.app/",
  },
  {
    id: 5,
    title: "Gifme Web App",
    description: "Recreate Giphy with their APIs",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/chicacode/gifme",
    previewUrl: "https://github.com/chicacode/gifme",
  },
  {
    id: 6,
    title: "Chicacode's To Do App",
    description: "Todo App build with Vanilla Javascript, HTML5, CSS3",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/chicacode/todo-app",
    previewUrl: "https://chicacode.github.io/todo-app/",
  },
  {
    id: 7,
    title: "Vivi's Athlete Coaching App",
    description: "Vivi Athlete Managing App build with FlutterFlow, Flutter, Postgresql for IOS",
    image: "/images/projects/7/IMG_1575.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "https://www.viviathletics.com/",
    previewUrl: "https://www.viviathletics.com/",
  },
  {
    id: 8,
    title: "Urbi Resident App",
    description: "Urbi Residency/Properties Managing Mobile App build with FlutterFlow, Flutter, Postgresql for IOS and Android",
    image: "/images/projects/8/IMG_1585.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "https://apps.apple.com/ca/app/urbi-resident/id6477546688",
    previewUrl: "https://apps.apple.com/ca/app/urbi-resident/id6477546688",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;