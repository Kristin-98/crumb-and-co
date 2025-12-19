
import AboutHero from "@/components/ui/layout/about-hero";
import SubscriptionBenefits from "@/components/ui/layout/subscription-benefits";

export default function AboutUs() {
  return (
    <>
      <div className="flex flex-col justify-center m-20 gap-10">
        <AboutHero />
        <SubscriptionBenefits />
      </div>
    </>
  );
}
