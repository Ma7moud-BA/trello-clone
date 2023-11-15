const ClerkLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		// in general the ClerkProvider should be in the global layout but since i know for sure iam only gonna need it in the platform section of the website its ok to put it here
		<div className="flex items-center justify-center  h-screen ">
			{children}
		</div>
	);
};

export default ClerkLayout;
