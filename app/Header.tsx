import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { classNames } from "utils/classNames";
import { Logo, LogoLarge } from "components/Logo";

interface IMenuItem {
	label: string;
	url: string;
	className?: string;
}

const MenuItems = [
	{
		label: "Features",
		url: "/",
	},
	{
		label: "Pricing",
		url: "/",
	},
	{
		label: "Resources",
		url: "/",
	},
	{
		label: "Contact",
		url: "/",
	},
];

const LinkItem: FC<IMenuItem> = ({ label, url }) => {
	return (
		<Link
			href={url}
			className={classNames(
				"block px-6 py-4 text-center font-medium",
				"border-b-2 border-transparent transition",
				"hover:border-primary hover:bg-skin-200"
			)}
		>
			{label}
		</Link>
	);
};
const Header = () => {
	return (
		<header className={classNames("relative", "py-10 px-8")}>
			<span
				className={classNames(
					"w-48 absolute left-0 top-0 overflow-hidden"
				)}
			>
				{/* <Logo className="-translate-x-8 -translate-y-8" /> */}
				<LogoLarge />
			</span>
			<div className="container">
				<nav className="flex items-center justify-between gap-6">
					<div className="w-14">
						<Link href="/" className={classNames("opacity-0")}>
							<Logo />
						</Link>
					</div>
					<ul className="flex items-center gap-4 justify-between">
						{MenuItems.map((item, i) => (
							<li key={i}>
								<LinkItem url={item?.url} label={item?.label} />
							</li>
						))}
					</ul>
					<ul className="flex items-center justify-between gap-6">
						<li>
							<LinkItem url="/" label="Sign In" />
						</li>
						<li>
							<Link
								href="/"
								className={classNames(
									"px-9 py-4 font-medium",
									"bg-primary border-2 border-primary hover:bg-skin-200"
								)}
							>
								Register
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
