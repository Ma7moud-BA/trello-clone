"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { useMobileSidebar } from "@/hooks/use-mobile-sidebar";
import { Button } from "@/components/ui/button";
import { LuMenu } from "react-icons/lu";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import Sidebar from "./sidebar";

const MobileSidebar = () => {
	const isOpen = useMobileSidebar((state) => state.isOpen);
	const onOpen = useMobileSidebar((state) => state.opOpen);
	const onClose = useMobileSidebar((state) => state.onClose);
	const pathname = usePathname();
	const [isMounted, setIsMounted] = useState<boolean>(false);

	//?:note in next js marking the component as "use client" doesn't mean it only will be rendered on the client, but it will also be rendered at least the first itteration of it , so for this component using the sheet component when it first renders on the server it will have a state of close but on the client side it suddenly become open,
	//? so making the isMounted state is important to prevent any hydration errors by making sure that this component will only be mounted on the client side, useEffect only runs on the client

	useEffect(() => {
		setIsMounted(true);
	}, []);

	//closing the sidebar when ever the pathname changes
	useEffect(() => {
		onClose();
	}, [pathname, onClose]);

	if (!isMounted) {
		return null;
	}

	return (
		<>
			<Button
				onClick={onOpen}
				className="block md:hidden mr-2"
				variant="ghost"
				size="sm"
			>
				<LuMenu />
			</Button>
			<Sheet open={isOpen} onOpenChange={onClose}>
				<SheetContent side="left" className=" p-2 pt-10">
					<Sidebar storageKey="sidebar-mobile-state" />
				</SheetContent>
			</Sheet>
		</>
	);
};

export default MobileSidebar;
