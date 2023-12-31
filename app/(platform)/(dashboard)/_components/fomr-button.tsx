"use client";

import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

type FormButtonProps = {};

const FormButton = () => {
	const { pending } = useFormStatus();
	return (
		<Button disabled={pending} type="submit">
			Submit
		</Button>
	);
};

export default FormButton;
