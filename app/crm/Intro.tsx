"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { classNames } from "utils/classNames";
import { transition } from "utils/ui";
import { Section, Title } from "components/ui";
import { WaveSm } from "components/Waves";

const Intro = () => {
	return (
		<>
			<Section>
				<WaveSm className="h-[60%] -translate-y-16 md:h-auto lg:translate-y-0 absolute inset-y-0 left-0 opacity-70" />
				<div className="relative grid md:grid-cols-12 gap-y-24 gap-8 lg:gap-12 xl:gap-32 py-4 px-4">
					<motion.div
						className="col-span-full md:col-span-8 lg:col-span-6 max-w-4xl"
						initial={{ x: -100, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						viewport={{ once: true }}
						transition={transition}
					>
						<div className="sm:pl-4 md:pl-6 lg:pr-0 lg:pl-12 xl:pl-28">
							<Title
								as="h1"
								// size="7xl"
								color="red"
								className="mb-6"
							>
								Comprehensive CRM
							</Title>
							<p className="text-lg font-light tracking-wide max-w-2xl">
								Get a glance of all your contacts, coming from
								hundreds of sources automatically ingested
								through Zapier or CSV files.
							</p>
							<div className="flex flex-wrap gap-6 lg:gap-8 mt-10 lg:mt-20">
								<Link
									href="/pricing"
									className={classNames(
										"sm:flex-1 grow px-4 py-5 bg-primary/80",
										"text-light text-center text-lg xl:text-2xl tracking-wide",
										"border border-transparent",
										"hover:bg-skin-200 hover:border-skin-light"
									)}
								>
									Get started for free
								</Link>
								<Link
									href="/pricing"
									className={classNames(
										"sm:flex-1 grow px-4 py-5",
										"text-light text-center text-lg xl:text-2xl tracking-wide",
										"bg-gradient-to-r from-skin-200 to-skin-100",
										"border border-transparent",
										"hover:bg-skin-200 hover:border-skin-light"
									)}
								>
									Read the docs
								</Link>
							</div>
						</div>
					</motion.div>
					<motion.div
						className="col-span-full md:col-span-4 lg:col-span-6 relative"
						initial={{ x: 200, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
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
						>
							<span className="-translate-y-2/3 md:-translate-y-1/3 xl:-translate-x-3/4 radial radial--blue"></span>
						</motion.span>
						<Image
							src="/img/crm-intro.png"
							width="950"
							height="654"
							alt="Crm Dashboard"
							priority
							quality={100}
							className="relative ml-auto h-full lg:h-auto object-cover object-left md:translate-x-4"
						/>
					</motion.div>
				</div>
			</Section>
			<div>
				<div className="container">
					<motion.div
						initial={{ x: -100, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						viewport={{ once: true }}
						transition={transition}
					>
						<Title as="h2" color="blue" className="mb-12">
							Single source of <br /> truth for all your leads
						</Title>
					</motion.div>
					<motion.p
						initial={{ x: 100, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						viewport={{ once: true }}
						transition={transition}
						className="text-lg font-light tracking-wide max-w-2xl lg:ml-auto"
					>
						Manage all of your leads and referrals in a simple, yet
						advanced, CRM coming from thousands of sources,
						including manual ingestion, integrations, CSV files, and
						spreadsheets.
					</motion.p>
				</div>
			</div>
		</>
	);
};

export default Intro;
