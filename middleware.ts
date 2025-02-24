import { clerkMiddleware } from "@clerk/nextjs/server";

const publicRoutes = ["/", "/about", "/faq", "/sign-in(.*)", "/sign-up(.*)"];

export default clerkMiddleware(async (auth, request) => {
  const isPublicRoute = publicRoutes.some((route) =>
    new RegExp(`^${route}$`).test(request.nextUrl.pathname)
  );
  if (!isPublicRoute) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};

// previous code ===>>> :

// import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// // Define public routes (unprotected and auth routes)
// const isPublicRoute = createRouteMatcher([
//   '/',                     // Landing page
//   '/about',               // About page
//   '/faq',                 // FAQ page
//   '/sign-in(.*)',        // Sign-in page and subroutes
//   '/sign-up(.*)',        // Sign-up page and subroutes
// ]);

// // Define protected routes (optional, for clarity, but not strictly necessary with Clerk)
// const isProtectedRoute = createRouteMatcher([
//   '/dashboard(.*)',       // Dashboard and subroutes
//   '/chatroom(.*)',       // Chatroom and subroutes
// ]);

// export default clerkMiddleware((auth, req) => {
//   if (isProtectedRoute(req)) {
//     auth().protect(); // Ensure authentication for protected routes
//   }

//   // Allow public routes without protection
//   if (isPublicRoute(req)) {
//     return;
//   }

//   // For any other routes, protect them (fallback)
//   auth().protect();
// });

// export const config = {
//   matcher: [
//     // Match all routes except static files, API routes, and Next.js internals
//     '/((?!_next|[^?]*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|woff|woff2|ttf|css|js|csv|docx?|xlsx?|zip|webmanifest)).*)',
//     '/(api|trpc)(.*)',     // Optionally protect API routes if needed
//   ],
// };
