import {
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { Span } from "next/dist/trace";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { LuActivity, LuCreditCard, LuLayout, LuSettings } from "react-icons/lu";
export type Organization = {
	id: string;
	slug: string;
	imageUrl: string;
	name: string;
};

type NavItemProps = {
	isActive: boolean;
	isExpanded: boolean;
	id: string;
	organization: Organization;
	onExpand: (id: string) => void;
};
const NavItem = ({
	id,
	isActive,
	isExpanded,
	onExpand,
	organization,
}: NavItemProps) => {
	const router = useRouter();
	const pathname = usePathname();
	const routes = [
		{
			label: "Boards",
			icon: <LuLayout className="h-4 w-4 mr-2" />,
			href: `/organization/${organization.id}`,
		},
		{
			label: "Activity",
			icon: <LuActivity className="h-4 w-4 mr-2" />,
			href: `/organization/${organization.id}/activity`,
		},
		{
			label: "Settings",
			icon: <LuSettings className="h-4 w-4 mr-2" />,
			href: `/organization/${organization.id}/settings`,
		},
		{
			label: "Billing",
			icon: <LuCreditCard className="h-4 w-4 mr-2" />,
			href: `/organization/${organization.id}/billing`,
		},
	];
	const handleOnClick = (href: string) => {
		router.push(href);
	};

	return (
		<AccordionItem value={organization.id} className="border-none">
			<AccordionTrigger
				onClick={() => {
					onExpand(organization.id);
				}}
				className={cn(
					"flex items-center gap-x-2 p-1.5 text-neutral-700 rounded-md hover:bg-neutral-500/10 transition text-start no-underline hover:no-underline",
					isActive && !isExpanded && "bg-sky-500/10 text-sky-700"
				)}
			>
				<div className="flex items-center gap-x-2">
					<div className="w-7 h-7 relative">
						<Image
							fill
							src={organization.imageUrl}
							alt="Organization"
							className="rounded-sm object-cover"
						/>
					</div>
					<span className="font-medium text-sm">{organization.name}</span>
				</div>
			</AccordionTrigger>
			<AccordionContent className="pt-1 text-neutral-700 flex flex-col  items-start">
				{routes.map((route) => (
					<Button
						key={route.href}
						size="sm"
						onClick={() => {
							handleOnClick(route.href);
						}}
						variant="ghost"
						className={cn(
							"font-normal pl-10 justify-start w-full ",
							pathname === route.href && "bg-sky-700/10 text-sky-800"
						)}
					>
						{route.icon}
						{route.label}
					</Button>
				))}
			</AccordionContent>
		</AccordionItem>
	);
};

export default NavItem;

NavItem.Skeleton = function SkeletionNavItem() {
	return (
		<div className=" flex items-center gap-x-2">
			<div className="w-10 h-10  relative shrink-0">
				<Skeleton className="h-full w-full absolute"></Skeleton>
			</div>
			<Skeleton className="h-10 w-full"></Skeleton>
		</div>
	);
};
