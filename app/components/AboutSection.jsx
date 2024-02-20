"use client";
import React, { useTransition, useState } from 'react';
import Image from "next/image";
import TabButton from './TabButton';


const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="list-disc pl-2">
          <li>Node.js</li>
          <li>Express</li>
          <li>PostgreSQL</li>
          <li>Sequelize</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Angular</li>
          <li>FlutterFlow</li>
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="list-disc pl-2">
          <li>Fullstack Academy of Code</li>
          <li>University Autonoma de Barcelona</li>
          <li>University Arturo Michelena</li>
        </ul>
      ),
    },
    {
      title: "Certifications",
      id: "certifications",
      content: (
        <ul className="list-disc pl-2">
          <li>Ubiqum Code Academy</li>
          <li>IT Academy Barcelona</li>
          <li>Cornerstone International College</li>
        </ul>
      ),
    },
  ];

export const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        })
    }
  return (
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 lg:py-16 xl:gap-16 sm:py-16'>
        <Image
              src="/images/image.png"
              width={500}
              height={500}
              alt="Picture of the author"
            />
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                <p className="text-base lg:text-lg">
                I’m a Software Developer with a passion for programming and user experience. 
                My background is in Psychology which I think brings a valuable perspective to the user experience. More than four years ago I completed a five-month full-time course in JavaScript / React at Ubiqum Code Academy. Since then I have been working at Between Technology honing my JavaScript, CSS and React skills, and then I worked in Babel Sistemas with Angular and TypeScript. Whilst I’ve learnt a lot as a first and second job I’m keen to find a growing company that works in an agile way. I’m excited by the pace of work, dedication to excellence and chance to grow and shine as a Developer. 
                Currently working as Frontend and Mobile Developer with Technologies like Flutter and FlutterFlow in a start-up in Canada
                </p>

                <div className="flex flex-row justify-start mt-8">
                    <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>Skills {" "}</TabButton>
                    <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>Education {" "}</TabButton>
                    <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>Certifications {" "}</TabButton>
                </div>
                <div className="mt-8">
                    {TAB_DATA.find((t) => t.id === tab).content}
                </div>
            </div>
        </div>
    </section>
  )
}
