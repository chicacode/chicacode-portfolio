"use client";
import React, {  useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

import { useTransition } from 'react';
const TAB_DATA = [
  {
    title: "Audience",
    id: "audience",
    content: (
      <ul className="list-disc pl-2">
        <li>Web Development</li>
        <li>Programming</li>
        <li>Frontend Development</li>
        <li>Lifestyle</li>
        <li>Productivity</li>
        <li>Setup</li>
      </ul>
    ),
  },
  {
    title: "Partnerships",
    id: "partnerships",
    content: (
      <ul className="list-disc pl-2">
        <li>2 Reels + 1 Story = 4250 USD$</li>
        <li>1 reel + 2 stories + link bio = 2800 USD$</li>
        <li>1 post + 2 story = 2500 USD$</li>
        <li>1 post + 1 stories = 2150 US</li>
      </ul>
    ),
  },
  {
    title: "Sales",
    id: "sales",
    content: (
      <ul className="list-disc pl-2">
        <li>3 Reels + 1 Story + Link in bio = 3950 USD$ / until June 31</li>
        <li>2 Reels + 1 Story = 2550 USD$ / until June 31</li>
        <li>1 Reels + 1 Story = 1750 USD$ / until June 31</li>
      </ul>
    ),
  },
];

export const ServicesSection = () => {
  const [tab, setTab] = useState("audience");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 lg:py-16 xl:gap-16 sm:py-16">
        <Image
          src="/images/20.png"
          width={500}
          height={500}
          alt="Picture of the author"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-2xl font-extrabolds text-white mb-4">
            CHICACODE&apos;S SERVICES
          </h2>
          <p className="text-base lg:text-lg p-2 text-justify">
            I&apos;m Geraldine, your trusted guide through the dynamic landscape
            of digital influence. 
          </p>
          <p className="p-2 text-justify">As a seasoned Frontend Developer and visionary
            Content Creator, I bring a fusion of technical prowess and creative
            flair to the table. With a solid foundation in programming and
            software development cultivated over 4 years in Vancouver, I&apos;m{" "}
            deeply immersed in the pulse of technological innovation.</p>
          <p className="p-2 text-justify"> Currently,
            I&apos;m igniting transformation within an exceptional
            Canadian-based tech startup, where I thrive on the cutting edge of
            digital evolution. But my journey doesn&apos;t stop there – my
            unique background in Psychology adds a layer of depth, enriching
            every aspect of User Experience. Let&apos;s collaborate to elevate
            your brand, captivate your audience, and leave an indelible mark on
            the digital landscape. Chicacode Media Kit Services: Where
            Innovation Meets Influence.</p>

          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("audience")}
              active={tab === "audience"}
            >
              Audience{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("partnerships")}
              active={tab === "partnerships"}
            >
              Partnerships{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("sales")}
              active={tab === "sales"}
            >
              Sales{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
  };
