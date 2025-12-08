import { CalendarCheck, Croissant, PackageOpen } from "lucide-react";

export default function HowItWorks() {
  return (
    <>
      <div className="flex flex-col items-center gap-8 my-10">
        <h3 className="text-center text-2xl font-bold">How it works</h3>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
          <div className="flex flex-col items-center gap-2 bg-secondary p-6 w-64 h-full">
            <PackageOpen strokeWidth={0.5} className="w-12 h-12" />
            <p className="font-bold">Choose Your Box</p>
            <p>
              Browse our selection of curated boxes from Breakfast to Brunch,
              Lunch, or even our Mystery Box. Pick the one that fits your mood.
            </p>
          </div>

          <div className="flex flex-col items-center gap-2 bg-secondary p-6 w-64 h-full">
            <CalendarCheck strokeWidth={0.5} className="w-12 h-12" />
            <p className="font-bold">Select Your Subscription</p>
            <p>
              Choose a weekly or monthly subscription and let us take care of
              the rest. We’ll prepare your order and deliver it straight to your
              door.
            </p>
          </div>

          <div className="flex flex-col items-center gap-2 bg-secondary p-6 w-64 h-full">
            <Croissant strokeWidth={0.5} className="w-12 h-12" />
            <p className="font-bold">Enjoy Your Fresh Bakery Moments</p>
            <p>
              Sit back, relax, and indulge in freshly baked goods without ever
              leaving your home. Your perfect day starts here.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
