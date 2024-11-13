export async function fetchProducts(page = 1, limit = 30) {
  try {
    const skip = (page - 1) * limit;
    const res = await fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Data error: ", error);
    throw new Error("Failed to fetch all products");
  }
}

export async function fetchProductsByCategory(
  category = "mens-shirts",
  page = 1,
  limit = 30
) {
  try {
    const skip = (page - 1) * limit;
    const res = await fetch(
      `https://dummyjson.com/products/category/${category}?limit=${limit}&skip=${skip}`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Data Error ", error);
    throw new Error("Failed to fetch products by category");
  }
}
