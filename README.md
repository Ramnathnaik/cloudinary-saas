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
