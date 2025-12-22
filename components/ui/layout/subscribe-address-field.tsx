"use client";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { AddressFormValues, addressSchema } from "@/lib/schemas/address-schema";
import { useCart } from "@/providers/cart-provider";
import { zodResolver } from "@hookform/resolvers/zod";
import { RotateCw } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../providers/auth-provider";
import { Button } from "../button";

export function AddressFieldset() {
  const { user } = useAuth();
  const form = useForm<AddressFormValues>({
    resolver: zodResolver(addressSchema),
    mode: "onChange",
  });

  useEffect(() => {
    if (!user) return;

    form.reset({
      email: user.email ?? "",
      firstName: user.user_metadata?.firstName ?? "",
      lastName: user.user_metadata?.lastName ?? "",
    });
  }, [user, form]);
  const { cart, clearCart } = useCart();
  const router = useRouter();
  const total = cart.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const [selectedFrequency, setSelectedFrequency] = useState("weekly");

  function formatDate(date: Date) {
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  }

  function getNextSunday() {
    const today = new Date();
    const day = today.getDay();
    const diff = (7 - day) % 7;
    const next = new Date(today);
    next.setDate(today.getDate() + (diff === 0 ? 7 : diff));
    return next;
  }

  function getFirstSundayNextMonth() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const firstDay = new Date(year, month + 1, 1);
    const day = firstDay.getDay();
    const diff = (7 - day) % 7;
    firstDay.setDate(firstDay.getDate() + diff);
    return firstDay;
  }

  return (
    <div className="w-full max-w-md space-y-6 bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold">Order Summary</h2>

      <div className="space-y-4">
        {cart.items.map((item) => (
          <div key={item.id} className="flex items-center gap-4 border-b pb-4">
            <Image
              src={item.image}
              alt={""}
              width={80}
              height={80}
              className="rounded-lg object-cover"
            />

            <div className="flex-1">
              <p className="font-semibold">{item.name}</p>
              <p className="text-gray-600">{item.price} kr</p>
              <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full max-w-md">
        <FieldGroup>
          <FieldSet>
            <FieldLegend>Delivery frequency:</FieldLegend>
            <FieldDescription>
              Choose how often you want your order delivered.
            </FieldDescription>

            <RadioGroup
              value={selectedFrequency}
              onValueChange={(value) => setSelectedFrequency(value)}
              id="delivery-frequency"
            >
              <FieldLabel htmlFor="weekly">
                <Field orientation="horizontal">
                  <FieldContent>
                    <FieldTitle>Weekly Delivery</FieldTitle>
                    <FieldDescription>
                      Next delivery: {formatDate(getNextSunday())}
                    </FieldDescription>
                  </FieldContent>
                  <RadioGroupItem value="weekly" id="weekly" />
                </Field>
              </FieldLabel>

              <FieldLabel htmlFor="monthly">
                <Field orientation="horizontal">
                  <FieldContent>
                    <FieldTitle>Monthly Delivery</FieldTitle>
                    <FieldDescription>
                      Next delivery: {formatDate(getFirstSundayNextMonth())}
                    </FieldDescription>
                  </FieldContent>
                  <RadioGroupItem value="monthly" id="monthly" />
                </Field>
              </FieldLabel>
            </RadioGroup>
          </FieldSet>
        </FieldGroup>
      </div>
      <div className="border-t pt-4">
        <p className="text-lg font-semibold">Total: {total} kr</p>
      </div>

      <form
        noValidate
        onSubmit={form.handleSubmit(async (data) => {
          try {
            const res = await fetch("/api/orders", {
              method: "POST",
              credentials: "include",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                items: cart.items,
                total,
                frequency: selectedFrequency,
                address: data,
              }),
            });

            if (!res.ok) throw new Error("Order failed");

            clearCart();
            router.push("/order-success");
          } catch (err) {
            console.error(err);
          }
        })}
      >
        <FieldSet>
          <FieldLegend>Address Information</FieldLegend>
          <FieldDescription>
            We need your address to deliver your order.
          </FieldDescription>
          <FieldGroup>
            <div className="grid grid-cols-2 gap-4">
              <Field>
                <FieldLabel htmlFor="firstName">First name</FieldLabel>
                <Input
                  id="firstName"
                  aria-invalid={!!form.formState.errors.firstName}
                  type="text"
                  placeholder="Kristin"
                  {...form.register("firstName")}
                />
                {form.formState.errors.firstName && (
                  <p className="text-xs text-red-500">
                    {form.formState.errors.firstName.message}
                  </p>
                )}
              </Field>
              <Field>
                <FieldLabel htmlFor="lastName">Last name</FieldLabel>
                <Input
                  id="lastName"
                  aria-invalid={!!form.formState.errors.lastName}
                  type="text"
                  placeholder="Svensson"
                  {...form.register("lastName")}
                />
                {form.formState.errors.lastName && (
                  <p className="text-xs text-red-500">
                    {form.formState.errors.lastName?.message}
                  </p>
                )}
              </Field>
            </div>
            <Field>
              <FieldLabel htmlFor="street">Street Address</FieldLabel>
              <Input
                id="street"
                aria-invalid={!!form.formState.errors.street}
                type="text"
                placeholder="123 Main St"
                {...form.register("street")}
              />
              {form.formState.errors.street && (
                <p className="text-xs text-red-500">
                  {form.formState.errors.street.message}
                </p>
              )}
            </Field>
            <div className="grid grid-cols-2 gap-4">
              <Field>
                <FieldLabel htmlFor="city">City</FieldLabel>
                <Input
                  id="city"
                  aria-invalid={!!form.formState.errors.city}
                  type="text"
                  placeholder="New York"
                  {...form.register("city")}
                />
                {form.formState.errors.city && (
                  <p className="text-xs text-red-500">
                    {form.formState.errors.city?.message}
                  </p>
                )}
              </Field>
              <Field>
                <FieldLabel htmlFor="zip">Postal Code</FieldLabel>
                <Input
                  id="zip"
                  aria-invalid={!!form.formState.errors.zip}
                  type="text"
                  placeholder="90502"
                  {...form.register("zip")}
                />
                {form.formState.errors.zip && (
                  <p className="text-xs text-red-500">
                    {form.formState.errors.zip.message}
                  </p>
                )}
              </Field>
            </div>
            <Field>
              <FieldLabel htmlFor="email">E-mail</FieldLabel>
              <Input
                id="email"
                aria-invalid={!!form.formState.errors.email}
                type="text"
                placeholder="example@hotmail.com"
                {...form.register("email")}
              />
              {form.formState.errors.email && (
                <p className="text-xs text-red-500">
                  {form.formState.errors.email.message}
                </p>
              )}
            </Field>
          </FieldGroup>
        </FieldSet>
        <Button
          disabled={!form.formState.isValid || form.formState.isSubmitting}
          type="submit"
          className="w-full mt-6 py-3 text-lg text-white disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
        >
          {form.formState.isSubmitting && (
            <RotateCw className="w-5 h-5 animate-spin" />
          )}
          {form.formState.isSubmitting ? "Submitting..." : "Start Subscription"}
        </Button>
      </form>
    </div>
  );
}
