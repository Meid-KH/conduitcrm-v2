import React from "react";
import { classNames } from "utils/classNames";

const Section: React.FC<{
	as?: React.ElementType;
	children: React.ReactNode | React.ReactNode[];
	className?: string;
}> = ({ as: Tag = "section", children, className }) => {
	return (
		<Tag
			className={classNames(
				"relative",
				// "overflow-x-hidden",
				"my-40 lg:my-52",
				className
			)}
		>
			{children}
		</Tag>
	);
};

export default Section;
