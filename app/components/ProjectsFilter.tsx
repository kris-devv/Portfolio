"use client";

import { useState } from "react";

export default function ProjectsFilter() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-gray-800 text-white p-4 flex gap-4">
        <button
          className={`px-4 py-2 rounded ${activeTab === "all" ? "bg-gray-600" : "bg-gray-700"}`}
          onClick={() => setActiveTab("all")}
        >
          All
        </button>
        <button
          className={`px-4 py-2 rounded ${activeTab === "applications" ? "bg-gray-600" : "bg-gray-700"}`}
          onClick={() => setActiveTab("applications")}
        >
          Applications
        </button>
        <button
          className={`px-4 py-2 rounded ${activeTab === "automations" ? "bg-gray-600" : "bg-gray-700"}`}
          onClick={() => setActiveTab("automations")}
        >
          Automations
        </button>
        <button
          className={`px-4 py-2 rounded ${activeTab === "models" ? "bg-gray-600" : "bg-gray-700"}`}
          onClick={() => setActiveTab("models")}
        >
          Models
        </button>
      </nav>

      {/* Główna zawartość */}
      {activeTab === "all" && (
          <div>
            <p>Tutaj są wszystkie projekty...</p>
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
