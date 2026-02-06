import dynamic from "next/dynamic";
import { Suspense } from "react";
import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";

// Lazy load components that are not in viewport
const About = dynamic(() => import("@/components/about"), { ssr: true });
const Projects = dynamic(() => import("@/components/projects"), { ssr: true });
const Skills = dynamic(() => import("@/components/skills"), { ssr: true });
const Experience = dynamic(() => import("@/components/experience"), { ssr: true });
const Contact = dynamic(() => import("@/components/contact"), { ssr: true });

// Loading skeleton placeholder
const SectionLoadingPlaceholder = () => (
  <div className="mb-28 max-w-[50rem] h-[30rem] bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse" />
);

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <Suspense fallback={<SectionLoadingPlaceholder />}>
        <About />
      </Suspense>
      <Suspense fallback={<SectionLoadingPlaceholder />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<SectionLoadingPlaceholder />}>
        <Skills />
      </Suspense>
      <Suspense fallback={<SectionLoadingPlaceholder />}>
        <Experience />
      </Suspense>
      <Suspense fallback={<SectionLoadingPlaceholder />}>
        <Contact />
      </Suspense>
    </main>
  );
}
