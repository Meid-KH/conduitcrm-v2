import { Title } from "components/ui";
import { Waves } from "components/Waves";
const Intro = () => {
	return (
		<section className="relative py-60">
			<span
			// initial={{ opacity: 0 }}
			// whileInView={{
			// 	opacity: 1,
			// 	transition: { ...transition, delay: 0.95 },
			// }}
			// viewport={{ once: true }}
			// transition={transition}
			>
				<span className="translate-y-1/2__ radial radial--purpleBlue opacity-50" />
			</span>
			<Waves className="max-w-full absolute inset-x-0 bottom-0 translate-y-2/3 opacity-70" />
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
		</section>
	);
};

export default Intro;
