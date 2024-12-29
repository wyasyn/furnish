import { movingImages } from "@/constants/movingImages";
import { motion } from "motion/react";

export default function MovingImages() {
  return (
    <div className="relative overflow-hidden fade-mask">
      <motion.div
        className="flex items-center gap-12 py-14"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 40,
          ease: "linear",
        }}
      >
        {movingImages.concat(movingImages).map((image, index) => (
          <div
            key={index}
            className={`w-[350px] shrink-0 aspect-[4/3] overflow-hidden hover:scale-110 hover:rotate-3 duration-300 ease-in-out transition-all rounded-lg ${
              index % 2 === 0 ? "rotate-6" : "-rotate-6"
            }`}
          >
            <img
              src={image}
              alt={image}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
