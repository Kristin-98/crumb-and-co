"use server";

import { createServerSupabaseClient } from "@/lib/supabase/server";
import { DeliveryFrequency } from "@/types/orders";
import { revalidatePath } from "next/cache";

export async function deleteOrder(orderId: string) {
  const supabase = await createServerSupabaseClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Unauthorized");
  }

  const { error } = await supabase.from("orders").delete().eq("id", orderId);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/my-subscription");
}

export async function updateOrderFrequency(
  orderId: string,
  delivery_frequency: DeliveryFrequency
) {
  const supabase = await createServerSupabaseClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Unauthorized");
  }

  const { error } = await supabase
    .from("orders")
    .update({ delivery_frequency })
    .eq("id", orderId);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/my-subscription");
}
