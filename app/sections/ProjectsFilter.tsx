"use client";

import { useState } from "react";
import ProjectCard from "../components/ProjectCard";

export default function ProjectsFilter() {
  const [activeTab, setActiveTab] = useState("all");

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
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
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
