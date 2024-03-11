"use client";
import React from "react";
import dynamic from "next/dynamic";
const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Followers",
    value: "235K",
    postfix: "K",
  },
  {
    metric: "Accounts Reached",
    value: "188",
    postfix: "K",
    
  },
  {
    metric: "Reels Audience",
    value: "133,000",
    postfix: "K",
  },
  {
    metric: "Story Audience",
    value: "2",
    postfix: "K",
  },
  {
    metric: "Years",
    value: "5",
  },
];

export const MediaKitSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
    <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
      {achievementsList.map((achievement, index) => {
        return (
          <div
            key={index}
            className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
          >
            <h2 className="text-white text-4xl font-bold flex flex-row">
              {achievement.prefix}
              <AnimatedNumbers
                includeComma
                animateToNumber={parseInt(achievement.value)}
                locale="en-US"
                className="text-white text-4xl font-bold"
                configs={(_, index) => {
                  return {
                    mass: 1,
                    friction: 100,
                    tensions: 140 * (index + 1),
                  };
                }}
              />
              {achievement.postfix}
            </h2>
            <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
          </div>
        );
      })}
    </div>
  </div>
    // <section id="section">
    //   <h2 className="text-center text-4xl font-bold text-white my-12 mb-4 md:mb-8">
    //     Media Kit
    //   </h2>

    //   <div>
    //     <h6 className="text-lg font-bold text-white flex justify-center items-center md:justify-start md:items-start">Instagram</h6>
    //     <p className="text-sm text-gray-400 my-4">Average numbers in the last 30 days</p>
    //   </div>

    //   <div className="container">

    //     <div className="grid grid-cols-1 md:grid md:grid-flow-row-dense md:grid-cols-5 gap-x-3 gap-y-4 border border-cyan-50 justify-center items-center">
    //         <div className="flex flex-col gap-1 text-gray-400 p-4 justify-center items-center">
    //             <h3 className="text-4xl font-extrabold text-white"> 235K</h3>
    //             <p className="text-sm capitalize text-gray-600">
    //                 followers
    //             </p>
    //         </div>
    //         <div className="flex flex-col gap-1 text-gray-400 p-4 justify-center items-center">
    //             <h3 className="text-4xl font-extrabold text-white"> 188K</h3>
    //             <p className="text-sm capitalize text-gray-600">
    //             accounts reached
    //             </p>
    //         </div>
    //         <div className="flex flex-col gap-1 text-gray-400 p-4 justify-center items-center">
    //             <h3 className="text-4xl font-extrabold text-white"> 233K</h3>
    //             <p className="text-sm capitalize text-gray-600">
    //             reels audience
    //             </p>
    //         </div>
    //         <div className="flex flex-col gap-1 text-gray-400 p-4 justify-center items-center">
    //             <h3 className="text-4xl font-extrabold text-white"> 2K</h3>
    //             <p className="text-sm capitalize text-gray-600">
    //                 story audience
    //             </p>
    //         </div>
    //         <div className="flex flex-col gap-1 text-gray-400 p-4 justify-center items-center">
    //             <h3 className="text-4xl font-extrabold text-white"> 85%</h3>
    //             <p className="text-sm capitalize text-gray-600">
    //                 USA
    //             </p>
    //         </div>
    //     </div>

    //   </div>
    // </section>
  );
};
