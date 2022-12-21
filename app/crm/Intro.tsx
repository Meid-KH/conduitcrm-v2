"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { classNames } from "utils/classNames";
import { transition } from "utils/ui";
import { Title } from "components/ui";
import { WaveSm } from "components/Waves";

const Intro = () => {
	return (
		<>
			<section className="relative overflow-x-hidden___ py-60">
				<WaveSm className="max-w-full absolute inset-y-0 left-0 opacity-70" />
				<div className="relative flex justify-center gap-32 py-4">
					<motion.div
						className="flex-1 max-w-4xl"
						initial={{ x: -100, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						viewport={{ once: true }}
						transition={transition}
					>
						<div className="lg:pl-14 xl:pl-28">
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
							<div className="flex gap-8">
								<Link
									href="/pricing"
									className={classNames(
										"flex-1 px-8 py-5 text-center text-2xl tracking-wide",
										"text-light bg-primary/80",
										"border border-transparent",
										"hover:bg-skin-200 hover:border-skin-light",
										"mt-20"
									)}
								>
									Get started for free
								</Link>
								<Link
									href="/pricing"
									className={classNames(
										"flex-1 px-8 py-5 text-center text-2xl tracking-wide",
										"text-light bg-gradient-to-r from-skin-200 to bg-skin-100",
										"border border-transparent",
										"hover:bg-skin-200 hover:border-skin-light",
										"mt-20"
									)}
								>
									Read the docs
								</Link>
							</div>
						</div>
					</motion.div>
					<motion.div
						className="flex-1 relative "
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
							<span className="-translate-x-1/2 radial radial--blue"></span>
						</motion.span>
						<Image
							src="/img/crm-intro.png"
							width="950"
							height="654"
							alt="Crm Dashboard"
							priority
							quality={100}
							className="relative translate-x-8 ml-auto"
						/>
					</motion.div>
				</div>
			</section>
			<div className="section pb-32">
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
