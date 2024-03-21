"use client";
import { useState } from "react";
import Navbar from "@/app/components/NavBar";
import Hero from "@/app/components/Hero";
import ProjectList from "@/app/components/ProjectList";

export default function LandingPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <main className="min-h-[45rem] bg-dark">
      <div
        className={`${
          isDrawerOpen ? "pointer-events-none opacity-50 backdrop-blur-sm" : ""
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
