import React from "react";
// import products from "@/data/toys.json";
import ProductCard from "../carrds/ProductCard";
import { getProducts } from "@/actions/server/product";
import Container from "../shared/Contianer";

const Products = async () => {
  const products = await getProducts();
  return (
    <div>
      <Container>

      <h2 className="text-center text-4xl font-bold mb-10">Our Products</h2>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 ">
        {products.map((product) => (
          <ProductCard key={product.title} product={product}></ProductCard>
        ))}
      </div>
      </Container>
    </div>
  );
};

export default Products;
