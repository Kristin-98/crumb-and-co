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
import { Button } from "../button";

export function AdressFieldset() {
  return (
    <div className="w-full max-w-md space-y-6 bg-white p-6 rounded-xl shadow-md">
      <FieldSet>
        <FieldLegend>Address Information</FieldLegend>
        <FieldDescription>
          We need your address to deliver your order.
        </FieldDescription>
        <FieldGroup>
          <div className="grid grid-cols-2 gap-4">
            <Field>
              <FieldLabel htmlFor="city">First name</FieldLabel>
              <Input id="city" type="text" placeholder="Kristin" />
            </Field>
            <Field>
              <FieldLabel htmlFor="zip">Last name</FieldLabel>
              <Input id="zip" type="text" placeholder="Svensson" />
            </Field>
          </div>
          <Field>
            <FieldLabel htmlFor="street">Street Address</FieldLabel>
            <Input id="street" type="text" placeholder="123 Main St" />
          </Field>
          <div className="grid grid-cols-2 gap-4">
            <Field>
              <FieldLabel htmlFor="city">City</FieldLabel>
              <Input id="city" type="text" placeholder="New York" />
            </Field>
            <Field>
              <FieldLabel htmlFor="zip">Postal Code</FieldLabel>
              <Input id="zip" type="text" placeholder="90502" />
            </Field>
          </div>
        </FieldGroup>
      </FieldSet>
      <Button className="w-full py-3 text-lg text-white">
        Start Subscription
      </Button>
    </div>
  );
}
