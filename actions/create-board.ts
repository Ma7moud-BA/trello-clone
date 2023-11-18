"use server";

import { z } from "zod";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
// usually in server component we wont be able to pass functions
// this function will run on the server

const CreateBoard = z.object({
	title: z.string(),
});
export async function create(formData: FormData) {
	const { title } = CreateBoard.parse({
		title: formData.get("title"),
	});
	await db.board.create({ data: { title } });

	revalidatePath("/organization/org_2YG7KdkTP7GrJ6pUgJQAsdMghfW");
}
