import Footer from "@/components/ui/layout/footer";
import Hero from "@/components/ui/layout/hero";
import { Navbar } from "@/components/ui/layout/navbar";
import ProductCard from "@/components/ui/layout/product-card";

export default function Home() {
  return (
    <main className="bg-background pt-14">
      <Navbar />
      <Hero />
      <ProductCard />
      <Footer />
    </main>
  );
}
