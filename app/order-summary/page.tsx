import Subscribe from "@/components/ui/layout/subscribe";
import { AdressFieldset } from "@/components/ui/layout/subscribe-adress-field";

export default function OrderSummary() {
  return (
    <>
      <div className="flex md:flex-row flex-col justify-center items-center md:items-start md:mx-8 mx-4 gap-6 md:gap-12">
        <Subscribe />
        <AdressFieldset />
      </div>
    </>
  );
}
