import ProductCard from "../components/card/card";

export default async function ProductsPage() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();

  return (
    <div className="flex flex-wrap gap-20">
      {data.products.map((product: Product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          rating={product.rating}
          thumbnail={product.thumbnail}
        />
      ))}
    </div>
  );
}
