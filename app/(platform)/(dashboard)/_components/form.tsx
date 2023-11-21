"use client";

import { createBoard } from "@/actions/create-board";

import FormInput from "./form-input";
import FormButton from "./fomr-button";
import { useAction } from "@/hooks/use-action";
import { fileURLToPath } from "url";

const Form = () => {
	const { execute, fieldErrors } = useAction(createBoard, {
		onSuccess: (data) => {
			console.log(data, "Success");
		},
		onError: (error) => {
			console.error(error);
		},
	});
	const handleOnSubmit = (formData: FormData) => {
		const title = formData.get("title") as string;
		execute({ title });
	};
	return (
		<form action={handleOnSubmit}>
			<div className="flex flex-col space-y-2">
				<FormInput errors={fieldErrors} />
			</div>
			<FormButton />
		</form>
	);
};

export default Form;
