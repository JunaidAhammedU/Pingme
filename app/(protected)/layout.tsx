import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/nextjs";
// import Sidebar from '@/components/common/Sidebar';
// import Navbar from '@/components/common/Navbar';

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <SignedIn>
        <div className="flex">
          {/* <Sidebar /> */}
          <div className="flex-1">
            {/* <Navbar /> */}
            {children}
          </div>
        </div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </ClerkProvider>
  );
}
