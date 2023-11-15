import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	// the default title will apply on the root page, but when you open a specific page it will change to "something | TaskFlow "as the template
	// instead of doing it manually in each layout, the %s will change dynamically
	title: {
		default: siteConfig.name,
		template: `%s | ${siteConfig.name}`,
	},
	description: siteConfig.description,
	icons: [
		{
			url: "/logo.svg",
			href: "/logo.svg",
		},
	],
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
