"use client";
import React from "react";
import Image from "next/image";
import { classNames } from "utils/classNames";
import { FiCheck } from "react-icons/fi";
import Link from "next/link";

export default function page() {
	return (
		<>
			<Intro />
			<Lead />
			<Crm />
			<Focus />
			<Testimonial />
			<Features />
			<GetResults />
		</>
	);
}

const Intro = () => (
	<section className="my-40">
		<div className="container">
			<div className="text-center space-y-24">
				<h1
					className={classNames(
						"text-7xl",
						"text-transparent bg-clip-text bg-gradient-to-r from-light via-purple to-danger-200"
					)}
				>
					The most advanced platform for the Real Estate industry
				</h1>
				<div className="space-y-2.5">
					<button
						className={classNames(
							"px-8 py-5 text-center text-2xl tracking-wide",
							"text-light bg-primary/80"
						)}
					>
						Get started for free
					</button>
					<p className="text-sm tracking-wide">
						No credit card needed | Press R anytime to register
					</p>
				</div>
			</div>
			<div className="mt-40 relative">
				<span className="absolute -z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-screen scale-125__ radial--purpleBlue"></span>
				<Image
					src="/img/dashboard-intro.png"
					width={1200}
					height={600}
					className="object-cover"
					alt="The most advanced platform for the Real Estate industry"
				/>
			</div>
		</div>
	</section>
);

const Lead = () => (
	<section className="my-40 xl:my-52">
		<div className="container">
			<h2
				className={classNames(
					"text-6xl leading-tight mb-12",
					"text-transparent bg-clip-text bg-gradient-to-r from-danger-300 to-danger-200"
				)}
			>
				Fast. <br />
				Blazingly, fast lead processing.
			</h2>
			<p className="text-lg font-light tracking-wide max-w-2xl lg:ml-auto">
				Conduit helps real estate agents and loan officers to automate
				repetitive actions with an unrivaled lead processing automation
				engine.
			</p>
			<div className="mt-28 relative">
				<span className="absolute -z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] scale-110 radial--purple"></span>
				<div className="grid grid-cols-3 gap-5">
					<div className={classNames("p-10 rounded-lg bg-skin-200")}>
						<h3
							className={classNames(
								"text-2xl font-medium",
								"text-transparent bg-clip-text bg-gradient-to-r from-teal to-primary",
								"mb-10"
							)}
						>
							Lead automation from start to close deal
						</h3>
						<Image
							src="/img/lead-automation-process.png"
							width="400"
							height="46"
							alt="Lead automation"
						/>
					</div>
					<div
						className={classNames(
							"p-10 rounded-lg bg-skin-200",
							"col-span-2 row-span-2"
						)}
					>
						<h3
							className={classNames(
								"text-2xl font-medium",
								"text-transparent bg-clip-text bg-gradient-to-r from-teal to-primary",
								"mb-6"
							)}
						>
							Smart pipelines turbocharged with automation engine
						</h3>
						<p className="text-lg font-light">
							Automate lead movement through stages by completing
							milestones, each lead movement trough the pipeline
							gets its own client experience automatically.
						</p>
						<ul className="mt-10 text-lg font-light space-y-3.5">
							{[
								"Smart lead routing",
								"Automated lead milestones per stage",
								"SMS and email automation to leads and agents",
								"Team assignments per stage",
								"Lead tag automation on arrival or exit of pipeline or stage",
								"Pipeline stage deal automation",
								"Stage deal value in real time",
							].map((item, i) => (
								<li key={i} className="flex gap-2.5">
									<FiCheck className="w-8 h-8 text-gray-400" />
									{item}
								</li>
							))}
						</ul>
					</div>
					<div className={classNames("p-10 rounded-lg bg-skin-200")}>
						<h3
							className={classNames(
								"text-2xl font-medium",
								"text-transparent bg-clip-text bg-gradient-to-r from-teal to-primary",
								"mb-10"
							)}
						>
							Omnichannel outreach campaigns
						</h3>
						<Image
							src="/img/omnichannel.png"
							width="400"
							height="46"
							alt="Lead automation"
						/>
					</div>
				</div>
			</div>
		</div>
	</section>
);

