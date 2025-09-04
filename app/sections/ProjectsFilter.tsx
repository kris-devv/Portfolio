"use client";

import { useState } from "react";
import ProjectCard from "../components/ProjectCard";

export default function ProjectsFilter() {
  const [activeTab, setActiveTab] = useState("all");

  const projects = [
    { 
      title: "BlueVest", 
      type: "Application", 
      image: "/projects/bluevest.jpg", 
      url: "https://github.com/kris-devv/BlueVest",
      tags: ["applications"]
    },
    { 
      title: "Order Manager", 
      type: "Application", 
      image: "/projects/mfcomp.jpg", 
      url: "https://github.com/kris-devv/order_manager1",
      tags: ["applications"]
    },
  ];

  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(project => project.tags.includes(activeTab));

  return (
    <div>
      {/* Navbar */}
      <nav className="projects-navbar">
        <button
          className={`px-4 py-2 rounded ${activeTab === "all" ? "text-[#714CDF]" : "text-white/80"}`}
          onClick={() => setActiveTab("all")}
        >
          All
        </button>
        <button
          className={`px-4 py-2 rounded ${activeTab === "applications" ? "text-[#714CDF]" : "text-white/80"}`}
          onClick={() => setActiveTab("applications")}
        >
          Applications
        </button>
        <button
          className={`px-4 py-2 rounded ${activeTab === "automations" ? "text-[#714CDF]" : "text-white/80"}`}
          onClick={() => setActiveTab("automations")}
        >
          Automations
        </button>
        <button
          className={`px-4 py-2 rounded ${activeTab === "models" ? "text-[#714CDF]" : "text-white/80"}`}
          onClick={() => setActiveTab("models")}
        >
          Models
        </button>
      </nav>

      {/* Main content */}
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.type}
            image={project.image}
            url={project.url}
          />
        ))}
      </div>
    </div>
  );
}
