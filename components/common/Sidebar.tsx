import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-100 p-4">
      <nav>
        <Link href="/dashboard" className="block p-2 hover:bg-gray-200">
          Dashboard
        </Link>
        <Link href="/chatroom" className="block p-2 hover:bg-gray-200">
          Chatroom
        </Link>
      </nav>
    </aside>
  );
}
