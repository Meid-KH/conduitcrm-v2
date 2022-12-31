"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Section, Title } from "components/ui";
import { transition } from "utils/ui";

const features = [
	{
		tag: "Contacts view",
		title: "Bird's eye view in a snap",
		description: `User Conduit to get a glance of all your contacts in a single view. From filtering and sorting, to in-record instant updating of fields and tags.`,
	},
	{
		tag: "Dynamic views",
		title: "Create different views to get the right information",
		description: `User Conduit to get a glance of all your contacts in a single view. From filtering and sorting, to in-record instant updating of fields and tags.`,
	},
	{
		tag: "Dynamic views",
		title: "Create different views to get the right information",
		description: `User Conduit to get a glance of all your contacts in a single view. From filtering and sorting, to in-record instant updating of fields and tags.`,
	},
];

const Main = () => {
	return (
		<Section className="bg-curve--toLeft bg-skin-light text-skin-100 my-28 py-40 lg:py-52">
			<div className="container">
				<div className="space-y-16 lg:space-y-20 xl:space-y-32">
					{features.map((item, i) => (
						<div
							key={i}
							className="flex flex-col md:flex-row gap-8 gap-y-6 xl:gap-16"
						>
							<motion.div
								className="sm:flex-1"
								initial={{ x: -100, opacity: 0 }}
								whileInView={{ x: 0, opacity: 1 }}
								viewport={{ once: true }}
								transition={transition}
							>
								<span className="inline-block text-primary uppercase mb-2">
									{item.tag}
								</span>
								<h3 className="font-extrabold text-3xl lg:text-5xl mb-4 lg:mb-8">
									{item.title}
								</h3>
								<p className="text-lg tracking-wider leading-relaxed opacity-70">
									{item.description}
								</p>
							</motion.div>
							<motion.div
								className="sm:flex-1"
								initial={{ x: 100, opacity: 0 }}
								whileInView={{ x: 0, opacity: 1 }}
								viewport={{ once: true }}
								transition={{
									...transition,
									delay: 0.3,
									duration: 0.85,
								}}
							>
								<Image
									className="rounded grayscale hover:grayscale-0"
									src="https://source.unsplash.com/500x360"
									width="500"
									height="350"
									alt="Bird's eye view in a snap"
								/>
							</motion.div>
						</div>
					))}
				</div>
			</div>
		</Section>
	);
};

export default Main;
