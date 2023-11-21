import { create } from "@/actions/create-board";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import Board from "../../_components/board";
import Form from "../../_components/form";

const OrganizationIdPage = async ({
	params,
}: {
	params: { organizationId: string };
}) => {
	const { organizationId } = params;
	const { userId, orgId } = auth();
	const boards = await db.board.findMany();
	return (
		<div>
			<Form />
			<div className="space-y-2">
				{boards.map((board) => (
					<Board id={board.id} key={board.id} title={board.title} />
				))}
			</div>
		</div>
	);
};

export default OrganizationIdPage;
