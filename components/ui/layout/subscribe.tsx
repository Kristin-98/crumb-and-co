"use client";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useCart } from "@/context/cart-context";
import Image from "next/image";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
  FieldTitle,
} from "../field";

export default function Subscribe() {
  const { cart } = useCart();

  const total = cart.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

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
    <div className=" bg-white p-6 rounded-xl shadow-md space-y-6 w-full max-w-md">
      <h3 className="text-2xl font-semibold">Order Summary</h3>

      <div className="space-y-4">
        {cart.items.map((item) => (
          <div key={item.id} className="flex items-center gap-4 border-b pb-4">
            <Image
              src={item.image}
              alt={item.name}
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
            <FieldLabel htmlFor="compute-environment-p8w">
              Delivery frequency:
            </FieldLabel>
            <FieldDescription>
              Choose how often you want your order delivered.
            </FieldDescription>

            <RadioGroup>
              <FieldLabel>
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

              <FieldLabel>
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
    </div>
  );
}
