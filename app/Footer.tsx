import { LogoWhite } from "components/Logo";
import Link from "next/link";

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
	return (
		<footer className="py-20 border-t border-light/20">
			<div className="container">
				<div className="grid grid-cols-2 gap-8">
					<div className="space-y-8">
						<div className="w-20 flex gap-6 items-center">
							<LogoWhite className="flex-shrink-0" />
							<span className="text-5xl font-black tracking-wider">
								Conduit
							</span>
						</div>
						<p className="text-lg text-skin-light font-light tracking-wide leading-normal xl:max-w-sm">
							The first all-in-one sales platform designed to
							provide companies an easy way to access and
							collaborate with the top 1% of sales talent,
							on-demand.
						</p>
					</div>
					<div className="grid grid-cols-3 gap-10">
						<div className="space-y-5">
							<h4 className="text-2xl font-bold tracking-wide pb-3 border-b border-light/20">
								Company
							</h4>
							<ul className="space-y-3">
								{companyLinks.map((item, i) => (
									<li key={i}>
										{item?.external ? (
											<a
												className="tracking-wide"
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
						<div className="space-y-5">
							<h4 className="text-2xl font-bold tracking-wide pb-3 border-b border-light/20">
								Useful Links
							</h4>
							<ul className="space-y-3">
								{usefulLinks.map((item, i) => (
									<li key={i}>
										{item?.external ? (
											<a
												className="tracking-wide"
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
						<div className="space-y-5">
							<h4 className="text-2xl font-bold tracking-wide pb-3 border-b border-light/20">
								Social
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
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
