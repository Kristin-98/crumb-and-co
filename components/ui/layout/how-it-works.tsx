import { CalendarCheck, Croissant, PackageOpen, Settings } from "lucide-react";

export default function HowItWorks() {
  return (
    <div className="flex flex-col items-center gap-8">
      <h3 className="text-center text-2xl font-bold">How it works</h3>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-9xl w-full">
        <div className="flex flex-col items-center gap-2 border border-accent p-3 rounded-3xl min-h-[180px] text-center">
          <PackageOpen strokeWidth={0.75} className="w-10 h-10" />
          <p className="font-bold">Choose Your Box</p>
          <p className="text-sm">
            Browse our selection of curated boxes from Breakfast to Brunch,
            Lunch, or even our Mystery Box. Pick the one that fits your mood.
          </p>
        </div>

        <div className="flex flex-col items-center gap-2 bg-accent p-3 rounded-3xl min-h-[180px] text-center text-secondary">
          <CalendarCheck strokeWidth={0.5} className="w-10 h-10" />
          <p className="font-bold">Select Your Subscription</p>
          <p className="text-sm">
            Choose a weekly or monthly subscription and let us take care of the
            rest. We’ll prepare your order and deliver it straight to your door.
          </p>
        </div>

        <div className="flex flex-col items-center gap-2 border border-accent p-3 rounded-3xl min-h-[180px] text-center">
          <Croissant strokeWidth={0.5} className="w-10 h-10" />
          <p className="font-bold">Enjoy Your Fresh Bakery Moments</p>
          <p className="text-sm">
            Sit back, relax, and indulge in freshly baked goods without ever
            leaving your home. Your perfect day starts here.
          </p>
        </div>

        <div className="flex flex-col items-center gap-2 bg-secondary border border-accent p-3 rounded-3xl min-h-[180px] text-center">
          <Settings strokeWidth={0.5} className="w-10 h-10" />
          <p className="font-bold">Manage & Customize Anytime</p>
          <p className="text-sm">
            Need to change your frequency or update your preferences? You’re
            always in control. Manage your subscription easily from your account
            whenever life gets busy.
          </p>
        </div>
      </div>
    </div>
  );
}
