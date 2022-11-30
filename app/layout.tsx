import { Roboto } from "@next/font/google";
import "styles/main.scss";
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
		<html>
			<head />
			<body
				className={classNames(
					roboto.variable,
					"font-main",
					" text-light bg-gradient-to-b from-skin-100 to-skin-200"
				)}
			>
				<Header />
				<main className="min-h-screen">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
