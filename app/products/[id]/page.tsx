import BuyButton from "@/components/ui/layout/buy-button";
import { supabase } from "@/lib/dbClient";
import Image from "next/image";

interface IProductPage {
  params: {
    id: string;
  };
}

export default async function ProductPage(props: {
  params: Promise<IProductPage["params"]>;
}) {
  const params = await props.params;
  const { id } = params;

  const productId = Number(id);

  const { data: product, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", productId)
    .single();

  if (error) {
    console.error(error);
    return <div>Error loading product</div>;
  }
  if (!product) return <div>Product not found</div>;

  return (
    <>
      <div className="p-8 max-w-2xl mx-auto pt-20">
        <Image
          src={product.image_url || "/heroImg.png"}
          alt={product.name}
          width={500}
          height={500}
          className="rounded-lg object-cover"
        />

        <h2 className="text-3xl font-bold mt-4">{product.name}</h2>
        <p className="text-lg mt-2">{product.description}</p>
        <p className="text-xl font-semibold mt-4">{product.price} kr</p>
        <BuyButton
          product={{
            id: product.id.toString(),
            name: product.name,
            price: product.price,
          }}
        />
      </div>
    </>
  );
}
