"use client";
import { Title } from "components/ui";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
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
		<section className="bg-curve--toLeft bg-skin-light text-skin-100 py-60">
			<div className="container">
				<div className="space-y-14 lg:space-y-20 xl:space-y-32">
					{features.map((item, i) => (
						<div key={i} className="flex gap-8 xl:gap-16">
							<motion.div
								className="flex-1"
								initial={{ x: -100, opacity: 0 }}
								whileInView={{ x: 0, opacity: 1 }}
								viewport={{ once: true }}
								transition={transition}
							>
								<span className="inline-block text-primary uppercase mb-2">
									{item.tag}
								</span>
								<Title
									as="h3"
									color="current"
									size="5xl"
									className="font-extrabold mb-8"
								>
									{item.title}
								</Title>
								<p className="text-lg tracking-wider leading-relaxed opacity-70">
									{item.description}
								</p>
							</motion.div>
							<motion.div
								className="flex-1"
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
		</section>
	);
};

export default Main;
