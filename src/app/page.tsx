"use client";

import Navbar from "@/app/components/NavBar";
import Hero from "@/app/components/Hero";
import ProjectList from "@/app/components/ProjectList";

export default function LandingPage() {
  return (
    <main vaul-drawer-wrapper="" className="bg-dark min-h-[55rem]">
      <Navbar />
      <Hero />
      <ProjectList />
    </main>
  );
}
