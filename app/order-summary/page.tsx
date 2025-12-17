import { AddressFieldset } from "@/components/ui/layout/subscribe-address-field";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function OrderSummary() {
  const supabase = await createServerSupabaseClient();

  const { data, error } = await supabase.auth.getClaims();

  if (error || !data) {
    redirect("/login?redirect=/order-summary");
  }

  return (
    <>
      <div className="flex md:flex-row flex-col justify-center items-center md:items-start md:mx-8 mx-4 gap-6 md:gap-12">
        <AddressFieldset />
      </div>
    </>
  );
}
