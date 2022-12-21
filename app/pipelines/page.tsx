import Intro from "./Intro";
import Main from "./Main";

const page = () => {
	return (
		<>
			<Intro />
			<Main />
			<section className="py-52">
				<div className="container"></div>
			</section>
		</>
	);
};

export default page;
