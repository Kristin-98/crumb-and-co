import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center gap-10 px-4 md:px-8 lg:px-16">
      <div className="flex flex-col gap-6 max-w-4xl text-center lg:text-left ">
        <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold">
          Fresh Pastries Delivered to Your Door
        </h2>

        <p className="text-sm">
          At Crumb & Co, we believe every day deserves a little sweetness. Our
          subscription service brings you freshly baked, handcrafted pastries
          delivered regularly straight from our ovens to your home. Whether you
          crave flaky croissants, buttery danishes, or decadent treats, we make
          sure you never miss a delicious moment. Join our bakery family and
          savor the joy of fresh pastries, conveniently delivered with love and
          care. Because every bite should feel like a celebration.
        </p>
      </div>

      <div className="w-full max-w-md md:max-w-3xl md:justify-end hidden md:flex">
        <Image
          src="/about1.png"
          alt="Fresh pastries"
          width={600}
          height={500}
          className="rounded-3xl w-full h-auto object-cover"
          priority
        />
      </div>
    </section>
  );
}
