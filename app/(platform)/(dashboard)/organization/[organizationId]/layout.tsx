import OrgControl from "./_components/organization-control";

const OrganizationIdLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<OrgControl></OrgControl>
			{children}
		</>
	);
};

export default OrganizationIdLayout;
