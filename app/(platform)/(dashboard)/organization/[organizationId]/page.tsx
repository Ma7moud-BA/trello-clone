import { create } from "@/actions/create-board";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import Board from "../../_components/board";

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
			<form action={create}>
				<input
					type="text"
					id="title"
					name="title"
					required
					placeholder="Enter a board title"
					className="border-black border p-1"
				/>
				<Button type="submit">Submit</Button>
			</form>
			<div className="space-y-2">
				{boards.map((board) => (
					<Board id={board.id} key={board.id} title={board.title} />
				))}
			</div>
		</div>
	);
};

export default OrganizationIdPage;
