import { LogoWhite } from "components/Logo";
import Link from "next/link";
import { classNames } from "utils/classNames";

const companyLinks = [
	{
		label: "Home",
		url: "/",
		external: false,
	},
	{
		label: "Careers",
		url: "https://google.com",
		external: true,
	},
	{
		label: "Pricing",
		url: "/",
		external: false,
	},
	{
		label: "Contact us",
		url: "/",
		external: false,
	},
];

const usefulLinks = [
	{
		label: "Docs",
		url: "/",
		external: false,
	},
	{
		label: "Blog",
		url: "/",
		external: false,
	},
	{
		label: "Privacy",
		url: "/",
		external: false,
	},
	{
		label: "Terms",
		url: "/",
		external: false,
	},
	{
		label: "Status",
		url: "/",
		external: false,
	},
];
const socialLinks = [
	{
		label: "LinkedIn",
		url: "https://linkedin.com",
		external: true,
	},
	{
		label: "Facebook",
		url: "https://facebook.com",
		external: true,
	},
	{
		label: "Twitter",
		url: "https://twitter.com",
		external: true,
	},
	{
		label: "YouTube",
		url: "https://youtube.com",
		external: true,
	},
];

const Footer = () => {
	const Company = () => (
		<div className="space-y-5">
			<h4 className="text-2xl font-bold tracking-wide pb-3 border-b border-light/20 sm:w-max">
				Company
			</h4>
			<ul className="space-y-3">
				{companyLinks.map((item, i) => (
					<li key={i}>
						{item?.external ? (
							<a
								className="tracking-wide underline-offset-4 hover:underline"
								href={item?.url}
								target="_blank"
								rel="noopener, noreferrer"
							>
								{item?.label}
							</a>
						) : (
							<Link
								className="tracking-wide underline-offset-2 hover:underline"
								href={item?.url}
							>
								{item?.label}
							</Link>
						)}
					</li>
				))}
			</ul>
		</div>
	);

	const UsefulLinks = () => (
		<div className="space-y-5">
			<h4 className="text-2xl font-bold tracking-wide pb-3 border-b border-light/20 sm:w-max">
				Useful Links
			</h4>
			<ul className="space-y-3">
				{usefulLinks.map((item, i) => (
					<li key={i}>
						{item?.external ? (
							<a
								className="tracking-wide underline-offset-4 hover:underline"
								href={item?.url}
								target="_blank"
								rel="noopener, noreferrer"
							>
								{item?.label}
							</a>
						) : (
							<Link
								className="tracking-wide underline-offset-4 hover:underline"
								href={item?.url}
							>
								{item?.label}
							</Link>
						)}
					</li>
				))}
			</ul>
		</div>
	);

	const Social = () => (
		<div className="space-y-5">
			<h4 className="text-2xl font-bold tracking-wide pb-3 border-b border-light/20 sm:w-max">
				Social Links
			</h4>
			<ul className="space-y-3">
				{socialLinks.map((item, i) => (
					<li key={i}>
						<Link
							className="tracking-wide underline-offset-2 hover:underline"
							href={item?.url}
						>
							{item?.label}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);

	return (
		<>
			<Outro />
			<footer className="pt-12 lg:pt-20 border-t border-light/20">
				<div className="container">
					<div className="grid grid-cols-12 gap-8 gap-y-16">
						<div className="col-span-full lg:col-span-4 xl:col-span-6 space-y-8">
							<div className="w-20 flex gap-6 items-center">
								<LogoWhite className="w-16 sm:w-20 flex-shrink-0" />
								<span className="text-5xl font-black tracking-wider">
									Conduit
								</span>
							</div>
							<p className="text-lg font-light tracking-wide leading-normal xl:max-w-sm">
								The first all-in-one sales platform designed to
								provide companies an easy way to access and
								collaborate with the top 1% of sales talent,
								on-demand.
							</p>
						</div>
						<div className="col-span-full lg:col-span-8 xl:col-span-6 grid sm:grid-cols-2 md:grid-cols-3 gap-10 pt-6">
							<Company />
							<UsefulLinks />
							<Social />
						</div>
					</div>
				</div>
				<section className="py-8 mt-8 lg:py-10 lg:mt-10 border-t border-light/20">
					<p className="text-sm tracking-wide text-center">
						All rights reserved @ ConduitCRM LLC
					</p>
				</section>
			</footer>
		</>
	);
};

const Outro = () => (
	<section className="relative my-20 md:my-40 xl:my-52 py-24 bg-skin-200">
		<span className="radial radial--purpleBlue"></span>
		<div className="container">
			<div className="grid place-items-center gap-10 text-center">
				<h3 className="text-5xl md:text-6xl lg:text-7xl leading-tight">
					Get results.
					<span className="text-light block lg:text-8xl font-extrabold">
						Drive revenue.
					</span>
				</h3>
				<Link
					href="/pricing"
					className={classNames(
						"px-8 py-5 text-center text-xl tracking-wide text-skin-200 bg-light"
					)}
				>
					Get Started Today
				</Link>
			</div>
		</div>
	</section>
);

export default Footer;
