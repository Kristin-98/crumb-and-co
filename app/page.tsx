import { supabase } from "@/lib/dbClient";

export default async function Home() {
  const { data: products, error } = await supabase.from("products").select("*");

  if (error) {
    console.error(error);
    return <div>Error loading products</div>;
  }

  return (
    <main style={{ padding: 20 }}>
      <h1>Produkter</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <strong>{product.name}</strong> – {product.price} kr
          </li>
        ))}
      </ul>
    </main>
  );
}
