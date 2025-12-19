"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function SubscriptionBenefits() {
  return (
    <div className="flex flex-row gap-5 justify-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Image
          src="/baking.png"
          alt="baking"
          width={300}
          height={300}
          className="rounded-3xl"
        />
      </motion.div>

      <motion.div
        className="rounded-3xl border border-accent p-6 w-xl flex flex-col items-center justify-center gap-3 text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.15 }}
      >
        <h3 className="text-2xl font-bold">Why Choose Our Subscription?</h3>
        <p>
          Enjoy the convenience of regular deliveries with seasonal selections
          tailored just for you. Freshly baked, customizable, and always
          delicious — discover the joy of having your favorite pastries ready
          whenever you want.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.3 }}
      >
        <Image
          src="/bagels.png"
          alt="bagels"
          width={300}
          height={300}
          className="rounded-3xl"
        />
      </motion.div>
    </div>
  );
}
