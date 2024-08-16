import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { ImagesSliderDemo } from "@/components/Hero";

function Header() {
  return (
    <header className="relative w-full h-[60vh] bg-cover bg-no-repeat bg-center flex items-start justify-start">
      <ImagesSliderDemo />
      {/* <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent pointer-events-none"></div> */}
      {/* <div className="relative z-10">
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: {
                height: 40,
                width: 40,
              },
            },
          }}
        />
      </div> */}
    </header>
  );
}

export default Header;
