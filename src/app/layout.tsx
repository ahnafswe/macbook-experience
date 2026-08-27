import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Apple MacBook Experience",
	description:
		"MacBook Experience | A recreated experience of Apple's MacBook Pro webpage.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html
			lang="en"
			className={`h-full antialiased`}
		>
			<body>{children}</body>
		</html>
	);
}
