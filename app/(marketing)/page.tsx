import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LuMedal } from "react-icons/lu";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
const headingFont = localFont({
	src: "../../public/fonts/font.woff2",
});
const textFont = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const MarketingPage = () => {
	return (
		<div className="flex items-center justify-center flex-col ">
			<div
				className={cn(
					"flex items-center justify-center flex-col",
					headingFont.className
				)}
			>
				<div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
					<LuMedal className="h-6 w-6 mr-2" />
					Premier Task Management Solution
				</div>
				<h1 className="font-semibold text-3xl md:text-6xl text-center text-neutral-800 mb-6">
					TaskFlow empowers teams forward.
				</h1>
				<div className="text-3xl  md:text-6xl bg-gradient-to-r from-emerald-600 to-green-600 text-white px-4 p-2 rounded-md py-4 w-fit">
					Inspire Coordination.
				</div>
			</div>
			<div
				className={cn(
					"text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
					textFont.className
				)}
			>
				Effortlessly collaborate, manage projects, and achieve new heights of
				productivity. Whether in corporate towers or home offices, Taskify
				adapts to the unique rhythm of your team&apos;s work, empowering you to
				accomplish it all.
			</div>
			<Button className="mt-6" size={"lg"} asChild>
				<Link href={"/sign-up"}>Get TaskFlow</Link>
			</Button>
		</div>
	);
};

export default MarketingPage;
