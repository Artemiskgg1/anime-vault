import Image from "next/image";

function AnimeCard({
  title,
  imageSrc,
  description,
}: {
  title: string;
  imageSrc: string;
  description: string;
}) {
  return (
    <div className="relative bg-opacity-80 backdrop-blur-[2px] rounded-lg overflow-hidden shadow-lg z-50">
      <Image
        width={500}
        height={250}
        src={imageSrc}
        alt={title}
        className="w-full h-64 object-cover"
      />
      <div className="p-4 bg-black/30">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm text-gray-300">{description}</p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent to-[#ff8b8b]" />
    </div>
  );
}

export default AnimeCard;
