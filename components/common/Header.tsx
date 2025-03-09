import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto">
        <Link href="/" className="text-xl font-bold">
          Pingme
        </Link>
        <div className="space-x-4">
          <Link href="/about">About</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/dashboard">Dashboard</Link>
        </div>
      </nav>
    </header>
  );
}
