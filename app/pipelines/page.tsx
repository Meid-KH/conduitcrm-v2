import Intro from "./Intro";
import Main from "./Main";
import { Section } from "components/ui";

const page = () => {
	return (
		<>
			<Intro />
			<Main />
			<Section>
				<div className="container"></div>
			</Section>
		</>
	);
};

export default page;
