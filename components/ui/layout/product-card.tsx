import { createServerSupabaseClient } from "@/lib/supabase/server";
import ProductCardClient from "./product-card-client";

export default async function ProductCard() {
  const supabase = await createServerSupabaseClient();

  const { data: products, error } = await supabase.from("products").select("*");

  if (error) {
    console.error(error);
    return <div>Error loading products</div>;
  }

  return <ProductCardClient products={products} />;
}
