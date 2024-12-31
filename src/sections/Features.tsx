import Button from "@/components/Button";
import HoverImages from "@/components/hoverImages";

export default function Features() {
  return (
    <section className="md:my-[7rem] my-[5rem]">
      <div className="container gap-8 flex md:items-center flex-col md:flex-row md:justify-between ">
        <div className="space-y-7">
          <h2 className="text-foreground text-3xl font-medium text-balance max-w-[24ch]">
            Luxurious Furniture Starts with the Best Quality Materials
          </h2>
          <p className="max-w-[40ch]">
            We Understand How Important Materials Are In Creating Quality
            Furniture. Because Materials Are The Foundation Of Everything We
            Create.
          </p>
          <Button text="Learn more" />
        </div>
        <HoverImages />
      </div>
    </section>
  );
}
