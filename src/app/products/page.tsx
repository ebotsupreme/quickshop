"use client";

import { useEffect, useState } from "react";
import ProductCard from "../components/card/card";
import { fetchProducts } from "../lib/data";
import Pagination from "../ui/products/pagination";
import { useSearchParams } from "next/navigation";
import { Product, ProductResponse } from "../lib/definitions";
import { LIMIT } from "../lib/constants";

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const initialPage = Number(searchParams.get("page")) || 1;
  const [page, setPage] = useState(initialPage);
  const [data, setData] = useState<ProductResponse | null>(null);
  const totalproducts = data?.total || 0;
  const totalPages = Math.ceil(totalproducts / LIMIT);

  useEffect(() => {
    async function loadProducts() {
      const res = await fetchProducts(page, LIMIT);
      setData(res);
    }
    loadProducts();
  }, [page]);

  if (!data) return <div>loading...</div>;

  console.log(data);
  return (
    <>
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
      <Pagination
        totalPages={totalPages}
        currentPage={page}
        setPage={setPage}
      />
    </>
  );
}
