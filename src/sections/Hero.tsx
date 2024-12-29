import lamp from "@/assets/images/lamp.png";
import MovingImages from "@/components/MovingImages";
import { icons } from "@/constants/icons";
export default function Hero() {
  const imageUrl =
    "https://images.unsplash.com/photo-1680503397107-475907e4f3e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZ1cm5pdHVyZXN8ZW58MHx8MHx8fDA%3D";
  return (
    <section className="py-12 md:py-[7rem]">
      <div className="container">
        <h1 className="text-5xl leading-[1.5] font-bold text-foreground capitalize max-w-[768px] mx-auto relative">
          make your space more alive with{" "}
          <img
            src={imageUrl}
            className="h-11 w-[150px] object-cover object-center rounded-full inline"
          />{" "}
          our best furniture
          <img
            src={lamp}
            alt="lamp"
            className="absolute object-contain top-4 right-0 lg:-right-[100px] w-[200px]"
          />
        </h1>
        <p className="capitalize text-center max-w-[550px] text-pretty mx-auto mt-8">
          each piece is thoughtfully designed to seamlessly blend with your
          existing decor or serve as a stunning centerpiece. and they are built
          to stand the test of time.
        </p>
        <div className="my-8">
          <form className="flex items-center justify-center border w-fit rounded-full mx-auto p-1 focus-within:border-primary min-w-[300px]">
            <input
              placeholder="Search your furniture"
              type="text"
              name="query"
              className="px-3 py-1 border-none outline-none rounded-full w-full"
            />
            <button
              type="submit"
              aria-label="search"
              className="bg-primary p-1 rounded-full text-background ml-2 cursor-pointer"
            >
              {icons.search}
            </button>
          </form>
        </div>
      </div>
      <MovingImages />
    </section>
  );
}
