import AboutHero from "@/components/ui/layout/about-hero";
import Hero from "@/components/ui/layout/hero";
import HowItWorks from "@/components/ui/layout/how-it-works";
import ProductCard from "@/components/ui/layout/product-card";
import SubscriptionBenefits from "@/components/ui/layout/subscription-benefits";

export default function Home() {
  return (
    <main className="bg-background md:mx-8 mx-4 flex flex-col gap-20">
      <Hero />
      <AboutHero />
      <HowItWorks />
      <section id="products">
        <ProductCard />
      </section>
      <SubscriptionBenefits />
    </main>
  );
}
