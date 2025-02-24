import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define which routes are protected
const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)", // Protect dashboard and its subroutes
  "/chatroom(.*)", // Protect chatroom and its subroutes
]);

// Define which routes are public (unprotected)
const isPublicRoute = createRouteMatcher([
  "/", // Landing page
  "/about", // About page
  "/faq", // FAQ page
  "/sign-in", // Sign-in page
  "/sign-up", // Sign-up page
]);

export default clerkMiddleware((auth, req) => {
  // If the route is protected, ensure the user is authenticated
  if (isProtectedRoute(req)) {
    auth().protect();
  }

  // If the route is public or auth-related, allow access without authentication
  if (isPublicRoute(req)) {
    return;
  }

  // For any other routes, redirect to sign-in if not authenticated
  auth().protect();
});

export const config = {
  matcher: [
    // Match all routes except static files, API routes, and Next.js internals
    "/((?!_next|[^?]*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|woff|woff2|ttf|css|js)|api|trpc).*)",
  ],
};
