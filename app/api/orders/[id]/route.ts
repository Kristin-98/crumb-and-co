// import { NextResponse } from "next/server";
// import { createServerSupabaseClient } from "@/lib/supabase/server";

// export async function DELETE(
//   _req: Request,
//   { params }: { params: { id: string } }
// ) {
//   const supabase = await createServerSupabaseClient();

//   const {
//     data: { user },
//   } = await supabase.auth.getUser();

//   if (!user) {
//     return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
//   }

//   const { error } = await supabase
//     .from("orders")
//     .delete()
//     .eq("id", params.id);

//   if (error) {
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }

//   return NextResponse.json({ success: true });
// }

// export async function PATCH(
//   req: Request,
//   { params }: { params: { id: string } }
// ) {
//   const supabase = await createServerSupabaseClient();
//   const body = await req.json();

//   const {
//     data: { user },
//   } = await supabase.auth.getUser();

//   if (!user) {
//     return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
//   }

//   const { delivery_frequency } = body;

//   const { error } = await supabase
//     .from("orders")
//     .update({ delivery_frequency })
//     .eq("id", params.id);

//   if (error) {
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }

//   return NextResponse.json({ success: true });
// }
