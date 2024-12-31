import { icons } from "@/constants/icons";

interface ProductItemProps {
  image: string;
  name: string;
  description: string;
  price: number;
}

export default function ProductItem({
  image,
  name,
  description,
  price,
}: ProductItemProps) {
  return (
    <article className="hover:shadow-lg duration-300 rounded-lg p-4">
      <div className="overflow-hidden aspect-square rounded-md group">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full object-center group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="flex justify-between items-center mt-4">
        <div>
          <h3 className=" uppercase text-foreground text-lg">{name}</h3>
          <p>{description}</p>
        </div>
        <div className="flex flex-col items-end">
          <p className="text-foreground text-lg">{price}</p>
          <button
            className="border aspect-square rounded-full hover:bg-success hover:text-white transition-colors duration-300 p-1"
            aria-label="add to cart"
          >
            {icons.cart}
          </button>
        </div>
      </div>
    </article>
  );
}
