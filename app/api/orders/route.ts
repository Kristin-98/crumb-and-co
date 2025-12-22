import { createServerSupabaseClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

interface IOrderItem {
  id: number;
  price: number;
  quantity: number;
}

interface IOrderRequestBody {
  items: IOrderItem[];
  total: number;
  frequency: string;
  address: {
    firstName: string;
    lastName: string;
    street: string;
    city: string;
    zip: string;
    email: string;
  };
}


export async function POST(req: Request) {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body: IOrderRequestBody = await req.json();
  const { items, total, frequency, address } = body;

  const { data: order, error: orderError } = await supabase
    .from("orders")
    .insert({
      user_id: user.id,
      total,
      delivery_frequency: frequency,
    })
    .select()
    .single();

  if (orderError) {
    return NextResponse.json({ error: orderError.message }, { status: 500 });
  }

  const orderItems = items.map((item) => ({
    order_id: order.id,
    product_id: item.id,
    price: item.price,
    quantity: item.quantity,
  }));

  await supabase.from("order_items").insert(orderItems);

  await supabase.from("addresses").insert({
    order_id: order.id,
    first_name: address.firstName,
    last_name: address.lastName,
    street: address.street,
    city: address.city,
    zip: address.zip,
    email: address.email,
  });
  console.log("Address data received:", address);


  return NextResponse.json({ orderId: order.id });
}
