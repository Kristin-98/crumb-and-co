import { CalendarCheck, Croissant, PackageOpen, Settings } from "lucide-react";

export default function HowItWorks() {
  return (
    <div className="flex flex-col items-center gap-8">
      <h3 className="text-center text-2xl font-bold">How it works</h3>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-9xl w-full">
        <div className="flex flex-col items-center gap-3 border border-accent p-6 rounded-3xl min-h-[260px] text-center">
          <PackageOpen strokeWidth={0.5} className="w-12 h-12" />
          <p className="font-bold">Choose Your Box</p>
          <p>
            Browse our selection of curated boxes from Breakfast to Brunch,
            Lunch, or even our Mystery Box. Pick the one that fits your mood.
          </p>
        </div>

        <div className="flex flex-col items-center gap-3 bg-accent p-6 rounded-3xl min-h-[260px] text-center text-white">
          <CalendarCheck strokeWidth={0.5} className="w-12 h-12" />
          <p className="font-bold">Select Your Subscription</p>
          <p>
            Choose a weekly or monthly subscription and let us take care of the
            rest. We’ll prepare your order and deliver it straight to your door.
          </p>
        </div>

        <div className="flex flex-col items-center gap-3 border border-accent p-6 rounded-3xl min-h-[260px] text-center">
          <Croissant strokeWidth={0.5} className="w-12 h-12" />
          <p className="font-bold">Enjoy Your Fresh Bakery Moments</p>
          <p>
            Sit back, relax, and indulge in freshly baked goods without ever
            leaving your home. Your perfect day starts here.
          </p>
        </div>

        <div className="flex flex-col items-center gap-3 bg-secondary border border-accent p-6 rounded-3xl min-h-[260px] text-center">
          <Settings strokeWidth={0.5} className="w-12 h-12" />
          <p className="font-bold">Manage & Customize Anytime</p>
          <p>
            Need to change your frequency or update your preferences? You’re
            always in control. Manage your subscription easily from your account
            whenever life gets busy.
          </p>
        </div>
      </div>
    </div>
  );
}
