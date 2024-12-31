import ProductItem from "./ProductItem";

export default function ProductsItems() {
  const products = [
    {
      image:
        "https://images.unsplash.com/photo-1489269637500-aa0e75768394?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbG0lMjBmdXJuaXR1cmV8ZW58MHx8MHx8fDA%3D",
      name: "malm",
      description: "Black Eames Style Chair",
      price: 40.0,
      category: "chair",
    },
    {
      image:
        "https://images.unsplash.com/photo-1503602642458-232111445657?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D",
      name: "stol",
      description: "Stylish Armchair with a Swing",
      price: 50.0,
      category: "chair",
    },
  ];
  return (
    <div>
      <div className="flex justify-center space-x-4 flex-wrap items-center my-7">
        <button
          className={`px-6 py-1 border border-primary bg-primary text-background rounded-full`}
        >
          All
        </button>
        <button
          className={`px-6 py-1 bg-slate-100 border border-slate-200 rounded-full`}
        >
          bed
        </button>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8">
        {products.map((product) => (
          <ProductItem
            key={product.name}
            image={product.image}
            name={product.name}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}
