import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
      
      <Image
            src="/images/coding-with-chicacode-LOGO.jpg"
            width={30}
            height={30}
            alt="chicacode logo of the author"
            className="rounded-full"
          />
        <p className="text-slate-600">2024 - All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;