import Image from "next/image";

export default function AboutHero() {
  return (
    <>
      <div className="flex flex-row">
        <div className="flex flex-col w-5xl gap-8 mr-20 justify-center">
          <h2 className="text-5xl font-bold">
            Fresh Pastries Delivered to Your Door
          </h2>
          <p>
            At Crumb & Co, we believe every day deserves a little sweetness. Our
            subscription service brings you freshly baked, handcrafted pastries
            delivered regularly straight from our ovens to your home. Whether
            you crave flaky croissants, buttery danishes, or decadent treats, we
            make sure you never miss a delicious moment. Join our bakery family
            and savor the joy of fresh pastries, conveniently delivered with
            love and care. Because every bite should feel like a celebration.
          </p>
        </div>
        <div>
          <Image
            src="/about1.png"
            alt="hero"
            width={600}
            height={500}
            className="rounded-3xl"
          />
        </div>
      </div>
    </>
  );
}
