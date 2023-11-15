import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { NextResponse } from "next/server";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware({
	// this will allow the root page to be visited by non logged in users
	publicRoutes: ["/"],
	// to redirect the user so he now go to the marketing page over and over again
	afterAuth(auth, req) {
		if (auth.userId && auth.isPublicRoute) {
			//to select-org if the user logged in but he didn't select an org.
			let path = "/select-org";
			if (auth.orgId) {
				path = `/organization/${auth.orgId}`;
			}

			const orgSelection = new URL(path, req.url);
			return NextResponse.redirect(orgSelection);
		}
		//if the user is not authenticated , if they attempt to go to a protected route they will have to login first then they will be redirected to the page the want to access, for example if they clicked on a link in the website and that link leads to a  protect page they will have to login first then access the page
		if (!auth.userId && !auth.isPublicRoute) {
			// returnBackUrl:once they login they will redirect to the given url
			// req.url holds the url that the user is trying to access
			return redirectToSignIn({ returnBackUrl: req.url });
		}
		// if the user is logged in and he didn't select an organization, and he is not on the select=org page, force the user to create or join an org
		if (auth.userId && !auth.orgId && req.nextUrl.pathname !== "/select-org") {
			const orgSelection = new URL("/select-org", req.url);
			return NextResponse.redirect(orgSelection);
		}
	},
});

export const config = {
	matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
