export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const { category } = await params;
  return (
    <div>
      <h1>Category: {category?.replace("-", " ")}</h1>
    </div>
  );
}
