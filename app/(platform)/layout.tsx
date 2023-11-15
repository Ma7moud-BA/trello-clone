import { ClerkProvider } from "@clerk/nextjs";

const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		// in general the ClerkProvider should be in the global layout but since i know for sure iam only gonna need it in the platform section of the website its ok to put it here
		<ClerkProvider>{children}</ClerkProvider>
	);
};

export default PlatformLayout;
