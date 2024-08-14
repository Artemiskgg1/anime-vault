import Image from "next/image";

function Header() {
  return (
    <header className="bg-hero bg-center h-[30rem] bg-cover bg-no-repeat sm:p-16 py-16 px-8 flex justify-center lg:items-center max-lg:flex-col w-full sm:gap-16 gap-0 relative">
      <div className="absolute inset-0">
        <Image
          src="/anime-toroto.jpg"
          alt="anime"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-50"
        />
      </div>
    </header>
  );
}

export default Header;