const Crm = () => {
	type CrmFeature = {
		slug: string;
		title: string;
		description: string;
		image: string;
	};
	const crmFeatures = [
		{
			slug: "comprehensive-crm",
			title: "Comprehensive CRM",
			description:
				"Get a glance of all your contacts, coming from hundreds of sources automatically ingested through Zapier or CSV files.",
			image: "comprehensive-crm.png",
		},
		{
			slug: "lead",
			title: "Lead Omni View",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ab adipisci, sequi modi quia.",
			image: "lead-omniview.png",
		},
		{
			slug: "messaging",
			title: "Messaging",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ab adipisci, sequi modi quia.",
			image: "messaging.png",
		},
		{
			slug: "automation",
			title: "Automated Lead Processing",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ab adipisci, sequi modi quia.",
			image: "automated-lead.png",
		},
		{
			slug: "omnichannel",
			title: "Omni Channel Outreach",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ab adipisci, sequi modi quia.",
			image: "omnichannel-outreach.png",
		},
	];
	const [selectedFeature, setSelectedFeature] = React.useState<CrmFeature>(
		crmFeatures[0]
	);
	return (
		<section className="my-40 xl:my-52">
			<div className="container">
				<div className="grid grid-cols-2 gap-12">
					<div className="-mt-8">
						{crmFeatures.map((item, i) => (
							<section
								key={i}
								className={classNames(
									"py-8 border-b border-violet cursor-pointer",
									"transition-all duration-300"
								)}
								onMouseOver={() => setSelectedFeature(item)}
							>
								<div
									className={classNames(
										"text-3xl font-light",
										item.slug === selectedFeature.slug &&
											"font-medium__ text-transparent bg-clip-text bg-gradient-to-r from-teal via-info to-primary"
									)}
								>
									{item?.title}
								</div>
								<p
									className={classNames(
										"mt-4 text-lg font-light tracking-wide",
										item.slug !== selectedFeature.slug &&
											"hidden"
									)}
								>
									{item?.description}
								</p>
							</section>
						))}
					</div>
					<div className="">
						<div className="ml-auto translate-x-1/4">
							<code>{selectedFeature.image}</code>
							<Image
								src="/img/comprehensive-crm.png"
								width="500"
								height="500"
								alt="Comprehensive Crm"
								className="object-cover"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

const Focus = () => (
	<section className="my-40 xl:my-52">
		<div className="container">
			<h2
				className={classNames(
					"text-6xl leading-tight mb-12",
					"text-transparent bg-clip-text bg-gradient-to-r from-danger-300 to-danger-200"
				)}
			>
				From chaos... focus on your leads, we focus on the rest.
			</h2>
			<p className="text-lg font-light tracking-wide max-w-2xl lg:ml-auto">
				Managing even a few leads from start to end can become chaotic
				and almost impossible to scale up your business. With Conduit,
				you can manage hundreds of leads, and never lose track of any
				single detail.
			</p>
		</div>
	</section>
);

const Testimonial = () => (
	<section className="my-40 xl:my-52">
		<div className="container">
			<blockquote className="space-y-10__">
				<span className="block text-[20rem] leading-[0.6] text-[#5A7690] -mb-28">
					“
				</span>
				<p className="text-5xl font-medium leading-tight">
					Conduit solves the universal problems revenue teams face
					when trying to scale quickly. Difficulty finding talent,
					long hiring cycles & high turnover rates.
				</p>
				<div className="flex items-center gap-4 mt-10">
					<Image
						src="/img/jane-smith.png"
						width="100"
						height="100"
						alt="Jane Smith"
						className="flex-shring-0"
					/>
					<div className="space-y-1.5">
						<div className="text-xl tracking-wide font-bold">
							Jane Smith
						</div>
						<div className="text-sm tracking-wide text-[#5A7690]">
							Head of business development, Redfin
						</div>
					</div>
				</div>
			</blockquote>
		</div>
	</section>
);

const Features = () => (
	<section className="my-40 xl:my-52">
		<div className="container">
			<h2 className="text-6xl max-w-fit ml-auto text-transparent bg-clip-text bg-gradient-to-r from-teal via-info to-primary">
				#features
			</h2>
			<div className="mt-16 flex flex-wrap justify-center items-center gap-4">
				{[
					"Crm",
					"Pipelines",
					"Reports",
					"Omni channel outreach",
					"Client experience",
					"Lead messaging",
					"Forms",
					"Tags",
					"Templates",
					"Automation",
					"Deals",
					"Properties",
					"Tasks",
				].map((item, i) => (
					<span
						key={i}
						className={classNames(
							"px-8 py-3 tracking-wide uppercase bg-primary border-2 border-primary",
							"rounded-full cursor-pointer transition",
							"hover:bg-skin-100 hover:border-skin-100"
						)}
					>
						{item}
					</span>
				))}
			</div>
		</div>
	</section>
);

const GetResults = () => (
	<section className="relative my-40 xl:my-52 py-24 bg-skin-200">
		<span className="absolute -z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-screen scale-90 radial--purpleBlue"></span>
		<div className="container">
			<div className="grid place-items-center gap-10 text-center">
				<h3 className="text-7xl">
					Get results.
					<span className="block text-8xl font-bold">
						Drive revenue.
					</span>
				</h3>
				<Link
					href="/"
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
