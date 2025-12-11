"use client";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className="relative md:w-[calc(100vw-4rem)] w-[calc(100vw-2rem)] md:h-[calc(95vh-4rem)] h-[calc(100vh-2rem)] rounded-3xl overflow-hidden">
        <Image src="/hero4.png" alt="cafe" fill className="object-cover" />
        <motion.div
          className="absolute right-64 top-2/5 flex justify-center flex-col items-center md:text-5xl font-extrabold text-accent"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <h1>Where</h1>
          <p>every bite</p>
          <p className="pb-4">counts</p>

          <button className="group bg-primary text-lg text-white font-medium rounded-full py-2 md:px-4 px-3 hover:bg-accent-foreground flex flex-row items-center">
            Join our monthly subscription.
            <ChevronRight className="transition-transform duration-300 group-hover:translate-x-2" />
          </button>
        </motion.div>
      </div>
    </>
  );
}
