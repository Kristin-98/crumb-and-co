import { supabase } from "@/lib/dbClient";
import Image from "next/image";
import Link from "next/link";

export default async function ProductCard() {
  const { data: products, error } = await supabase.from("products").select("*");

  if (error) {
    console.error(error);
    return <div>Error loading products</div>;
  }
  return (
    <div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products?.map((product) => (
          <li key={product.id} className="border-2 p-4 mt-4">
            <Link href={`/products/${product.id}`}>
              <Image
                src={product.image_url || "/heroImg.png"}
                alt={product.name}
                width={300}
                height={300}
                className="object-cover"
              />
              <p>
                <strong>{product.name}</strong>
              </p>
              <p>{product.description}</p>
              <p>{product.price} kr</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
