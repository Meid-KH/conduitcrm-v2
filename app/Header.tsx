import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { classNames } from "utils/classNames";
import { Logo, LogoLarge } from "components/Logo";
import { FaUserAlt, FaFilter } from "react-icons/fa";

interface IMenuItem {
	label: string;
	url: string;
	className?: string;
}

const RessourcesMegamenu = () => {
	const ressourceData = [
		{
			title: "Knowledgebase",
			description:
				"Simplify Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius maxime ullam nesciunt, atque sint porro eum cumque fugit rem minima libero, repellendus ipsa architecto, commodi fugiat deserunt minus tempora qui",
		},
	];
	return (
		<div className="">
			<h2 className="text-sm font-extrabold tracking-wide">
				# RESSOURCES
			</h2>
			<div className="grid grid-cols-4 gap-7 mt-5">
				{ressourceData.map((item, i) => (
					<Link
						key={i}
						href="#"
						className={classNames(
							"flex flex-col gap-4 p-6 text-sm",
							"border border-blueSea rounded-md",
							"group-scope hover:bg-violet [&:hover>svg]:text-light"
						)}
					>
						<h3 className="font-semibold tracking-wider">
							{item.title}
						</h3>
						<p className="tracking-wide leading-normal text-light/80 line-clamp-2">
							{item.description}
						</p>
					</Link>
				))}
			</div>
		</div>
	);
};

const FeaturesMegamenu = () => {
	const FeaturesData = [
		{
			icon: (
				<FaUserAlt className="flex-shrink-0 w-6 h-6 text-primary group-scope-hover:text-light" />
			),
			title: "CRM",
			description:
				"Simplify Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius maxime ullam nesciunt, atque sint porro eum cumque fugit rem minima libero, repellendus ipsa architecto, commodi fugiat deserunt minus tempora qui",
		},
		{
			icon: (
				<FaFilter className="flex-shrink-0 w-6 h-6 text-primary group-scope-hover:text-light" />
			),
			title: "Pipelines",
			description:
				"Simplify Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius maxime ullam nesciunt, atque sint porro eum cumque fugit rem minima libero, repellendus ipsa architecto, commodi fugiat deserunt minus tempora qui",
		},
		{
			icon: (
				<FaFilter className="flex-shrink-0 w-6 h-6 text-primary group-scope-hover:text-light" />
			),
			title: "Deals",
			description:
				"Simplify Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius maxime ullam nesciunt, atque sint porro eum cumque fugit rem minima libero, repellendus ipsa architecto, commodi fugiat deserunt minus tempora qui",
		},
		{
			icon: (
				<FaFilter className="flex-shrink-0 w-6 h-6 text-primary group-scope-hover:text-light" />
			),
			title: "Dynamic Forms",
			description:
				"Simplify Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius maxime ullam nesciunt, atque sint porro eum cumque fugit rem minima libero, repellendus ipsa architecto, commodi fugiat deserunt minus tempora qui",
		},
		{
			icon: (
				<FaFilter className="flex-shrink-0 w-6 h-6 text-primary group-scope-hover:text-light" />
			),
			title: "Automation",
			description:
				"Simplify Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius maxime ullam nesciunt, atque sint porro eum cumque fugit rem minima libero, repellendus ipsa architecto, commodi fugiat deserunt minus tempora qui",
		},
		{
			icon: (
				<FaFilter className="flex-shrink-0 w-6 h-6 text-primary group-scope-hover:text-light" />
			),
			title: "Omnichannel Outreach",
			description:
				"Simplify Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius maxime ullam nesciunt, atque sint porro eum cumque fugit rem minima libero, repellendus ipsa architecto, commodi fugiat deserunt minus tempora qui",
		},
		{
			icon: (
				<FaFilter className="flex-shrink-0 w-6 h-6 text-primary group-scope-hover:text-light" />
			),
			title: "Tasks",
			description:
				"Simplify Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius maxime ullam nesciunt, atque sint porro eum cumque fugit rem minima libero, repellendus ipsa architecto, commodi fugiat deserunt minus tempora qui",
		},
	];
	return (
		<div className="">
			<h2 className="text-sm font-extrabold tracking-wide">
				# RESSOURCES
			</h2>
			<div className="grid grid-cols-4 gap-7 mt-5">
				{FeaturesData.map((item, i) => (
					<Link
						key={i}
						href="#"
						className={classNames(
							"flex gap-4 p-6 text-sm",
							"border border-blueSea rounded-md",
							"group-scope hover:bg-violet [&:hover>svg]:text-light"
						)}
					>
						{item.icon}
						<div className="space-y-2.5">
							<h3 className="font-semibold tracking-wider">
								{item.title}
							</h3>
							<p className="tracking-wide leading-normal text-light/80 line-clamp-2">
								{item.description}
							</p>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

const MenuItems = [
	{
		label: "Features",
		url: "#",
		megaMenu: <FeaturesMegamenu />,
	},
	{
		label: "Pricing",
		url: "/pricing",
	},
	{
		label: "Resources",
		url: "#",
		megaMenu: <RessourcesMegamenu />,
	},
	{
		label: "Contact",
		url: "/contact",
	},
];

const Header = () => {
	return (
		<header className={classNames("relative", "py-10 px-8")}>
			<Link
				href="/"
				className={classNames(
					"w-48 absolute left-0 top-0 overflow-hidden"
				)}
			>
				{/* <Logo className="-translate-x-8 -translate-y-8" /> */}
				<LogoLarge />
			</Link>
			<div className="container">
				<nav className="flex items-center justify-between gap-6">
					<div className="w-14">
						<Link href="/" className={classNames("opacity-0")}>
							<Logo />
						</Link>
					</div>
					<ul className="flex items-center gap-4 justify-between">
						{MenuItems.map((item, i) => (
							<li key={i} className={classNames("group")}>
								<LinkItem url={item?.url} label={item?.label} />
								{/* megamenu - wrapper */}
								{item.megaMenu && (
									<div
										className={classNames(
											"absolute z-10 top-[calc(100%-40px)] left-0",
											"bg-skin-200/90 py-8 backdrop-blur__",
											"w-full h-[50vh] hidden group-hover:block"
										)}
									>
										<div className="container">
											{item.megaMenu && item.megaMenu}
										</div>
									</div>
								)}
							</li>
						))}
					</ul>
					<ul className="flex items-center justify-between gap-6">
						<li className="group">
							<LinkItem url="/" label="Sign In" />
						</li>
						<li>
							<Link
								href="/pricing"
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

const LinkItem: FC<IMenuItem> = ({ label, url }) => {
	return (
		<Link
			href={url}
			className={classNames(
				"block px-6 py-4 text-center font-medium",
				"border-b-2 border-transparent transition___",
				"group-hover:border-primary group-hover:bg-skin-200"
			)}
		>
			{label}
		</Link>
	);
};

export default Header;
