import ProductsItems from "@/components/Products";

export default function Products() {
  return (
    <section className="py-20">
      <div className="container">
        <header className="text-center">
          <h2 className="mb-3 text-5xl text-foreground">
            Our Newest and Best Products
          </h2>
          <p>Discover our latest and greatest furniture pieces at our store.</p>
        </header>
        <ProductsItems />
      </div>
    </section>
  );
}
