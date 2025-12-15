"use client";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { AddressFormValues, addressSchema } from "@/lib/schemas/address-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { RotateCw } from "lucide-react";
import { useForm } from "react-hook-form";
import { Button } from "../button";

export function AddressFieldset() {
  const form = useForm<AddressFormValues>({
    resolver: zodResolver(addressSchema),
    mode: "onChange",
  });

  return (
    <div className="w-full max-w-md space-y-6 bg-white p-6 rounded-xl shadow-md">
      <form
        noValidate
        onSubmit={form.handleSubmit(async (data) => {
          try {
            await new Promise((resolve) => setTimeout(resolve, 6000));
            console.log("VALID FORM DATA:", data);
            form.reset();
          } catch (error) {
            console.error(error);
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
