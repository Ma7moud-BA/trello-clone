"use client";

import { Input } from "@/components/ui/input";
import { useFormStatus } from "react-dom";

type FormInputProps = {
	errors?: { title?: string[] };
};

const FormInput = ({ errors }: FormInputProps) => {
	const { pending } = useFormStatus();
	return (
		<div>
			<Input
				type="text"
				id="title"
				name="title"
				required
				disabled={pending}
				placeholder="Enter a board title"
			/>
			{errors?.title ? (
				<div>
					{errors.title.map((error: string) => {
						return (
							<p key={error} className="text-rose-500">
								{error}
							</p>
						);
					})}
				</div>
			) : null}
		</div>
	);
};

export default FormInput;
