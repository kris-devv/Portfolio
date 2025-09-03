"use client";

import { useState } from "react";
import ProjectsFilter from "./ProjectsFilter";
import AboutCards from "./AboutCards";
import SkillsSection from "./SkillsSection";

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
            <AboutCards />
            <div className="content-subtitle">Skills</div>
            <SkillsSection />
          </div>
        )}

        {activeTab === "resume" && (
          <div className="resume-content">
            <h1 className="content-title">Resume</h1>
            <div className="big-divider"></div>
            <h2>Education</h2>
            <ol>
              <li className="timeline-item">
                <div className="timeline-item::before"></div>
                <h3>ZST Leżajsk</h3>
                <p>Kierunek Technik Informatyk. Certyfikat INF.02 i INF.03.</p>
                <p>2020 - 2025</p>
                <div className="timeline-item::after"></div>
              </li>
              <li className="timeline-item">
                <h3>Rzeszów University of Technology</h3>
                <p>Inżynieria i Analiza Danych.</p>
                <p>2025 - teraz</p>
                <div className="timeline-item::after"></div>
              </li>
            </ol>

            <h2>Work Experience</h2>
            <ol>
              <li className="timeline-item">
                <h3>MF-Comp</h3>
                <p>Praktyki w serwisie komputerowym</p>
                <p>2024 - teraz</p>
              </li>
              <li className="timeline-item">
                <h3>BorgWarner</h3>
                <p>Praca na produkcji</p>
                <p>2024 - teraz</p>
              </li>
            </ol>
            
            <a href="" className="download-cv">Download CV</a>
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
