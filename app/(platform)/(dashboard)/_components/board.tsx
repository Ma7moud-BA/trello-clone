import { deleteBoard } from "@/actions/delete-board";
import { Button } from "@/components/ui/button";

type Props = {
	title: string;
	id: string;
};
const Board = ({ title, id }: Props) => {
	// this is how to pass parameters to a server function
	const deleteBoardWithId = deleteBoard.bind(null, id);
	return (
		<form
			key={id}
			className="flex  items-center gap-x-2 pt-2"
			action={deleteBoardWithId}
		>
			<div>Board title: {title}</div>
			<Button size={"sm"} type="submit" variant={"destructive"}>
				Delete
			</Button>
		</form>
	);
};

export default Board;
