"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { DeliveryFrequency } from "@/types/orders";
import { useState } from "react";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from "../field";

interface IProps {
  orderId: string;
  currentFrequency: DeliveryFrequency;
  onSave: (frequency: DeliveryFrequency) => void;
  isPending?: boolean;
}

export function EditMySubscription({
  currentFrequency,
  onSave,
  isPending,
}: IProps) {
  const [frequency, setFrequency] =
    useState<DeliveryFrequency>(currentFrequency);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit subscription</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit delivery frequency</DialogTitle>
          <DialogDescription>
            Choose how often you want your delivery.
          </DialogDescription>
        </DialogHeader>

        <RadioGroup
          value={frequency}
          onValueChange={(value) => setFrequency(value as DeliveryFrequency)}
          className="grid gap-4"
        >
          <FieldLabel>
            <Field orientation="horizontal">
              <FieldContent>
                <FieldTitle>Weekly Delivery</FieldTitle>
                <FieldDescription>Delivered every week</FieldDescription>
              </FieldContent>
              <RadioGroupItem value="weekly" />
            </Field>
          </FieldLabel>

          <FieldLabel>
            <Field orientation="horizontal">
              <FieldContent>
                <FieldTitle>Monthly Delivery</FieldTitle>
                <FieldDescription>Delivered once a month</FieldDescription>
              </FieldContent>
              <RadioGroupItem value="monthly" />
            </Field>
          </FieldLabel>
        </RadioGroup>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>

          <DialogClose asChild>
            <Button disabled={isPending} onClick={() => onSave(frequency)}>
              Save changes
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
