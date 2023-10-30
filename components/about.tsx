"use client";
import React, { useEffect } from 'react'
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref} 
      className='mb-28 max-w-[45rem] text-center 
      leading-8 sm:mb-40 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className='mb-3'>
        After graduating with a degree in{" "}
        <span className="font-medium">Molecular Biology</span>, I developed a
        passion for programming. Using online resources, I was able to learn the 
        fundamentals of programming and eventually{" "}
        <span className="font-medium">full-stack web development</span> via the 
        <a href="https://www.theodinproject.com/" className="text-decoration-none text-blue/80"> Odin Project</a>.{" "}
        I&apos;m currently enrolled in the <span className='italic'>Software Engineering &amp; Technology</span>{" "}
        program at <span className='font-medium'>Centennial College</span> in Toronto, Ontario.{" "}
        <span className="italic">I enjoy the</span> problem-solving nature of programming and 
        the feeling of finding a solution to a difficult problem. My core stack
        is{" "}
        <span className="font-medium">
          Ruby On Rails and JavaScript
        </span>
        . I am also familiar with React, Node.js, Python, Java & Springboot. 
        I am always looking to learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>
      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy playing
        basketball, playing piano and guitar, and reading. I also enjoy{" "}
        <span className="font-medium">learning about history,</span> am particularly
        interested in the French and Haitian Revolutions. 
      </p>
    </motion.section>
  );
}
