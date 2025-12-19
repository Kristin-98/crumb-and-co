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
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from "../field";

export function EditMySubscription() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline">Edit subscription</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit delivery frequency</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <RadioGroup
              id="delivery-frequency"
            >
              <FieldLabel>
                <Field orientation="horizontal">
                  <FieldContent>
                    <FieldTitle>Weekly Delivery</FieldTitle>
                    <FieldDescription>
                      Next delivery: on sunday..
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
                      Next delivery: om tuesday..
                    </FieldDescription>
                  </FieldContent>
                  <RadioGroupItem value="monthly" id="monthly" />
                </Field>
              </FieldLabel>
            </RadioGroup>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
