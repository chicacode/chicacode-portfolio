import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="p-6 flex justify-between md:px-16">
      <Link
          href={"https://www.instagram.com/chicacode/"}
          className="text-2xl md:text-5xl text-white font-semibold"
        >
      <Image
            src="/images/coding-with-chicacode-LOGO.jpg"
            width={30}
            height={30}
            alt="chicacode logo of the author"
            className="rounded-full"
          />
          </Link>
        <p className="text-slate-600">2024 - All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;