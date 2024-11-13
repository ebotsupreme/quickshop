import { LIMIT } from "@/app/lib/constants";
import { fetchProductsByCategory } from "@/app/lib/data";
import { ProductResponse } from "@/app/lib/definitions";
import CategoryPagination from "./CategoryPagination";

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const { category } = await params;

  const initialPage = 1;
  const data: ProductResponse = await fetchProductsByCategory(
    category,
    initialPage,
    LIMIT
  );

  if (!data) return <div>loading...</div>;

  return (
    <div>
      <h1>Category: {category?.replace("-", " ")}</h1>
      <CategoryPagination
        data={data}
        initialPage={initialPage}
        category={category}
      />
    </div>
  );
}
