import Hero from "@/components/ui/layout/hero";
import ProductCard from "@/components/ui/layout/product-card";

export default function Home() {
  return (
    <main className="bg-background md:mx-8 mx-4">
      <Hero />
      <ProductCard />
    </main>
  );
}
