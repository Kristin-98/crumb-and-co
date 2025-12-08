import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { Button } from "../button";

export default function Hero() {
  return (
    <>
      <div className="relative md:w-[calc(100vw-4rem)] w-[calc(100vw-2rem)] md:h-[calc(95vh-4rem)] h-[calc(100vh-2rem)] rounded-3xl overflow-hidden">
        <Image src="/hero.png" alt="cafe" fill className="object-cover" />
        <div className="absolute inset-0 flex justify-center items-center">
          <div className=" flex-col flex justify-center items-center rounded-3xl bg-background m-2 p-2 md:p-4 md:w-130 h-50 text-center">
            <h1 className="md:text-2xl text-lg md:font-thin pb-4">
              Subscribe today and treat yourself to handcrafted bakery boxes
              every month.
            </h1>
            <Button className="group bg-accent text-white font-light rounded-full py-2 md:px-6 px-4 hover:bg-accent-foreground">
              Join our monthly subscription.
              <ChevronRight className="transition-transform duration-300 group-hover:translate-x-2" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
