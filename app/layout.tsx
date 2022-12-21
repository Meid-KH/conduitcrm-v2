"use client";
import "styles/main.scss";
import { Roboto } from "@next/font/google";
import { UIContextProvider, useUIContext } from "hooks/useUI";
import { classNames } from "utils/classNames";
import Footer from "./Footer";
import Header from "./Header";

const roboto = Roboto({
	subsets: ["latin"],
	weight: ["300", "400", "500", "700", "900"],
	variable: "--font-roboto",
	preload: true,
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<UIContextProvider>
			<AppDOM children={children} />
		</UIContextProvider>
	);
}

const AppDOM = ({ children }: { children: React.ReactNode }) => {
	const { bodyLocked } = useUIContext();
	return (
		<html className="scroll-smooth">
			<head />
			<body
				className={classNames(
					roboto.variable,
					"font-main",
					"relative text-light bg-gradient-to-b from-skin-100 to-skin-200"
					// bodyLocked && "overflow-hidden"
				)}
			>
				<Header />
				<main className={classNames("min-h-screen")}>{children}</main>
				<Footer />
				<BackDrop />
			</body>
		</html>
	);
};
const BackDrop = () => {
	const { bodyLocked } = useUIContext();
	return (
		<div
			className={classNames(
				"absolute inset-0 bg-skin-100/40 transition-all duration-75",
				bodyLocked
					? "z-20 opacity-100 backdrop-blur-lg"
					: "-z-20 opacity-0"
			)}
		></div>
	);
};
