import React from "react";
import { classNames } from "utils/classNames";

const Title: React.FC<{
	size?:
		| "xs"
		| "sm"
		| "base"
		| "md"
		| "lg"
		| "2xl"
		| "3xl"
		| "4xl"
		| "5xl"
		| "6xl"
		| "7xl"
		| "8xl"
		| "9xl";
	color: string;
	dir?: string;
	as?: React.ElementType;
	children: React.ReactNode | React.ReactNode[];
	className?: string;
}> = ({
	size = "6xl",
	color = "red",
	dir,
	as: Tag = "h1",
	children,
	className,
}) => {
	const colors: { [key: string]: string } = {
		current: "text-current",
		red: "text-transparent bg-clip-text bg-gradient-to-r from-danger-300 to-danger-200",
		blue: "font-medium__ text-transparent bg-clip-text bg-gradient-to-r from-teal via-info to-primary",
		whitePurple:
			"text-transparent bg-clip-text bg-gradient-to-r from-light via-purple to-danger-200",
	};
	return (
		<Tag
			className={classNames(
				"leading-tight font-medium tracking-wide",
				dir && `text-${dir}`,
				`text-${size}`,
				colors[color],
				className
			)}
		>
			{children}
		</Tag>
	);
};

export default Title;
