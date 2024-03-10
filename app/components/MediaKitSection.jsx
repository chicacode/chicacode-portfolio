import React from "react";

export const MediaKitSection = () => {
  return (
    <section id="section">
      <h2 className="text-center text-4xl font-bold text-white my-12 mb-4 md:mb-8">
        Media Kit
      </h2>

      <div>
        <h6 className="text-lg font-bold text-white flex justify-center items-center md:justify-start md:items-start">Instagram</h6>
        <p className="text-sm text-gray-400 my-4">Average numbers in the last 30 days</p>
      </div>

      <div className="container">

        <div className="grid grid-cols-1 md:grid md:grid-flow-row-dense md:grid-cols-5 gap-x-3 gap-y-4 border border-cyan-50 justify-center items-center">
            <div className="flex flex-col gap-1 text-gray-400 p-4 justify-center items-center">
                <h3 className="text-4xl font-extrabold text-white"> 235K</h3>
                <p className="text-sm capitalize text-gray-600">
                    followers
                </p>
            </div>
            <div className="flex flex-col gap-1 text-gray-400 p-4 justify-center items-center">
                <h3 className="text-4xl font-extrabold text-white"> 188K</h3>
                <p className="text-sm capitalize text-gray-600">
                accounts reached
                </p>
            </div>
            <div className="flex flex-col gap-1 text-gray-400 p-4 justify-center items-center">
                <h3 className="text-4xl font-extrabold text-white"> 233K</h3>
                <p className="text-sm capitalize text-gray-600">
                reels audience
                </p>
            </div>
            <div className="flex flex-col gap-1 text-gray-400 p-4 justify-center items-center">
                <h3 className="text-4xl font-extrabold text-white"> 2K</h3>
                <p className="text-sm capitalize text-gray-600">
                    story audience
                </p>
            </div>
            <div className="flex flex-col gap-1 text-gray-400 p-4 justify-center items-center">
                <h3 className="text-4xl font-extrabold text-white"> 85%</h3>
                <p className="text-sm capitalize text-gray-600">
                    USA
                </p>
            </div>
        </div>

      </div>
    </section>
  );
};
