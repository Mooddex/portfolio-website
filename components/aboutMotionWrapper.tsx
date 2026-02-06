"use client";

import { motion } from "framer-motion";
import { memo } from "react";

const AboutMotionWrapper = memo(function AboutMotionWrapper() {
    return(
        <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Law</span>, I decided to pursue my
        passion for programming. I learned{" "}
        <span className="font-medium">front-end web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Vue, Nuxt.js and TypeScript .
          <span className="underline">My Practices</span> include Responsive Design, REST APIs, Agile (SCRUM), OOP.
        </span>
        . I am also familiar with Node.js, Express.js, MongoDB, PostgreSQL and Postman . I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing Ping pong. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning Swimming.
      </p>
    </motion.div>
    )
});

export default AboutMotionWrapper;