"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { classNames } from "utils/classNames";
import Link from "next/link";
import { transition } from "utils/ui";
// import Swiper core and required modules
import { FiCheck, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Swiper as SwiperType, Navigation, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Waves } from "components/Waves";
import { motion } from "framer-motion";
import { Section, Title } from "components/ui";

export default function page() {
	return (
		<>
			<Intro />
			<Lead />
			<Crm />
			<Focus />
			<Testimonial />
			<Features />
		</>
	);
}

const Intro = () => {
	const router = useRouter();
	React.useEffect(() => {
		document.addEventListener("keydown", function (event) {
			if (event.key === "r" || event.key === "R") {
				// console.log("Now go to pricing");
				router.push("/pricing");
			}
		});
	}, []);

	return (
		<Section>
			<Waves className="absolute inset-x-0 top-1/2 sm:top-1/3 lg:top-1/4 opacity-70 w-auto h-[40vh] lg:h-auto" />
			<div className="container">
				<div className="relative text-center space-y-24">
					<motion.div
						initial={{ y: 50, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						viewport={{ once: true }}
						transition={transition}
					>
						<Title
							as="h1"
							size="7xl"
							color="whitePurple"
							dir="center"
						>
							The most advanced platform for the Real Estate
							industry
						</Title>
					</motion.div>
					<motion.div
						initial={{ y: 25, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						viewport={{ once: true }}
						transition={transition}
						className="space-y-2.5"
					>
						<Link
							href="/pricing"
							className={classNames(
								"inline-block px-8 py-5 text-center text-2xl tracking-wide",
								"text-light bg-primary/80 border border-transparent",
								"hover:bg-skin-200 hover:border-skin-light"
							)}
						>
							Get started for free
						</Link>
						<p className="text-sm tracking-wide">
							No credit card needed | Press R anytime to register
						</p>
					</motion.div>
				</div>
			</div>
			<motion.div
				className="relative mt-24 xl:mt-40 px-4"
				initial={{ y: 40, opacity: 0 }}
				whileInView={{
					y: 0,
					opacity: 1,
					transition: { ...transition, delay: 0.62 },
				}}
				viewport={{ once: true }}
				transition={transition}
			>
				<motion.span
					initial={{ opacity: 0 }}
					whileInView={{
						opacity: 1,
						transition: { ...transition, delay: 0.95 },
					}}
					viewport={{ once: true }}
					transition={transition}
					className="origin-center radial radial--purpleBlue"
				/>
				<Image
					src="/img/dashboard-intro.png"
					width={1200}
					height={600}
					className="object-cover mx-auto relative z-10"
					alt="The most advanced platform for the Real Estate industry"
				/>
			</motion.div>
		</Section>
	);
};

const Lead = () => (
	<Section>
		<div className="container">
			<motion.div
				initial={{ x: -100, opacity: 0 }}
				whileInView={{ x: 0, opacity: 1 }}
				viewport={{ once: true }}
				transition={transition}
			>
				<Title as="h2" color="red" className="mb-12">
					Fast. <br />
					Blazingly, fast lead processing.
				</Title>
			</motion.div>
			<motion.p
				initial={{ x: 100, opacity: 0 }}
				whileInView={{ x: 0, opacity: 1 }}
				viewport={{ once: true }}
				transition={transition}
				className="text-xl leading-normal font-light tracking-wide max-w-2xl lg:ml-auto"
			>
				Conduit helps real estate agents and loan officers to automate
				repetitive actions with an unrivaled lead processing automation
				engine.
			</motion.p>
			<div className="mt-16 lg:mt-28 relative">
				<span className="radial radial--purple"></span>
				<div className="grid sm:grid-cols-4 lg:grid-cols-3 gap-5">
					<motion.div
						initial={{ y: 60, opacity: 0 }}
						whileInView={{
							y: 0,
							opacity: 1,
							transition: { ...transition, duration: 0.95 },
						}}
						viewport={{ once: true }}
						transition={transition}
						className={classNames(
							"p-6 md:p-8 lg:p-10 rounded-lg bg-skin-200",
							"col-span-2 lg:col-span-1"
						)}
					>
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
					</motion.div>
					<motion.div
						initial={{ y: 40, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						viewport={{ once: true }}
						transition={transition}
						className={classNames(
							"p-6 md:p-8 lg:p-10 rounded-lg bg-skin-200",
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
					</motion.div>
					<motion.div
						initial={{ y: 80, opacity: 0 }}
						whileInView={{
							y: 0,
							opacity: 1,
							transition: { ...transition, duration: 1.25 },
						}}
						viewport={{ once: true }}
						transition={transition}
						className={classNames(
							"p-6 md:p-8 lg:p-10 rounded-lg bg-skin-200",
							"col-span-2 lg:col-span-1"
						)}
					>
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
					</motion.div>
				</div>
			</div>
		</div>
	</Section>
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

	const variants = {
		hide: {
			opacity: 0,
			height: 0,
		},
		show: {
			opacity: 1,
			height: "auto",
			transition: transition,
		},
	};
	return (
		<Section>
			<div className="container md:max-w-full">
				<div className="grid md:grid-cols-2 gap-12">
					<div className="-mt-8 xl:pl-24">
						{crmFeatures.map((item, i) => (
							<section
								key={i}
								className={classNames(
									"py-6 md:py-8 border-b border-violet cursor-pointer",
									"transition-all duration-300"
								)}
								onMouseOver={() => setSelectedFeature(item)}
							>
								<h3
									className={classNames(
										"text-2xl md:text-3xl font-light w-fit",
										item.slug === selectedFeature.slug &&
											"font-medium__ text-transparent bg-clip-text bg-gradient-to-r from-teal to-info"
									)}
								>
									{item?.title}
								</h3>
								<motion.div
									className={classNames(
										"mt-4 space-y-3",
										item.slug !== selectedFeature.slug &&
											"mt-0"
									)}
									variants={variants}
									initial="hide"
									animate={
										item.slug === selectedFeature.slug
											? "show"
											: "hide"
									}
								>
									<p className="text-lg font-light tracking-wide">
										{item?.description}
									</p>
									<Image
										src={`/img/${selectedFeature.image}`}
										width="380"
										height="380"
										alt="Comprehensive Crm"
										className="object-cover md:hidden"
									/>
								</motion.div>
							</section>
						))}
					</div>
					<div className="hidden md:block">
						<div className="ml-auto translate-x-4 xl:translate-x-1/4__">
							<code className="block text-center">
								{selectedFeature.image}
							</code>
							<Image
								src={`/img/${selectedFeature.image}`}
								width="500"
								height="500"
								alt="Comprehensive Crm"
								className="object-cover ml-auto"
							/>
						</div>
					</div>
				</div>
			</div>
		</Section>
	);
};

const Focus = () => (
	<Section>
		<div className="container">
			<motion.div
				initial={{ x: -100, opacity: 0 }}
				whileInView={{ x: 0, opacity: 1 }}
				viewport={{ once: true }}
				transition={transition}
			>
				<Title as="h2" color="red" className="mb-12">
					From chaos... focus on your leads, we focus on the rest.
				</Title>
			</motion.div>
			<motion.p
				className="text-xl leading-normal font-light tracking-wide max-w-2xl lg:ml-auto"
				initial={{ x: 100, opacity: 0 }}
				whileInView={{ x: 0, opacity: 1 }}
				viewport={{ once: true }}
				transition={transition}
			>
				Managing even a few leads from start to end can become chaotic
				and almost impossible to scale up your business. With Conduit,
				you can manage hundreds of leads, and never lose track of any
				single detail.
			</motion.p>
		</div>
	</Section>
);

const Testimonial = () => {
	const swiperRef = React.useRef<SwiperType>();
	const testimonialData = [
		{
			text: "Conduit solves the universal problems revenue teams face when trying to scale quickly. Difficulty finding talent, long hiring cycles & high turnover rates.",
			author: {
				name: "Jane Smith",
				role: "Head of business development",
				company: "Redfin",
				avatar: "/path-to-img",
			},
		},
		{
			text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates cupiditate tenetur repudiandae magni ea architecto rem ab consectetur voluptatem molestias!",
			author: {
				name: "Jane Doe",
				role: "Head of business development",
				company: "Redfin",
				avatar: "/path-to-img",
			},
		},
	];
	return (
		<Section>
			<motion.div
				className="container"
				initial={{ y: 80 }}
				whileInView={{ y: 0 }}
				viewport={{ once: true }}
				transition={transition}
			>
				<Swiper
					className="!pt-10"
					spaceBetween={50}
					slidesPerView={1}
					modules={[Navigation, EffectFade]}
					loop={true}
					onBeforeInit={(swiper) => {
						swiperRef.current = swiper;
					}}
					// effect={"fade"}
				>
					{testimonialData.map((item, i) => (
						<SwiperSlide key={i}>
							<blockquote className="space-y-10__">
								<span className="block text-[16rem] lg:text-[20rem] leading-[0.6] text-[#5A7690] -mb-20 lg:-mb-28">
									“
								</span>
								<p className="text-2xl lg:text-3xl xl:text-4xl font-medium !leading-normal">
									{item.text}
								</p>
								<div className="flex items-center gap-4 mt-10">
									<span className="flex-shring-0 w-16 lg:w-24 h-16 lg:h-24">
										<Image
											src="/img/jane-smith.png"
											width="100"
											height="100"
											alt="Jane Smith"
										/>
									</span>
									<div className="space-y-1.5">
										<div className="text-xl tracking-wide font-bold">
											{item.author.name}
										</div>
										<div className="text-sm tracking-wide text-[#5A7690]">
											{item.author.role},{" "}
											{item.author.company}
										</div>
									</div>
								</div>
							</blockquote>
						</SwiperSlide>
					))}
				</Swiper>
				<div className="relative z-20 flex gap-4 items-center justify-end mt-2">
					<button
						className={classNames(
							"w-8 lg:w-12 h-8 lg:h-12 rounded-full bg-light text-skin-100",
							"flex-shrink-0 grid place-items-center"
						)}
						onClick={() => swiperRef.current?.slidePrev()}
					>
						<FiChevronLeft className="w-6 lg:w-9 h-6 lg:h-9" />
					</button>
					<button
						className={classNames(
							"w-8 lg:w-12 h-8 lg:h-12 rounded-full bg-light text-skin-100",
							"flex-shrink-0 grid place-items-center"
						)}
						onClick={() => swiperRef.current?.slideNext()}
					>
						<FiChevronRight className="w-6 lg:w-9 h-6 lg:h-9" />
					</button>
				</div>
			</motion.div>
		</Section>
	);
};

const Features = () => {
	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const childItem = {
		hidden: { opacity: 0, y: 0, scale: 0.85 },
		show: { opacity: 1, y: 0, scale: 1 },
	};
	return (
		<Section>
			<div className="container">
				<motion.div
					initial={{ x: 40, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					viewport={{ once: true }}
					transition={transition}
				>
					<Title
						as="h2"
						color="blue"
						size="6xl"
						className="max-w-fit ml-auto "
					>
						#features
					</Title>
				</motion.div>
				<motion.div
					className="mt-16 flex flex-wrap justify-center items-center gap-4"
					variants={container}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					transition={transition}
				>
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
						<motion.span
							key={i}
							className={classNames(
								"px-6 sm:px-8 py-2 sm:py-3 grow",
								"text-sm sm:text-base text-center tracking-wider uppercase bg-primary border-2 border-primary",
								"rounded-full cursor-pointer transition",
								"hover:bg-skin-100 hover:border-skin-100"
							)}
							variants={childItem}
							// initial="hide"
							// whileInView="show"
							// viewport={{ once: true }}
							// transition={transition}
						>
							{item}
						</motion.span>
					))}
				</motion.div>
			</div>
		</Section>
	);
};
