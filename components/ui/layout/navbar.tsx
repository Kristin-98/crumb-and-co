import Link from "next/link";

export function Navbar() {
  return (
    <>
      <div className="bg-blue-950 justify-around flex p-4 text-white">
        <Link href={""}>Crumb & Co</Link>
        <span className="gap-4 flex">
          <Link href={""}>Home</Link>
          <Link href={""}>Products</Link>
          <Link href={""}>About</Link>
        </span>
        <Link href={""}>🍪</Link>
      </div>
    </>
  );
}
