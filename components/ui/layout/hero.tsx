import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className="relative w-screen h-screen">
        <Image fill className="object-cover" src="/heroImg.png" alt="bread" />
      </div>
    </>
  );
}

