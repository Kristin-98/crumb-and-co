import BuyButton from "@/components/ui/layout/buy-button";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import Image from "next/image";

interface IProductPage {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({ params }: IProductPage) {
  const resolvedParams = await params;
  const productId = Number(resolvedParams.id);

  const supabase = await createServerSupabaseClient();

  const { data: product, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", productId)
    .single();

  if (error) {
    console.error(error);
    return <div>Error loading product</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="p-8 mx-auto pt-20 flex md:flex-row flex-col justify-center">
      <Image
        src={product.image_url || "/hero.png"}
        alt={""}
        width={500}
        height={500}
        className="rounded-lg object-cover"
      />
      <div className="md:ml-10 max-w-3xl">
        <h2 className="text-3xl font-bold mt-4">{product.name}</h2>
        <p className="text-lg mt-2">{product.description}</p>
        <p className="text-xl font-semibold my-4">{product.price} kr</p>

        <BuyButton
          product={{
            id: product.id.toString(),
            name: product.name,
            price: product.price,
            image: product.image_url,
          }}
        />
      </div>
    </div>
  );
}
