import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { classNames } from "utils/classNames";
import { Logo, LogoLarge } from "components/Logo";
import { FaUserAlt, FaFilter, FaServer } from "react-icons/fa";
import { AiFillDollarCircle, AiFillCheckCircle } from "react-icons/ai";
import { IoFlash } from "react-icons/io5";
import { BsFillChatSquareTextFill } from "react-icons/bs";
import { useUIContext } from "hooks/useUI";

interface IMenuItem {
	label: string;
	url: string;
	className?: string;
}

const RessourcesMegamenu = () => {
	const ressourceData = [
		{
			title: "Knowledgebase",
			url: "#",
			description:
				"Simplify Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius maxime ullam nesciunt, atque sint porro eum cumque fugit rem minima libero, repellendus ipsa architecto, commodi fugiat deserunt minus tempora qui",
		},
		{
			title: "Videos",
			url: "#",
			description:
				"Simplify Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius maxime ullam nesciunt, atque sint porro eum cumque fugit rem minima libero, repellendus ipsa architecto, commodi fugiat deserunt minus tempora qui",
		},
		{
			title: "About us",
			url: "#",
			description:
				"Simplify Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius maxime ullam nesciunt, atque sint porro eum cumque fugit rem minima libero, repellendus ipsa architecto, commodi fugiat deserunt minus tempora qui",
		},
		{
			title: "Blog",
			url: "#",
			description:
				"Simplify Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius maxime ullam nesciunt, atque sint porro eum cumque fugit rem minima libero, repellendus ipsa architecto, commodi fugiat deserunt minus tempora qui",
		},
	];
	return (
		<div className="">
			<h2 className="text-sm font-extrabold tracking-wide">
				# RESSOURCES
			</h2>
			<div className="grid grid-cols-12 gap-10 mt-5">
				<div className="col-span-6 grid grid-cols-2 gap-7">
					{ressourceData.map((item, i) => (
						<Link
							key={i}
							href={item.url}
							className={classNames(
								"flex flex-col gap-2 p-6 text-sm",
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
				<div className="col-span-6">
					<iframe
						className="aspect-video w-full border border-blueSea rounded-md"
						src="https://www.youtube.com/embed/4yuXVwwVWJE"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					></iframe>
				</div>
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
				<AiFillDollarCircle className="flex-shrink-0 w-6 h-6 text-primary group-scope-hover:text-light" />
			),
			title: "Deals",
			description:
				"Simplify Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius maxime ullam nesciunt, atque sint porro eum cumque fugit rem minima libero, repellendus ipsa architecto, commodi fugiat deserunt minus tempora qui",
		},
		{
			icon: (
				<FaServer className="flex-shrink-0 w-6 h-6 text-primary group-scope-hover:text-light" />
			),
			title: "Dynamic Forms",
			description:
				"Simplify Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius maxime ullam nesciunt, atque sint porro eum cumque fugit rem minima libero, repellendus ipsa architecto, commodi fugiat deserunt minus tempora qui",
		},
		{
			icon: (
				<IoFlash className="flex-shrink-0 w-6 h-6 text-primary group-scope-hover:text-light" />
			),
			title: "Automation",
			description:
				"Simplify Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius maxime ullam nesciunt, atque sint porro eum cumque fugit rem minima libero, repellendus ipsa architecto, commodi fugiat deserunt minus tempora qui",
		},
		{
			icon: (
				<BsFillChatSquareTextFill className="flex-shrink-0 w-6 h-6 text-primary group-scope-hover:text-light" />
			),
			title: "Omnichannel Outreach",
			description:
				"Simplify Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius maxime ullam nesciunt, atque sint porro eum cumque fugit rem minima libero, repellendus ipsa architecto, commodi fugiat deserunt minus tempora qui",
		},
		{
			icon: (
				<AiFillCheckCircle className="flex-shrink-0 w-6 h-6 text-primary group-scope-hover:text-light" />
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
						<div className="space-y-2">
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
	const { lockBody, unLockBody } = useUIContext();
	const [sticky, setSticky] = React.useState(false);
	React.useEffect(() => {
		function handleScroll() {
			if (window.pageYOffset > 250) {
				setSticky(true);
			} else {
				setSticky(false);
			}
		}

		window.addEventListener("scroll", handleScroll, false);
		return () => window.removeEventListener("scroll", handleScroll, false);
	}, []);

	return (
		<header
			className={classNames(
				"z-30 px-8 transition-all duration-75",
				sticky
					? "py-6 sticky top-0 bg-skin-200/70 backdrop-blur-lg"
					: "relative py-10"
			)}
		>
			<Link
				href="/"
				className={classNames(
					"w-48 absolute left-0 top-0 overflow-hidden"
				)}
			>
				{/* <Logo className="-translate-x-8 -translate-y-8" /> */}
				<LogoLarge
					className={classNames(sticky ? "opacity-0" : "opacity-100")}
				/>
			</Link>
			<div className="container">
				<nav className="flex items-center justify-between gap-6">
					<div className="w-14">
						<Link
							href="/"
							className={classNames(
								"transition duration-75",
								sticky ? "opacity-100" : "opacity-0"
							)}
						>
							<Logo />
						</Link>
					</div>
					<ul className="flex items-center gap-4 justify-between">
						{MenuItems.map((item, i) => (
							<li
								key={i}
								className={classNames("group")}
								onMouseEnter={() => item.megaMenu && lockBody()}
								onMouseLeave={() =>
									item.megaMenu && unLockBody()
								}
							>
								<LinkItem url={item?.url} label={item?.label} />
								{/* megamenu - wrapper */}
								{item.megaMenu && (
									<div
										className={classNames(
											"absolute z-10 left-0",
											sticky
												? "top-[calc(100%-1.5rem)]"
												: "top-[calc(100%-2.5rem)]",
											"bg-skin-200/90 py-10 backdrop-blur__",
											"w-full h-[50vh]__ hidden group-hover:block"
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
