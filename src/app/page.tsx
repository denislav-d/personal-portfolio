"use client";
import { useState } from "react";

import Navbar from "@/app/components/NavBar";
import Hero from "@/app/components/Hero";
import ProjectList from "@/app/components/ProjectList";

export default function LandingPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <main className="bg-dark min-h-[45rem]">
      <div
        className={`${
          isDrawerOpen ? "backdrop-blur-sm opacity-50 pointer-events-none" : ""
        }`}
      >
        <Navbar />
        <Hero />
      </div>
      <ProjectList
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
      />
    </main>
  );
}
