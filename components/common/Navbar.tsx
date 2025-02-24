import { UserButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <nav className="bg-gray-200 p-4">
      <div className="container mx-auto flex justify-end">
        <UserButton />
      </div>
    </nav>
  );
}
