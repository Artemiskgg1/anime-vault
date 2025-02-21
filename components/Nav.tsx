"use client";

import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { IconMenu2, IconX } from "@tabler/icons-react";

const Nav = () => {
  const navLinks = [
    { text: "Guideline", href: "/" },
    { text: "FAQ", href: "/" },
    { text: "Contact Us", href: "/" },
    { text: "Discord", href: "/" },
    { text: "Log In", href: "/sign-in" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav className="fixed top-0 w-full z-20 bg-black opacity-90 text-[#d5d5d5]">
      <div className="flex items-center justify-between px-6 py-4 h-16 mx-10">
        <div>
          <Logo />
        </div>
        <div className="hidden md:flex space-x-8 text-sm lg:text-md">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="hover:underline text-white font-semibold"
            >
              {link.text}
            </Link>
          ))}
        </div>
        <button
          className="md:hidden flex items-center justify-center text-white"
          onClick={toggleMenu}
        >
          {menuOpen ? (
            <IconX className="w-6 h-6" />
          ) : (
            <IconMenu2 className="w-6 h-6" />
          )}
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-black opacity-95 text-white flex flex-col space-y-4 px-6 py-4">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="hover:underline text-white"
              onClick={() => setMenuOpen(false)}
            >
              {link.text}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Nav;
