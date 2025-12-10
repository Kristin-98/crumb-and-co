"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface IProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  image_url: string | null;
}

interface Props {
  products: IProduct[];
}

export default function ProductCardClient({ products }: Props) {
  return (
    <div>
      <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-60">
        {products?.map((product, index) => (
          <motion.li
            key={product.id}
            className="rounded-2xl p-4 mt-4 shadow-xl max-w-md flex justify-self-center bg-white items-start"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.23 }}
            whileHover={{
              scale: 1.03,
              y: -3,
              boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.15)",
              transition: {
                duration: 0.13,
                ease: "easeOut",
              },
            }}
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
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
