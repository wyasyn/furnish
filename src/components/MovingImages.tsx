import { movingImages } from "@/constants/movingImages";
import { motion } from "motion/react";
import ImageWithBlur from "./ImageWithBlur";

export default function MovingImages() {
  return (
    <div className="relative overflow-hidden fade-mask">
      <motion.div
        className="flex items-center gap-12 py-14"
        animate={{ x: ["0%", "-50%"] }} // Move halfway to seamlessly loop
        transition={{
          repeat: Infinity,
          duration: 40,
          ease: "linear",
        }}
        style={{ display: "flex", width: "200%" }} // Container twice as wide as needed
      >
        {movingImages.concat(movingImages).map((image, index) => (
          <ImageWithBlur key={index} image={image} index={index} />
        ))}
      </motion.div>
    </div>
  );
}
