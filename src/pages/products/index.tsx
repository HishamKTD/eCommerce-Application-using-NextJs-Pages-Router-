import React from "react";
import ProductList from "../../components/product-list/ProductList";
import { useRouter } from "next/router";

export default function Product() {
  const { query } = useRouter()
  const searchParams = query.search;

  return (
    <ProductList searchParams={searchParams} />
  );
}
