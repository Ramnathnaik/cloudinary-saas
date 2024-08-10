# Cloudinary SAAS Application

## Setup

1. DaisyUI

- Install daisyui package
- Add the plugin and theme in tailwwind.config.ts file

```typescript
plugins: [require("daisyui")],
  daisyui: {
    themes: ["dark"],
  },
```

Doc: https://daisyui.com/docs/install/

2. Setup Clerk for authentication and authorization

- Install clerk package - npm install @clerk/nextjs and follow the documentation
- We will configure our own middleware

```typescript
const isPublicRoute = createRouteMatcher(["/signin", "/signup", "/", "/home"]);

const isPublicApiRoute = createRouteMatcher(["/api/videos"]);

export default clerkMiddleware((auth, req) => {
  const { userId } = auth();
  const currentUrl = new URL(req.url);
  const isAccessingHome = currentUrl.pathname === "/home";
  const isAccessingApi = currentUrl.pathname.startsWith("/api");

  //If user is authenticated and accessing a public route but not the dashboard
  if (userId && isPublicRoute(req) && !isAccessingHome) {
    return NextResponse.redirect(new URL("/home", req.url));
  }

  //not authenticated
  if (!userId) {
    //user is not authenticated and trying to access a protected route
    if (!isPublicRoute(req) && !isPublicApiRoute(req)) {
      return NextResponse.redirect(new URL("/signin", req.url));
    }
    //user is not authenticated and trying to access a protected API route
    if (isAccessingApi && !isPublicApiRoute(req)) {
      return NextResponse.redirect(new URL("/signin", req.url));
    }
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
```

Doc: https://clerk.com/docs/quickstarts/nextjs

3. Setup Clerk Authentication and Authorization

- Create a new application in Clerk
- Get the API key and paste it in .env file
- We can use the components given by Clerk for signup and signin
- Refer Doc: https://clerk.com/docs/references/nextjs/custom-signup-signin-pages?_gl=1*1boqxdq*_gcl_au*MTU3NTAyNjYwOS4xNzIzMjc3Mjkx*_ga*MTU4MTAwNTc1My4xNzIzMzA5ODc0*_ga_1WMF5X234K*MTcyMzMwOTg3My4xLjEuMTcyMzMxMDA3NS4wLjAuMA..
