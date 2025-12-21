"use client";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="relative md:w-[calc(100vw-4rem)] w-[calc(100vw-2rem)] md:h-[calc(95vh-4rem)] h-[calc(70vh-2rem)] rounded-3xl overflow-hidden">
        <Image src="/hero4.png" alt="cafe" fill className="object-cover" />
        <motion.div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:right-32 lg:right-64 md:top-2/5 flex flex-col items-center text-2xl md:text-5xl lg:text-6xl font-extrabold text-accent bg-background md:bg-transparent rounded-3xl p-3 text-center w-max"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <h1>Where</h1>
          <p>quality meets</p>
          <p className="pb-4">comfort</p>
          
          <Link href="#products">
            <button
              type="button"
              className="group bg-primary text-sm md:text-lg text-white font-medium rounded-full py-2 md:px-4 px-2 hover:bg-accent-foreground flex flex-row items-center"
            >
              Shop & Subscribe
              <ChevronRight className="transition-transform duration-300 group-hover:translate-x-2" />
            </button>
          </Link>
        </motion.div>
      </div>
    </>
  );
}
