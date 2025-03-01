import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/nextjs";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/common/Sidebar";
import Navbar from "@/components/common/Navbar";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <SignedIn>
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset className="min-h-screen overflow-y-auto bg-[#2e333d]">
            <Navbar />
            {children}
          </SidebarInset>
        </SidebarProvider>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </ClerkProvider>
  );
}
