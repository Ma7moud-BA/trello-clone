"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import { useOrganizationList } from "@clerk/nextjs";
// ! this component is to fix an issue where if you paste a url to another organization it wont change the selected org, so this component is to make sure to that the selected org is active.
const OrgControl = () => {
	const { organizationId } = useParams();
	const { setActive } = useOrganizationList();
	useEffect(() => {
		if (!setActive) return;
		setActive({
			organization: organizationId as string,
		});
	}, [setActive, organizationId]);
	return null;
};

export default OrgControl;
