import { Section, Title } from "components/ui";
import { Waves } from "components/Waves";
const Intro = () => {
	return (
		<Section>
			<span
			// initial={{ opacity: 0 }}
			// whileInView={{
			// 	opacity: 1,
			// 	transition: { ...transition, delay: 0.95 },
			// }}
			// viewport={{ once: true }}
			// transition={transition}
			>
				<span className="translate-y-0 lg:-translate-y-72 radial radial--purpleBlue opacity-50" />
			</span>
			<Waves className="absolute inset-x-0 top-2/3 sm:top-1/3 lg:top-1/4 opacity-70 w-auto h-[40vh] lg:h-auto" />
			<div className="container">
				<Title color="red" size="5xl" dir="center" className="mb-6">
					Supercharge your investment. Start free today.
				</Title>
				<p className="tracking-wide font-light text-lg leading-relaxed text-center max-w-2xl mx-auto">
					Fuel your pipeline with a modern, blazingly fast workflow
					that eliminates the need for constant email communication to
					manage your contacts.
				</p>
			</div>
		</Section>
	);
};

export default Intro;
