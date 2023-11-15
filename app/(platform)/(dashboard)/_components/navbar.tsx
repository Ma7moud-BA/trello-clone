import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { LuPlus } from "react-icons/lu";
import { OrganizationSwitcher } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";
const Navbar = () => {
	return (
		<nav className="fixed z-50 px-4 top-0 w-full h-14 border-b shadow-sm bg-white flex items-center">
			<div className="flex items-center gap-x-4">
				<div className="hidden md:flex">
					<Logo></Logo>
				</div>
				<Button
					size={"sm"}
					variant={"primary"}
					className="rounded-sm hidden md:block h-auto py-1.5 px-2"
				>
					Create
				</Button>
				<Button
					size={"sm"}
					variant={"primary"}
					className="rounded-sm block md:hidden "
				>
					<LuPlus />
				</Button>
			</div>
			<div className="ml-auto flex items-center gap-x-2">
				<OrganizationSwitcher
					hidePersonal
					afterCreateOrganizationUrl="/organization/:id"
					afterSelectOrganizationUrl="/organization/:id"
					afterLeaveOrganizationUrl="/select-org"
					appearance={{
						elements: {
							rootBox: {
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							},
						},
					}}
				/>
				<UserButton
					afterSignOutUrl="/"
					appearance={{
						elements: {
							avatarBox: {
								height: "100",
								width: "100",
							},
						},
					}}
				/>
			</div>
		</nav>
	);
};

export default Navbar;
