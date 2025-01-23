"use client";

import Logo from "@/components/Logo";
import { UserButton } from "@clerk/nextjs";

const TopNav = () => {
  return (
    <nav className="fixed top-0 w-full z-20 bg-black opacity-90 text-[#d5d5d5]">
      <div className="flex items-center justify-between px-6 py-4 h-16 mx-10">
        <div>
          <Logo />
        </div>
        <UserButton
          appearance={{
            elements: {
              userButtonAvatarBox: {
                width: "35px",
                height: "35px",
              },
              userButtonAvatarImage: {
                width: "35px",
                height: "35px",
              },
            },
          }}
        />
      </div>
    </nav>
  );
};

export default TopNav;
