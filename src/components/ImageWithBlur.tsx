import { useState } from "react";

export default function ImageWithBlur({
  image,
  index,
}: {
  image: string;
  index: number;
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={`w-[350px] shrink-0 aspect-[4/3] overflow-hidden hover:scale-110 hover:rotate-3 duration-300 ease-in-out transition-all rounded-lg ${
        index % 2 === 0 ? "rotate-6" : "-rotate-6"
      }`}
    >
      <img
        src={image}
        alt={image}
        onLoad={() => setIsLoaded(true)}
        className={`object-cover w-full h-full transition-all duration-500 ${
          isLoaded ? "blur-0" : "blur-lg"
        }`}
      />
    </div>
  );
}
