"use client"
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function LibraryOfComponentsImade() {
    const { ref } = useSectionInView("Library");

  return (
    <motion.section
      id="library"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading> My Components </SectionHeading>

      <div>
        
      </div>



          </motion.section>
      
      )
}