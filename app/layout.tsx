import { Roboto } from "@next/font/google";
import "styles/main.scss";
import { classNames } from "utils/classNames";

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
			<body className={classNames(roboto.variable, "font-main")}>
				{children}
			</body>
		</html>
	);
}
