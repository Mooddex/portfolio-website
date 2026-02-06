
import SectionHeading from "./section-heading";
import AboutMotionWrapper from "./aboutMotionWrapper";

export default function About() {

  return (
   <section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      <AboutMotionWrapper />
    </section>
  );
}
