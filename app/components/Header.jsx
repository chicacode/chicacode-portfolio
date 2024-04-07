"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export const Header = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 mt-16 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-stone-50 via-pink-400 to-pink-800">
              Hello, I&apos;m{" "}
            </span>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Geri",
                1000,
                "Web Developer",
                1000,
                "Mobile Developer",
                1000,
                "Content Creator",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7EB] text-base sm:text-lg mb-6 lg:text-xl">
          I’m a Software Developer with a passion for programming and user experience. I am currently living in Vancouver which bring value to my journey as a Software Developer and Content Creator.
          </p>
          <div>
            <button className="px-6 py-3 rounded-full w-full sm:w-fit mr-4 bg-gradient-to-br from-stone-50 via-pink-400 to-pink-800 hover:bg-slate-200 text-white">
              Work With Me
            </button>
            <button className="px-1 py-1 rounded-full w-full sm:w-fit bg-gradient-to-br from-stone-50 via-pink-400 to-pink-800 hover:bg-slate-800 text-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                <a download href="./resume-Geraldine-Hernandez.pdf" target="_blank" alt="cv" >
                Download Resume
                </a>
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/mask-image.png"
              width={300}
              height={300}
              alt="Picture of the author"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
