import { auth } from "@clerk/nextjs";

const OrganizationIdPage = ({
	params,
}: {
	params: { organizationId: string };
}) => {
	const { organizationId } = params;
	const { userId, orgId } = auth();
	return <div>selected org id: {organizationId}</div>;
};

export default OrganizationIdPage;
