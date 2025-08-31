"use client";

import { useState } from "react";
import ProjectsFilter from "./ProjectsFilter";

export default function Content() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="right-section relative">
      {/* Navbar */}
      <nav className="navbar absolute right-0">
        <button
          className={`${activeTab === "about" ? "text-[#714CDF]" : "text-white"}`}
          onClick={() => setActiveTab("about")}
        >
          About
        </button>
        <button
          className={`${activeTab === "resume" ? "text-[#714CDF]" : "text-white"}`}
          onClick={() => setActiveTab("resume")}
        >
          Resume
        </button>
        <button
          className={`${activeTab === "projects" ? "text-[#714CDF]" : "text-white"}`}
          onClick={() => setActiveTab("projects")}
        >
          Projects
        </button>
        <button
          className={`${activeTab === "contact" ? "text-[#714CDF]" : "text-white"}`}
          onClick={() => setActiveTab("contact")}
        >
          Contact
        </button>
      </nav>

      {/* Główna zawartość */}
      {activeTab === "about" && (
          <div>
            <h1 className="content-title">About Me</h1>
            <div className="big-divider"></div>
            <p className="content-text mb-7">Siema jestem krystian...</p>
            <div className="content-subtitle">What I'm doing</div>
            <div className="content-subtitle">Skills</div>
          </div>
        )}

        {activeTab === "resume" && (
          <div>
            <h1 className="content-title">Resume</h1>
            <div className="big-divider"></div>
            <p className="content-text">To jest moje CV...</p>
          </div>
        )}

        {activeTab === "projects" && (
          <div>
            <h1 className="content-title">Projects</h1>
            <div className="big-divider"></div>
            <ProjectsFilter />
          </div>
        )}

        {activeTab === "contact" && (
          <div>
            <h1 className="content-title">Contact</h1>
            <div className="big-divider"></div>
            <p className="content-text">Tu są moje dane kontaktowe...</p>
          </div>
        )}
    </div>
  );
}
