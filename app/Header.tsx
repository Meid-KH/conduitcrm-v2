import React, { FC, MouseEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { classNames } from "utils/classNames";
import { Logo, LogoLarge } from "components/Logo";
import { FaUserAlt, FaFilter, FaServer } from "react-icons/fa";
import { AiFillDollarCircle, AiFillCheckCircle } from "react-icons/ai";
import { IoFlash } from "react-icons/io5";
import { BsFillChatSquareTextFill } from "react-icons/bs";
import { useUIContext } from "hooks/useUI";
import { VscClose } from "react-icons/vsc";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import {
	disableBodyScroll,
	enableBodyScroll,
	clearAllBodyScrollLocks,
} from "body-scroll-lock";

interface IMenuItem {
	label: string;
	url: string;
	className?: string;
}
interface ISubMenuItem {
	icon: React.ReactNode;
	title: string;
	url: string;
	description: string;
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
	const FeaturesData: ISubMenuItem[] = [
		{
			icon: (
				<FaUserAlt className="flex-shrink-0 w-6 h-6 text-primary group-scope-hover:text-light" />
			),
			title: "CRM",
			url: "/crm",
			description:
				"Simplify Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius maxime ullam nesciunt, atque sint porro eum cumque fugit rem minima libero, repellendus ipsa architecto, commodi fugiat deserunt minus tempora qui",
		},
		{
			icon: (
				<FaFilter className="flex-shrink-0 w-6 h-6 text-primary group-scope-hover:text-light" />
			),
			title: "Pipelines",
			url: "/pipelines",
			description:
				"Simplify Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius maxime ullam nesciunt, atque sint porro eum cumque fugit rem minima libero, repellendus ipsa architecto, commodi fugiat deserunt minus tempora qui",
		},
		{
			icon: (
				<AiFillDollarCircle className="flex-shrink-0 w-6 h-6 text-primary group-scope-hover:text-light" />
			),
			title: "Deals",
			url: "#",
			description:
				"Simplify Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius maxime ullam nesciunt, atque sint porro eum cumque fugit rem minima libero, repellendus ipsa architecto, commodi fugiat deserunt minus tempora qui",
		},
		{
			icon: (
				<FaServer className="flex-shrink-0 w-6 h-6 text-primary group-scope-hover:text-light" />
			),
			title: "Dynamic Forms",
			url: "#",
			description:
				"Simplify Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius maxime ullam nesciunt, atque sint porro eum cumque fugit rem minima libero, repellendus ipsa architecto, commodi fugiat deserunt minus tempora qui",
		},
		{
			icon: (
				<IoFlash className="flex-shrink-0 w-6 h-6 text-primary group-scope-hover:text-light" />
			),
			title: "Automation",
			url: "#",
			description:
				"Simplify Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius maxime ullam nesciunt, atque sint porro eum cumque fugit rem minima libero, repellendus ipsa architecto, commodi fugiat deserunt minus tempora qui",
		},
		{
			icon: (
				<BsFillChatSquareTextFill className="flex-shrink-0 w-6 h-6 text-primary group-scope-hover:text-light" />
			),
			title: "Omnichannel Outreach",
			url: "#",
			description:
				"Simplify Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius maxime ullam nesciunt, atque sint porro eum cumque fugit rem minima libero, repellendus ipsa architecto, commodi fugiat deserunt minus tempora qui",
		},
		{
			icon: (
				<AiFillCheckCircle className="flex-shrink-0 w-6 h-6 text-primary group-scope-hover:text-light" />
			),
			title: "Tasks",
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
			<div className="grid grid-cols-4 gap-7 mt-5">
				{FeaturesData.map((item, i) => (
					<Link
						key={i}
						href={item.url}
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
	const [sticky, setSticky] = React.useState(false);
	const [mobileMenu, setMobileMenu] = React.useState(false);

	React.useEffect(() => {
		function handleScroll() {
			if (window.pageYOffset > 250 && !sticky) {
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
				"z-30 px-4 xl:px-8 transition__",
				sticky
					? "py-4 xl:py-6 sticky top-0 bg-skin-200/90 backdrop-blur-lg"
					: "relative py-6 xl:py-10"
			)}
		>
			<Link
				href="/"
				className={classNames(
					"w-28 xl:w-40 absolute left-0 top-0 overflow-hidden"
				)}
			>
				{/* <Logo className="-translate-x-8 -translate-y-8" /> */}
				<LogoLarge
					className={classNames(sticky ? "opacity-0" : "opacity-100")}
				/>
			</Link>
			<div className="container__">
				<nav className="grid grid-cols-12 items-center justify-between gap-6">
					<div className="col-span-2 xl:col-span-4 w-14 flex-shrink-0">
						<Link
							href="/"
							className={classNames(
								"block transition duration-75",
								sticky ? "opacity-100" : "opacity-0"
							)}
						>
							<Logo />
						</Link>
					</div>
					<div className="col-span-10 xl:col-span-8 hidden lg:flex items-center justify-between gap-6">
						<Menu />
					</div>
					<div className="col-span-10 lg:hidden">
						<button
							onClick={() => setMobileMenu(!mobileMenu)}
							className="p-2 -mr-2__ block ml-auto rounded focus:ring focus:ring-primary"
						>
							{mobileMenu ? (
								<VscClose className="w-8 h-8" />
							) : (
								<HiOutlineMenuAlt4 className="w-8 h-8" />
							)}
						</button>
					</div>
				</nav>
			</div>
			{mobileMenu && (
				<MobileMenu closeMenu={() => setMobileMenu(false)} />
			)}
		</header>
	);
};

const LinkItem: FC<IMenuItem> = ({ label, url, className }) => {
	return (
		<Link
			href={url}
			className={classNames(
				"block px-6 py-4 text-center font-medium",
				"border-b-2 border-transparent transition___",
				"group-hover:border-primary group-hover:bg-skin-200",
				className
			)}
		>
			{label}
		</Link>
	);
};

const Menu = () => {
	const { lockBody, unLockBody } = useUIContext();
	const [sticky, __] = React.useState(false);
	return (
		<>
			<ul
				className={classNames(
					"flex gap-4 justify-between",
					"flex-col lg:flex-row items-start lg:items-center"
				)}
			>
				{MenuItems.map((item, i) => (
					<li
						key={i}
						className={classNames("group")}
						onMouseEnter={() => item.megaMenu && lockBody()}
						onMouseLeave={() => item.megaMenu && unLockBody()}
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
							"bg-primary border border-primary",
							"hover:bg-skin-200 hover:border-skin-light"
						)}
					>
						Register
					</Link>
				</li>
			</ul>
		</>
	);
};

const MobileMenu: FC<{ open?: boolean; closeMenu: () => void }> = ({
	open = false,
	closeMenu,
}) => {
	const { lockBody, unLockBody } = useUIContext();
	const [sticky, __] = React.useState(false);
	const ref = React.useRef() as React.MutableRefObject<HTMLElement>;

	React.useEffect(() => {
		lockBody();
		// if (ref.current) disableBodyScroll(ref.current);
		document.body.classList.add("overflow-hidden");

		// Alert if clicked on outside of element
		function handleClickOutside(event: Event) {
			const { target } = event;
			if (ref.current && !ref.current.contains(target as HTMLElement)) {
				closeMenu();
			}
		}
		// Bind the event listener
		document.addEventListener("click", handleClickOutside);
		return () => {
			unLockBody();
			document.body.classList.remove("overflow-hidden");

			// clearAllBodyScrollLocks();
			// enableBodyScroll(ref.current);
			// // Unbind the event listener on clean up
			document.removeEventListener("click", handleClickOutside);
		};
	}, [ref]);

	return (
		<nav
			ref={ref}
			className={classNames(
				"fixed top-0 left-0",
				"sm:max-w-md w-full h-screen p-4 sm:p-8",
				"bg-skin-200/80 backdrop-blur-xl flex flex-col"
			)}
		>
			<div className="text-xl fontbold uppercase tracking-wide mb-12">
				<button
					onClick={() => closeMenu()}
					className="flex items-center gap-1 px-1 py-3 border___ rounded-full ml-auto opacity-90 hover:opacity-100"
				>
					<span className="text-xs uppercase tracking-wider font-medium">
						Close menu
					</span>
					<VscClose className="w-8 h-8" />
				</button>
			</div>
			<div className="flex-1 flex flex-col gap-8 justify-between overflow-y-auto">
				<ul className="flex flex-col gap-6__">
					{MenuItems.map((item, i) => (
						<li
							key={i}
							className={classNames("group")}
							// onMouseEnter={() => item.megaMenu && lockBody()}
							// onMouseLeave={() => item.megaMenu && unLockBody()}
						>
							<Link
								href={item?.url}
								className={classNames(
									"flex tracking-wide text-left px-6 py-4",
									"hover:bg-skin-light hover:text-skin-100"
								)}
							>
								{item?.label}
							</Link>
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
				<ul className="flex flex-col gap-3">
					<li className="group">
						<Link
							href="#"
							className={classNames(
								"block tracking-wide text-center px-6 py-4",
								"bg-skin-100 text-skin-light",
								"hover:bg-skin-100 hover:text-skin-light"
							)}
						>
							Sign In
						</Link>
					</li>
					<li>
						<Link
							href="/pricing"
							className={classNames(
								"px-9 py-4 font-medium block text-center",
								"bg-primary border border-primary",
								"hover:bg-skin-200 hover:border-skin-light"
							)}
						>
							Register
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Header;
