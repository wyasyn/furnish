import InlineImage from "@/components/InlineImage";

export default function About() {
  const sofas = {
    sofa1:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNvZmF8ZW58MHx8MHx8fDA%3D",
    sofa2:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c29mYXxlbnwwfHwwfHx8MA%3D%3D",
  };
  return (
    <section className="mb-[3rem]">
      <div className="container">
        <h3 className="px-3 bg-slate-100 border border-slate-200 text-foreground w-fit py-1 rounded-full mb-4">
          Philosophy
        </h3>
        <p className="text-foreground text-4xl md:text-6xl text-balance">
          Furniture chosen with care can turn a house into a true home.{" "}
          <InlineImage src={sofas.sofa1} /> Invest in your comfort and quality
          of life. <InlineImage src={sofas.sofa2} />
        </p>
      </div>
    </section>
  );
}
