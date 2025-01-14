// "use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const logos = [
  "/images/logos/sihoo.png",
  "/images/logos/rapyd.png",
  "/images/logos/mewawi.png",
  "/images/logos/devhero.png",
  "/images/logos/acefast.png",
  "/images/logos/fenge.png",
  "/images/logos/hack.png",
  "/images/logos/harmoni.png",
  "/images/logos/lock.png",
  "/images/logos/geek.png",
  "/images/logos/wonder.png",
  "/images/logos/divoom.png",
  "/images/logos/moft.png",
  "/images/logos/ocushield.png",
  "/images/logos/rapoo.png",
  "/images/logos/mewaw.png",
  "/images/logos/autonomous.png",
  "/images/logos/grid.png",
  "/images/logos/cololight.png",
  "/images/logos/shecodes.png",
  "/images/logos/xcode.png",
  "/images/logos/scribe.png",
  "/images/logos/ubiqum.png",
  "/images/logos/filmora-horizontal.png",
  '/images/logos/benq.png',
  '/images/logos/daily-dev.png',
  '/images/logos/wix-studio.png',
  '/images/logos/ztm.png',
  '/images/logos/logo.svg',
  // Add more logos if needed
];

export const PartnersSections = () => {
  return (
    <div className="grid grid-cols-5 gap-4 p-4 rounded-lg bg-gradient-to-r from-stone-900 via-purple-500 to-pink-400 hover:bg-pink-100">
      {logos.map((logo, index) => (
        <div key={index} className="flex justify-center items-center">
          <Link
            key={index}
            href={`https://www.instagram.com/chicacode`}
            passHref
            target="_blank"
          >
            {/* Wrap the Image component inside the Link component */}
            <Image
              src={`${logo}`}
              alt={`Logo ${index + 1}`}
              className="max-h-24"
              width={500}
              height={500}
            />
          </Link>
        </div>
      ))}
    </div>
  );
};
