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
      <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-60">
        {products?.map((product) => (
          <li
            key={product.id}
            className="rounded-2xl p-4 mt-4 shadow-xl max-w-md flex justify-self-center bg-white items-start"
          >
            <Link
              href={`/products/${product.id}`}
              className="flex flex-col items-center"
            >
              <Image
                src={product.image_url || "/heroImg.png"}
                alt={product.name}
                width={500}
                height={300}
                layout="fixed"
                className="object-cover h-[300px] rounded-2xl "
              />
              <p className="font-light p-3 text-2xl">{product.name}</p>
              <p className="line-clamp-2">{product.description}</p>
              <p className="self-start py-2 px-3 mt-4 bg-primary rounded-3xl text-white hover:bg-accent-foreground">
                {product.price} kr
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
