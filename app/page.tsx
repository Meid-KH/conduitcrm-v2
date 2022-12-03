import Image from "next/image";
import { classNames } from "utils/classNames";
import { FiCheck } from "react-icons/fi";

export default function page() {
	return (
		<>
			<Intro />
			<Lead />
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
							"px-7 py-3.5 text-center font-medium tracking-wide",
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
				<span className="absolute -z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-screen scale-125 radial--purpleBlue"></span>
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
			<div className="mt-28">
				<div className="grid grid-cols-3 gap-5 relative">
					<span className="absolute -z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] scale-110 radial--purple"></span>
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
