"use client";

import Link from "next/link";
import React from "react";
import Logo from "./Logo";

const Nav = () => {
  const navLinks = [
    { text: "Guideline", href: "/guideline" },
    { text: "FAQ", href: "/faq" },
    { text: "Contact Us", href: "/contact" },
    { text: "Discord", href: "/discord" },
    { text: "Twitter", href: "/twitter" },
  ];

  return (
    <nav className="flex items-center justify-between w-full px-6 py-4 fixed top-0 z-10 bg-transparent text-[#d5d5d5]">
      <div className="flex space-x-16">
        {navLinks.map((link, index) => (
          <Link key={index} href={link.href} className="hover:underline">
            {link.text}
          </Link>
        ))}
      </div>
      <div>
        <Logo />
      </div>
    </nav>
  );
};

export default Nav;
