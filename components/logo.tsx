import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
const headingFont = localFont({
	src: "../public/fonts/font.woff2",
});
const Logo = () => {
	return (
		<Link href="/">
			<div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
				<Image src="/logo.svg" width={30} height={30} alt="logo" />
				<p
					className={cn("text-lg text-neutral-700 pb-1", headingFont.className)}
				>
					TaskFlow
				</p>
			</div>
		</Link>
	);
};

export default Logo;
