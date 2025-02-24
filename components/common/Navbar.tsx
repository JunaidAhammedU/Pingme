import { SignOutButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <nav className="bg-gray-200 p-4">
      <div className="container mx-auto flex justify-end">
        <SignOutButton>
          <button className="bg-red-500 text-white p-2 rounded">
            Sign Out
          </button>
        </SignOutButton>
      </div>
    </nav>
  );
}
