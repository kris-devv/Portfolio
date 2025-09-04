"use client";

import { useState } from "react";
import ProjectCard from "../components/ProjectCard";

export default function ProjectsFilter() {
  const [activeTab, setActiveTab] = useState("all");

  const projects = [
    ["BlueVest", "Application", "/projects/bluevest.jpg", "https://github.com/kris-devv/BlueVest"],
    ["Order Manager", "Application", "/projects/mfcomp.jpg", "https://github.com/kris-devv/order_manager1"],
  ]

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

      {/* Główna zawartość */}
      {activeTab === "all" && (
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard
                key={project[0]}
                title={project[0]}
                description={project[1]}
                image={project[2]}
                url={project[3]}
              />
            ))}
          </div>
        )}

        {activeTab === "applications" && (
          <div>
            <p>Tutaj są tylko aplikacje...</p>
          </div>
        )}

        {activeTab === "automations" && (
          <div>
            <p>Tutaj są tylko automacje...</p>
          </div>
        )}

        {activeTab === "models" && (
          <div>
            <p>Tutaj są tylko modele...</p>
          </div>
        )}
    </div>
  );
}
