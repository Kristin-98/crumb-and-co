import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="bg-slate-900 text-white flex gap-4 justify-center">
        <Link href={""}>Crumb & Co</Link>
        <Link href={""}>Home</Link>
        <Link href={""}>About</Link>
        <Link href={""}>Cart</Link>
      </footer>
    </>
  );
}
