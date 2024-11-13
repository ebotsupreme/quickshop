"use client";

import ProductCard from "@/app/components/card/card";
import { LIMIT } from "@/app/lib/constants";
import { fetchProductsByCategory } from "@/app/lib/data";
import { Product, ProductResponse } from "@/app/lib/definitions";
import Pagination from "@/app/ui/products/pagination";
import { useEffect, useState } from "react";

export default function CategoryPagination({
  data,
  initialPage,
  category,
}: {
  data: ProductResponse | null;
  initialPage: number;
  category: string;
}) {
  const [products, setProducts] = useState<Product[] | null>(
    data?.products || null
  );
  const [page, setPage] = useState(initialPage);
  const totalproducts = data?.total || 0;
  const totalPages = Math.ceil(totalproducts / LIMIT);

  useEffect(() => {
    const fetchNewPage = async () => {
      const data = await fetchProductsByCategory(category, page, LIMIT);
      setProducts(data.products);
    };
    fetchNewPage();
  }, [category, page]);

  if (!data) return <div>Data not found.</div>;
  if (!products) return <div>loading...</div>;

  return (
    <>
      <div className="flex flex-wrap gap-20">
        {products?.map((product: Product) => (
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
