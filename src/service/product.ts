import { Product } from "../interface";

export const getProducts = async (page = 0): Promise<Product[]> => {
  try {
    const response = await fetch(
      `http://localhost:3000/products?_page=${page}&_limit=10`
    );

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Failed to fetch products");
    }
  } catch (error) {
    throw new Error("Network error");
  }
};

export const createProduct = async (Product: Product): Promise<Product> => {
  try {
    const response = await fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Product),
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Failed to create product");
    }
  } catch (error) {
    throw new Error("Network error");
  }
};
