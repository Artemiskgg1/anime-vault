import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
const Navbar = () => {
  return (
    <nav className="bg-hero bg-center bg-cover bg-no-repeat sm:p-16 py-16 px-8 flex justify-center lg:items-center max-lg:flex-col w-full sm:gap-16 gap-0">
      <div>
        <div className="lg:flex-1 relative w-full h-[50vh] justify-center">
          <Image
            fill
            src="/anime-toroto.jpg"
            alt="logo"
            className="object-contain"
          />
        </div>

        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: {
                height: 30,
                width: 30,
              },
            },
          }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
